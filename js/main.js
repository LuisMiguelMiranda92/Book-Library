//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)



function getFetch(){
 
  const yourBook = document.querySelector('input').value
  const url = `https://openlibrary.org/isbn/${yourBook}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.title)
        if(!localStorage.getItem('books')){
          localStorage.setItem('books', data.title)
        } else{
          let books = localStorage.getItem('books') + " ;\n" + data.title
          localStorage.setItem('books', books)
        }
        document.querySelector('h2').innerText = localStorage.getItem('books')

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    }

