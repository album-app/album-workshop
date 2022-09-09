---
slug: "/add_to_catalog"
title: "Add your solution to an existing catalog"
description: "Click here to learn how to upload your solution to an already existing catalog."
---

<div class="learning-objectives">
Learning objectives:
<ul>
<li>learn what is necessary to deploy to a catalog managed by someone else.</li>
</ul>
</div>

---

In the last section you learned how to create your own remote catalog and deploy a solution to it.
But you can also deploy your solution into an already existing catalog.

Like for example the catalog of a coworker, the group you work in or the institute you work for.


<div class="task">
<div class="task-title">Task 1 - Get access to a target catalog that is not yours and deploy a solution. Work in groups if needed. </div>

1. Request access to the target catalog:
   - To be able to deploy a solution into a catalog your git user needs the permission to write into the git
   repository of the catalog. You need to be a collaborator of the catalog.

2. Add the target catalog to your collection.
   - as before, we have to make sure to register the catalog first.
    ```
   album add-catalog [catalog-name]
   ```

3. Deploy your solution into the catalog & update.
   - this part you should already be familiar with.
   ```
   album deploy [solution-path] [catalog-name]
   album update [catalog-name]
   album upgrade [catalog-name]
   ```
</div>
