---
slug: "/concepts"
title: "1. Concepts of album"
description: "This section provides an introduction into why Album exists and what it's aiming to solve."
---

<div class="learning-objectives">
Learning objectives:
<ul>
<li>learn what problem is being solved with Album</li>
<li>learn how working with Album looks like</li>
<li>learn about the motivation for Album</li>
<li>have a glance into the technical aspects [optional]</li>
</ul>
</div>

---

## Motivation

Often, researchers are confronted with the problem of how to solve a certain problem for which they know a
solution exists. Unfortunately finding the correct tool/app/workflow and then installing and learning how to use it 
sometimes takes much time, if possible at all.

This is why we developed Album, a decentralized tool for sharing solutions to specific problems across tools, languages
and scales. But not only enables it sharing and categorizing solutions, moreover installation and usage is made possible 
without spending effort into learning yet another UI or yet another commandline handling.

![solution distribution](https://gitlab.com/album-app/album-workshop/-/raw/main/static/album-comparison.png)

Specific solutions, developed in various programing languages, live in a catalog which can be accessed publicly.
These catalogs are visualized and can be browsed through from (almost) all over the world. Thereby, not only simply 
listing solutions but providing rich metadata and documentation. With Album, solutions can then directly be installed
and executed.

![solution distribution](https://gitlab.com/album-app/album-workshop/-/raw/main/static/album-schema-people.png)

## What does it look like to use Album in practice?
So, up to know we know there is a framework dealing with solutions of any kind and there are catalogs that enable access 
to solutions including meta information, documentation and more.

OK, but how would you use it in a daily manner?

You would...
- build solutions for your daily tasks
- use solutions to execute your daily routines
- share solutions with others in the lab
- register solutions in a public catalog to distribute it beyond your lab
- update old solutions 
- set up a specific catalog for specific use cases

## How do we make solutions findable?
Nice, working with Album seems practical, but I still don't understand how to make them available?

OK! This is where a catalog comes into play.

A catalog can have a web view that lists all available solutions.
So you can simply browse them online. 
When devoting a catalog a certain topic, you could even find solutions faster.

That is how solutions are findable.

You can look at [this page](https://album-app.gitlab.io/catalogs/default/catalog) to get a feeling
for a web representation. 


## Why should we care about reproducibility?
By now you should know what solutions are, where they live and how they can be used. 
But a short but very important question remains: *Why?*

Well, imagine the following scenario:
You execute these lines of python code

```python
import matplotlib.pyplot as plt
import numpy as np
from skimage.transform import rotate

image = np.ones((20, 20))
image[5:-5, 5:-5] = 2

fig, axs = plt.subplots(1, 6, figsize=(13, 2))

for i in range(6):
    axs[i].set_title(f'order={i}')
    axs[i].imshow(rotate(image, 30, order=i, cval=0, resize=True, clip=True), vmin=0, vmax=3)

plt.show()
```

Now you look at the results and see this:

![solution distribution](https://gitlab.com/album-app/album-workshop/-/raw/main/static/from_zero_to_hero_fix.png)

Now imagine someone else is using the **exact same code** - but his results look like this:

![solution distribution](https://gitlab.com/album-app/album-workshop/-/raw/main/static/from_zero_to_hero_bug.png)

What happened?

Since there is no specification of any versions of the used packages known bugs like this change the results. 
Sometimes even drastically!

And something like this happens. And it is not uncommon. So to make sure the scientific results you produced can be
used by someone else without introducing errors simply because old versions or faulty libraries were 
used - we should care about reproducibility!


So it would be better to specify with the code what requirements are needed. In pseudocode something like this:

```
with python=3.8.8,matplotlib==3.5.3, scikit-image==0.19.2:
    import libraries
    create or laod image
        
    for number "i" 1 to 6::
        plot rotated image with interpolation order "i" 
    
```

Throughout this course you will learn how to use Album to bring together the code above with a versioned requirements 
that suit the pseudocode example.

## Technical concepts [optional]

OK, How would something like this framework even work? 

If you are interested in the technical concept have a look at the following schema. 

![solution distribution](https://gitlab.com/album-app/album-workshop/-/raw/main/static/album-schema.png)
