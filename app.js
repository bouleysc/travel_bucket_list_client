$(document).ready(function(){
  const baseURL = "https://peaceful-woodland-20463.herokuapp.com/places"
  $('select').material_select();
  $.get(baseURL, cities)
  $.get(baseURL, state)
})

function cities(data){
  for (var i=0; i < data.length; i++){
    $('#city').append(`<option value="${data[i].id}">${data[i].city}</option>`);
    // $('#state').append(`<option value="${data[i].id}">${data[i].state}</option>`);
  }
  $('select').material_select();
}

// function state(){
//   $('#city :selected').change(function(){
//     for (var i=0; i < data.length; i++){
//       $('#state').append(`<option value="${data[i].id}">${data[i].state}</option>`);
//     }
//   })
//   $('select').material_select();
// }
