function registre_login(id) {
    var y = document.getElementById('panel');
    var z = document.getElementsByTagName('body');
    z[0].style.overflow = "hidden";
    y.style.display = "flex";
    if (id == 'login-panel')
    {
        console.log('register');
        var x = document.getElementById('login-panel');
        x.style.display = "flex";
    }
}