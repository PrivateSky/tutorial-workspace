# tutorial-workspace

tutorial-workspace is a basic workspace based on [template-workplace](https://github.com/PrivateSky/template-workspace) and fullfiled with the [ssapp-minimal-app](https://github.com/PrivateSky/ssapp-minimal-app) todo application and the [profile-ssapp-prototype](https://github.com/PrivateSky/profile-ssapp-prototype) .

## Prerequisites

You need the following software installed on your machine in order to continue the this guide

1. Install or update [Node](https://nodejs.org/en/) (including NPM) to version 12.14.0.
2. Install or update [Git](https://git-scm.com/)

## Installation

The only commands you need to run in the *tutorial-workspace* workspace are:

```sh
# Step 0: Go inside the [tutorial-workspace] folder
cd tutorial-workspace

# Step 1: Brings all dependencies needed
$ npm install

# Step 2: Launch the Node js  
$ npm run server

# Step 3: Scans all applications and wallet it finds in the configuration and tries to run the build script for each one
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