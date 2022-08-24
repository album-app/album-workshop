https://album-app.gitlab.io/album-workshop

This project lists the snippets as submodules!

to clone with submodules:
- run `git clone --recurse-submodules https://gitlab.com/album-app/album-workshop.git` (or use SSH link)

to register submodules after cloning without `--recurse-submodules` option:
- git submodule init
- git submodule update

to add a snippet:
- create one via GUI in gitlab
- clone this repository
- get the git repository link for the new snippet (e.g. link to clone a snippet)
- cd into "snippets"
- run `git submodule add https://gitlab.com/album-app/album-workshop/snippets/<SnippetID>.git`


