
$('#reg').click(function(){
    $('#login').hide();
    $('#checkbox').show();
});
$('#reg-sign').click(function(){
    if (!$('#user').value) {
        $('#warning').textContent = '请输入用户名';
        return false;
    }
    alert('注册成功');
    $('#login').show();
    $('#checkbox').hide();
});