# aurelia-plugin-skeleton

A combined plugin repo plus sample application

## Installation

1. Clone or download the repo to your local machine

2. `npm install` in the root directory (ensure you have node.js installed - for full installation instructions for Aurelia go to http://aurelia.io/get-started.html and follow the guide)

3. `jspm install` in the root directory

4. `jspm install` in the sample directory

5. `gulp watch` to start the server

Browse to http://localhost:3000 to see the plugin working

## Renaming the plugin

The configuration works off the `package.json` file - it uses the package name to setup paths for BrowserSync and SystemJS.

All you need to do to rename your plugin is open `package.json` and change the name.

Once you've done this, make sure to change the plugin import in the `main.js` file under the sample directory to ensure aurelia tries to load the plugin by the new name

## Creating your plugin

Create your plugin in the `src` directory under the root

You can modify the demo application located in the `sample` directory to showcase and test your plugin without needing a separate test application
