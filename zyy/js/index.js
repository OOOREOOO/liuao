
// console.log(width_8);
// var box = document.getElementsByClassName('box')[0];

function sq(){
    var width =  window.innerWidth;
    var width_33 = width * 0.33;
    var box0 = document.getElementsByClassName('box');
    for (let index = 0; index < box0.length; index++) {
        box0[index].style.height = width_33 + "px";
        box0[index].style.width = width_33 + "px";
        box0[index].style.lineHeight = width_33 + 'px';
    }
} 

window.onload = function(){
    sq();
}