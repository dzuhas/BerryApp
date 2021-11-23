



//-------------------- PRODUKT --------------------

var tabAllImages = [];


const mainPageProduct = document.getElementById("produkty")
const fullPageProduct = document.getElementById("productOpen")
var productNameHandler
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
  tabAllImages.push(images)
  //createImagesList(images)
  const firstImage = images[0];
  //cardProductMainImage.innerHTML = images[0];

  const image = createProductImage(

    `./assets/products/${firstImage}`,
    "pngPdf clickProduct"
  );

  const fullIdPhoto = "full" + id + "photo"

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


  //const buttonBackToMainProduct = document.getElementById("backToMainProduct")

  
  // function createImagesList(elements, taber) {
  //   var taber = [];

  //   elements.forEach((element, i) => {
  //     console.log(element)
  //     console.log(i)

  //     const imageProduct = createOneOfImages(`./assets/products/${element}`, "newBoxPdf");
  //     taber.push(imageProduct)
  //     //tab.push(imageProduct)

  //     //imageProduct.className = "hidden"
  //     //cardProductFull.appendChild(imageProduct);
  //     // const proba = caruselProductImages(tab)
  //     // console.log(proba)

  //     // cardProductFull.appendChild(tab);
  //     return taber
  //   });
  //   tabAllImages.push(taber)
  //   // cardProductFull.appendChild(kamil);
  // console.log(tabAllImages)

  // console.log(taber)


  //   //caruselProductImages(tab, fullIdPhoto)

  // }
  console.log(fullIdPhoto)
  //console.log(tab)
  //tabAllImages.push(ProductPicters)

  cardProductFull.appendChild(cardProductDescription);
  cardProductFull.appendChild(cardProductImages);
  cardProductFull.appendChild(cardProductPdfs);

  return cardProduct;
}


// tworze zdjecie glowne do produktu

function createProductImage(src, className) {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.className = className;

  return img;
}

// Tworzy click na elementach produktow docelowo otwierajaca pełny opis produktu

export function fullProductOpen() {
  const productClickhandlers = document.querySelectorAll(".clickProduct");
  console.log(tabAllImages)

  productClickhandlers.forEach((e) => {

    const productName = e.lastChild.innerHTML;

    //const filepath = `${DOCUMENTS_FOLER}${filename}`;

    //pobiera nazwe produktu z diva ukrytego pod elementem klikanym i tworzy karte full produkt

    e.addEventListener("click", () => {

      mainPageProduct.classList.toggle("hidden")

       productNameHandler = document.getElementById(productName)

      //zmiana klass z ukrytych na widzialne i odwrotnie
      changeClassOpenProduct(productNameHandler)

      //pobranie ostatniej cyfry z nazwy produktu, ktora jest to numerem zestawu zdjec z tablicy wszystkich zdjec pobranych z configu
      const lastProductNameNumber = productName.slice(-1);

      //pobranie zdjec do zmiennej 
      console.log(tabAllImages[lastProductNameNumber])
      const prouctImages = tabAllImages[lastProductNameNumber]
      console.log(prouctImages.length)
      const productImagesLength = prouctImages.length
      //tworzenie pierwszego wyswietlonego zdjecia
      const imageProduct2 = createOneOfImages(`./assets/products/${prouctImages[0]}`, "newBoxPdf");
      imageProduct2.id = "idFirstProductPhoto"
      console.log(imageProduct2)
      productNameHandler.appendChild(imageProduct2)
      // const imagesfuj = productNameHandler.getElementsByTagName("img");
      // console.log(imagesfuj)
      // const coc = imagesfuj[0]
      // console.log(coc)
      // prouctImages.classList.remove("hidden");
      const prevProductPhoto = document.createElement("button")
      prevProductPhoto.innerHTML = "prev";
      prevProductPhoto.id = "prevProductPhoto";
    
      const nextProductPhoto = document.createElement("button")
      nextProductPhoto.innerHTML = "next";
      nextProductPhoto.id = "nextProductPhoto";
      console.log(productNameHandler)

      //button wróć
    
      const backToMainProduct = document.createElement("button")
      backToMainProduct.innerHTML = "Wróć";
      backToMainProduct.id = "backToMainProduct";
      productNameHandler.appendChild(prevProductPhoto);
      productNameHandler.appendChild(nextProductPhoto);
      productNameHandler.appendChild(backToMainProduct);

  backToMainProduct.addEventListener("click", () => {
    closeFullProduct()
    console.log("akuuku")
  })
      // buttony next, priv i zmiana zdjecia
      const firstProductPhoto = document.getElementById("idFirstProductPhoto")
      console.log(productNameHandler)

      let imageIndex = 0
      function changeImageNext() {

        imageIndex++;
        if (imageIndex == productImagesLength) { imageIndex = 0; }
        firstProductPhoto.setAttribute("src", `./assets/products/${prouctImages[imageIndex]}`)

      }

      const clickNextProduct = document.getElementById("nextProductPhoto")

      clickNextProduct.addEventListener("click", () => {
        changeImageNext()
      })

      function changeImagePrev() {

        imageIndex--;
        if (imageIndex < 0) { imageIndex = productImagesLength - 1; }
        firstProductPhoto.setAttribute("src", `./assets/products/${prouctImages[imageIndex]}`)

      }

      const clickPrevProduct = document.getElementById("prevProductPhoto")

      clickPrevProduct.addEventListener("click", () => {
        changeImagePrev()
      })

    });
  });
}


function closeFullProduct() {
  const destroyPhotoProduct = document.getElementById("idFirstProductPhoto")
  destroyPhotoProduct.remove();

  const destroyButtonPrev = document.getElementById("prevProductPhoto")
  destroyButtonPrev.remove();

  const destroyButtonNext = document.getElementById("nextProductPhoto")
  destroyButtonNext.remove();

  const destroyButtonprev = document.getElementById("backToMainProduct")
  destroyButtonprev.remove();
  changeClassOpenProduct(productNameHandler)
  console.log(fullPageProduct)

  //fullPageProduct.classList.toggle("hidden");
  console.log(productNameHandler)
  mainPageProduct.classList.toggle("hidden")

  //productNameHandler.classList.toggle("hidden");

}

// zmiana klasy z hidden na widzialna w elemntach produkt i pelna wersja produkt

function changeClassOpenProduct(productNameHandler) {

  productNameHandler.classList.toggle("hidden");

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
