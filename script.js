window.onload = loadCookie;
var materials = [
    {"name":"wood", "burn_time": 2},
    {"name":"raw_wood", "burn_time": 4},
    {"name":"coal", "burn_time": 8},
    {"name":"solid_fuel", "burn_time": 25},
    {"name":"rocket_fuel", "burn_time": 225}
]

function burner_drill() {
    var mat_array = [];

    for(i = 0; i < materials.length; ++i) {
        mat_array[i] = materials[i].burn_time * .3;
    }

    var temp = [];
    for (var i = 0; i < mat_array.length; i++) {
        temp[i] = materials[i].name + " burn rate " + mat_array[i] + " seconds<br>";
        console.log(temp);
    }

    document.getElementById("interval").innerHTML = temp;
}

function stone_furnace() {
    var mat_array = [];

    for(i = 0; i < materials.length; ++i) {
        mat_array[i] = materials[i].burn_time * .18;
    }

    var temp = [];
    for (var i = 0; i < mat_array.length; i++) {
        temp[i] = materials[i].name + " burn rate " + mat_array[i] + " seconds<br>";
        console.log(temp);
    }

    document.getElementById("stone_interval").innerHTML = temp;
}

function steel_furnace() {
    var mat_array = [];

    for(i = 0; i < materials.length; ++i) {
        mat_array[i] = materials[i].burn_time * .18;
    }

    var temp = [];
    for (var i = 0; i < mat_array.length; i++) {
        temp[i] = materials[i].name + " burn rate " + mat_array[i] + " seconds<br>";
        console.log(temp);
    }

    document.getElementById("steel_interval").innerHTML = temp;
}

function burner_inserter() {
    var mat_array = [];

    for(i = 0; i < materials.length; ++i) {
        mat_array[i] = materials[i].burn_time * .18;
    }

    var temp = [];
    for (var i = 0; i < mat_array.length; i++) {
        temp[i] = materials[i].name + " burn rate " + mat_array[i] + " seconds<br>";
        console.log(temp);
    }

    document.getElementById("inserter_interval").innerHTML = temp;
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function loadCookie() {
    var cookie = getCookie("cookie");
    console.log(cookie);
    if(cookie != "") {
        document.getElementById("greeting").innerHTML = "Hello, " + cookie;
    }
}

function saveCookie() {
    var name = document.getElementById("username").value;
    document.getElementById("username").value = "";
    setCookie("cookie", name, 1);
    loadCookie();
}
