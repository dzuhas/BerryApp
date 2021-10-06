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
        // enter you logic when the fetch is successful
         console.log(company);
       } catch(error) {
    // enter your logic for when there is an error (ex. error toast)
          console.log(error)
         } 
    }


  asyncGetCall()