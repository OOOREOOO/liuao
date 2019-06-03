var warning = document.getElementById('warning');
var checkbox = document.getElementById('test');//
var user = document.getElementById('user');
var password = document.getElementById('password');

$('#reg').click(function(){
    $('#login').hide();
    $('#checkbox').show();
});
$('#reg-sign').click(function(){
    // alert('注册成功');
    // $('#login').show();
    // $('#checkbox').hide();
    if (!user.value && !password.value ) {
        warning.textContent = '请输入完整信息';
        return false;
    }
    if (localStorage.getItem( user.value)) {
        warning.textContent = '用户已存在';
        return false;
    }
    if (checkbox.checked) {
        alert('恭喜你注册成功');
        localStorage.setItem(user.value , password.value);
        $('#login').show();
        $('#warning').hide();
        $('#checkbox').hide();
        } else{
            warning.textContent = '请同意以上协议';
            return false;
        }
});
$('#log').click(function(){
    if(!user.value){
        $('#warning').show();
        warning.textContent = "请输入用户名";
        return false;
    }
    
    if(!localStorage.getItem(user.value)){
        $('#warning').show();
        warning.textContent = "用户名不存在";
        return false;
    }

    if(localStorage.getItem(user.value) == password.value){
        sessionStorage.setItem('login', true); 
        window.open("index.html", "_self");
    }else{
        $('#warning').show();
        warning.textContent = "密码不正确";
        return false;
    }
});