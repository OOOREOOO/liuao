
function showPic(whichPic) {
  var source = whichPic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  //placeholder.src = source;
  var text = whichPic.getAttribute("title");
  var number = document.getElementById("number");
  number.firstChild.nodeValue = text  ;
  // alert(source);
  // alert(number.nodeValue);
  // alert(number.childNodes[0].nodeValue);

}
