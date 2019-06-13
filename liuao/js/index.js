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





// function itemWaterfull() {
//     var margin = 0;  //每个item的外边距，因人需求而定
//     var items = $(".item");  //每个item的统一类名
//     var item_width = items[0].offsetWidth + margin; //取区块的实际宽度
//     $("#grid").css("padding", "0");  //容器的起始内边距先设为0，按之后一行item的宽度再来设，保证所有item的居中
//     var container_width = $("#grid")[0].offsetWidth; //获取容器宽度
//     var n = parseInt(container_width / item_width);  //一行所允许放置的item个数
//     var container_padding = (container_width - (n * item_width)) / 2; //一行宽度在容器中所剩余的宽度，设为容器的左右内边距
//     $("#grid").css("padding", "0 " + container_padding + "px");
//     //寻找数组最小高度的下标
//     function findMinIndex(arr) {
//         var len = arr.length, min = 999999, index = -1;
//         for(var i = 0; i < len; i++) {
//             if(min > arr[i]) {
//                 min = arr[i];
//                 index = i;
//             }
//         }
//         return index;
//     }
//     //放置item
// 	function putItem() {
// 		var items_height = [];  //每个item的高度
// 		var len = items.length;  //获取item的个数
// 		for(var i = 0; i < len; i++) {
// 			var item_height = items[i].offsetHeight;  //获取每个item的高度
// 			//放置在第一行的item
// 			if(i < n) {
// 				items_height[i] = item_height;  //高度数组更新
// 				items.eq(i).css("top", 0);
// 				items.eq(i).css("left", i * item_width);
	
// 			} else {  //放置在其他行的item  
// 				var final_row_fir = parseInt(len / n) * n; //最后一行第一个item的下标
// 				//处于最后一行
// 				if(final_row_fir <= i) {
// 					var index = i - final_row_fir;  //该item所应该放置的列
// 					items.eq(i).css("top", items_height[index] + margin);
// 					items.eq(i).css("left", index * item_width);
// 					items_height[index] += item_height + margin;
// 				} else {      
// 					var min_index = findMinIndex(items_height);  //寻找最小高度
// 					if(min_index == -1) {
// 						console.log("高度计算出现错误");
// 						return ;
// 					}
// 					items.eq(i).css("top", items_height[min_index] + margin);
// 					items.eq(i).css("left", min_index * item_width);
// 					items_height[min_index] += item_height + margin;  //高度数组更新
// 				}
// 			}
// 		}
// 		var max_height = Math.max.apply(null, items_height);
// 		$("#grid").css("height", max_height);   //最后更新容器高度
// 	}
