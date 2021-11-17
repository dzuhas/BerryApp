export function createPDFCard(id, className, { title, filename }) {
  const card = document.createElement("div");

  card.id = id;
  card.className = className;

  const image = createPDFImage(
    "./assets/documents/Pdf.png",
    filename,
    "pngPdf clickPdfClass"
  );

  const pdfTitle = createPDFTitle(title, "nSens clickPdfClass");

  card.appendChild(image);
  card.appendChild(pdfTitle);

  return card;
}

export function createKontaktCard(id, className, { position, name, phone, email }) {
  const cardKontakt = document.createElement("div");

  cardKontakt.id = id;
  cardKontakt.className = className;

  const cardKontaktPosition = document.createElement("div");
  cardKontaktPosition.innerHTML = position;

  const cardKontaktName = document.createElement("div");
  cardKontaktName.innerHTML = name; 
  
  const cardKontaktPhone = document.createElement("div");
  cardKontaktPhone.innerHTML = phone;
  
  const cardKontaktEmail = document.createElement("div");
  cardKontaktEmail.innerHTML = email;

  cardKontakt.appendChild(cardKontaktPosition);
  cardKontakt.appendChild(cardKontaktName);
  cardKontakt.appendChild(cardKontaktPhone);
  cardKontakt.appendChild(cardKontaktEmail);

  return cardKontakt;
}

function createOneOfImages(src, className) {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.className = className;

  return img;
}


//Funkcja tworząca karty produktów

export function createProductCard(id, className, { title, description, images, pdfs }) {
  const cardProduct = document.createElement("div");
  const cardProductFull = document.createElement("div");

  cardProduct.id = id;
  cardProduct.className = className;

  cardProductFull.id = "full" + id
  cardProductFull.className = className

  const cardProductTitle = document.createElement("div");
  cardProductTitle.innerHTML = title;

  const cardProductDescription = document.createElement("div");
  cardProductDescription.innerHTML = description; 
  
  const cardProductMainImage = document.createElement("div");
  createImagesList(images)
  const firstImage = images[0];
  //cardProductMainImage.innerHTML = images[0];

  const image = createProductImage(
    `./assets/products/${firstImage}`,
    
    "pngPdf clickPdfClass"
  );
  
  
  const cardProductImages = document.createElement("div");
  cardProductImages.id = id;

  const cardProductPdfs = document.createElement("div");
  cardProductPdfs.innerHTML = pdfs;

  cardProduct.appendChild(image);
  cardProduct.appendChild(cardProductTitle);
  cardProduct.appendChild(cardProductFull);

  function createImagesList(elements) {
    elements.forEach((element, i) => {
      console.log(element)
      const imageProduct = createOneOfImages(`./assets/products/${element}`, "newBoxPdf");
      cardProductFull.appendChild(imageProduct);
    });
  }
  cardProductFull.appendChild(cardProductDescription);
  cardProductFull.appendChild(cardProductImages);
  cardProductFull.appendChild(cardProductPdfs);

  return cardProduct;
}

function createProductImage(src, className) {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.className = className;

  return img;
}

function createPDFImage(src, filename, className) {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.className = className;

  const pdfFilename = document.createElement("div");
  pdfFilename.innerHTML = filename;
  pdfFilename.className = "newDivPdfFile";

  img.appendChild(pdfFilename);

  return img;
}

function createPDFTitle(title, className) {
  const pdfTitle = document.createElement("div");
  pdfTitle.innerHTML = title;
  pdfTitle.className = className;

  return pdfTitle;
}
