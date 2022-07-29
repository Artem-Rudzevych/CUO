$(".anсhor").click(function (e) {
  var anch = this.hash.slice(0);
  if (!anch || !anch[0] === "#") return;
  e.preventDefault();
  window.location.hash = "";
  var offset = $(anch).offset();
  $("html, body").animate({ scrollTop: $(anch).offset().top }, 500);
  if (history.pushState) {
    history.pushState({}, null, window.location.pathname);
  }
});

// history.pushState('', document.title, window.location.pathname);

// Button
// function currentYPosition() {
//     // Firefox, Chrome, Opera, Safari
//     if (self.pageYOffset) return self.pageYOffset;
//     // Internet Explorer 6 - standards mode
//     if (document.documentElement && document.documentElement.scrollTop)
//         return document.documentElement.scrollTop;
//     // Internet Explorer 6, 7 and 8
//     if (document.body.scrollTop) return document.body.scrollTop;
//     return 0;
// }

// function elmYPosition(eID) {
//     var elm = document.getElementById(eID);
//     var y = elm.offsetTop;
//     var node = elm;
//     while (node.offsetParent && node.offsetParent != document.body) {
//         node = node.offsetParent;
//         y += node.offsetTop;
//     } return y;
// }

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $("#topNubex").fadeIn();
    } else {
      $("#topNubex").fadeOut();
    }
  });
  $("#topNubex").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 500);
  });
});
