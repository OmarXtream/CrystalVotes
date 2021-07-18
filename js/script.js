$(function () {
  'use strict';
  var wH = $(window).height();
  // Set These Sections height to the height of the window
  $('.main, .main .container, .login, .login .container, .register, .register .container, .authentication, .authentication .container, .vote, .vote .container, .candidates, .candidates .container').css('min-height', wH);

});

// animate.CSS Default function
function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)
    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }
    node.addEventListener('animationend', handleAnimationEnd)
}
var xmlhttp;
var token=document.getElementsByTagName('meta')["token"].content;
var ajax_location = 'ajax/';

function handleResponse(response){
response.then(function(response){
 if(typeof response.updatetoken != 'undefined'){
   document.getElementsByTagName('meta')["token"].content = response.updatetoken;
 }
});
return response;
}
function sendData(url = ``, data = '', method = 'POST',token = true) {
if(token){
 data = data+'&token='+document.getElementsByName('token')[0].getAttribute('content');
}
 if(method == 'POST'){
 return fetch(ajax_location + url, {
     method: method, // *GET, POST, PUT, DELETE, etc.
     mode: "cors", // no-cors, cors, *same-origin
     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
     credentials: "same-origin", // include, same-origin, *omit
     headers: {
         "Content-Type": "application/x-www-form-urlencoded"
     },
     redirect: "follow", // manual, *follow, error
     body: data // body data type must match "Content-Type" header
 })
 .then(response => handleResponse(response.json())); // parses response to JSON
 } else if(method == 'GET'){

     return fetch(ajax_location + url + '?' + data).then(response => handleResponse(response.json()));
 }

}
if (window.XMLHttpRequest) {
 xmlhttp = new XMLHttpRequest();
} else {
xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
