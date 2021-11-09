var newBox
var namePdf
var numPage
var numPages
//var newDivPdfFile
var nameFilePdf
function andrzej() {

  let pdfListener = document.querySelectorAll(".clickPdfClass")
  console.log(pdfListener)

  pdfListener.forEach(function (item, index, array) {
    item.addEventListener("click", e => {

      console.log(item)
      let danek = item.lastChild;
      console.log(danek)

      let danekName = danek.innerHTML
      console.log(danekName)
      //console.log('src\assets\documents\')

      let sciezka = `assets/documents/`;
      console.log(sciezka)


      let kotek = sciezka.concat(danekName)
      console.log(kotek)

      console.log(pdfjsLib)
      var numPages
      //var kamil = pdfjsLib.getDocument(kotek)
      //console.log(kamil)
      let loadingTask = pdfjsLib.getDocument(kotek),
        pdfDoc = null,
        //canvas = document.querySelector('#cnv'),
        //ctx = canvas.getContext('2d'),
        //scale = 1.5,
        numPage = 1;

      console.log(numPage)

      const ChangePage = () => {
        loadingTask.promise.then(function (pdf) {
          // you can now use *pdf* here
          console.log("ulala")
          numPages = pdf.numPages;
          console.log(numPages)
          //const numPage = pdf.numPage;
          console.log(numPage)

          changePdfClass()
          //var pageNumber = 1;
          pdf.getPage(numPage).then(function (page) {
            console.log('Page loaded');
            console.log(page);

            changePdfClass()

            var scale = 1.5;
            var viewport = page.getViewport({ scale: scale });

            // Prepare canvas using PDF page dimensions
            var canvas = document.getElementById('cnv');
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page into canvas context
            var renderContext = {
              canvasContext: context,
              viewport: viewport
            };
            var renderTask = page.render(renderContext);
            renderTask.promise.then(function () {
              console.log('Page rendered');
            });
            document.querySelector('#npages').innerHTML = numPage;

          });
        }, function (reason) {
          // PDF loading error
          console.error(reason);
        })
      };
      ChangePage()
      document.getElementById('next').addEventListener('click', () => {
        console.log("1")
        console.log(numPage)
        console.log(numPages)


        const isValidPage = numPage < numPages;
        if (isValidPage) {
          numPage += 1;
          ChangePage();
        }
      });

      document.getElementById('prev').addEventListener('click', () => {
        console.log("2")
        console.log(numPage)
        console.log(numPages)

        const isValidPage = numPage - 1 > 0;
        if (isValidPage) {
          numPage -= 1;
          ChangePage();
        }
      });
    })
  })
}

function addDiv() {
  console.log(nameFilePdf)
  let newDivPdfFile = document.createElement("div");
  newDivPdfFile.innerHTML = nameFilePdf;

  let clickPdf = document.getElementsByClassName('pngPdf clickPdfClass')
  console.log(clickPdf)
  Array.from(clickPdf).forEach(function (hun, index) {
    const juziu = hun.appendChild(newDivPdfFile);
    console.log(hun)

    newDivPdfFile.className = 'newDivPdfFile'

  });
}
// sprobowac wyciagnac funkcje  od  let pdfListener = document.querySelectorAll(".clickPdfClass") a potem zmienna kamil
function addElement() {
  //var nameFilePdf
  // tworze diva
  let Box = document.createElement("div");
  //let NewDivGetPdf = document.createElement("div")
  // umieszczam go w DOM
  document.getElementById('pdf').appendChild(Box);

  //nadaje mu id
  Box.id = newBox;
  Box.className = 'newBoxPdf';

  //tworzę divy z nazwa Pdfa i nazwa pliku z Pdfem
  let newDivPdf = document.createElement("div");

  //let newDivPdfFile = document.createElement("div");

  //w stworzonych divach umieszczam wartosci wyjete z petli
  newDivPdf.innerHTML = namePdf;

  //newDivPdfFile.innerHTML = nameFilePdf;
  //console.log(nameFilePdf)
  console.log(namePdf)
  console.log(newDivPdf)

  //tworzenie diva z jpg.png
  var elem = document.createElement("img");
  elem.setAttribute("src", "./assets/documents/Pdf.png");
  elem.className = 'pngPdf clickPdfClass';

  document.getElementById(newBox).appendChild(elem);

  // tak stworzone divy z zawartoscia umieszczam w elemencie newbox w divie pdf
  document.getElementById(newBox).appendChild(newDivPdf);
  newDivPdf.className = 'nSens clickPdfClass';
}


function changePdfClass() {
  let classPdf = document.getElementById('pdfPupop');

  // removing class
  classPdf.classList.remove('pupPdf');
  classPdf.classList.add('pupPdfOpen');

  let classPdf2 = document.getElementById('pdf');

  classPdf2.classList.remove('pdfMain');
  classPdf2.classList.add('pdfMainHidden');

}
function closePdf() {
  console.log(numPages)
  let classPdf = document.getElementById('pdfPupop');

  // removing class
  classPdf.classList.remove('pupPdfOpen');
  classPdf.classList.add('pupPdf');

  let classPdf2 = document.getElementById('pdf');

  classPdf2.classList.remove('pdfMainHidden');
  classPdf2.classList.add('pdfMain');

}
//Downoload data from config.json and put to "company name" place
const asyncGetCall66 = async () => {
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

      namePdf = item.title;
      nameFilePdf = item.filename;

      //do nazwy newbox dodaje indeks
      newBox = "newbox" + index
      //let getPdfNameDiv = "getPdfNameDiv" + index

      //funkcja tworząca odpowiednie divy

      addElement(namePdf, newBox)


      let newDivPdfFile = document.createElement("div");
      addDiv(nameFilePdf)

      newDivPdfFile.innerHTML = nameFilePdf;
      let clickPdf2 = document.getElementsByClassName('nSens clickPdfClass')
      console.log(clickPdf2)
      Array.from(clickPdf2).forEach(function (item, index) {
        let zenon = item.appendChild(newDivPdfFile);

        newDivPdfFile.className = 'newDivPdfFile'

      });

    })
    andrzej()

    // enter you logic when the fetch is successful

  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)
    console.log(error)
  }
}


asyncGetCall66()


document.getElementById("buttonPdf").addEventListener("click", e => {
  numPages = 1
  numPage = 1
  closePdf()
})



// document.getElementById("buttonPdf").addEventListener("click", e => {
//   const killAllPdf = document.getElementById(nameFilePdf);
//   while (killAllPdf.firstChild) {
//     killAllPdf.removeChild(killAllPdf.firstChild);
//   }
//   var killPdf = document.getElementById(nameFilePdf);
//   killPdf.remove()
// })
// function handleClick(evt) {
//       console.log("kups2")


//   // if a click happens somewhere outside the dropdown, close it.
//   if (!evt.target.closest(".clickPdfClass")) {
//     console.log("kups")
//   }
// }
