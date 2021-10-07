//const config = fetch('config.json')
//  .then(response => response.json())
 // .then(data => console.log(data.settings.company))
  //.then(data => document.getElementById("company").innerHTML = data.settings.company);
  
  //Downoload data from config.json and put to "company name" place
  const asyncGetCall = async () => {
    try {
        const response = await fetch('config.json');
         const data = await response.json();

         const company  = data.settings.company
         document.getElementById("company").innerHTML = company;

        const pdfList = data.assets.pdfs
        const final = JSON.stringify(pdfList)
        document.getElementById("pdf").innerHTML = pdfList;
        const pdflistObjects = pdfList.forEach(function(item, index, array) {
          const namePdf = item.title;

          function addElement() {
            // tworzy nowy element div
            // i daje jego zawartość
            
            newDiv = document.createElement("div");
            newDiv.innerHTML = "<h1>Hi there and greetings! </h1>" + namePdf;
            console.log("jest");

            // add the newly created element and it's content into the DOM do sprawdzenia
            my_div = document.getElementById("org_div1");
            document.body.insertBefore(newDiv, my_div);
          }
          addElement()
          console.log(item.title, index);
        return item.title;
        })
        document.getElementById("produkty").innerHTML = pdflistObjects;

        // enter you logic when the fetch is successful
         console.log(company);
         console.log(pdfList[0].title);
         console.log(pdflistObjects);
         console.log(final);
         console.log(pdfList.lenght);




       } catch(error) {
    // enter your logic for when there is an error (ex. error toast)
          console.log(error)
         } 
    }


  asyncGetCall()