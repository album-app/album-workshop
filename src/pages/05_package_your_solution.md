---
slug: "/package"
title: "5. package a solution"
description: "In this section you will learn how to package your solution into an executable, which installs your
solution on other systems so you can easily share your solution with others."
---

<div class="learning-objectives">
Learning objectives:
<ul>
<li>learn how to package your solutions and easily share it</li>
</ul>
</div>

---

If you want to share your solution with others in a single file you can use the "package" plugin of Album.
The plugin creates an executable which will install Album and your solution.

1. Activate the Album environment:

    1. If you installed Album with the Album installation wizard use one of the following commands to activate your
       Album environment:
        1. Linux and MacOS:
           ```
           ~/.album/activate_album
           ```
        2. Windows:
           ```
           ~/.album/activate_album.bat
           ```
    2. If you installed Album manually use following command:
       ```
       conda activate album
       ```

2. Install the album package plugin:
   ```
   pip install album-package
   ```

3. Package you solution with album package:
    ```
   album package [solution-path or solution-coordinates] [output-directory]
   ```

4. Share the created executable.
    - NOTE: The created executable will only work for systems running the same operating system as you. If you want to
      share the solution in packaged form with a user using a different operating system then you, the solution needs to
      be packaged on a system running the same operating system as the user you want to share the solution with.
