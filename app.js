$(document).ready(function(){
  const baseURL = "https://peaceful-woodland-20463.herokuapp.com/places"
  $.get(baseURL, travelList)
  addPlace()
})

function travelList(data){
  for (var i=0; i < data.length; i++){
    $('.list').append
    (`<tr>
        <td>${i+1}.</td>
        <td>${data[i].city}</td>
        <td>${data[i].state}</td>
        <td>${data[i].rating}</td>
        <td><a class="btn-floating btn-small waves-effect waves-light teal lighten-2"><i class="material-icons">mode_edit</i></a>
            <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">remove</i></a></td>
      </tr>`);
  }
}

function addPlace(){
  $('#addLocation').click(function(event){
    event.preventDefault();
    const $city = $('#city').val();
    const $state = $('#state').val();
    const $rating = $('#rating').val();
    console.log($city, $state, $rating)
    // addItem($city,$state,$rating)
  })
}

// function addItem($city,$state,$rating){
//   const myHeaders = new Headers()
//   myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
//   const setting = {
//     method: 'Post',
//     headers: myHeaders,
//     contentType: 'application/json',
//     body:$('.list').append
//         (`<tr>
//             <td></td>
//             <td>${$city}</td>
//             <td>${$state}</td>
//             <td>${$rating}</td>
//             <td><a class="btn-floating btn-small waves-effect waves-light teal lighten-2"><i class="material-icons">mode_edit</i></a>
//                 <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">remove</i></a></td>
//           </tr>`)
//   }
//   $.post(baseURL, {city, state, rating})
//   fetch(baseURL, setting)
//   .then(data => data.json())
// }
