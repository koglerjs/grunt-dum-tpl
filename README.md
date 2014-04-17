# grunt-dum-tpl

> A plugin to run the DUM template parser for a web application's templates, and package them to be used in the client.

## Getting Started

Easy installation:

```shell
npm install grunt-dum-tpl --save-dev
```

## The "dum_tpl" task

This is a basic wrapper for the DUM templating library, which uses a minimal Mustache syntax.  Use this to package your templates into a javascript variable.  

Note that DUM, at 0.0.6, makes several naive/idiotic assumptions, such as: none of your templates have the same name.  

DUM is basically a theoretical project, and this is an example plugin.

### Overview

####Standard File Globber

Every file you give the plugin will be run through the DUM parser to produce javascript code.  Afterwards, the code is concatenated into the destination.

```javascript
files: [{
  src : "test/fixtures/**/*.tpl",
  dest: "tmp/tpls.js"
}]
```

### Options

#### options.varName
Type: `String`

The name for the object through which the client will access the generated templating functions.  

#### options.notGlobal
Type: `Boolean`

The default behavior is to append "var " to options.varName, creating a global variable.  Maybe you don't want this, but you should take care that the variable is accessible somehow.  

### Usage Examples

```javascript
"dum_tpl": {
    main: { 
    options: {
      varName : "tpls",
      notGlobal: true
    },
    files: [{
      src : "test/fixtures/**/*.tpl",
      dest: "tmp/tpls.js"
    }]
  }
}
```