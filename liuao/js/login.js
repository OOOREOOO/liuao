var warning = document.getElementById('warning');
var checkbox = document.getElementById('test');//
var username = document.getElementById('username');
var password = document.getElementById('password');




$('#reg').click(function(){
    $('#login').fadeOut(200);
    $('#log-reg').show(1000).css('margin-top','100px');
    $('#reg').fadeOut(200);
    $('#line').fadeOut(200);
    $('#logo').fadeOut(200);
    $('#checkbox').show(1000);
    $('#warning').show();
});



$('#login').click(function(){
    if(!username.value){
        warning.textContent = "请输入用户名";
        return false;
    }
    
    if(!localStorage.getItem(username.value)){
        warning.textContent = "用户名不存在";
        return false;
    }

    if(localStorage.getItem(username.value) == password.value){
        sessionStorage.setItem('login', true); 
        window.open("index.html", "_self");
    }else{
        warning.textContent = "密码不正确";
        return false;
    }
});

$('#log-reg').click(function(){
    if (!username.value && !password.value ) {
        warning.textContent = '请输入完整信息';
        return false;
    }
    if (localStorage.getItem( username.value)) {
        warning.textContent = '用户已存在';
        return false;
    }
    if (checkbox.checked) {
        localStorage.setItem(username.value , password.value);
        $('#login').fadeIn(200);
        $('#log-reg').hide(1000).css('margin-top','100px');
        $('#reg').fadeIn(200);
        $('#line').fadeIn(200);
        $('#logo').fadeIn(200);
        $('#checkbox').hide(1000);
        $('#warning').hide();
        } else{
            warning.textContent = '请同意以上协议';
            return false;
        }
});


var h =  window.innerHeight;
var content  = document.getElementById('content');
function hh (){
	content.style.height = h + 'px';
}
window.onload =function (){
	hh();
}