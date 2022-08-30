---
slug: "/add_to_catalog"
title: "4.1b Add your solution to an existing catalog"
description: "You will learn how to deploy a solution to an existing catalog."
---
Learning objectives:
- learn what is necessary to deploy to a catalog managed by someone else.
---

In the last section you learned how to create your own remote catalog and deploy a solution to it.
But you can also deploy your solution into an already existing catalog.

Like for example the catalog of a coworker, the group you work in or the institute you work for.

The following steps will show you how to do this!

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
