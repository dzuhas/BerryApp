function addElement() {

  // tworze diva
  Box = document.createElement("div");
  // umieszczam go w DOM
  document.getElementById('pdf').appendChild(Box);
  //nadaje mu id
  Box.id = newBox;
  Box.className = 'newBoxPdf';

  //tworzę divy z nazwa Pdfa i nazwa pliku z Pdfem
  newDivPdf = document.createElement("div");
  newDivPdfFile = document.createElement("div");
  //w stworzonych divach umieszczam wartosci wyjete z petli
  newDivPdf.innerHTML = namePdf;
  newDivPdfFile.innerHTML = nameFilePdf;


  // tak stworzone divy z zawartoscia umieszczam w elemencie newbox w divie pdf
  document.getElementById(newBox).appendChild(newDivPdf);
  document.getElementById(newBox).appendChild(newDivPdfFile);
}

//Downoload data from config.json and put to "company name" place
const asyncGetCall = async () => {
  try {
    //Pobieranie danych z pliku config
    const response = await fetch('config.json');
    const data = await response.json();
    //pobranie i wypisanie nazwy firmy
    const company = data.settings.company
    document.getElementById("company").innerHTML = company;
    //wyciagniecie tablicy z pdfami
    const pdfList = data.assets.pdfs
    //petla wyciagająca dane z listy pdfów
    const pdflistObjects = pdfList.forEach(function (item, index, array) {
      const namePdf = item.title;
      const nameFilePdf = item.filename;
      //do nazwy newbox dodaje indeks
      let newBox = "newbox" + index

      //funkcja tworząca odpowiednie divy
      function addElement() {

        // tworze diva
        Box = document.createElement("div");

        // umieszczam go w DOM
        document.getElementById('pdf').appendChild(Box);

        //nadaje mu id
        Box.id = newBox;
        Box.className = 'newBoxPdf';

        //tworzę divy z nazwa Pdfa i nazwa pliku z Pdfem
        newDivPdf = document.createElement("div");
        
        newDivPdfFile = document.createElement("div");

        //w stworzonych divach umieszczam wartosci wyjete z petli
        newDivPdf.innerHTML = namePdf;
        newDivPdfFile.innerHTML = nameFilePdf;
        console.log(nameFilePdf)

        //tworzenie diva z jpg.png
        var elem = document.createElement("img");
        elem.setAttribute("src", "./assets/documents/Pdf.png");
        elem.className = 'pngPdf';
        document.getElementById(newBox).appendChild(elem);

        // tak stworzone divy z zawartoscia umieszczam w elemencie newbox w divie pdf
        document.getElementById(newBox).appendChild(newDivPdf);
        const clickPdf = document.getElementById(newBox).appendChild(newDivPdfFile);
        console.log(clickPdf)


      }
      addElement()
    })
    const videoList = data.assets.videos

    //petla wyciagająca dane z listy video
    videoList.forEach(function (item, index, array) {
      const nameVideo = item.title;
      const nameFileVideos = item.filename;
      const posterVideos = item.poster;
      let newBoxVideo = "newboxVideo" + index

      function addElement2() {
        Box = document.createElement("div");
        // umieszczam go w DOM
        document.getElementById('filmy').appendChild(Box);
        Box.id = newBoxVideo;
        Box.className = 'newBoxVideo';

        newDivVideo = document.createElement("div");
        newDivVideoFile = document.createElement("div");
        newDivPoster = document.createElement("div");

        newDivVideo.innerHTML = nameVideo;
        newDivVideoFile.innerHTML = nameFileVideos;
        newDivPoster.innerHTML = posterVideos;

        // add the newly created element and it's content into the DOM - do sprawdzenia

        document.getElementById(newBoxVideo).appendChild(newDivVideo);
        document.getElementById(newBoxVideo).appendChild(newDivVideoFile);
        document.getElementById(newBoxVideo).appendChild(newDivPoster);



      }
      addElement2()
    })

    let pdfListener = document.querySelectorAll(".newBoxPdf")
    console.log(pdfListener)

    pdfListener.forEach(function(item, index, array){
      item.addEventListener("click", e => {
        console.log(e.target.id)
        //var idPdfFile = document.getElementsByClassName(newBoxPdf)[0].id;
        //console.log(nameFilePdf)
      })
    })
    
    // enter you logic when the fetch is successful

  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)
    console.log(error)
  }
}


asyncGetCall()

document.getElementById("buttonPdf").addEventListener("click", e => {
  const killAllPdf = document.getElementById(nameFilePdf);
  while (killAllPdf.firstChild) {
    killAllPdf.removeChild(killAllPdf.firstChild);
  }
  var killPdf = document.getElementById(nameFilePdf);
  killPdf.remove()
})








