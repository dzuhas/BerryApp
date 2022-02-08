import { toggleHeadHidden } from "./view-handler.js";
import { logo } from "../app.js";

console.log(logo)
const menu = document.getElementById("menu")
const company = document.getElementById("company")

//------------------------------------------ PRODUKT -------------------------------------------------

var tabAllImages = [];
var titlePdfProduct

const mainPageProduct = document.getElementById("produkty")
const fullPageProduct = document.getElementById("productOpen")
var productNameHandler
var cardProductPdfs

export function createKontaktCard(id, className, { position, name, phone, email, www }) {
  const cardKontakt = document.createElement("div");

  cardKontakt.id = id;
  cardKontakt.className = className;

  const cardKontaktPosition = document.createElement("div");
  cardKontaktPosition.innerHTML = position;
  cardKontaktPosition.className = "cardKontaktPosition fontKontakt"

  const cardKontaktName = document.createElement("div");
  cardKontaktName.innerHTML = name;
  cardKontaktName.className = "cardKontaktName fontKontakt"

  const cardKontaktPhone = document.createElement("div");
  cardKontaktPhone.innerHTML = phone;
  cardKontaktPhone.className = "cardKontaktPhone fontKontakt"

  const cardKontaktEmail = document.createElement("div");
  cardKontaktEmail.innerHTML = email;
  cardKontaktEmail.className = "cardKontaktEmail fontKontakt"

  // const cardKontaktWww = document.createElement("div");
  // cardKontaktWww.innerHTML = www;
  // cardKontaktWww.className = "cardKontaktWww fontKontakt"

  cardKontakt.appendChild(cardKontaktPosition);
  cardKontakt.appendChild(cardKontaktName);
  cardKontakt.appendChild(cardKontaktPhone);
  cardKontakt.appendChild(cardKontaktEmail);
  // cardKontakt.appendChild(cardKontaktWww);

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

  const NumberListOfProductPdfs = idProduct - 1
  const ListOfProductPdfs = productPdfs[NumberListOfProductPdfs]
  const NumeOfProductPdf = ListOfProductPdfs.title

  cardProduct.id = id;
  cardProduct.className = className;

  const fullId = "full" + id
  cardProductFull.id = fullId
  cardProductFull.className = "hidden"

  const fullProduktNameHandler = document.createElement("div");
  fullProduktNameHandler.className = "hidden"
  fullProduktNameHandler.innerHTML = fullId;

  const fullProduktNameHandler2 = document.createElement("div");
  fullProduktNameHandler2.className = "hidden"
  fullProduktNameHandler2.innerHTML = fullId;

  const cardProductTitle = document.createElement("div");
  cardProductTitle.className = "productTitle clickProduct"
  cardProductTitle.innerHTML = title;

  tabAllImages.push(images)
  //createImagesList(images)
  const firstImage = images[0];
  //cardProductMainImage.innerHTML = images[0];

  const image = createProductImage(

    `./assets/products/${firstImage}`,
    "pngProduct clickProduct"
  );
  const fullProductTexts = document.createElement("div");
  fullProductTexts.className = "fullProductTexts"

  const cardProductDescription = document.createElement("div");
  cardProductDescription.innerHTML = description;
  cardProductDescription.classList = "cardProductDescription";

  cardProductPdfs = document.createElement("div");
  cardProductPdfs.classList = "cardProductPdfs"
  cardProductPdfs.id = "pdfGalery" + NumberListOfProductPdfs;

  const cardProductTitleFull = document.createElement("div");
  cardProductTitleFull.className = "productTitleFull"
  cardProductTitleFull.innerHTML = title;

  cardProduct.appendChild(image);
  image.appendChild(fullProduktNameHandler);

  cardProduct.appendChild(cardProductTitle);
  cardProductTitle.appendChild(fullProduktNameHandler2);

  fullPageProduct.appendChild(cardProductFull);
  cardProductFull.appendChild(fullProductTexts);

  fullProductTexts.appendChild(cardProductTitleFull);
  fullProductTexts.appendChild(cardProductDescription);
  fullProductTexts.appendChild(cardProductPdfs);


  productPdfs.forEach((element, i) => {

    const titlePdfFullProduct = element.title

    const titlePdfProduct = document.createElement("div")
    titlePdfProduct.className = "productPdfTitle clickPdfClass2"
    titlePdfProduct.innerHTML = titlePdfFullProduct

    const filenamePdf = element.filename
    const pdfProductFilename = document.createElement("div");
    pdfProductFilename.innerHTML = filenamePdf;
    pdfProductFilename.className = "newDivPdfFile";

    const handlerPdfGaleryName = "pdfGalery" + NumberListOfProductPdfs

    const handlerPdfGaleryNameDiv = document.getElementById(handlerPdfGaleryName)
    titlePdfProduct.appendChild(pdfProductFilename);
    const pdfWithTitle = document.createElement("div");
    pdfWithTitle.className = "pdfWithTitle"

    handlerPdfGaleryNameDiv.appendChild(pdfWithTitle);

    const PdfProductImage = createPDFImage(
      "./assets/documents/Pdf.png",
      filenamePdf,
      "pngPdfProduct clickPdfClass2"
    );
    pdfWithTitle.appendChild(PdfProductImage);
    pdfWithTitle.appendChild(titlePdfProduct);

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


  productClickhandlers.forEach((e) => {

    const productName = e.lastChild.innerHTML;

    //const filepath = `${DOCUMENTS_FOLER}${filename}`;

    //pobiera nazwe produktu z diva ukrytego pod elementem klikanym i tworzy karte full produkt

    e.addEventListener("click", () => {

      mainPageProduct.classList.toggle("hidden")

      productNameHandler = document.getElementById(productName)

      //zmiana klass z ukrytych na widzialne i odwrotnie
      changeClassOpenProduct(productNameHandler)
      productNameHandler.classList = "fullProductBox"

      //pobranie ostatniej cyfry z nazwy produktu, ktora jest to numerem zestawu zdjec z tablicy wszystkich zdjec pobranych z configu
      const lastProductNameNumber = productName.slice(-1);

      //pobranie zdjec do zmiennej 
      const prouctImages = tabAllImages[lastProductNameNumber]
      const productImagesLength = prouctImages.length

      //tworzenie pierwszego wyswietlonego zdjecia
      const imageProduct2 = createOneOfImages(`./assets/products/${prouctImages[0]}`, "fullProductPhotos");
      imageProduct2.id = "idFirstProductPhoto"
      const imgContainer = document.createElement("div");
      imgContainer.classList = "imgContainer"

      imgContainer.appendChild(imageProduct2)
   

      const prevProductPhoto = document.createElement("img")
      prevProductPhoto.src = `./assets/images/Path 189.png`;
      prevProductPhoto.id = "prevProductPhoto";

      const nextProductPhoto = document.createElement("img")
      nextProductPhoto.src = `./assets/images/Path 190.png`;
      nextProductPhoto.id = "nextProductPhoto";

      //button wróć

      // const backToMainProduct = document.createElement("button")
      // backToMainProduct.innerHTML = "Wróć";
      // backToMainProduct.id = "backToMainProduct";

      const backToMainProduct = document.createElement("img");
      backToMainProduct.setAttribute("src", `./assets/images/Group 102.png`);
      backToMainProduct.id = "backToMainProduct";

      const backToMainProductDiv = document.createElement("div")
      backToMainProductDiv.classList = "backToMainProductDiv"


      const sliderConteiner = document.createElement("div");
      sliderConteiner.id = "sliderConteiner"
      sliderConteiner.appendChild(imgContainer);
      
      
      imgContainer.appendChild(prevProductPhoto);
      imgContainer.appendChild(imageProduct2)
      imgContainer.appendChild(nextProductPhoto);


      productNameHandler.appendChild(sliderConteiner);

      productNameHandler.appendChild(backToMainProductDiv);
      backToMainProductDiv.appendChild(backToMainProduct);



      backToMainProduct.addEventListener("click", () => {
        closeFullProduct()
      })

      // buttony next, priv i zmiana zdjecia
      const firstProductPhoto = document.getElementById("idFirstProductPhoto")

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

      //---------------------------------------------Swipe------------------------------------------------------------

      var square = document.getElementById("sliderConteiner");
      var manager = new Hammer.Manager(square);

      var Swipe = new Hammer.Swipe();

      manager.add(Swipe);

      // Dodawanie swipa w lewo i prawo
      manager.on('swipeleft', function (e) {
        changeImageNext()

      });

      manager.on('swiperight', function (e) {
        changeImagePrev()

      });

    });
  });
}


function closeFullProduct() {
  const destroyPhotoProduct = document.getElementById("sliderConteiner")
  destroyPhotoProduct.remove();

  // const destroyButtonPrev = document.getElementById("prevProductPhoto")
  // destroyButtonPrev.remove();

  // const destroyButtonNext = document.getElementById("nextProductPhoto")
  // destroyButtonNext.remove();

  const destroyButtonprev = document.getElementById("backToMainProduct")
  destroyButtonprev.remove();
  changeClassOpenProduct(productNameHandler)

  //fullPageProduct.classList.toggle("hidden");
  mainPageProduct.classList.toggle("hidden")

  //productNameHandler.classList.toggle("hidden");

}

// zmiana klasy z hidden na widzialna w elemntach produkt i pelna wersja produkt

function changeClassOpenProduct(productNameHandler) {

  productNameHandler.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  company.classList.toggle("hidden");

}
function createLogo(src, targetLogo, classname) {
  const logoDiv = document.getElementById(targetLogo);
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.className = classname;
  logoDiv.appendChild(img);

  return img;
}

//---------------------------------------- PDF---------------------------------------------

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



//----------------------------------------------- FILMY ----------------------------------------------

const fullPageVideo = document.getElementById("videoOpen")
const cardVideo = document.createElement("div")
cardVideo.classList = "videosContainer";


// function getVideoImage(path, secs, callback) {
//   var me = this, video = document.createElement('video');
//   video.onloadedmetadata = function() {
//     if ('function' === typeof secs) {
//       secs = secs(this.duration);
//     }
//     this.currentTime = Math.min(Math.max(0, (secs < 0 ? this.duration : 0) + secs), this.duration);
//   };
//   video.onseeked = function(e) {
//     var canvas = document.createElement('canvas');
//     canvas.height = video.videoHeight;
//     canvas.width = video.videoWidth;
//     var ctx = canvas.getContext('2d');
//     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
//     var img = new Image();
//     img.src = canvas.toDataURL();
//     callback.call(me, img, this.currentTime, e);
//   };
//   video.onerror = function(e) {
//     callback.call(me, undefined, undefined, e);
//   };
//   video.src = path;
// }

// async function extractFramesFromVideo(videoUrl, fps=25) {
//   return new Promise(async (resolve) => {
// console.log("torun")
//     // fully download it first (no buffering):
//     let videoBlob = await fetch(videoUrl).then(r => r.blob());
//     let videoObjectUrl = URL.createObjectURL(videoBlob);
//     let video = document.createElement("video");

//     let seekResolve;
//     video.addEventListener('seeked', async function() {
//       if(seekResolve) seekResolve();
//     });

//     video.src = videoObjectUrl;

//     // workaround chromium metadata bug (https://stackoverflow.com/q/38062864/993683)
//     while((video.duration === Infinity || isNaN(video.duration)) && video.readyState < 2) {
//       await new Promise(r => setTimeout(r, 1000));
//       video.currentTime = 10000000*Math.random();
//     }
//     let duration = video.duration;

//     let canvas = document.createElement('canvas');
//     let context = canvas.getContext('2d');
//     let [w, h] = [video.videoWidth, video.videoHeight]
//     canvas.width =  w;
//     canvas.height = h;

//     let frames = [];
//     let interval = 1 / fps;
//     let currentTime = 0;

//     while(currentTime < duration) {
//       video.currentTime = currentTime;
//       await new Promise(r => seekResolve=r);

//       context.drawImage(video, 0, 0, w, h);
//       let base64ImageData = canvas.toDataURL();
//       frames.push(base64ImageData);

//       currentTime += interval;
//     }
//     resolve(frames);
//   });
// }
export function createVideoLogo(src, targetLogo, classname) {
  const logoDiv = document.getElementById(targetLogo);
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.className = classname;
  logoDiv.appendChild(img);

  return img;
}


export function createVideoCard(id, className, { idVideo, title, filename, poster }, logo, listOfVideosLength) {
  //const humor = document.createElement("ol")
  //getVideoImage(`./assets/videos/${filename}`, 1000, callback)
  const cardVideoFull = document.createElement("div")
  cardVideoFull.id = idVideo
  cardVideoFull.value = idVideo
  cardVideoFull.classList = "hidden cardVideoFull"

  const videoFull = document.createElement("video")
  videoFull.src = `./assets/videos/${filename}`
  videoFull.setAttribute("controls", "controls")
  videoFull.setAttribute("preload", "auto")
  videoFull.classList = "videoFull"


  const videoFullDiv = document.createElement("div")
  videoFullDiv.classList = "videoFullDiv"

  const backToMainVideosDiv = document.createElement("div")
  backToMainVideosDiv.classList = "backToMainVideosDiv"

  const arrowTextBackDiv = document.createElement("div")
  arrowTextBackDiv.classList = "arrowTextBackDiv"

  const backToMainVideos = document.createElement("img")
  backToMainVideos.src = "./assets/images/Path 191.svg"
  backToMainVideos.id = "backToMainVideos";

  const backToMainVideosText = document.createElement("div")
  backToMainVideosText.innerHTML = "Poprzednia strona";
  backToMainVideosText.classList = "backToMainVideosText"

  backToMainVideosDiv.addEventListener("click", () => {
    cardVideoFull.classList.toggle("hidden");
    toggleHeadHidden()
    cardVideo.classList.toggle("hidden")
    stopVideo()
  })

  function stopVideo() {
    videoFull.pause();
    videoFull.currentTime = 0;
  }

  const cardVideoTitleDiv = document.createElement("div")
  cardVideoTitleDiv.classList = "cardVideoTitleDiv"

  const cardVideoTitle = document.createElement("div")
  cardVideoTitle.innerHTML = title;
  cardVideoTitle.classList = "cardVideoTitle"

  const cardVideoJustSignFilmy = document.createElement("div")
  cardVideoJustSignFilmy.innerHTML = "FILMY";
  cardVideoJustSignFilmy.classList = "cardVideoJustSignFilmy"

  const cardVideoFilename = document.createElement("div")
  cardVideoFilename.innerHTML = idVideo;
  cardVideoFilename.classList = "cardVideoFilename"





  const cardVideoLogo = document.createElement("img")
  cardVideoLogo.id = "cardVideoLogo"
  cardVideoLogo.src = `./assets/logo/${logo}`


  cardVideoFilename.className = "hidden"

  const cardVideoPosterImg = document.createElement("img")
  cardVideoPosterImg.className = "videoItem clickPoster"

  const posterImgSrc = `./assets/posters/${poster}`

  cardVideoPosterImg.src = posterImgSrc

  cardVideo.appendChild(cardVideoPosterImg)
  fullPageVideo.appendChild(cardVideoFull)

  backToMainVideosDiv.appendChild(arrowTextBackDiv)
  arrowTextBackDiv.appendChild(backToMainVideos)
  arrowTextBackDiv.appendChild(backToMainVideosText)
  backToMainVideosDiv.appendChild(cardVideoLogo)

  cardVideoTitleDiv.appendChild(cardVideoJustSignFilmy)
  cardVideoTitleDiv.appendChild(cardVideoTitle)



  cardVideoFull.appendChild(backToMainVideosDiv)
  cardVideoFull.appendChild(cardVideoTitleDiv)
  cardVideoFull.appendChild(videoFullDiv)
  videoFullDiv.appendChild(videoFull)

  if (listOfVideosLength > 1) {
   

    console.log("Length > 1")
    const videoFullPrev = document.createElement("img")
    videoFullPrev.classList = "videoFullPrev"
    videoFullPrev.src = `./assets/images/Path 189.png`;


    const videoFullNext = document.createElement("img")
    videoFullNext.classList = "videoFullNext"
    videoFullNext.src = `./assets/images/Path 190.png`;

    //videoFullDiv.appendChild(videoFullPrev)
    videoFullDiv.appendChild(videoFullNext)
    videoFullDiv.insertBefore(videoFullPrev, videoFull)
    videoFullPrev.addEventListener("click", () => {

      const collection = document.getElementsByClassName("cardVideoFull").length
      const curentVideo = document.getElementById(idVideo)

      if (idVideo == 1) {
        curentVideo.classList.toggle("hidden");

        const prevVideo = document.getElementById(collection)
        prevVideo.classList.toggle("hidden");
      }
      else {
        curentVideo.classList.toggle("hidden");

        const prevVideo = document.getElementById(idVideo - 1)
        prevVideo.classList.toggle("hidden");

        console.log(collection)

        console.log("prev")
      }
      //var closestElement = div.closest(".cardVideoFull");

      //console.log(closestElement)
    })


    videoFullNext.addEventListener("click", () => {
      const collection = document.getElementsByClassName("cardVideoFull").length
      const curentVideo = document.getElementById(idVideo)

      if (idVideo == collection) {

        curentVideo.classList.toggle("hidden");

        const nextVideo = document.getElementById("1")
        nextVideo.classList.toggle("hidden");
      }
      else {
        curentVideo.classList.toggle("hidden");

        const prevVideo = document.getElementById(idVideo + 1)
        prevVideo.classList.toggle("hidden");

        console.log("next")
      }
    })
  }



  //createLogo("./assets/logo/"+logo, "cardVideoLogo", "logoPdf")

  cardVideoPosterImg.appendChild(cardVideoFilename)
  //cardVideoPoster.appendChild(cardVideoFilename)

  return cardVideo
}


export function videoOpen() {

  const videoClickhandlers = document.querySelectorAll(".clickPoster");

  videoClickhandlers.forEach((e) => {

    const videoName = e.lastChild.innerHTML;


    //pobiera nazwe produktu z diva ukrytego pod elementem klikanym i tworzy karte video

    e.addEventListener("click", () => {

      const videoNameHandler = document.getElementById(videoName)

      videoNameHandler.classList.toggle("hidden")

      toggleHeadHidden()
      cardVideo.classList.toggle("hidden")

    });
  })
}


//------ Poster --------

const videoToPoster = document.getElementById("videoOpen")


// videoToPoster.forEach(function() {
//   console.log("number");
// });