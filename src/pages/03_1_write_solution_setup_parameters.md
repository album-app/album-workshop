---
slug: "/solution_writing"
title: "3. Writing a solution"
description: "This section explains how to write, install and run an Album solution."
---

Before we can start to write a solution we need to take a look at the basic building parts of a solution first. The
first and most important part is the setup method. It defines the properties of the solution based on the parameters it
gets and represents the only mandatory part of a solution. Every setup method requires at least 4 parameters to make a
solution unique and executable.

1. group: the group which takes credit for the solution.
2. name: the name of the solution
3. version: the version of the solution
4. album_api_version: the version of the Album API which is used to execute the solution.

Group, name and version are used as the solution identifiers. Other parameter can be used to add more meta information
to your solution like for example the creator of the solution or a brief description of the solution. A full list of
parameters is available at the Album [documentation](https://docs.album.solutions/en/latest/solution-development.html).

Task 1: Write a solution with the minimal configuration.
<details>
  <summary>Task 1 solution</summary>

    from album.runner.api import setup
    setup(
       group="my-research-group",
       name="projectxy",
       version="0.1.0",
       album_api_version="0.4.2"
    )

</details>

The next part of a solution we are going to look at is the environment string. It defines the environment in which the
solution should be run and therefore defines which versions of programs and libraries will be used. It looks something
like this:

```
env_file = """channels:
 - defaults
dependencies:
 - python=3.6
"""
```

and needs to be added as the dependencies' parameter to the setup function. Fixing the versions of used libraries and
programs makes the results of a solution reproducible, since no updates in the used libraries will affect the results of
your solution.

Task 2: Write a minimal solution which uses python 3.10.
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

Now we have a solution which is identifiable and uses a predefined environment for its execution, but it still does
nothing. To get our solution to actually do something we need to define the run method of the solution. Like the name
says the run method defines what the solution does when its executed. Simply define a method called run in your solution
and add the parameter run=run into your setup method.

Task 3: Add a run method to your solution.

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

Our solution is now able to be executed, but will always do the same. Most modern applications are required to react to
input arguments. In order to make our solution able to handle input arguments we need to add another parameter to the
setup method, the args parameter. The value of the args parameter is a list of dictionaries where each dictionary
defines one input argument of the solution. A single input argument could look something like this:

```python
{  
  "name": "name of the argument whih can be used to access the value of the argument",
  "type": "the type of the input argument for example string or file",
  "description": "A brief description of the argument"
}
```

To use the values of the input arguments we have to import the get_args method from the album_runner_api.

Task 4: Define an input argument for your solution and access its value in the run method.

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

Now our solution has everything it needs to be installed and executed. To install your solution run the following
command inside your Album environment:

```
album install path/to/your/solution.py
```

After the installation is finished run the solution with the following command:

```
album run path/to/your/solution.py --name Eren
```

Since you have a working solution now, it probably won't be long until you will write your next solution. When your
second solutions is solving a similar tasks as the first one, you don't need to create a second solution environment.
When two solutions would run in an identical environment it is possible for both solutions to use the same environment.
For that a solution can inherit the environment of another solution. In order to do so you just have to define the
solution from which the environment should be inherited as the parent of the current solution. This can be done by
adding the parent solution identifier (group:name:version) to the dependency dictionary in the setup. The parent
solution needs to be part of your collection in order to pass their environment on.

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
   }],
   run=run
)

```

Task 5: Let your solution inherit the environment of the "template-python" solution template of Album.

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

Now you know how to write your own solutions from scratch, but what if you found a great solution which you want to
alter before you using it? In this case you can clone a copy the solution in your local collection which you can then
alter. to copy an existing solution use the following command:

```
album clone [solution-file-or-url] --target-dir [parent-dir-of-new-solution] --name [name-of-new-solution]
```

or

```
album clone [group:name:version] --target-dir [parent-dir-of-new-solution] --name [name-of-new-solution]
```

Now you got a local copy of the solution, if you alter it keep in mind adding your self to the solution_creator key of
the setup method, but don't delete previous creators. That way the next one who uses the solution can comprehend who
worked on the solution. 