---
slug: "/install_gui"
title: "Album graphical user interface"
description: ""
next: ["run_solution_from_catalog"]
---
**NOTE**

The graphical user interface of Album just recently hatched and is experimental. There will likely be issues or features you are missing - please let us know either on this page below in the comment section or [here](https://gitlab.com/album-app/plugins/album-gui/-/issues). Your feedback is highly appreciated.

There are two ways to use the graphical interface of Album: 
- You start from scratch with our Album installer - no need to run any command line calls.
- You already have the command line tool installed - then you can install the GUI into your album environment.

## How to start from scratch with the Album Installer
The Album installer is a one file executable that automatically takes care of the following steps:
1. It creates a folder called `.album` in your home directory, which will hold all Album related files.
2. It installs Miniconda into `.album/Miniconda`.
3. It installs the Album environment into `.album/envs/album`.
4. It creates a shortcut for launching the graphical user interface of Album.

The installer doesn't have a graphical user interface yet. You should see a good amount of console output during the installation. Don't be discouraged.

### Linux
Download the [Linux Album Installer](https://gitlab.com/album-app/album-installer/-/jobs/2999058215/artifacts/file/installer/album-installer).
Make the installer file executable:
```
chmod +x album-installer
```
Run it with this command:
```
./album-installer
```
It generates and registers an `Album.desktop` file - Album should now be listed in your applications.

### MacOS
Download the [MacOS Album Installer](https://gitlab.com/album-app/album-installer/-/jobs/2999058216/artifacts/file/installer/album-installer).
Make the installer file executable:
```
chmod +x album-installer 
```
In the file browser, right click the file and click "Open" and confirm that you want to run this file (there might be better ways, I'm not a MacOS user).

It creates an app on the Desktop that you can launch by double clicking on it.

### Windows
Download the [Windows Album Installer](https://gitlab.com/album-app/album-installer/-/jobs/2999058218/artifacts/file/installer/album-installer.exe). Double click it and confirm that you want to run this executable. 


## How to install and launch the GUI from an existing Album conda environment 
First, activate your Album environment.
```
conda activate album
```
Next, install the graphical user interface plugin.
```
pip install https://gitlab.com/album-app/plugins/album-gui/-/archive/main/album-gui-main.zip
```
You can now run the graphical user interface from the command line - launch the collection viewer:
```
album gui
```
.. or launch a specific solution by using its `group`, `name` and `version` (if it's not installed, it can take care of that too):
```
album gui GROUP:NAME:VERSION
```
You can also manually trigger the build of a shortcut for launching Album (a registered `Album.desktop` file on Linux, a Desktop launcher on MacOS, a shortcut in the Start menu and on the Desktop on Windows):
```
album add-shortcut
```
