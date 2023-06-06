// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


var currentTab = 0;
document.addEventListener("DOMContentLoaded", function (event) {


    showTab(currentTab);

});

function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = '<i class="fa fa-angle-double-right"></i>';
    } else {
        document.getElementById("nextBtn").innerHTML = '<i class="fa fa-angle-double-right"></i>';
    }
    fixStepIndicator(n)
}

function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {

        document.getElementById("nextprevious").style.display = "none";
        document.getElementById("all-steps").style.display = "none";
        document.getElementById("register").style.display = "none";
        document.getElementById("text-message").style.display = "block";




    }
    showTab(currentTab);
}

function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            y[i].className += " invalid";
            valid = false;
        }


    }
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
}

function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
}



var checkbox = document.getElementById('embarazo');

var box = document.getElementById('datosEmbarazo');

checkbox.addEventListener('click', function handleClick() {
    if (checkbox.checked) {
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
});


var checkboxinstituido = document.getElementById('instituido');

var boxinstituido = document.getElementById('txtInstituido');

checkboxinstituido.addEventListener('click', function handleClick() {
    if (checkboxinstituido.checked) {
        boxinstituido.style.display = 'block';
    } else {
        boxinstituido.style.display = 'none';
    }
});


var checkboxaccidente = document.getElementById('accidente');
var checkboxalimentos = document.getElementById('alimentos');
var travasebox = document.getElementById('travasebox');

checkboxalimentos.addEventListener('click', function handleClick() {
    if (checkboxaccidente.checked || checkboxalimentos.checked) {
        travasebox.style.display = 'block';
    } else {
        travasebox.style.display = 'none';
    }
});

checkboxaccidente.addEventListener('click', function handleClick() {
    if (checkboxaccidente.checked || checkboxalimentos.checked) {
        travasebox.style.display = 'block';
    } else {
        travasebox.style.display = 'none';
    }
});


var checkboxterapeutico = document.getElementById('terapeutico');

var boxterapeutico = document.getElementById('terapeuticosbox');

checkboxterapeutico.addEventListener('click', function handleClick() {
    if (checkboxterapeutico.checked) {
        boxterapeutico.style.display = 'block';
    } else {
        boxterapeutico.style.display = 'none';
    }
});

var checkboxocupacional = document.getElementById('ocupacional');

var proteccionbox = document.getElementById('proteccionbox');

checkboxocupacional.addEventListener('click', function handleClick() {
    if (checkboxocupacional.checked) {
        proteccionbox.style.display = 'block';
    } else {
        proteccionbox.style.display = 'none';
    }
});