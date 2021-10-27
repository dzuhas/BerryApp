import  pdfjsLib from 'pdfjs-dist';

//const pdfjsLib = require('pdfjs-dist');

export const pdfExport = "gruby"

pdfjsLib.getDocument('kalendarz.pdf').then(doc=>{
 console.log("ulala")
 })