import {
  canvasContext,
  canvas,
  backButton,
  hidePDFView,
  toggleProductVisible,
  nextButton,
  prevButton,
  zoomInButton,
  zoomOutButton,
  setPage,
  clearCanvas,
  setPages
} from "./view-handler.js";

let state = {
  currentPage: 1,
  scale: 1.5
};

export function getCurrentPage() {
  return state.currentPage;
}

 export function getCurrentScale(){
  return state.scale;
}

export function setCurrentPage(currentPage) {
  state = { ...state, currentPage };
}

export function setCurrentScale(scale) {
  state = { ...state, scale };
}

export async function openPDF(filepath,filename) {
  document.getElementById("pdfPageName").innerHTML = filename;
  console.log(filename)
  setCurrentPage(1);
  setCurrentScale(1.5)
  clearCanvas(canvas);
  const pdfDocument = await pdfjsLib.getDocument(filepath).promise;
  createPDF(pdfDocument, getCurrentPage(),getCurrentScale());
  setPages(pdfDocument.numPages);

  const nextButtonHandler = () => {
    const nextPageNumber = getCurrentPage() + 1;
    if (nextPageNumber > pdfDocument.numPages) return;
    setCurrentPage(nextPageNumber);
    createPDF(pdfDocument, nextPageNumber,getCurrentScale());
  };

  const prevButtonHandler = () => {
    const prevPageNumber = getCurrentPage() - 1;
    if (prevPageNumber < 1) return;
    setCurrentPage(prevPageNumber);
    createPDF(pdfDocument, prevPageNumber,getCurrentScale());
  };

  const zoomInPdf = () => {
    const zoomIn = getCurrentScale() + 1;
    if (zoomIn > 5) return;
    setCurrentScale(zoomIn);
    createPDF(pdfDocument, getCurrentPage(),getCurrentScale());
  };

  const zoomOutPdf = () => {
    const zoomOut = getCurrentScale() - 1;
    if (zoomOut < 1) return;
    setCurrentScale(zoomOut);
    createPDF(pdfDocument, getCurrentPage(),getCurrentScale());
  };

  const backButtonHandler = () => {
    hidePDFView();
    nextButton.removeEventListener("click", nextButtonHandler);
    prevButton.removeEventListener("click", prevButtonHandler);
    backButton.removeEventListener("click", backButtonHandler);
    zoomInButton.removeEventListener("click", prevButtonHandler);
    zoomOutButton.removeEventListener("click", backButtonHandler);
  };

  nextButton.addEventListener("click", nextButtonHandler);
  prevButton.addEventListener("click", prevButtonHandler);
  backButton.addEventListener("click", backButtonHandler);

  zoomInButton.addEventListener("click", zoomInPdf);
  zoomOutButton.addEventListener("click", zoomOutPdf);
}

export async function openPDF2(filepath) {
  setCurrentPage(1);
  clearCanvas(canvas);
  const pdfDocument = await pdfjsLib.getDocument(filepath).promise;
  createPDF(pdfDocument, getCurrentPage(),getCurrentScale());
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
    toggleProductVisible();

    nextButton.removeEventListener("click", nextButtonHandler);
    prevButton.removeEventListener("click", prevButtonHandler);
    backButton.removeEventListener("click", backButtonHandler);
  };

  nextButton.addEventListener("click", nextButtonHandler);
  prevButton.addEventListener("click", prevButtonHandler);
  backButton.addEventListener("click", backButtonHandler);
}

function queueRenderPage(num) {
  if (pageRendering) {
    pageNumPending = num;
  } else {
    renderPage(num);
  }
}

export async function createPDF(doc, pageNumber, scaleNumber) {
  clearCanvas(canvas);

  const page = await doc.getPage(pageNumber);
  const viewport = page.getViewport({ scale: scaleNumber});

  canvas.height = viewport.height;
  canvas.width = viewport.width;


  page.render({ viewport, canvasContext });
  setPage(pageNumber);
}
