// Pgae transition Enable
const swup = new Swup();

// Sections Height
function setHeights() {
  var wH = $(window).height();
  // Set These Sections height to the height of the window
  $('.main, .main .container, .login, .login .container, .register, .register .container, .authentication, .authentication .container, .vote, .vote .container, .candidates, .candidates .container').css('min-height', wH);
}

// Function that is called to make the page great :D
function init() {
  setHeights();
}

// run once
init();

// this event runs for every page view after initial load
swup.on('contentReplaced', init);
