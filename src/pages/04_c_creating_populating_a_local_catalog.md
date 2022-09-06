---
slug: "/local_catalog"
title: "4c Create and populate a local catalog"
description: "You will learn how to setup a local catalog, for example on a network drive, and how to deploy your solution into it."
---
<div class="learning-objectives">
Learning objectives:
<ul>
<li>learn how to share a catalog without a URL</li>
</ul>
</div>

---


If you want to collect your solutions inside a catalog but don't want to make it public you can create a local catalog,
for example on your local hard drive or a network drive. 

<div class="task">
<div class="task-title">Task 1 - Follow the steps to create a catalog that lives on your local hard drive and deploy a solution to it. </div>


1. Create a new catalog on your hard drive:
    ```
   album clone template:catalog [catalog-dir] [catalog-name]
   ```
   
2. Add the newly created catalog to your album collection of catalogs:
    ```
   album add-catalog [catalog- dir]
   ```

3. Deploy your solution into the local catalog & update.
   ```
   album deploy [solution-path] [catalog-name]
   album update [catalog-name]
   album upgrade [catalog-name]
   ```
</div>