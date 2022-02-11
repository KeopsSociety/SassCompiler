/*!
 * sass-compiler
 * Copyright(c) 2022 Keops Society
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */

const sass = require("sass");
const fs = require("fs");
const path = require("path");


/**
 * Compile sass files in [inputDir] and write the result in [outputDir].
 *
 * @param {string}    [inputDir] The folder where your scss files are stored
 * @param {string}    [outputDir] The folder where the generated css files will be stored
 * @public
 */

const compileSassFiles = function(inputDir, outputDir) {
    try {
        let fileList = fs.readdirSync(inputDir);

        fileList.forEach(function (file) {
            let fileName = path.join(inputDir, file);
            let outFileName = path.join(outputDir, file);

            let stat = fs.statSync(fileName);
            if (stat.isDirectory()) {
                if (!fs.existsSync(outFileName)) {
                    fs.mkdirSync(outFileName, { recursive: true });
                } else {
                    // TODO: delete old css files
                }
                compileSassFiles(fileName, outFileName);
                // compileSassFiles(fileName, outputDir); // This removes the folders hierarchy
            } else {
                // Files that starts with '_' will be ignored
                if (!file.startsWith('_')) {
                    const result = sass.compile(fileName);

                    try {
                        let outputFile = outFileName.replace('.scss', '.css');
                        console.log(outputFile);
                        fs.writeFileSync(outputFile, result.css, {encoding: 'utf8', flag: 'w+'});
                    } catch (error) {
                        console.error("Error writhing file: " + outFileName);
                        console.error(error);
                    }
                }
            }
        });
    } catch (error) {
        return console.error('Unable to scan directory: ' + inputDir, error);
    }
};

module.exports = compileSassFiles;