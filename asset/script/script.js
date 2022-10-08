function registre_login(id) {
    var y = document.getElementById('panel');
    var z = document.getElementsByTagName('body');
    z[0].style.overflow = "hidden";
    y.style.display = "flex";
    if (id == 'login-panel')
    {
        console.log('register');
        var x = document.getElementById(id);
        x.style.display = "flex";
    }
    else if (id == 'registre-panel')
    {
        console.log('register');
        var x = document.getElementById(id);
        x.style.display = "flex";
    }
}