//------------------ PDF ---------------------

export const headId = document.getElementById("head");

const pdf = document.getElementById("pdfPupop");
export const list = document.getElementById("pdf");

const company = document.getElementById("company");
const startText = document.getElementById("welcomeText");

export const nextButton = document.getElementById("next");
export const prevButton = document.getElementById("prev");
export const pageSpan = document.getElementById("npage");
export const pagesSpan = document.getElementById("npages");
export const backButton = document.getElementById("buttonPdf");

export const canvas = document.querySelector("#cnv");
export const canvasContext = canvas.getContext("2d");

export function clearCanvas(canvas) {
  const canvasContext = canvas.getContext("2d");
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
}

export function setContentText(name) {
  company.innerHTML = name;
}

export function clearCanvas(canvas) {
  const canvasContext = canvas.getContext("2d");
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
}

export function setWelcomeText(text) {
  startText.innerHTML = text;
}
export function setPage(page) {
  pageSpan.innerHTML = page;
}
export function setPages(pages) {
  pagesSpan.innerHTML = pages;
}
export function showPDFView() {
  togglePDF();
}

export function hidePDFView() {
  togglePDF();
}

function togglePDF() {
  pdf.classList.toggle("pupPdf");
  pdf.classList.toggle("pupPdfOpen");

  list.classList.toggle("pdfMain");
  list.classList.toggle("pdfMainHidden");
  
  headId.classList.toggle("hidden");

  menu.classList.toggle("hidden");
  company.classList.toggle("hidden");
}

// ------------------------ Kontakt -----------------------------

export const listKontakt = document.getElementById("kontakt");

// ------------------------ Produkty ----------------------------

const toogleProductOpen = document.getElementById("productOpen");

export const listProduct = document.getElementById("produkty");

export function toggleProductHidden() {
  toogleProductOpen.classList.toggle("hidden");

  pdf.classList.toggle("pupPdf");
  pdf.classList.toggle("pupPdfOpen");

  list.classList.toggle("pdfMain");
  list.classList.toggle("pdfMainHidden");
}
export function toggleProductVisible(){
  toogleProductOpen.classList.toggle("hidden");
  pdf.classList.toggle("pupPdf");
  pdf.classList.toggle("pupPdfOpen");

  list.classList.toggle("pdfMain");
  list.classList.toggle("pdfMainHidden");


}

//-------------------------- Filmy -----------------------------

export const listVideos = document.getElementById("filmy")

export function toggleHeadHidden() {

  headId.classList.toggle("hidden");

}
