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
      function aurelia() {
        pdf.getPage(numPage).then(function (page) {
          console.log('Page loaded');
          console.log(page);
          console.log(numPage)

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

        })
      };
      aurelia()
    }, function (reason) {
      // PDF loading error
      console.error(reason);
    })
  };