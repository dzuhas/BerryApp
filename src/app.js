//const config = fetch('config.json')
//  .then(response => response.json())
 // .then(data => console.log(data.settings.company))
  //.then(data => document.getElementById("company").innerHTML = data.settings.company);
  
  //Downoload data from config.json and put to "company name" place
  const asyncGetCall = async () => {
    try {
          //Pobieranie danych z pliku config
          const response = await fetch('config.json');
          const data = await response.json();
          //pobranie i wypisanie nazwy firmy
          const company  = data.settings.company
          document.getElementById("company").innerHTML = company;
          //wyciagniecie tablicy z pdfami
          const pdfList = data.assets.pdfs
          //petla wyciagająca dane z listy pdfów
          const pdflistObjects = pdfList.forEach(function(item, index, array)   {
          const namePdf = item.title;
          const nameFilePdf = item.filename;
          function addElement() {
            // tworzy nowy element div
            // i daje jego zawartość
            
            newDivPdf = document.createElement("div");
            newDivPdfFile = document.createElement("div");

            newDivPdf.innerHTML = namePdf;
            newDivPdfFile.innerHTML = nameFilePdf;

            // add the newly created element and it's content into the DOM - do sprawdzenia
            const my_div = document.getElementById("pdf");
            my_div.parentNode.insertBefore(newDivPdf, my_div);
            my_div.parentNode.insertBefore(newDivPdfFile, my_div);

          }
          addElement()
          })
          const videoList = data.assets.videos
          //petla wyciagająca dane z listy pdfów
          videoList.forEach(function(item, index, array)   {
          const nameVideo = item.title;
          const nameFileVideos = item.filename;
          const posterVideos = item.poster;
          
          function addElement() {
            // tworzy nowy element div
            // i daje jego zawartość
            
            newDivVideo = document.createElement("div");
            newDivVideoFile = document.createElement("div");
            newDivPoster = document.createElement("div");


            newDivVideo.innerHTML = nameVideo;
            newDivVideoFile.innerHTML = nameFileVideos;
            newDivPoster.innerHTML = posterVideos;

            // add the newly created element and it's content into the DOM - do sprawdzenia
            const my_div = document.getElementById("filmy");
            my_div.parentNode.insertBefore(newDivVideo, my_div);
            my_div.parentNode.insertBefore(newDivVideoFile, my_div);
            my_div.parentNode.insertBefore(newDivPoster, my_div);


          }
          addElement()
          })
       

        // enter you logic when the fetch is successful
         
       } catch(error) {
    // enter your logic for when there is an error (ex. error toast)
          console.log(error)
         } 
    }


  asyncGetCall()