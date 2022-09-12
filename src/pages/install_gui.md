---
slug: "/install_gui"
title: "Album graphical user interface"
description: ""
next: ["run_solution_from_catalog"]
---
**NOTE**

The graphical user interface of Album just recently hatched and is experimental. There will likely be issues or features you are missing - please let us know either on this page below in the comment section or [here](https://gitlab.com/album-app/plugins/album-gui/-/issues). Your feedback is highly appreciated.

## Start from scratch with the Album Installer
The installer doesn't have a graphical user interface yet. You should see a good amount of console output during the installation. Don't be discouraged.

### Linux
Download the [Linux Album Installer](https://gitlab.com/album-app/album-installer/-/jobs/2999058215/artifacts/raw/installer/album-installer).
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
Download the [MacOS Album Installer](https://gitlab.com/album-app/album-installer/-/jobs/2999058216/artifacts/raw/installer/album-installer).
Make the installer file executable:
```
chmod +x album-installer 
```
In the file browser, right click the file and click "Open" and confirm that you want to run this file (there might be better ways, I'm not a MacOS user).

It creates an app on the Desktop that you can launch by double clicking on it.

### Windows
Download the [Windows Album Installer](https://gitlab.com/album-app/album-installer/-/jobs/2999058218/artifacts/raw/installer/album-installer.exe). Double click it and confirm that you want to run this executable. 


### What happens behind the scenes?
The Album installer is a one file executable that automatically takes care of the following steps:
1. It creates a folder called `.album` in your home directory, which will hold all Album related files.
2. It installs Miniconda into `.album/Miniconda`.
3. It installs the Album environment into `.album/envs/album`.
4. It creates a shortcut for launching the graphical user interface of Album.
