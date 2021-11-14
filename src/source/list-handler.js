import { createPDFCard } from "./element-builder.js";
import { openPDF } from "./pdf-handler.js";
import { list, showPDFView } from "./view-handler.js";

const DOCUMENTS_FOLER = "assets/documents/";

export function createList(elements) {
  elements.forEach((element, i) => {
    const card = createPDFCard(`nexbox${i}`, "newBoxPdf", element);
    list.appendChild(card);
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
