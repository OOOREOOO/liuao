function preGallery() {
  if (!document.getElementById) {
    return false;
  }
  if (!document.getElementsByTagName) {
    return false;
  }
  if (!gallery) {
    return false;
  }
  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");

  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      showPic(this);
      return false;
    }
  }
}





function showPic(whichPic) {
  var source = whichPic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src", source);
  //placeholder.src = source;
  var text = whichPic.getAttribute("title");
  var number = document.getElementById("number");
  number.firstChild.nodeValue = text;
  // alert(source);
  // alert(number.nodeValue);
  // alert(number.childNodes[0].nodeValue);

}


window.onload = preGallery();
