console.log('this is News Website');

let apiKey = 'pub_956415c6a2fcf86825c843d2d78cdca5e4bb';
// let source='News-Data';

//Grabbing the news container
let newsUpdate = document.getElementById('newsUpdate')
newsUpdate.addEventListener('click', function () {
    console.log('clicked')
})

//creating an AJAX get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsdata.io/api/1/news?country=in&apikey=${apiKey}`, true)
xhr.getResponseHeader('Content-type', 'Application/json');

//what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let results = json.results;
        let newsHtml = "";
        results.forEach(function (element, index) {
            console.log(element, index);


            // console.log(results[news]);
            let news =
                ` <div id="newsUpdate">
                            
                <div class="shadow-lg p-3 mb-5 bg-body rounded">
                            <p>
                                <button class="btn btn-danger collapsed searchBar" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                    ${element['title']}
                                </button>
                                <h6>${element['pubDate']}</h6>
                          </p>

                       <div style="min-height: 20px;">
                          <div class=" collapse collapse-vertical" id="collapse${index}">
                             <div class="card card-body" style="width: 1100px;">
                             ${element['description']}.<a href="${element['link']}" target="_blank">Read More </a>
                             </div>
                             
                         </div>
                      </div>
                      </div>
               
                      </div>`;
            newsHtml += news;

        })
        newsUpdate.innerHTML = newsHtml;

    }
    else {
        console.log('some error occured');

    }
}
xhr.send();

let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {



    let inputVal = search.value.toLowerCase();
    console.log('Input Event Fired', inputVal);
    let searchBar = document.getElementsByClassName('searchBar');
    Array.from(searchBar).forEach(function (element) {
        let searchText = element.getElementsByTagName('div');
        console.log(searchText);

        if (searchText.includes(inputVal)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    })
})



// let search= document.getElementById('search');
// searchTxt.addEventListener('click',function(){
//     console.log('submit activated')
// })


