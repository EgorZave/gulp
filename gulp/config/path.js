import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;   // Может быть и рут фолдер
const srcForlder = `./src`;

export const path = {
   build: {
      html: `${buildFolder}/`,
      files: `${buildFolder}/files/`,
   },
   src: {
      html: `${srcForlder}/*.html`,
      files: `${srcForlder}/files/**/*.*`,
   },
   watch: {
      html: `${srcForlder}/**/*.html`,
      files: `${srcForlder}/files/**/*.*`,
   
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   srcForlder: srcForlder,
   rootFolder: rootFolder,
   ftp: ``
}