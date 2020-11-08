function flower() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'flower');

}

function God() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'God');

}

function cars() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'cars');

}

function nature() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'nature');

}

function sports() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'sports');

}

function technology() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'technology');

}

function games() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'games');

}

function quotes() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'quotes');

}

function music() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'music');

}

function drawings() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'drawings');

}

function food() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'Food & Drink');

}

function exp() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'experimental');

}

function texture() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'textures & patterns');

}

function arc() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'architecture');

}

function camera() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'camera');

}

function animals() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'Animals');

}

function birds() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'birds');

}

function others() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'others');

}

function Interiors() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'Interiors');

}

function Bw() {

    window.location.href = "cat.html";
    sessionStorage.setItem('value', 'Business&Work');

}

$('#search').keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {

      if (document.getElementById("search").value == 0) {
        alert("Please fill out search field");
      }
      else {
        window.location.href = "search.html";

        var search = document.getElementById("search").value;
        sessionStorage.setItem('val', search);
      }
    }
  });

  $(document).keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
      return false;
    }
  })
