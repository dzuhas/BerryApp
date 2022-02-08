import { createPDFCard, createKontaktCard, createProductCard, createVideoCard } from "./element-builder.js";
import { openPDF, openPDF2 } from "./pdf-handler.js";
import { list, showPDFView, listKontakt, listProduct, toggleProductHidden, listVideos } from "./view-handler.js";

//----------------------------PDF----------------------------------------

const DOCUMENTS_FOLDER = "assets/documents/";

export function createListPdf(elements) {
  elements.forEach((element, i) => {
    const card = createPDFCard(`nexboxPdf${i}`, "newBoxPdf", element);
    list.appendChild(card);
  });
}



export function setListListeners() {
  const pdfImages = document.querySelectorAll(".clickPdfClass");

  pdfImages.forEach((image) => {
    const filename = image.lastChild.innerHTML;
    const filepath = `${DOCUMENTS_FOLDER}${filename}`;
    const parentDiv = image.parentElement

    parentDiv.addEventListener('pointerdown', (event) => {
      parentDiv.classList.add('addShadow')
    });

    

    image.addEventListener("click", () => {
     
      showPDFView();
      openPDF(filepath,filename);
     // parentDiv.classList.remove('addShadow')
    
    });

    parentDiv.addEventListener('pointerup', (event) => {
      parentDiv.classList.remove('addShadow')

    });
  });
}

//-------------------------- Kontakt --------------------------------

export function createKontaktList(elements) {
  elements.forEach((element, i) => {
    const cardKontakt = createKontaktCard(`boxKontakt${i}`, "newBoxKontakt", element);

    listKontakt.appendChild(cardKontakt);
  });
}

//-------------------------- Product --------------------------------

export function createProductList(elements) {
  elements.forEach((element, i) => {
    const cardProduct = createProductCard(`boxProduct${i}`, "newBoxProduct", element);
    listProduct.appendChild(cardProduct);
  });
}

export function setListListenersPdfProduct() {
  const pdfProductHandlerName = document.querySelectorAll(".clickPdfClass2");
  pdfProductHandlerName.forEach((image2) => {

    const filename = image2.lastChild.innerHTML;
    const filepath = `assets/products/${filename}`;

    image2.addEventListener("click", () => {
      toggleProductHidden()
      openPDF2(filepath);
    });
  });
}

//------------------------- Filmy ---------------------------------------

export function createVideosList(elements, logo,listOfVideosLength) {
  console.log(listOfVideosLength)
  elements.forEach((element, i) => {
    const cardVideo = createVideoCard(`boxVideos${i}`, "newBoxPdf", element,logo,listOfVideosLength);
    listVideos.appendChild(cardVideo);
  });
}

//------------------------Poster----------------------------


function getVideoImage(path, secs, callback) {
  var me = this, video = document.createElement('video');
  video.onloadedmetadata = function() {
    if ('function' === typeof secs) {
      secs = secs(this.duration);
    }
    this.currentTime = Math.min(Math.max(0, (secs < 0 ? this.duration : 0) + secs), this.duration);
  };
  video.onseeked = function(e) {
    var canvas = document.createElement('canvas');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    var img = new Image();
    img.src = canvas.toDataURL();
    callback.call(me, img, this.currentTime, e);
    ctx.restore();

  };
  video.onerror = function(e) {
    callback.call(me, undefined, undefined, e);
  };
  video.src = path;

}

async function showImageAt(secs, video) {
  var duration;
  console.log(video)
  getVideoImage(
    `./assets/videos/${video}`,
    function(totalTime) {
      duration = totalTime;
      return secs;
    },
   function(img, secs, event) {
      if (event.type == 'seeked') {
        var li = document.createElement('li');
        li.innerHTML += '<b>Frame at second ' + secs + ':</b><br />';
        li.appendChild(img);
        document.getElementById(video).appendChild(li);
        if (duration >= ++secs) {
          showImageAt(secs);
        };
      }
    }
  );
}


// export function createPosters(elements){
//   elements.forEach((element, i) => {

//     const filenameVideo = element.filename
//     console.log(filenameVideo)
//     await showImageAt(3, filenameVideo);
//   });
// }