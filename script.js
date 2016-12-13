//wood = 2;
//raw_wood = 4;
//coal = 8;
//solid_fuel = 25;
//rocket_fuel = 225;

function burner_drill(f) {
    var fuel_source = f.value;
    var fuel_amount = fuel(fuel_source);
    var consumption = .3;
    var pollution = 10;
    var time = fuel_amount * consumption;

    document.getElementById("interval").innerHTML = time + " seconds";
}

function fuel(f) {
    if(f == "wood") {
        return 2;
    } else if (f == "raw_wood") {
        return 4;
    } else if (f == "coal") {
        return 8;
    } else if (f == "solid_fuel") {
        return 25;
    } else if (f == "rocket_fuel") {
        return 225;
    } else {
        return 0;
    }
}
