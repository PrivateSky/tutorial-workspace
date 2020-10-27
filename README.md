# tutorial-workspace

[tutorial-workspace](https://github.com/PrivateSky/tutorial-workspace) is a basic workspace based on [template-workplace](https://github.com/PrivateSky/template-workspace) and contains the following applications:
* a simple **todo** application - A simple todo application. Included from [ssapp-minimal-app](https://github.com/PrivateSky/ssapp-minimal-app)  
* a **profile** application - An application that display the "profile" of an user. Included from [profile-ssapp-prototype](https://github.com/PrivateSky/profile-ssapp-prototype)
* a simple **"Hello World! DSU"** - a small tutorial aiming to show how you can use DSU to save and load data.



**Notes**: 
* A _workspace_ is a project with many other libraries and configuration loaded.
* We will use _${workSpaceRoot}_ for the workspace folder
* An _included_ application means that the original code is in a separate repo but got included here (either by hard copy or brought in by git's clone commands) 

## Prerequisites

You need the following software installed on your machine in order to continue the this guide

1. Install or update [Node](https://nodejs.org/en/) (including NPM) to version 12.14.0.
2. Install or update [Git](https://git-scm.com/)

## Installation

The only commands you need to run in the *tutorial-workspace* workspace are:

```sh
# Step 1: Clone tutorial-workspace from GitHub
git clone https://github.com/PrivateSky/tutorial-workspace.git

# Step 2: Go inside the [tutorial-workspace] folder
cd tutorial-workspace

# Step 3: Brings all dependencies needed
$ npm install

# Step 4: Launch the Node js  
$ npm run server

# Step 5: Note: Run this in a separate console! Scans all applications and wallet it finds in the configuration and tries to run the build script for each one
$ npm run build-all
```

After all this steps are done, you can access the application by going to [http://localhost:8080/tutorial/loader/](http://localhost:8080/tutorial/loader/)


## Hello World! DSU Tutorial


This tutorial sub project helps you understand how you can work directly with DSUs. 

The code for this tutorial is in [helloworld-dsu] folder. It consist of only one file _main.js_

To **FIRST** run it simply **run the steps** found in the [Installation] section above then: 


```sh
# Step 1: Go inside [helloworld-dsu]
cd helloworld-dsu

# Step 2: Run the app
node main.js
```

You should get something like: 

```
....
Data written succesfully! :)
KeySSI identifier:  BBudGH6ySHG6GUHN8ogNrTWbZHtTCUHnMvP5Un8LrUFrdb2yDx3pbh85gMdLgEAoex6rX86B9dY5Fscjx77uMcfmh
Data load succesfully! :) Hello world!
....
```


## Hello World! SSAPP Tutorial

This tutorial sub project helps you understand how you can create a simple SSAPP from scratch. 

The code for this tutorial will end up in [helloworld-ssapp] folder. 

To **FIRST** run it simply **run the steps** found in the [Installation] section above then follow these steps: 

### Clone a SSApp repository
```sh

# 1. Clone the repo
git clone https://github.com/PrivateSky/ssapp-template.git helloworld-ssapp

# 2. Go inside it, remove .git folder and bring dependecies 
cd helloworld-ssapp && rm -rf .git && npm install

# 3. Go one folder up
cd ..

# 4. Bind newly helloworld-ssapp to existing tutorial workspace 
npm run bind-app tutorial helloworld-ssapp

# 5. Go inside helloworld-ssapp
cd helloworld-ssapp

# 6. Build it
npm run build

```

### Add a new file 
Add a new named hello.html inside _${workSpaceRoot}_/web-server/tutorial/wallet-template/pages/ 


```sh
# 7. Create file
touch ../web-server/tutorial/wallet-template/pages/hello.html

```

and add the following content to it:
```html
<psk-container controller-name="WalletSsappLauncher" data-app-name="helloworld-ssapp">
    <psk-ssapp key-ssi="@keySSI"></psk-ssapp>
</psk-container>
```

### Update menu.json
Update _${workSpaceRoot}_/web-server/tutorial/wallet-template/menu.json 

```sh
# 8. Edit menu.json
nano ../web-server/tutorial/wallet-template/menu.json
```
add:

```javascript
{
    "name" : "Hello"
}    

```

to pages sections so in the end should look like:
```javascript
{
  //other lines...
  "pages": [
    {
      "name": "Minimal ssapp"
    },
    {
      "name" : "Hello"
    }
  ]
}
```

This will inform the containing tutorial workspace to use it as menu entry.

**Note** : Watch out not to miss the comma (,) before the newly added section.


### Update your home.html page
Edit _${workSpaceRoot}_/helloworld-ssapp/code/pages/home.html 

```sh
# 9. Edit home file
nano ./code/pages/home.html 
```

and replace with:

```html
<psk-page title="Hello World SSApp!">
    <psk-card title="Hello World SSApp!">
        <p>Jean-Luc Picard: Engage!</p>
    </psk-card>
</psk-page>

```

### Rebuild the workspace
You need to rebuild the workspace to use newly added SSApp
```sh
#10 Go into the workspace root folder
cd ..

# 11. Rebuild the workspace
npm run build-all
```

### Open it in your browser
Open [http://localhost:8080/tutorial/loader/](http://localhost:8080/tutorial/loader/) in a 
new Incognito Chrome browser (Ctr+Shift+N)
