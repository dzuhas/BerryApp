// ----------- MENU ------------------

//Funkcja zamieniająca klasy w odpowiednim divie 

// function toggleMenu(nameDiv,classA,classB) {
//   nameDiv.classList.toggle(classA);
//   nameDiv.classList.toggle(classB);
// }
function repleceMenuHidden(nameDiv,classA,classB) {
  nameDiv.classList.replace(classA, classB);
}

// function toggleMenyForAll(){
//   toggleMenu(pdf,"pdfMain","pdfMainHidden")
//   toggleMenu(produkty,"produktyMainHidden","produktyMain")
//   toggleMenu(filmy,"filmyMainHidden","filmyMain")

// }
function mainHiddenForAll(){
  repleceMenuHidden(pdf,"pdfMain","hidden")
  repleceMenuHidden(produkty,"produktyMain","hidden")
  repleceMenuHidden(filmy,"filmyMain","hidden",)
  repleceMenuHidden(wspolpraca,"wspolpracaMain","hidden",)
  repleceMenuHidden(kontakt,"kontaktMain","hidden",)

}



// -----MENU PDF------

const pdfMenuButton = document.getElementById("pdfMenu");

pdfMenuButton.addEventListener("click", () => {
   //tutaj trzeba dac ifa jesli nacisniesz pdf to nie rob nic
  // pdf.classList.add("pdfMainHidden");
  mainHiddenForAll()
  console.log("zakryte")
  repleceMenuHidden(pdf,"hidden","pdfMain")

   //toggleMenuHiddenForAll()
});

// --- MENU PRODUKTY -------

const produktyMenuButton = document.getElementById("produktyMenu");

produktyMenuButton.addEventListener("click", () => {
  

  mainHiddenForAll()
  console.log("zakryte 2")

  repleceMenuHidden(produkty,"hidden","produktyMain")

});

// --- MENU FILMY -------
const filmyMenuButton = document.getElementById("filmyMenu");

filmyMenuButton.addEventListener("click", () => {
  // toggleMenyForAll()
  mainHiddenForAll()

  repleceMenuHidden(filmy,"hidden","filmyMain")

});
// --- MENU WSPÓŁPRACA -------

const wspolpracaMenuButton = document.getElementById("wspolpracaMenu");

wspolpracaMenuButton.addEventListener("click", () => {
  // toggleMenyForAll()
  mainHiddenForAll()

  repleceMenuHidden(wspolpraca,"hidden","wspolpracaMain")

});

// --- MENU KONTAKT -------

const kontaktMenuButton = document.getElementById("kontaktMenu");

kontaktMenuButton.addEventListener("click", () => {
  // toggleMenyForAll()
  mainHiddenForAll()

  repleceMenuHidden(kontakt,"hidden","kontaktMain")

});

// ----------- PDF -------------------

import { setCompanyName } from "./source/view-handler.js";
import { createList, setListListeners } from "./source/list-handler.js";

(async () => {
  try {
    const data = await fetch("config.json").then((res) => res.json());

    const { settings, assets } = data;

    const { company } = settings;
    const { pdfs } = assets;

    setCompanyName(company);
    createList(pdfs);
    setListListeners();
  } catch (error) {

    console.log(error);
  }
})();

 
