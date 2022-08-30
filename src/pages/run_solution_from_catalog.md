---
slug: "/run_solution_from_catalog"
title: "2. Run a solution from the Helmholtz Imaging Solutions catalog"
description: "You will learn how to install Album and run an existing solution from a catalog."
---

Learning objectives:
- Learn how to install Album.
- Learn how to use Album from the command line.
- Learn how to run a solution from a catalog that someone might share with you via URL.
- Learn how to get an overview of available solutions, online and locally.

**Task 1**

Browse through the Helmholtz Imaging Catalog via https://album-app.gitlab.io/catalogs/helmholtz-imaging/catalog.

**Task 2**

Run this solution: https://album-app.gitlab.io/catalogs/helmholtz-imaging/de.mdc-berlin/pixel-to-mesh/0.1.0-SNAPSHOT

As an input, you can download [this file](TODO.tif) or use your own 3D dataset, ideally a segmentation.

All instructions, including how to install Album, should be available from the solution page. If any information is missing or difficult to follow, please leave a comment below.

**Task 3**

After finishing task 2 you should be able to call `album` commands from the command line. Now you can use this command to inspect your local installation - it will list the catalog you just added and all the solutions in it:
```
album index
```
