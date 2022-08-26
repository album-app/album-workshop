---
slug: "/local_catalog"
title: "4.1c Create and populate a local catalog"
description: "You will learn how to setup a local catalog, for example on a network drive, and how to deploy your solution into it."
---


If you want to collect your solutions inside a catalog but don't want to make it public you can create a local catalog,
for example on your local hard drive or a network drive. 

1. Create a new catalog on your hard drive:
    ```
   album clone template:catalog [catalog-dir] [catalog-name]
   ```
   
2. Add the newly created catalog to your album collection of catalogs:
    ```
   album add-catalog [catalog- dir]
   ```

3. Deploy your solution into your local catalog:
   ```
   album deploy [solution-path] [catalog-name]
   ```

4. Upgrade catalog in your local collection:
    ```
   album update [catalog-name]
    album upgrade [catalog-name]
   ```
