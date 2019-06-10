// var function sq(x,y) {
//     var boxes = document.getElementsByClassName('x');
//     var width = window.innerWidth;
//     var width0 = width * y;
//     for (let index = 0; index < boxes.length; index++) {
//         const box = boxes[index];
//         box.style.width = width0 + 'px';
//         box.style.height = width0 + 'px';
//         console.log(width0);        
//     }
// }
// window.onload = function(){
//     sq(cires,0.9);
// }




var index=0;//下标
var timefun;//定时器
//自动播放事件
var time=function qq(){	
	changeStyle(index);
	index=index+1;
	if(index>3){
		index=0;
	}
}
//悬浮事件
$(".title >span").hover(function (){
	//清除定时器
	window.clearInterval(timefun);
	index=$(".title").find(this).index();
	changeStyle(index);
	index=index+1;
	if(index>3){
		index=0;
	}	
},function(){//取消悬浮事件
	//重新启动定时器
	timefun=setInterval(time,2000);
});
//定时器
timefun=setInterval(time,2000);
//根据下标进行操作
function changeStyle(index){
	$('.lunbobox').find('span').eq(index).show().siblings().hide();
	// $('.ni').find('span').eq(index).show().siblings().hide();
	// $('.title').find('span').eq(index).css({"color":"red"}).siblings().css({"color":"black"});
}
