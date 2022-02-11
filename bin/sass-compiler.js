#!/usr/bin/env node

const compileSassFiles = require('../lib/index');

// slice argv as we don't need the forst two elements (in this case)
const args = process.argv.slice(2, process.argv.length);
// console.log(args);

const inputDir = args[0];// first argument
const outputDir = args[1];// second argument

if (!inputDir || !outputDir) {
    console.log("SassCompiler info:");
    console.log("  Compile sass files from input directory and writes the resulting css files in output directory");
    console.log();
    console.log("Usage:");
    console.log("  sass-compiler <input-dir> <output-dir>");
    console.log();
    console.log("Options:");
    console.log("  --help    Show this info");
    console.log();
    if (inputDir && (inputDir !== "--help")) {
        console.log("Unknown argument: " + inputDir);
    }
    process.exit(0);
} else {
    compileSassFiles(inputDir, outputDir);
    process.exit(0);// 0 means there were no errors
}

