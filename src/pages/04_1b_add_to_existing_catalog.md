---
slug: "/add_to_catalog"
title: "4.1b Add your solution to an existing catalog"
description: "You will learn how to deploy a solution to an existing catalog."
---

In the last section you learned how to create your own remote catalog and deploy
solutions into it, but you can also deploy your solution into an already existing 
catalog. Like for example the catalog of a coworker. The following steps will show you how to do this.

1. Request access to the target catalog.
   - To be able to deploy a solution into a catalog your git user needs the permission to write into the git
   repository of the catalog.

2. Add the target catalog to your collection.
    ```
   album add-catalog 
   ```

3. Deploy your solution into the catalog.
   ```
   album deploy [solution-path] [catalog-name]
   ```

4. Update your local version of the catalog.
    ```
    album update [catalog-name]
    album upgrade [catalog-name]
   ```
