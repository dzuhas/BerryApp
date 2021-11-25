

const menu = document.getElementById("menu")
const company = document.getElementById("company")

//-------------------- PRODUKT --------------------

var tabAllImages = [];
var titlePdfProduct



const mainPageProduct = document.getElementById("produkty")
const fullPageProduct = document.getElementById("productOpen")
var productNameHandler
var cardProductPdfs

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

export function createProductCard(id, className, { idProduct, title, description, images, productPdfs }, i) {

  const cardProduct = document.createElement("div");
  const cardProductFull = document.createElement("div");
  console.log(productPdfs)
  console.log(id)
  console.log(i)

  console.log(idProduct)
  console.log(idProduct - 1)
  const NumberListOfProductPdfs = idProduct - 1
  const ListOfProductPdfs = productPdfs[NumberListOfProductPdfs]
  console.log(ListOfProductPdfs)
  const NumeOfProductPdf = ListOfProductPdfs.title
  console.log(NumeOfProductPdf)
  console.log(NumberListOfProductPdfs)


  console.log(titlePdfProduct)

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

  console.log(firstImage)
  console.log(id)



  const cardProductDescription = document.createElement("div");
  cardProductDescription.innerHTML = description;

  cardProductPdfs = document.createElement("div");
  cardProductPdfs.id = "pdfGalery" + NumberListOfProductPdfs;

  cardProduct.appendChild(image);
  image.appendChild(fullProduktNameHandler);

  cardProduct.appendChild(cardProductTitle);
  cardProductTitle.appendChild(fullProduktNameHandler2);

  fullPageProduct.appendChild(cardProductFull);



  console.log(fullId)

  cardProductFull.appendChild(cardProductDescription);
  cardProductFull.appendChild(cardProductPdfs);

  productPdfs.forEach((element, i) => {
    const dzony = element.title
    const titlePdfProduct = document.createElement("div")
    titlePdfProduct.className = "productPdfTitle clickPdfClass2"
    titlePdfProduct.innerHTML = dzony
    
const danek = element.filename
const pdfProductFilename = document.createElement("div");
pdfProductFilename.innerHTML = danek;
pdfProductFilename.className = "newDivPdfFile";

    console.log(titlePdfProduct)
    const wario = "pdfGalery" + NumberListOfProductPdfs
    console.log(wario)
    
    const bubu = document.getElementById(wario)
    console.log(bubu)
    titlePdfProduct.appendChild(pdfProductFilename);

    bubu.appendChild(titlePdfProduct);

    const miranda = createPDFImage(
      "./assets/documents/Pdf.png",
      danek,
      "pngPdf clickPdfClass2"
    );
    bubu.appendChild(miranda);

  })
  return cardProduct;
}


// tworze zdjecie glowne do produktu

function createProductImage(src, className) {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.className = className;

  return img;
}

// funkcja otwierajaca pelny opis produktu
export function fullProductOpen() {

  const productClickhandlers = document.querySelectorAll(".clickProduct");
  console.log(tabAllImages)
  console.log(productClickhandlers)

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
      const dawid = document.createElement("div");

      dawid.appendChild(imageProduct2)
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
      const kamil = document.createElement("div");
      kamil.id = "probaMat"
      kamil.appendChild(prevProductPhoto);
      kamil.appendChild(dawid);

      kamil.appendChild(nextProductPhoto);
      productNameHandler.appendChild(backToMainProduct);
      productNameHandler.appendChild(kamil);

      backToMainProduct.addEventListener("click", () => {
        closeFullProduct()
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
  const destroyPhotoProduct = document.getElementById("probaMat")
  destroyPhotoProduct.remove();

  // const destroyButtonPrev = document.getElementById("prevProductPhoto")
  // destroyButtonPrev.remove();

  // const destroyButtonNext = document.getElementById("nextProductPhoto")
  // destroyButtonNext.remove();

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
  menu.classList.toggle("hidden");
  company.classList.toggle("hidden");

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
//------------------- FILMY ----------------


export function createVideoCard(id, className, { idVideo, title, filename, poster }) {
 // console.log(videos.id)
  console.log(idVideo)

  const cardVideo = document.createElement("div")

  const cardVideoFull = document.createElement("div")
  cardVideoFull.id = filename

  const cardVideoTitle = document.createElement("div")
  cardVideoTitle.innerHTML = title;

  const cardVideoFilename = document.createElement("div")
  cardVideoFilename.innerHTML = filename;

  cardVideoFilename.className = "hidden"

  const cardVideoPosterImg = document.createElement("img")
  cardVideoPosterImg.className = "pngPdf clickPoster"

  const posterImgSrc = `./assets/posters/${poster}`
 
  cardVideoPosterImg.src = posterImgSrc

  cardVideo.appendChild(cardVideoPosterImg)
  cardVideoFull.appendChild(cardVideoTitle)
  cardVideoPosterImg.appendChild(cardVideoFilename)
  //cardVideoPoster.appendChild(cardVideoFilename)

return cardVideo
}
export function videoOpen() {

  const videoClickhandlers = document.querySelectorAll(".clickPoster");
  console.log(videoClickhandlers)
  
  videoClickhandlers.forEach((e) => {

   // const productName = e.lastChild.innerHTML;

    //const filepath = `${DOCUMENTS_FOLER}${filename}`;

    //pobiera nazwe produktu z diva ukrytego pod elementem klikanym i tworzy karte video

    e.addEventListener("click", () => {

    

      console.log("gugu")

    });
  })
}