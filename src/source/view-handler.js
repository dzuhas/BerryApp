const pdf = document.getElementById("pdfPupop");
export const list = document.getElementById("pdf");

const company = document.getElementById("company");

export const nextButton = document.getElementById("next");
export const prevButton = document.getElementById("prev");
export const pageSpan = document.getElementById("npages");
export const backButton = document.getElementById("buttonPdf");

export const canvas = document.querySelector("#cnv");
export const canvasContext = canvas.getContext("2d");

export function setCompanyName(name) {
  company.innerHTML = name;
}

export function setPage(page) {
  pageSpan.innerHTML = page;
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
}
