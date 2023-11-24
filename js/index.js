function index() {
    var currentDateElement = document.getElementById("currentDate");
    const currentDate = new Date();
    var formattedDate = currentDate.toISOString().slice(0, 4);
    currentDateElement.textContent = "© " + formattedDate + " Optimum Star.";
}

function fetchin() {
    fetch('../json/services.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            var htmlstr = '';
            var servicesbody = document.getElementById("servicesbody");
            for(let i = 0; i < data.services.length; i++){
                
                
                
                htmlstr += '    <div class="card mb-3" style="max-width: 100%; height: 40vh;">'+
                '<div class="row g-0">'+
                  '<div class="col-md-4">'
                    '<img src="..." class="img-fluid rounded-start" alt="...">'+
                  '</div>'+
                  '<div class="col-md-8">'+
                    '<div class="card-body">'+
                      '<h5 class="card-title">Card title</h5>'+
                      '<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>'+
                      '<p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>';
               
            }
            servicesbody.innerHTML = htmlstr; 
        })
}


index();
//fetchin();