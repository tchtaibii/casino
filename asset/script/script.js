function registre_login(id) {

    if (id == 'x')
    {
        var y = document.getElementById('panel');
        var x = document.getElementById(id);
        var x1 = document.getElementById('login-panel');
        var x2 = document.getElementById('registre-panel');
        y.style.display = "none";
        x.style.display = "none";
        x1.style.display = "none";
        x2.style.display = "none";
    }
    if (id == 'login-panel')
    {
        var y = document.getElementById('panel');
        y.style.display = "flex";
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
        console.log("Please select");
        var y = document.getElementById('panel');
        y.style.display = "flex";
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
function showbar(){
    var m = document.getElementById("navmobile");
    if (m.style.display == "flex")
        m.style.display = "none";
    else
        m.style.display = "flex";
}
function ft_menu()
{
    var x = document.getElementById("left-s");
    if (x.style.display == "none")
        x.style.display = "flex";
    else
        x.style.display = "none";
}