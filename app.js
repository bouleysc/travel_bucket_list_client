$(document).ready(function(){
  $('.modal').modal();
  $.get(baseURL, travelList)
    .then(nextTrip)
    .then(deletePlace)
    .then(updateInfo)
  addPlace()
})

const baseURL = 'https://peaceful-woodland-20463.herokuapp.com/places/';

function travelList(data){
  for (var i=0; i < data.length; i++){
    $('.list').append
    (`<tr>
        <td>${i+1}.</td>
        <td><a id="${data[i].id}" class="nextButton btn-floating btn-small waves-effect waves-light hoverable blue"><i class="material-icons">add</i></a></td>
        <td>${data[i].city}</td>
        <td>${data[i].state}</td>
        <td><input id="${data[i].id}" type="number" min="1" max="10" class="center-align" value="${data[i].rating}"></td>
        <td><a data-target="modal" data-id="${data[i].id}" class="edit btn-floating btn-small waves-effect waves-light hoverable blue modal-trigger"><i class="material-icons">edit</i></a>
            <a id="${data[i].id}" class="remove btn-floating btn-small waves-effect waves-light hoverable red"><i class="material-icons">clear</i></a>
        </td>
      </tr>`);
  }
}

function deletePlace() {
  $('.remove').click(function(){
    let id = $(this).attr('id');
    $.ajax({
      url: baseURL + id,
      type: 'DELETE',
      contentType:'application/json'
    })
    .then(function(){window.location.reload()})
  })
}

function updateInfo() {
  $('.edit').click(function(event){
    event.preventDefault();
    let id = $(this).attr('data-id');
    $.get(baseURL + id, function(data){
      $('#modalCity').val(data.city);
      $('#modalState').val(data.state);
      $('#modalRating').val(data.rating);
    })
    .then(editPlace(id))
  })
}

function editPlace(id){
  $('#modalEdit').click(function(event){
    event.preventDefault();
    let city = $('#modalCity').val();
    let state = $('#modalState').val();
    let edit = {
      city: city,
      state: state,
      rating: parseInt($('#modalRating').val())
    }
    if(typeof $city == 'string' && typeof $state == 'string') {
      $.ajax({
        url: baseURL + id,
        method: 'PUT',
        data: edit
      })
      .then(function(){window.location.reload()})
    } else {
      event.preventDefault();
      alert("Invalid Entry")
    }
  })
}

function addPlace(){
  $('#addLocation').click(function(event){
    event.preventDefault();
    let $city = $('#city').val();
    let $state = $('#state').val();
    let $rating = parseInt($('#rating').val());
  if(typeof city === 'string' && typeof state === 'string') {
    addItem($city,$state,$rating)
    $city = $('#city').val("");
    $state = $('#state').val("");
    $rating = $('#rating').val(1);
    }  else {
      alert("Invalid Entry")
    }
  })
}

function nextTrip(){
  $('.nextButton').one("click", function() {
    let id = $(this).attr('id');
    $.get(baseURL + id, function(data){
      $('.nextTrip').append(`<li>${data.city}, ${data.state}</li>`)
    })
  })
}

function addItem(city,state,rating){
  let post = {
    city: city,
    state: state,
    rating: rating
  }
  $.post(baseURL, post)
  .then(function(){window.location.reload()})
}
