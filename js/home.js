import {variavelQualquer, nameTest} from './functions.js'

// end point API
let baseURL = 'http://localhost:3000/'

let testA = document.querySelector('#testeA');
testA.addEventListener('click', () => {
  variavelQualquer()
  console.log(nameTest)
})

// Ref elements
let findForm = document.querySelector('#findapi');
let brandSection = document.querySelector('#brands');

let allBrands = []

function getApiData(){
  brandSection.innerHTML = `
    <p>Agurade carregando</p>
  `
  axios.get(baseURL + 'brands').then(
    res => {
      allBrands = res.data
      brandSection.innerHTML = `
        <select id="getDataBrands">
          ${ allBrands.map(
            item => (`
              <option value="${item.id}">${item.name}</option>
            `)
          ).join(', ')}
        </select>
      `
    }
  )
}

getApiData();

// send api function
findForm.addEventListener('submit', function(e) {
  e.preventDefault();

  let getDataBrands = document.querySelector('#getDataBrands').value;
  axios.get(`${baseURL}adverts${getDataBrands  === '' ? '' : `?brand=${getDataBrands.replace(' ', '%20%').toLowerCase()}`}`)
  .then( res => console.log(res.data) );

})


