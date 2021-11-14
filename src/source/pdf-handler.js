import {
  canvasContext,
  canvas,
  backButton,
  hidePDFView,
  nextButton,
  prevButton,
  setPage,
  setPages
} from "./view-handler.js";

let state = {
  currentPage: 1,
};

export function getCurrentPage() {
  return state.currentPage;
}

export function setCurrentPage(currentPage) {
  state = { ...state, currentPage };
}

export async function openPDF(filepath) {
  setCurrentPage(1);
  const pdfDocument = await pdfjsLib.getDocument(filepath).promise;
  createPDF(pdfDocument, getCurrentPage());
  setPages(pdfDocument.numPages);
  const nextButtonHandler = () => {
    const nextPageNumber = getCurrentPage() + 1;
    if (nextPageNumber > pdfDocument.numPages) return;
    setCurrentPage(nextPageNumber);
    createPDF(pdfDocument, nextPageNumber);
  };

  const prevButtonHandler = () => {
    const prevPageNumber = getCurrentPage() - 1;
    if (prevPageNumber < 1) return;
    setCurrentPage(prevPageNumber);
    createPDF(pdfDocument, prevPageNumber);
  };

  const backButtonHandler = () => {
    hidePDFView();
    nextButton.removeEventListener("click", nextButtonHandler);
    prevButton.removeEventListener("click", prevButtonHandler);
    backButton.removeEventListener("click", backButtonHandler);
  };

  nextButton.addEventListener("click", nextButtonHandler);
  prevButton.addEventListener("click", prevButtonHandler);
  backButton.addEventListener("click", backButtonHandler);
}

export async function createPDF(doc, pageNumber) {
  const page = await doc.getPage(pageNumber);
  const viewport = page.getViewport({ scale: 1.5 });

  canvas.height = viewport.height;
  canvas.width = viewport.width;

  page.render({ viewport, canvasContext });
  setPage(pageNumber);
}
