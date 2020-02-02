//let request = new XMLHttpRequest();

let api = 'https://ghibliapi.herokuapp.com/films';

/*
request.open('GET', api, true);

request.onload = function () {

   let data = JSON.parse(this.response);

   if (request.status >= 200 && request.status < 400) {
      data.map(movie => {
         console.log(movie.title);
      })
   } else {
      console.log('error');
   }


}

request.send();
*/

fetch(api, {
   method: 'GET',
   headers: {
      'Content-Type': 'application/json'
   }
})
   .then(
      res => res.json()
   )
   .then(
      data => {
         data.map(movie => {
            // create a div with card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            // create an h1 and set the text content to the movie's title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            // create a p and set the text content to the movie's description
            const p = document.createElement('p');
            // use substring to limit the display content
            movie.description = movie.description.substring(0, 300);
            p.textContent = `${movie.description}...`;

            // append the card to the root's container element
            container.appendChild(card);

            // a card contains a h1 and an p element each
            card.appendChild(h1);
            card.appendChild(p);

         })
      })
   .catch(err => {
      console.log(err);
   });

const app = document.getElementById('root');

const logo = document.createElement('img');

// set src attribute of img element
logo.src = './ghibli-logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);



