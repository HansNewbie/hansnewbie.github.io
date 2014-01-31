function delayShow() {
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

function hideOnHover() {
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

function setSidebarLength() {
  var sidebar = document.getElementById("navigation-list-container");

  var height = window.innerHeight;

  sidebar.style.height = (height - 131)+"px";
}

function deleteIframeOnLowResolution() {
  var width = window.innerWidth;

  console.log(width);

  var targetIframe = document.getElementById("iframe-content-target");

  if (width <= 760) {
    targetIframe.parentNode.removeChild(targetIframe);
  }
  else if (!targetIframe) {
    document.body.innerHTML = document.body.innerHTML + '<iframe src="Homepage.html" name="content-target" id="iframe-content-target"></iframe>';
  }
}

function initialize() {
  deleteIframeOnLowResolution();
  delayShow();
  setSidebarLength();
}

window.onresize = function() {
  initialize();
}