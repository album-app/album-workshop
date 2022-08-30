---
slug: "/solution_writing"
title: "3. Writing a solution"
description: "This section explains how to write, install and run an Album solution."
---

<div class="learning-objectives">
Learning objectives:
<ul>
<li>learn how to write a solution from scratch</li>
<li>learn what is necessary to let a solution execute something when run</li>
<li>learn how to add arguments to your solution</li>
<li>learn how to let solutions inherit from each other</li>
</ul>
</div>

---

Before we can start to write a solution we first need to take a look at the basic building parts of a solution. The
first and most important block is the setup method. 

Here, important meta-data and properties of the solution are defined. It is the only mandatory part of a solution.
Every setup method requires at least 4 parameters to make a
solution unique and executable.

1. group: the group which takes credit for the solution.
2. name: the name of the solution
3. version: the version of the solution
4. album_api_version: the version of the Album API which is used to execute the solution.

Group, name and version are used as the solution identifiers. Other parameter can be used to add more meta information
to your solution like for example the creator of the solution or a brief description of the solution. A full list of
parameters is available at the Album [documentation](https://docs.album.solutions/en/latest/solution-development.html).

<div class="task">
<div class="task-title">Task 1 - Write a solution with the minimal configuration</div>

<details>
  <summary>Task 1 - solution</summary>

    from album.runner.api import setup
    setup(
       group="my-research-group",
       name="projectxy",
       version="0.1.0",
       album_api_version="0.4.2"
    )

</details>
</div>

---

Another important block in a solution is the "environment" string. It defines the requirements necessary to run the solution.
In other words, it defines which versions of programs and libraries will be used.

It can look something like this:

```
env_file = """channels:
 - defaults
dependencies:
 - python=3.6
"""
```

Please note that only setting the versions of used libraries and other dependencies makes a solution reproducible!
Caution: the `env_file` variable needs to be added as the dependencies' parameter of the setup block to be properly 
recognized by the Album framework.

<div class="task">
<div class="task-title">Task 2 - Write a minimal solution which uses python 3.10</div>

<details>
  <summary>Task 2 solution</summary>

     env_file = """channels:
      - defaults
     dependencies:
      - python=3.10
     """

    from album.runner.api import setup
    setup(
       group="my-research-group",
       name="projectxy",
       version="0.1.0",
       album_api_version="0.4.2",
       dependencies={"environment_file": env_file}
    )

</details>
</div>

---

Now, we have a solution which is identifiable and uses a predefined environment for its execution, but it still does not 
execute anything useful. To get our solution to actually do something we need to define the run method of the solution.
Like the name lets you guess, the run method defines what the solution does when it is executed.
Simply define a method called run in your solution and add the parameter `run=run` into 
your setup method does the magic.

<div class="task">
<div class="task-title">Task 3 - Add a run method to your solution. Let it simply print something for now.</div>

<details>
  <summary>Task 3 solution</summary>

    env_file = """channels:
     - defaults
    dependencies:
     - python=3.10
    """
  
    def run():
        print("Hello World!")

    from album.runner.api import setup
    setup(
       group="my-research-group",
       name="projectxy",
       version="0.1.0",
       album_api_version="0.4.2",
       dependencies={"environment_file": env_file},
       run=run
    )

</details>
</div>

---

Our solution now actually does something when it is executed, but will always do the same. 
Most modern applications and routines are required to react to input arguments.
In order to make our solution able to handle input arguments we need to add another parameter to the
setup method, the `args` parameter. The value of the args parameter is a list of dictionaries where each dictionary
defines one input argument of the solution. A single input argument could look something like this:

```python
{  
  "name": "name of the argument whih can be used to access the value of the argument",
  "type": "the type of the input argument for example string or file",
  "description": "A brief description of the argument"
}
```

Note: To use the values of the input arguments in our run block, we need to import the get_args 
method from the album_runner_api. Please make sure the import ins in the run definition and **NOT** on top of the file!

**.**

<div class="task">
<div class="task-title">Task 4 - Define an input argument for your solution and access its value in the run method and print it out.</div>

<details>
  <summary>Task 4 solution</summary>

    env_file = """channels:
     - defaults
    dependencies:
     - python=3.10
    """
  
    def run():
        from album.runner.api import get_args
        print("Hello", get_args().name, ", nice too meet you!")

    from album.runner.api import setup
    setup(
       group="my-research-group",
       name="projectxy",
       version="0.1.0",
       album_api_version="0.4.2",
       dependencies={"environment_file": env_file},
       args=[{
       "name": "name",
       "type": "string",
       "description": "How to you want to be addressed?"
       }],
       run=run
    )

</details>
</div>

---

Now our solution has everything it needs to be executed and to react to user inputs. 
To actually use it now in daily routines and tasks with Album we need to install our solution. This makes sure the
requirements specified (if any) are created.

Run the following command inside your Album environment:

```
album install path/to/your/solution.py
```

After the installation is finished run the solution with the following command:

```
album run path/to/your/solution.py --name Eren
```

Since you have a working solution now, it probably won't be long until you will write your next solution.

When your second solutions is solving a similar tasks as the first one, in other words it
needs the same requirements as the first one, do we have to always specify the requirements all over again? 
No! It is possible for both solutions to use the same environment.

For that a solution can inherit the environment block of another solution. 

Simply reference the solution you want to inherit the environment from in the dependencies block of your new solution.
This can be done by adding the parent solution identifier (group:name:version) to the dependency dictionary in the setup.

The parent solution needs to be installed (or needs to be part of your collection - you will learn about that later)
in order to pass their environment on.

```python
setup(
   group="my-research-group",
   name="projectxy",
   version="0.1.0",
   album_api_version="0.4.2",
   dependencies={
      "parent": {
    "resolve_solution": "album:template-python:0.1.0"
   }
   },
   args=[{
   "name": "name",
   "type": "string",
   "description": "How to you want to be addressed?"
   }]
)
```

<div class="task">
<div class="task-title">Task 5 - Let your solution inherit the environment of the "template-python" solution-template of Album.</div>

<details>
  <summary>Task 5 solution</summary>

    def run():
        from album.runner.api import get_args
        print("Hello", get_args().name, ", nice too meet you!")

    from album.runner.api import setup
    setup(
       group="my-research-group",
       name="projectxy",
       version="0.1.0",
       album_api_version="0.4.2",
       dependencies={"parent": {"resolve_solution": "album:template-python:0.1.0"}},
       args=[{
       "name": "name",
       "type": "string",
       "description": "How to you want to be addressed?"
       }],
       run=run
    )

</details>
</div>


---

Now you know how to write your own solutions from scratch, but what if you found a great solution which you want to
alter before you using it? In this case you can clone a copy of the solution and start from there on.
To copy an existing solution use the following command:

```
album clone [solution-file-or-url] --target-dir [parent-dir-of-new-solution] --name [name-of-new-solution]
```

or

```
album clone [group:name:version] --target-dir [parent-dir-of-new-solution] --name [name-of-new-solution]
```

Note: If you alter the copy, keep in mind adding your name to the solution_creator key of
the setup method, but don't delete previous creators! That way the next one who uses the solution can comprehend who
worked on the solution. 