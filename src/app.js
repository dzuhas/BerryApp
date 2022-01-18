
// ----------- Config -------------------

import { setContentText, setWelcomeText} from "./source/view-handler.js";
import { createListPdf, setListListeners, createKontaktList, createProductList, setListListenersPdfProduct, createVideosList } from "./source/list-handler.js";
import { fullProductOpen, videoOpen } from "./source/element-builder.js";

(async () => {
  try {
    const data = await fetch("config.json").then((res) => res.json());

    const { settings, assets, products } = data;
    console.log(settings.desktop)

    const { homeText} = settings;
    const { mainText } = settings;
    const { pdfs } = assets;
    const { contact } = settings;
    const { images } = products
    const { productPdfs } = products
    const { videos } = assets;
    const { desktop } = settings;
    const { logo } = settings;
    const { font } = settings;
    const { filename } = videos;

console.log(filename)
    setFont(font);
    setLogo(logo);
    setDesktop(desktop);
    setContentText(mainText);
    setWelcomeText(homeText);
    createListPdf(pdfs);
    setListListeners();
    createKontaktList(contact);
    createProductList(products);
    fullProductOpen();
    setListListenersPdfProduct();
    createVideosList(videos);
    //createPosters(videos)
    videoOpen()
  } catch (error) {
    console.log("apskierror");

    console.log(error);
  }
})();

// ----------- WELCOME PAGE ----------

//------------Background-image------


function setDesktop(desktop){

document.body.style.backgroundImage = "url(assets/images/"+desktop+")";

}
// -----------Font-----------

async function setFont(font) {
  const newFont = new FontFace('myFont', 'url(assets/font/'+font+')');
  // wait for font to be loaded

  await newFont.load();
  // add font to document
  console.log(font)
  console.log(newFont)


  document.fonts.add(newFont);
  // enable font with CSS class
  document.body.classList.add('fonts-loaded');
}

// -----------Button-----------

const startButton = document.getElementById("buttonStart");

startButton.addEventListener("click", () => {
  const start = document.getElementById("welcomePage")
  const main = document.getElementById("main")

  main.classList.toggle("hidden");
  start.classList.toggle("hidden");

});

// ------------Logo------------

// Pobieranie logo i umieszanie w odpowiednicj miejscach


function setLogo(logo){

  function createLogo(src, targetLogo, classname) {
    const logoDiv = document.getElementById(targetLogo);
    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.className = classname;
    logoDiv.appendChild(img);
  
    return img;
  }



createLogo("./assets/logo/"+logo, "logoWelcome")
createLogo("./assets/logo/"+logo, "logoMain", "logoMain")

}


//------ Text------



// ----------- MENU ------------------

//Funkcja zamieniająca klasy w odpowiednim divie 


function repleceMenuHidden(nameDiv, classA, classB) {
  nameDiv.classList.replace(classA, classB);
}

function mainHiddenForAll() {
  repleceMenuHidden(pdf, "pdfMain", "hidden")
  repleceMenuHidden(produkty, "produktyMain", "hidden")
  repleceMenuHidden(filmy, "filmyMain", "hidden",)
  repleceMenuHidden(wspolpraca, "wspolpracaMain", "hidden",)
  repleceMenuHidden(kontakt, "kontaktMain", "hidden",)

}

//Funkcja podświetlająca odpowiedni dział w menu 

function makeColor(nameDiv, classA, classB) {
  nameDiv.classList.replace(classA, classB);
}

function GreyForAll() {
  makeColor(pdfMenu, "colorRed", "colorGrey")
  makeColor(produktyMenu, "colorRed", "colorGrey")
  makeColor(filmyMenu, "colorRed", "colorGrey",)
  makeColor(wspolpracaMenu, "colorRed", "colorGrey",)
  makeColor(kontaktMenu, "colorRed", "colorGrey",)

}





// -----MENU PDF------

const pdfMenuButton = document.getElementById("pdfMenu");

pdfMenuButton.addEventListener("click", () => {
  // pdf.classList.add("pdfMainHidden");
  mainHiddenForAll()
  repleceMenuHidden(pdf, "hidden", "pdfMain")

  GreyForAll()
  makeColor(pdfMenu, "colorGrey", "colorRed")

});

// --- MENU PRODUKTY -------

const produktyMenuButton = document.getElementById("produktyMenu");

produktyMenuButton.addEventListener("click", () => {

  GreyForAll()
  mainHiddenForAll()

  repleceMenuHidden(produkty, "hidden", "produktyMain")
  makeColor(produktyMenu, "colorGrey", "colorRed")

});

// --- MENU FILMY -------

const filmyMenuButton = document.getElementById("filmyMenu");

filmyMenuButton.addEventListener("click", () => {
  // toggleMenyForAll()
  mainHiddenForAll()
  repleceMenuHidden(filmy, "hidden", "filmyMain")


  GreyForAll()
  makeColor(filmyMenu, "colorGrey", "colorRed")


});
// --- MENU WSPÓŁPRACA -------

const wspolpracaMenuButton = document.getElementById("wspolpracaMenu");

wspolpracaMenuButton.addEventListener("click", () => {

  mainHiddenForAll()
  repleceMenuHidden(wspolpraca, "hidden", "wspolpracaMain")

  GreyForAll()
  makeColor(wspolpracaMenu, "colorGrey", "colorRed")
});

// --- MENU KONTAKT -------

const kontaktMenuButton = document.getElementById("kontaktMenu");

kontaktMenuButton.addEventListener("click", () => {
  
  mainHiddenForAll()
  repleceMenuHidden(kontakt, "hidden", "kontaktMain")

  GreyForAll()
  makeColor(kontaktMenu, "colorGrey", "colorRed")

});


//-------------------- Wspolpraca ---------------------------


  
//-------------------- Error --------------------------------
// const errorButton = document.getElementById("buttonError");

// errorButton.addEventListener("click", () => {
  
 

// });


//const extractFrames = require('ffmpeg-extract-frames')
// import extractFrames from '../node_modules/ffmpeg-extract-frames';

// await extractFrames({
//   input: 'media/1.mp4',
//   output: './screenshot-%i.jpg',
//   offsets: [
//     1000,
//     2000,
//     3500
//   ]
// })