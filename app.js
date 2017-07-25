$(document).ready(function(){
  const baseURL = "https://peaceful-woodland-20463.herokuapp.com/places"
  $('select').material_select();
  $.get(baseURL)
  .then(citiesStates)
})

let $city = $('.city');
let $state = $('.state');
let $list = $('.list');

function citiesStates(data){
  for (var i=0; i < data.length; i++){
    console.log(data[i].city)
    console.log(data[i].state)
    $city.append(`<option value="${data[i].id}">${data[i].city}</option>`);
    $state.append(`<option value="${data[i].id}">${data[i].state}</option>`);
  }
}
