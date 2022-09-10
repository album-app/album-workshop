---
slug: "/run_solution_from_catalog"
title: "Run a solution from a catalog"
description: "Click here to learn how to run an existing solution from a catalog. It's a breeze!"
next: ["solution_writing"]
---

<div class="learning-objectives">
Learning objectives:
<ul>
<li>Get introduced to Helmholtz Imaging Solutions.</li>
<li>Learn how to install Album.</li>
<li>Learn how to use Album from the command line.</li>
<li>Learn how to run a solution from a catalog that someone might share with you via URL.</li>
<li>Learn how to get an overview of available solutions, online and locally.</li>
</ul>
</div>

---

While solutions can be shared, installed and used individually, the most convenient way of sharing them is by uploading them to catalogs. 
In this part of the workshop, we will explore Album from the perspective of someone who wants to browse catalogs and run solutions.

Album is developed by [Helmholtz Imaging](https://helmholtz-imaging.de) in order to share reproducible image data analysis solutions within the Helmholtz community and beyond.
The catalog we will explore in this section represents our collection of solutions issued from collaborations, help desk inquiries and projects. 
The tools used there are not all developed by us. Please respect the citations on each solution for credits. 


<div class="task">
<div class="task-title">Task 1 - browsing a catalog online</div>
Browse through the <a href="https://album-app.gitlab.io/catalogs/helmholtz-imaging/catalog" target="_blank">Helmholtz Imaging Solutions Catalog</a>.
</div>

---

Someone shared a specific solution with you by sending you a URL. Album should make it as painless as possible to run the same algorithm on your own data.

<div class="task">
<div class="task-title">Task 2 - running a solution from a catalog</div>
<ol>
<li>Inform yourself about the solution by following <a href="https://album-app.gitlab.io/catalogs/helmholtz-imaging/de.mdc-berlin/pixel-to-mesh/0.1.0-SNAPSHOT" target="_blank">this solution URL.</a></li>
<li>Pick a 3D dataset - ideally a segmentation. You can download and use <a href="https://gitlab.com/album-app/album-workshop/-/raw/main/static/example_input.tif">this example dataset</a> or use your own 3D dataset</li>
<li>Run the solution on your dataset by following the instructions on the solution URL.</li>
</ol>
</div>

All instructions, including how to install Album, should be linked and easily accessible from the solution page. If any information is missing or difficult to follow, please leave a comment below.

---

After installing Album and adding the Helmholtz Imaging Solutions catalog all solutions in this catalog are listed in your **local Album collection**. 
The local collection is a database keeping track of all solutions - the solutions of each catalog once you add or upgrade it, and of all solutions you install locally or from a path or URL.

By now, you should be able to call `album` commands from the command line. 

<div class="task">
<div class="task-title">Task 3 - inspect local collection</div>
Inspect your local Album collection by calling this command:
<pre><code>album index
</code></pre>
</div>

---

We will add more solutions and update solution versions to the Helmholtz Imaging Solutions catalog - please read the [Album catalog documentation](https://docs.album.solutions/en/latest/usage-instructions.html#how-to-use-catalogs) for more information, including how to upgrade a catalog in the future.
