function giveNavigationInstruction() {
  var runOnce = setTimeout(showAlert, 1500);
}

function showAlert() {
  var alert = document.getElementById("hide-navigation-instruction");

  var opacity = 0.0;

  function fadeIn() {
    opacity += 0.15;

    alert.style.opacity = opacity;

    if (opacity >= 1){
      clearInterval(id);
    }
  }

  var id = setInterval(fadeIn, 5);
}

function hideOnClick() {
  var e = window.event;
  var element = e.target;

  while ( !element.className.match(/(?:^|\s)hide-on-click(?!\S)/) ) {
    element = element.parentNode;
  }

  if (element.id) {
    var hidden = document.getElementById("hide-"+element.id);

    var opacity = 1.0

    function fadeOut() {
      opacity -= 0.05;

      hidden.style.opacity = opacity;

      if (opacity <= 0){
        hidden.className += " hidden";
        clearInterval(id);
      }
    }

    var id = setInterval(fadeOut, 5);
  }
}

function hideAlertOnOtherOccasion() {
  var hidden = document.getElementById("hide-navigation-instruction");

  var opacity = 1.0

  function fadeOut() {
    opacity -= 0.05;

    hidden.style.opacity = opacity;

    if (opacity <= 0){
      hidden.className += " hidden";
      clearInterval(id);
    }
  }

  var id = setInterval(fadeOut, 5);
}

/* This is to force the sidebar to have 100% height
 */
function setSidebarLength() {
  var sidebar = document.getElementById("navigation-list-container");

  var height = window.innerHeight;

  sidebar.style.height = (height - 131)+"px";
}

/* This function uses the trick on browser (tested on Chrome) that if
 * a href target iframe does not exist, the link will open in a new
 * tab. Thus, we will delete iframe on low resolution or add it back
 * on high resolution if it was deleted.
 */
function controlIframeOnDifferentResolution() {
  var width = window.innerWidth;

  var targetIframe = document.getElementById("iframe-content-target");

  if (width <= 760 && targetIframe) {
    targetIframe.parentNode.removeChild(targetIframe);
  }
  else if (!targetIframe) {
    document.body.innerHTML = document.body.innerHTML + '<iframe src="Homepage.html" name="content-target" id="iframe-content-target"></iframe>';
  }
}

/* To be called on body onload
 */
function initialize() {
  controlIframeOnDifferentResolution();
  setSidebarLength();

  var width = window.innerWidth;

  if (width > 760) {
    giveNavigationInstruction();
  }
}

/* On Resizing browser window, navigation instruction will not be animated since it poses a problem with the timing delay.
 * Alternative:
 * - To have animation, use global variable to control the animation
 *   Risk: A lot of reworking on the code
 */
window.onresize = function() {
  controlIframeOnDifferentResolution();
  setSidebarLength();

  var width = window.innerWidth;

  var alert = document.getElementById("hide-navigation-instruction");

  if (width > 760) {
    if ( alert.className.match(/(?:^|\s)hidden(?!\S)/) ) {
      alert.className = alert.className.replace( /(?:^|\s)hidden(?!\S)/g , '' );
    }

    alert.style.opacity = 1.0;
  }
  else {
    alert.style.opacity = 0.0;

    alert.className += " hidden";
  }
}