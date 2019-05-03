
var title1 = document.getElementById("title_1");
var title2 = document.getElementById("title_2");


title1.onmouseover = function t1(){
  title1.className = "title_1 actived";
  if(title2.className = "title_2 actived"){
    title2.className = "title_2"
  }
}
title2.onmouseover = function t2(){
  title2.className = "title_2 actived";
  if(title1.className = "title_1 actived"){
    title1.className = "title_1"
  }
}
function finish(){
  alert("JavaScript加载完成");
}

window.onload = function() {
  t1(); t2(); finish();
}
