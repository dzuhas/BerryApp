import { createPDFCard, createKontaktCard, createProductCard } from "./element-builder.js";
import { openPDF } from "./pdf-handler.js";
import { list, showPDFView, listKontakt, listProduct } from "./view-handler.js";

const DOCUMENTS_FOLER = "assets/documents/";

export function createListPdf(elements) {
  elements.forEach((element, i) => {
    const card = createPDFCard(`nexboxPdf${i}`, "newBoxPdf", element);
    list.appendChild(card);
  });
}

export function createKontaktList(elements) {
  elements.forEach((element, i) => {
    const cardKontakt = createKontaktCard(`boxKontakt${i}`, "newBoxPdf", element);
    listKontakt.appendChild(cardKontakt);
  });
}
export function createProductList(elements) {
  elements.forEach((element, i) => {
    const cardProduct = createProductCard(`boxProduct${i}`, "newBoxPdf", element);
    listProduct.appendChild(cardProduct);
  });
}
export function setListListeners() {
  const pdfImages = document.querySelectorAll(".pngPdf.clickPdfClass");

  pdfImages.forEach((image) => {
    const filename = image.lastChild.innerHTML;
    const filepath = `${DOCUMENTS_FOLER}${filename}`;

    image.addEventListener("click", () => {
      showPDFView();
      openPDF(filepath);
    });
  });
}
