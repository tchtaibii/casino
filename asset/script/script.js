function registre_login(id) {
    if (id == 'x')
    {
        var y = document.getElementById('panel');
        var z = document.getElementsByTagName('body');
        var x = document.getElementById(id);
        var x2 = document.getElementById(id);
        z[0].style.overflow = "visible";
        y.style.display = "none";
        x.style.display = "none";
        x1.style.display = "none";
        var f = document.getElementById(id);
        f.style.display = "hide";
    }
    var y = document.getElementById('panel');
    var z = document.getElementsByTagName('body');
    z[0].style.overflow = "hidden";
    y.style.display = "flex";
    if (id == 'login-panel')
    {
        var x = document.getElementById(id);
        x.style.display = "flex";
        var f = document.getElementById('xr');
        f.style.display = "block";
        // disable registre
        var s = document.getElementById('registre-panel');
        s.style.display = "none";
    }
    else if (id == 'registre-panel')
    {
        // enable registre
        var x = document.getElementById(id);
        x.style.display = "flex";
        var f = document.getElementById('x');
        f.style.display = "block";
        // disable login
        var s = document.getElementById('login-panel');
        s.style.display = "none";
    }
}

function unvisible_menu(id) {
    var x = document.getElementById(id);
    if (x.style.display == "none") {
        x.style.display = "flex";
    }
    else
        x.style.display = "none";
}