---
slug: "/run_solution_from_catalog"
title: "2. Run a solution from the Helmholtz Imaging Solutions catalog"
description: "You will learn how to install Album and run an existing solution from a catalog."
---

Learning objectives:
- Get introduced to Helmholtz Imaging Solutions.
- Learn how to install Album.
- Learn how to use Album from the command line.
- Learn how to run a solution from a catalog that someone might share with you via URL.
- Learn how to get an overview of available solutions, online and locally.

---

While solutions can be shared, installed and used individually, the most convenient way of sharing them is by uploading them to catalogs. 
In this part of the workshop, we will explore Album from the perspective of someone who wants to browse catalogs and run solutions.

Album is developed by [Helmholtz Imaging](https://helmholtz-imaging.de) in order to share reproducible image data analysis solutions within the Helmholtz community and beyond.
The catalog we will explore in this section represents our collection of solutions issued from collaborations, help desk inquiries and projects. 
The tools used there are not all developed by us. Please respect the citations on each solution for credits. 

**Task 1 - browsing a catalog online**

Browse through the Helmholtz Imaging Catalog via https://album-app.gitlab.io/catalogs/helmholtz-imaging/catalog.

---

Someone shared a specific solution with you by sending you a URL. Album should make it as painless as possible to run the same algorithm on your own data.

**Task 2 - running a solution from a catalog**

1. Read about what the solution does on the solution URL: https://album-app.gitlab.io/catalogs/helmholtz-imaging/de.mdc-berlin/pixel-to-mesh/0.1.0-SNAPSHOT
2. Pick a 3D dataset - ideally a segmentation. You can download and use [this example dataset](https://gitlab.com/album-app/album-workshop/-/raw/main/static/example_input.tif) or use your own 3D dataset
3. Run the solution on your dataset by following the instructions on the solution URL.

All instructions, including how to install Album, should be linked and easily accessible from the solution page. If any information is missing or difficult to follow, please leave a comment below.

---

After installing Album and adding the Helmholtz Imaging Solutions catalog all solutions in this catalog are listed in your local Album collection.  
By now, you should be able to call `album` commands from the command line. 

**Task 3 - inpect local installation**
1. Inspect your local installation by calling this command:
```
album index
```

---

We will add more solutions and update solution versions to the Helmholtz Imaging Solutions catalog - please read the [Album catalog documentation](https://docs.album.solutions/en/latest/usage-instructions.html#how-to-use-catalogs) for more information, including how to upgrade a catalog in the future.
