



//-------------------- PRODUKT --------------------

const mainPageProduct = document.getElementById("produkty")
const fullPageProduct = document.getElementById("productOpen")

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

  const fullId = "full" + id
  cardProductFull.id = fullId
  cardProductFull.className = "hidden"

  const fullProduktNameHandler = document.createElement("div");
  fullProduktNameHandler.className = "hidden kamil"
  fullProduktNameHandler.innerHTML = fullId;

  const fullProduktNameHandler2 = document.createElement("div");
  fullProduktNameHandler2.className = "hidden"
  fullProduktNameHandler2.innerHTML = fullId;

  const cardProductTitle = document.createElement("div");
  cardProductTitle.className = "clickProduct"
  cardProductTitle.innerHTML = title;
console.log(images)
  createImagesList(images)
  const firstImage = images[0];
  //cardProductMainImage.innerHTML = images[0];

  const image = createProductImage(

    `./assets/products/${firstImage}`,
    "pngPdf clickProduct"
  );

  const image2 = createProductImage(

    `./assets/products/${firstImage}`,
    "pngPdf"
  );


  console.log(firstImage)

  const cardProductDescription = document.createElement("div");
  cardProductDescription.innerHTML = description;

  const cardProductImages = document.createElement("div");
  cardProductImages.id = id;

  const cardProductPdfs = document.createElement("div");
  cardProductPdfs.innerHTML = pdfs;


  cardProduct.appendChild(image);
  image.appendChild(fullProduktNameHandler);

  cardProduct.appendChild(cardProductTitle);
  cardProductTitle.appendChild(fullProduktNameHandler2);

  fullPageProduct.appendChild(cardProductFull);
  console.log(fullId)

  function createImagesList(elements) {
    const tab = [];

    elements.forEach((element, i) => {
      console.log(element)
      const imageProduct = createOneOfImages(`./assets/products/${element}`, "newBoxPdf");
      tab.push(imageProduct)
      //cardProductFull.appendChild(imageProduct);
      // const proba = caruselProductImages(tab)
      // console.log(proba)

      // cardProductFull.appendChild(tab);

    });
    console.log(tab)
    caruselProductImages (tab)
  }
  cardProductFull.appendChild(image2);

  cardProductFull.appendChild(cardProductDescription);
  cardProductFull.appendChild(cardProductImages);
  cardProductFull.appendChild(cardProductPdfs);

  return cardProduct;
}
// slideshow z tablicy zdjec danego produktu

function caruselProductImages (tab){
 
 let curIndex = 0;
  const imgDuration = 5000;

function slideShow() {
  document.getElementById('productOpen').src = tab[curIndex];
  curIndex++;
  if (curIndex == tab.length) { curIndex = 0; }
  // setTimeout("slideShow()", imgDuration);
}
slideShow();
}

// tworze zdjecie glowne do produktu

function createProductImage(src, className) {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.className = className;

  return img;
}

// Tworzy click na elementach produktow docelowo otwierajaca/zamykająca pełny opis produktu

export function fullProductOpen() {
  const productClickhandlers = document.querySelectorAll(".clickProduct");
  console.log(productClickhandlers)
  
  productClickhandlers.forEach((e) => {
    const productName = e.lastChild.innerHTML;
    //const filepath = `${DOCUMENTS_FOLER}${filename}`;
    e.addEventListener("click", () => {
      console.log(productName)
      const janusz = document.getElementById(productName)
      changeClassOpenProduct(janusz)
    });
  });
}

// zmiana klasy z hidden na widzialna w elemntach produkt i pelna wersja produkt

function changeClassOpenProduct(janusz) {

  janusz.classList.toggle("hidden");
 // fullPageProduct.classList.toggle("hidden");

}


//--------------- PDF-------------------

export function createPDFCard(id, className, { title, filename }) {
  const card = document.createElement("div");

  card.id = id;
  card.className = className;

  const image = createPDFImage(
    "./assets/documents/Pdf.png",
    filename,
    "pngPdf clickPdfClass"
  );

  const pdfTitle = createPDFTitle(title, filename, "PDFTitle clickPdfClass");

  card.appendChild(image);
  card.appendChild(pdfTitle);

  return card;
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

function createPDFTitle(title, filename, className) {
  const pdfTitle = document.createElement("div");
  pdfTitle.innerHTML = title;
  pdfTitle.className = className;

  const pdfFilename2 = document.createElement("div");
  pdfFilename2.innerHTML = filename;
  pdfFilename2.className = "newDivPdfFile";

  pdfTitle.appendChild(pdfFilename2);

  return pdfTitle;
}
