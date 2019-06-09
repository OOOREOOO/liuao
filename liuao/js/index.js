var function sq(x,y) {
    var boxes = document.getElementsByClassName('x');
    var width = window.innerWidth;
    var width0 = width * y;
    for (let index = 0; index < boxes.length; index++) {
        const box = boxes[index];
        box.style.width = width0 + 'px';
        box.style.height = width0 + 'px';
        console.log(width0);        
    }
}
window.onload = function(){
    sq(cires,0.9);
}