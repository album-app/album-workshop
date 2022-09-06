---
slug: "/remote_catalog"
title: "4a Create and populate a remote catalog"
description: "In this section of the workshop you will create a remote catalog living on Gitlab and deploy the solution
you wrote in the previous sections of the workshop into it."
---

<div class="learning-objectives">
Learning objectives:
<ul>
<li>learn about catalog types</li>
<li>create your own gitlab or github catalog.</li>
<li>deploy a solution to the catalog</li>
<li>learn how to update catalogs</li>
</ul>
</div>

---

Now that you have written your first solutions, it is time to share it with the world!
As you know from before, Album uses catalogs to share solutions.
Catalogs are Git repositories collecting solutions.
They can live locally on your hard drive or in a remote Git repository, hosted for example on Gitlab or GitHub. 

In general, there are two different types of catalogs:

1. direct catalogs:
    - When deploying (registering) a solution to a direct catalog it will be immediately accessible to anyone who uses this catalog.
2. request catalogs:
    - Solutions deployed to a request catalog have to be reviewed by the administrators of the catalog (e.g. the Maintainer of the catalog
      repository)
    - After successfull review they can be added to the catalog.

<div class="task">
<div class="task-title">Task 1 - Follow the steps to create a direct catalog hosted on Gitlab (or github)</div>


1. Create an empty repository:
    - Log in into your preferred Git instance and create an empty repository.
      ![create_blank](https://gitlab.com/album-app/album-workshop/-/raw/main/static/choose_blank_circle.jpg)
      ![create_keys](https://gitlab.com/album-app/album-workshop/-/raw/main/static/new_repo_creation_fields.jpg)
2. Use Album to clone the repository:
    - This automatically initializes the repository to become a catalog.
    - Please make sure your repo URL ends with ".git"
      ```
      album clone template:catalog [repo-url] [catalog-name]
      ```
3. Add the newly created catalog to your collection:
    - For Album to recognise your new catalog you have to add it to your local collection of catalogs 
      with the following command:
      ```
      album add-catalog [repo-url]
      ```
4. Deploy your solution into the catalog:
   - You can now address your catalog by the name you chose in step 2 and deploy solutions to it
   - Simply run the following command:
     ```
     album deploy [solution-path] [catalog-name]
     ```
5. Upgrade your local version of the catalog
    - Your solution is now part of the remote catalog (e.g. check it in github/gitlab). To synchronise
      your local catalog managed by Album with the remote, run the following commands:
      ```
      album update [catalog-name]
      album upgrade [catalog-name]
      ```
</div>
      
That's it! You created a ready to use catalog and can deploy solutions into it! 
