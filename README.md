
# SassCompiler

An utility for generating css from scss files

---

## Installation

```bash
# install locally (recommended)
npm install @keops-society/sass-compiler --save
```

---

## Usage

- Create a `css` and `sass` directories in your project

### 1 Using in code

To use from code each time your application runs:

```javascript
//import
const compileSassFiles = require('sass-compiler');

//define some paths
const DIR_SASS_FILES = path.join(__dirname, 'sass');
const DIR_SASS_OUTPUT = path.join(__dirname, 'css');

//compile sass files
try {
    compileSassFiles(DIR_SASS_FILES, DIR_SASS_OUTPUT);
} catch (error) {
    return console.error('Unable compile sass files: ' + error);
}
```


### 2 Using from terminal

If you don't want to add sass logic in your code:

```bash
npx sass-compiler <input-dir> <output-dir>
```
---