import { createPDFCard, createKontaktCard, createProductCard, createVideoCard } from "./element-builder.js";
import { openPDF, openPDF2 } from "./pdf-handler.js";
import { list, showPDFView, listKontakt, listProduct, toggleProductHidden, listVideos } from "./view-handler.js";

const DOCUMENTS_FOLDER = "assets/documents/";

export function createListPdf(elements) {
  elements.forEach((element, i) => {
    const card = createPDFCard(`nexboxPdf${i}`, "newBoxPdf", element);
    list.appendChild(card);
  });
}

export function setListListeners() {
  const pdfImages = document.querySelectorAll(".clickPdfClass");

  pdfImages.forEach((image) => {
    const filename = image.lastChild.innerHTML;
    const filepath = `${DOCUMENTS_FOLDER}${filename}`;

    image.addEventListener("click", () => {
      showPDFView();
      openPDF(filepath);
    });
  });
}

//-------------------------- Kontakt --------------------------------

export function createKontaktList(elements) {
  elements.forEach((element, i) => {
    const cardKontakt = createKontaktCard(`boxKontakt${i}`, "newBoxKontakt", element);
    
    listKontakt.appendChild(cardKontakt);
  });
}

export function createProductList(elements) {
  elements.forEach((element, i) => {
    const cardProduct = createProductCard(`boxProduct${i}`, "newBoxProduct", element);
    listProduct.appendChild(cardProduct);
  });
}




export function setListListenersPdfProduct() {
  const pdfProductHandlerName = document.querySelectorAll(".clickPdfClass2");
  pdfProductHandlerName.forEach((image2) => {

    const filename = image2.lastChild.innerHTML;
    const filepath = `assets/products/${filename}`;

    image2.addEventListener("click", () => {
      toggleProductHidden()
      openPDF2(filepath);
    });
  });
}

//-------------- Filmy -------------

export function createVideosList(elements) {
  elements.forEach((element, i) => {
    console.log(element)
    const cardVideo = createVideoCard(`boxVideos${i}`, "newBoxPdf", element);
    console.log(cardVideo)
    listVideos.appendChild(cardVideo);
  });
}