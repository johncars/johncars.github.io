class InfoBuyer {
    constructor(personalInfo, carInfo, carList) {
        this.personalInfo = personalInfo;
        this.carInfo = carInfo;
        this.carList = carList;
    }

}

class PersonalInfo {
    constructor(nombre, apellido, correo) {
        this.nombre = nombre;
        this.correo = correo;
        this.apellido = apellido
    }
}
class CarInfo {
    constructor(asientos, precio, añoModelo, años) {
        this.asientos = asientos;
        this.precio = precio;
        this.añoModelo = añoModelo;
        this.años = años;
    }
}

var database = firebase.database();
var infoBuyer = new InfoBuyer();
var carInfo = new CarInfo();
carInfo.precio = 10000;
carInfo.asientos = 4;
carInfo.añoModelo = 1940;
carInfo.años = 1;
var personalInfo = new PersonalInfo();
var carList = new Array();
$("#submity").click(function (e) {
    event.preventDefault();
    var form = document.getElementById("johnform");
    form.classList.add('was-validated');

    if (form.checkValidity() === false) {
        event.stopPropagation();
    }else{
        let r = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        personalInfo.nombre = $("#nombre").val();
        personalInfo.apellido = $("#apellido").val();
        personalInfo.correo = $("#correo").val();
        infoBuyer = new InfoBuyer(personalInfo,carInfo,carList);
        if(carList.length>1 && carInfo.asientos!=null, carInfo.añoModelo!=null,carInfo.años!=null && carInfo.precio!=null){
            
            
            database.ref(r).set({
                "Cliente":{
                    "Nombre":infoBuyer.personalInfo.nombre,
                    "Apellido":infoBuyer.personalInfo.apellido,
                    "Correo": infoBuyer.personalInfo.correo,
                },
                "Informacion":{
                    "Asientos":infoBuyer.carInfo.asientos,
                    "Precio":infoBuyer.carInfo.precio,
                    "Año del modelo":infoBuyer.carInfo.añoModelo,
                    "Años": infoBuyer.carInfo.años,
                }
            });
            infoBuyer.carList.forEach(element => {
                database.ref(r+"/Carros").push().set(element);
            });
            $('#exampleModalCenter').modal('show');
        }
    }
    
    
});

$(".mask").click(function () {
    if ($("#" + this.id).hasClass("clicked")) {
        $("#" + this.id).removeClass("clicked");
        carList.splice($.inArray(this.id, carList), 1);
    } else {
        $("#" + this.id).addClass("clicked");
        carList.push(this.id);
    }
    if (carList.length >= 1) {
        $("#next1").addClass("goUp");

    } else {
        $("#next1").removeClass("goUp");

    }
});

$("#next1").click(function (e) {
    e.preventDefault();
    $("#next1").removeClass("goUp");
    goToByScroll("second_section");
});
$("#empezar").click(function (e) {
    e.preventDefault();
    goToByScroll("first_section");
});
$("#regresador").click(function (e) {
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    $("#regresador").removeClass("goUp");
    $("#next2").removeClass("goUp");
    $("#next1").removeClass("goUp");
    goToByScroll("header");

});
$("#next2").click(function (e) {
    e.preventDefault();
    $("#next2").removeClass("goUp");
    goToByScroll("third_section");
});
$(document.body).on('touchmove', scroll);

$(document).scroll(function () {
    if ($(document).scrollTop() > 400) {
        $("#regresador").addClass("goUp");
    } else {
        $("#regresador").removeClass("goUp");
        $("#next2").removeClass("goUp");
        $("#next1").removeClass("goUp");
    }
});


function goToByScroll(id) {
    // Remove "link" from the ID
    id = id.replace("link", "");
    // Scroll
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top
    }, 'slow');
}


var slider = new Slider("#ex1");
slider.on("slide", function (sliderValue) {
    document.getElementById("SliderVal1").textContent = "Precio: " + sliderValue + " $";
    carInfo.precio = sliderValue;
    $("#next2").addClass("goUp");

});
var slider = new Slider("#ex2");
slider.on("slide", function (sliderValue) {
    document.getElementById("SliderVal2").textContent = "Asientos: " + sliderValue;
    carInfo.asientos = sliderValue;
    $("#next2").addClass("goUp");

});
var slider = new Slider("#ex3");
slider.on("slide", function (sliderValue) {
    document.getElementById("SliderVal3").textContent = "Año del Modelo: " + sliderValue;
    $("#next2").addClass("goUp");
    carInfo.añoModelo = sliderValue;
});
var slider = new Slider("#ex4");
slider.on("slide", function (sliderValue) {
    document.getElementById("SliderVal4").textContent = "Años del auto: " + sliderValue;
    $("#next2").addClass("goUp");
    carInfo.años = sliderValue;
});

