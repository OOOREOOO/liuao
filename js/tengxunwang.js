var title1 = document.getElementById("title_1");
var title2 = document.getElementById("title_2");
var weather = document.getElementById("weather")
var box = document.getElementById("img_3");
var search_nav = document.getElementById("search_nav");
var hidden = document.getElementById("hidden");
var angle = document.getElementById("angle");

//要闻，浙江新闻2选一激活
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


//天气详情的触发与隐藏
box.onmouseover = function weather_vi(){
  weather.style.visibility = "visible" ;
  // alert("everything goes well");
}
box.onmouseout  = function weather_hi(){
  weather.style.visibility = "hidden" ;
}

//下拉搜索切换
search_nav.onmouseover = function hide(){
  hidden.style.visibility = "visible" ;
  angle.className = "fas fa-angle-up" ;
}
search_nav.onmouseout = function vi() {
  hidden.style.visibility = "hidden" ;
  angle.className = "fas fa-angle-down" ;
}

window.onload = function (){
  alert("JavaScript加载完成");
}
