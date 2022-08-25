---
slug: "/concepts"
title: "4.1a Create and populate a remote catalog"
description: "In this section of the workshop you will create a remote catalog living on Gitlab and deploy the solution
you wrote in the previous sections of the workshop into it."
---

Now that you have written your first solution, it's time to share it with the world. For sharing solutions album uses so
called catalogs. Catalogs are repositorys collecting solutions. They can live locally on your hard drive or in a remote
Git repository, hosted for example on Gitlab or GitHub. There are two different types of catalogs:

1. direct catalogs:
    - Changes to a direct catalog will be immediately accessible to anyone who uses this catalog. The changes are
      directly pushed to the `main` branch of the catalog repository.
2. request catalogs:
    - Changes to a request catalog have to be reviewed by the admins of the catalog, e.g. the Maintainer of the catalog
      repository. the changes are pushed to a new branch of the repository, which has to be merged into the `main`
      branch of the repository to make the changes accessible to the catalog users. Album provides a Gitlab CI script
      which automatically creates a merge request for your changes and supports Zenodo DOI generation.

The following steps are showing the creation of direct catalog hosted on Gitlab and the deployment of a solution into
it.

1. Create an empty repository
    - Log in into your preferred Git instance and create an empty repository.
      (PLATZ FÜR BILDER)
2. Clone the repository and apply the album catalog structure
    - After you created the repository run the following command to clone the repository to your local hard drive and
      apply the album catalog structure to it
      ```
      album clone template:catalog [repo-url] [catalog-name]
      ```
3. Add the newly created catalog to your collection
    - For album to recognise your new catalog you have to add it to your local collection of catalogs with the following
      command:
      ```
      album add-catalog [repo-url]
      ```
4. Deploy your solution into the catalog
    - With the fresh catalog and your solution at hand it is now time to add your solution to the remote catalog. Run
      the following command:
      ```
      album deploy [solution-path] [catalog-name]
      ```
5. Upgrade your local version of the catalog
    - Your solution is now part of the remote catalog, but not part of your local version of the catalog. To synchronise
      your local catalog with the remote one, run the following commands:
      ```
      album update [catalog-name]
      album upgrade [catalog-name]
      ```
