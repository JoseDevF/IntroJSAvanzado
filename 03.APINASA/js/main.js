/* Fetch API NASA */

/* const apiKey = 'sO0FVjDXunuC95rR71bUAjHtgpzWYfd4AJ5n5hqe';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Paso 2: Manipular los datos recibidos de la API
    const title = data.title;
    const explanation = data.explanation;
    const imageUrl = data.url;

   console.log(title)
   console.log(explanation)
   console.log(imageUrl)

   const imageSection = document.querySelector("#APOD");

   imageSection.innerHTML = '';

   imageSection.innerHTML = `
                             <h1>${title}</h1>
                             <img class="apod" src='${imageUrl}' />
                             <p>${explanation}</p>
                            `
  })
  .catch(error => {
    // Manejo de errores en caso de que la solicitud falle
    console.log('Error al obtener los datos de la API de la NASA:', error);
  }); */

/* XMLRequest */

const apiKey = 'sO0FVjDXunuC95rR71bUAjHtgpzWYfd4AJ5n5hqe';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=`;

let xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    /*If we have response from the server*/
    if (this.readyState === 4 && this.status === 200) {
        /*Saving data*/
        /* Traduce literalmente un JSON en un Objeto de javascript */
        let data = JSON.parse(this.responseText);

        const title = data.title;
        const explanation = data.explanation;
        const imageUrl = data.url;

        const imageSection = document.querySelector("#APOD");
        imageSection.innerHTML = '';
        imageSection.innerHTML = `
                               <h1>${title}</h1>
                               <img class="apod" src='${imageUrl}' />
                               <p>${explanation}</p>
                              `
    }
}

/*Send our request for APOD*/
xmlhttp.open('GET', `${apiUrl}${apiKey}`, true);
xmlhttp.send();

/* const numeroPreguntas=document.querySelector("#select").value
const category=document.querySelector("#cat").value
 
// const apiUrl = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
const apiUrl2 = `https://opentdb.com/api.php?amount=${numeroPreguntas}&category=${categoria}&difficulty=${difficulty}&type=${multiple}`
 
fetch(apiUrl2).then()//etc... */

