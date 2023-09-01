// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var currentTab = 0;
var toxicosAdd = [];
document.addEventListener("DOMContentLoaded", function (event) {


    showTab(currentTab);


    var now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    document.getElementById('fechaConsulta').value = now.toISOString().slice(0, 16);

    var step5 = document.getElementById('step5');
    var stepC5 = document.getElementById('stepC5');
    step5.style.display = 'none';
    stepC5.style.visibility = 'hidden';
});


function selectedItem(n) {
    var x = document.getElementsByClassName("tab");

    x[currentTab].style.display = "none";
    currentTab = n;

    if (n = 5) {
        mostrarResumen();
    }

    showTab(currentTab);
}

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

var SINTOMAS = [];
function mostrarResumen() {

    document.getElementById("fechaR").textContent = document.getElementById('fechaConsulta').value
    document.getElementById("expR").textContent = document.getElementById('exp').value
    document.getElementById("soliR").textContent = document.getElementById('solicitante').value
    document.getElementById("identificacionR").textContent = document.getElementById('identificacion').value
    document.getElementById("nombreR").textContent = document.getElementById('nombre').value
    document.getElementById("edadR").textContent = document.getElementById('edad').value
    document.getElementById("pesoR").textContent = document.getElementById('peso').value
    document.getElementById("direccionR").textContent = document.getElementById('otrasSeñas').value
    document.getElementById("telefonoR").textContent = document.getElementById('telefono').value
    document.getElementById("presionR").textContent = document.getElementById('presionArterial').value
    document.getElementById("frecuenciaR").textContent = document.getElementById('frecuenciaCardiaca').value
    document.getElementById("temperaturaR").textContent = document.getElementById('temperatura').value
    document.getElementById("obserR").textContent = document.getElementById('notas').value


    let tableBody = document.getElementById('tbodyR');
    // Recorriendo los datos de ejemplo
    tableBody.innerHTML = "";
    for (let i = 0; i < DATOS.length; i++) {
        indice = i;
        // Creando los 'td' que almacenarán cada parte de la información del usuario actual
        let generico = `<td>${DATOS[i].generico}</td>`;
        let codigo = `<td>${DATOS[i].codigo}</td>`;
        let marca = `<td>${DATOS[i].marca}</td>`;
        let cantidad = `<td>${DATOS[i].cantidad}</td>`;
        let presentacion = `<td>${DATOS[i].presentacion}</td>`;

        tableBody.innerHTML += `<tr>${generico + codigo + marca + cantidad + presentacion}</tr>`;
    }

    //SINTOMAS
    var metabolica = document.getElementById('metabolica');
    if (metabolica.checked) {
        document.getElementById("metabolicaR").checked = true;
    }
    var alucinaciones = document.getElementById('alucinaciones');
    if (alucinaciones.checked) {
        document.getElementById("alucinacionesR").checked = true;
    }
    var anuria = document.getElementById('anuria');
    if (alucinaciones.checked) {
        document.getElementById("anuriaR").checked = true;
    }
    var arritmia = document.getElementById('arritmia');
    if (arritmia.checked) {
        document.getElementById("arritmiaR").checked = true;
    }
    var asintomatico = document.getElementById('asintomatico');
    if (asintomatico.checked) {
        document.getElementById("asintomaticoR").checked = true;
    }
    var ataxia = document.getElementById('ataxia');
    if (ataxia.checked) {
        document.getElementById("ataxiaR").checked = true;
    }
    var bradicardia = document.getElementById('bradicardia');
    if (bradicardia.checked) {
        document.getElementById("bradicardiaR").checked = true;
    }
    var cefalea = document.getElementById('cefalea');
    if (cefalea.checked) {
        document.getElementById("cefaleaR").checked = true;
    }
    var cianosis = document.getElementById('cianosis');
    if (cianosis.checked) {
        document.getElementById("cianosisR").checked = true;
    }
    var coma = document.getElementById('coma');
    if (coma.checked) {
        document.getElementById("comaR").checked = true;
    }
    var confusion = document.getElementById('confusion');
    if (confusion.checked) {
        document.getElementById("confusionR").checked = true;
    }
    var convulsiones = document.getElementById('convulsiones');
    if (convulsiones.checked) {
        document.getElementById("convulsionesR").checked = true;
    }
    var debilidad = document.getElementById('debilidad');
    if (debilidad.checked) {
        document.getElementById("debilidadR").checked = true;
    }
    var diaforesis = document.getElementById('diaforesis');
    if (diaforesis.checked) {
        document.getElementById("diaforesisR").checked = true;
    }
    var diarrea = document.getElementById('diarrea');
    if (diarrea.checked) {
        document.getElementById("diarreaR").checked = true;
    }
    var disnea = document.getElementById('disnea');
    if (disnea.checked) {
        document.getElementById("disneaR").checked = true;
    }
    var dolor = document.getElementById('dolor');
    if (dolor.checked) {
        document.getElementById("dolorR").checked = true;
    }
    var dolorAbdominal = document.getElementById('dolorAbdominal');
    if (dolorAbdominal.checked) {
        document.getElementById("dolorAbdominalR").checked = true;
    }
    var dolorPecho = document.getElementById('dolorPecho');
    if (dolorPecho.checked) {
        document.getElementById("dolorPechoR").checked = true;
    }
    var edema = document.getElementById('edema');
    if (edema.checked) {
        document.getElementById("edemaR").checked = true;
    }
    var edemaPulmonar = document.getElementById('edemaPulmonar');
    if (edemaPulmonar.checked) {
        document.getElementById("edemaPulmonarR").checked = true;
    }
    var enrojecimiento = document.getElementById('enrojecimiento');
    if (enrojecimiento.checked) {
        document.getElementById("enrojecimientoR").checked = true;
    }
    var eritema = document.getElementById('eritema');
    if (eritema.checked) {
        document.getElementById("eritemaR").checked = true;
    }
    var extrapiramidalismo = document.getElementById('extrapiramidalismo');
    if (extrapiramidalismo.checked) {
        document.getElementById("extrapiramidalismoR").checked = true;
    }
    var fiebre = document.getElementById('fiebre');
    if (fiebre.checked) {
        document.getElementById("fiebreR").checked = true;
    }
    var hipertension = document.getElementById('hipertension');
    if (hipertension.checked) {
        document.getElementById("hipertensionR").checked = true;
    }
    var hipotermia = document.getElementById('hipotermia');
    if (hipotermia.checked) {
        document.getElementById("hipotermiaR").checked = true;
    }
    var hipotension = document.getElementById('hipotension');
    if (hipotension.checked) {
        document.getElementById("hipotensionR").checked = true;
    }
    var lcteria = document.getElementById('lcteria');
    if (lcteria.checked) {
        document.getElementById("lcteriaR").checked = true;
    }
    var irritabilidad = document.getElementById('irritabilidad');
    if (irritabilidad.checked) {
        document.getElementById("irritabilidadR").checked = true;
    }
    var irritacionOjos = document.getElementById('irritacionOjos');
    if (irritacionOjos.checked) {
        document.getElementById("irritacionOjosR").checked = true;
    }
    var irritacionOral = document.getElementById('irritacionOral');
    if (irritacionOral.checked) {
        document.getElementById("irritacionOralR").checked = true;
    }
    var irritacionPiel = document.getElementById('irritacionPiel');
    if (irritacionPiel.checked) {
        document.getElementById("irritacionPielR").checked = true;
    }
    var letargia = document.getElementById('letargia');
    if (letargia.checked) {
        document.getElementById("letargiaR").checked = true;
    }
    var mareo = document.getElementById('mareo');
    if (mareo.checked) {
        document.getElementById("mareoR").checked = true;
    }
    var midriasis = document.getElementById('midriasis');
    if (midriasis.checked) {
        document.getElementById("midriasisR").checked = true;
    }
    var miosis = document.getElementById('miosis');
    if (miosis.checked) {
        document.getElementById("miosisR").checked = true;
    }
    var nauseas = document.getElementById('nauseas');
    if (nauseas.checked) {
        document.getElementById("nauseasR").checked = true;
    }
    var neumonia = document.getElementById('neumonia');
    if (neumonia.checked) {
        document.getElementById("neumoniaR").checked = true;
    }
    var oliguria = document.getElementById('oliguria');
    if (oliguria.checked) {
        document.getElementById("oliguriaR").checked = true;
    }
    var palidez = document.getElementById('palidez');
    if (palidez.checked) {
        document.getElementById("palidezR").checked = true;
    }
    var parestesias = document.getElementById('parestesias');
    if (parestesias.checked) {
        document.getElementById("parestesiasR").checked = true;
    }
    var paroCR = document.getElementById('paroCR');
    if (paroCR.checked) {
        document.getElementById("paroCRR").checked = true;
    }
    var prurito = document.getElementById('prurito');
    if (prurito.checked) {
        document.getElementById("pruritoR").checked = true;
    }
    var quemaduraPiel = document.getElementById('quemaduraPiel');
    if (quemaduraPiel.checked) {
        document.getElementById("quemaduraPielR").checked = true;
    }
    var quemaduraOral = document.getElementById('quemaduraOral');
    if (quemaduraOral.checked) {
        document.getElementById("quemaduraOralR").checked = true;
    }
    var rash = document.getElementById('rash');
    if (rash.checked) {
        document.getElementById("rashR").checked = true;
    }
    var rigidezMuscular = document.getElementById('rigidezMuscular');
    if (rigidezMuscular.checked) {
        document.getElementById("rigidezMuscularR").checked = true;
    }
    var salivacion = document.getElementById('salivacion');
    if (salivacion.checked) {
        document.getElementById("salivacionR").checked = true;
    }
    var sintomasDes = document.getElementById('sintomasDes');
    if (sintomasDes.checked) {
        document.getElementById("sintomasDesR").checked = true;
    }
    var somnolencia = document.getElementById('somnolencia');
    if (somnolencia.checked) {
        document.getElementById("somnolenciaR").checked = true;
    }
    var taquicardia = document.getElementById('taquicardia');
    if (taquicardia.checked) {
        document.getElementById("taquicardiaR").checked = true;
    }
    var tos = document.getElementById('tos');
    if (tos.checked) {
        document.getElementById("tosR").checked = true;
    }
    var tremors = document.getElementById('tremors');
    if (tremors.checked) {
        document.getElementById("tremorsR").checked = true;
    }
    var vertigo = document.getElementById('vertigo');
    if (vertigo.checked) {
        document.getElementById("vertigoR").checked = true;
    }
    var visionBorrosa = document.getElementById('visionBorrosa');
    if (visionBorrosa.checked) {
        document.getElementById("visionBorrosaR").checked = true;
    }
    var vomito = document.getElementById('vomito');
    if (vomito.checked) {
        document.getElementById("vomitoR").checked = true;
    }

    //CAUSAS 
    var accidente = document.getElementById('accidente');
    if (accidente.checked) {
        document.getElementById("accidenteR").checked = true;
    }
    var desconocida = document.getElementById('desconocida');
    if (desconocida.checked) {
        document.getElementById("desconocidaR").checked = true;
    }
    var otra = document.getElementById('otra');
    if (otra.checked) {
        document.getElementById("otraR").checked = true;
    }
    var quimico = document.getElementById('quimico');
    if (quimico.checked) {
        document.getElementById("quimicoR").checked = true;
    }
    var terapeutico = document.getElementById('terapeutico');
    if (terapeutico.checked) {
        document.getElementById("terapeuticoR").checked = true;
    }
    var reacAlimentos = document.getElementById('reacAlimentos');
    if (reacAlimentos.checked) {
        document.getElementById("reacAlimentosR").checked = true;
    }
    var adiccion = document.getElementById('adiccion');
    if (adiccion.checked) {
        document.getElementById("adiccionR").checked = true;
    }
    var malUso = document.getElementById('malUso');
    if (malUso.checked) {
        document.getElementById("malUsoR").checked = true;
    }
    var reacMedicamento = document.getElementById('reacMedicamento');
    if (reacMedicamento.checked) {
        document.getElementById("reacMedicamentoR").checked = true;
    }
    var alimentos = document.getElementById('alimentos');
    if (alimentos.checked) {
        document.getElementById("alimentosR").checked = true;
    }
    var maliciosa = document.getElementById('maliciosa');
    if (maliciosa.checked) {
        document.getElementById("maliciosaR").checked = true;
    }
    var reacOtros = document.getElementById('reacOtros');
    if (reacOtros.checked) {
        document.getElementById("reacOtrosR").checked = true;
    }
    var ambiental = document.getElementById('ambiental');
    if (ambiental.checked) {
        document.getElementById("ambientalR").checked = true;
    }
    var folklorica = document.getElementById('folklorica');
    if (folklorica.checked) {
        document.getElementById("folkloricaR").checked = true;
    }
    var aborto = document.getElementById('aborto');
    if (aborto.checked) {
        document.getElementById("aborto").checked = true;
    }
    var automedicacion = document.getElementById('automedicacion');
    if (automedicacion.checked) {
        document.getElementById("automedicacionR").checked = true;
    }
    var ocupacional = document.getElementById('ocupacional');
    if (ocupacional.checked) {
        document.getElementById("ocupacionalR").checked = true;
    }
    var suicida = document.getElementById('suicida');
    if (suicida.checked) {
        document.getElementById("suicidaR").checked = true;
    }
    var trasvase = document.getElementById('trasvase');
    if (trasvase.checked) {
        document.getElementById("trasvaseR").checked = true;
    }
    var errorTerapeutico = document.getElementById('errorTerapeutico');
    if (errorTerapeutico.checked) {
        document.getElementById("errorTerapeuticoR").checked = true;
    }
    var proteccion = document.getElementById('proteccion');
    if (proteccion.checked) {
        document.getElementById("proteccionR").checked = true;
    }

    //RUTA
    var descon = document.getElementById('descon');
    if (descon.checked) {
        document.getElementById("desconR").checked = true;
    }
    var ingestion = document.getElementById('ingestion');
    if (ingestion.checked) {
        document.getElementById("ingestionR").checked = true;
    }
    var inhalacion = document.getElementById('inhalacion');
    if (inhalacion.checked) {
        document.getElementById("inhalacionR").checked = true;
    }
    var inhalacionPiel = document.getElementById('inhalacionPiel');
    if (inhalacionPiel.checked) {
        document.getElementById("inhalacionPielR").checked = true;
    }
    var mordedura = document.getElementById('mordedura');
    if (mordedura.checked) {
        document.getElementById("mordeduraR").checked = true;
    }
    var ojos = document.getElementById('ojos');
    if (ojos.checked) {
        document.getElementById("ojosR").checked = true;
    }
    var otros1 = document.getElementById('otros1');
    if (otros1.checked) {
        document.getElementById("otros1R").checked = true;
    }
    var parental = document.getElementById('parental');
    if (parental.checked) {
        document.getElementById("parentalR").checked = true;
    }
    var picadura = document.getElementById('picadura');
    if (picadura.checked) {
        document.getElementById("picaduraR").checked = true;
    }
    var piel = document.getElementById('piel');
    if (piel.checked) {
        document.getElementById("pielR").checked = true;
    }

    //Tratamiento
    var agenteTerapeutico = document.getElementById('agenteTerapeutico');
    if (agenteTerapeutico.checked) {
        document.getElementById("agenteTerapeuticoR").checked = true;
    }
    var alalnización = document.getElementById('alalnización');
    if (alalnización.checked) {
        document.getElementById("alalnizaciónR").checked = true;

    }
    var antidoto = document.getElementById('antidoto');
    if (antidoto.checked) {
        document.getElementById("antidotoR").checked = true;

    }
    var carbon = document.getElementById('carbon');
    if (carbon.checked) {
        document.getElementById("carbonR").checked = true;

    }
    var carbon4 = document.getElementById('carbon4');
    if (carbon4.checked) {
        document.getElementById("carbon4R").checked = true;

    }
    var catarico = document.getElementById('catarico');
    if (catarico.checked) {
        document.getElementById("cataricoR").checked = true;

    }
    var demulcente = document.getElementById('demulcente');
    if (demulcente.checked) {
        document.getElementById("demulcenteR").checked = true;

    }
    var descartarTex = document.getElementById('descartarTex');
    if (descartarTex.checked) {
        document.getElementById("descartarTexR").checked = true;

    }
    var desconocido = document.getElementById('desconocido');
    if (desconocido.checked) {
        document.getElementById("desconocidoR").checked = true;

    }
    var dilucion = document.getElementById('dilucion');
    if (dilucion.checked) {
        document.getElementById("dilucionR").checked = true;

    }
    var exg = document.getElementById('exg');
    if (exg.checked) {
        document.getElementById("exgR").checked = true;

    }
    var electrolros = document.getElementById('electrolros');
    if (electrolros.checked) {
        document.getElementById("electrolrosR").checked = true;

    }
    var endoscopia = document.getElementById('endoscopia');
    if (endoscopia.checked) {
        document.getElementById("endoscopiaR").checked = true;

    }
    var glcema = document.getElementById('endoscopia');
    if (glcema.checked) {
        document.getElementById("endoscopiaR").checked = true;
    }
    var hemograma = document.getElementById('hemograma');
    if (hemograma.checked) {
        document.getElementById("hemogramaR").checked = true;

    }
    var lavadoBoca = document.getElementById('lavadoBoca');
    if (lavadoBoca.checked) {
        document.getElementById("lavadoBocaR").checked = true;

    }
    var lavadoGastrico = document.getElementById('lavadoGastrico');
    if (lavadoGastrico.checked) {
        document.getElementById("lavadoGastrico").checked = true;

    }
    var lavadoOjos = document.getElementById('lavadoOjos');
    if (lavadoOjos.checked) {
        document.getElementById("lavadoOjosR").checked = true;

    }
    var lavadoPiel = document.getElementById('lavadoPiel');
    if (lavadoPiel.checked) {
        document.getElementById("lavadoPielR").checked = true;

    }
    var leche = document.getElementById('leche');
    if (leche.checked) {
        document.getElementById("lecheR").checked = true;

    }
    var leucograma = document.getElementById('leucograma');
    if (leucograma.checked) {
        document.getElementById("leucogramaR").checked = true;

    }
    var ninguno = document.getElementById('ninguno');
    if (ninguno.checked) {
        document.getElementById("ningunoR").checked = true;

    }
    var nivelesPlasma = document.getElementById('nivelesPlasma');
    if (nivelesPlasma.checked) {
        document.getElementById("nivelesPlasmaR").checked = true;

    }
    var noInducir = document.getElementById('noInducir');
    if (noInducir.checked) {
        document.getElementById("noInducirR").checked = true;

    }
    var observacion = document.getElementById('observacion');
    if (observacion.checked) {
        document.getElementById("observacionR").checked = true;

    }
    var otros2 = document.getElementById('otros2');
    if (otros2.checked) {
        document.getElementById("otros2R").checked = true;

    }
    var oxigenoterapia = document.getElementById('oxigenoterapia');
    if (oxigenoterapia.checked) {
        document.getElementById("oxigenoterapiaR").checked = true;

    }
    var pfHepatica = document.getElementById('pfHepatica');
    if (pfHepatica.checked) {
        document.getElementById("pfHepaticaR").checked = true;

    }
    var pfRenal = document.getElementById('pfRenal');
    if (pfRenal.checked) {
        document.getElementById("pfRenalR").checked = true;

    }
    var rayosX = document.getElementById('rayosX');
    if (rayosX.checked) {
        document.getElementById("rayosXR").checked = true;

    }
    var terapiaSoporte = document.getElementById('terapiaSoporte');
    if (terapiaSoporte.checked) {
        document.getElementById("terapiaSoporteR").checked = true;

    }
    var tierraFuller = document.getElementById('tierraFuller');
    if (tierraFuller.checked) {
        document.getElementById("tierraFullerR").checked = true;

    }
    var tpYtat = document.getElementById('tpYtat');
    if (tpYtat.checked) {
        document.getElementById("tpYtatR").checked = true;

    }
    var trasladoStat = document.getElementById('trasladoStat');
    if (trasladoStat.checked) {
        document.getElementById("trasladoStat").checked = true;

    }
    var veloracionMedica = document.getElementById('veloracionMedica');
    if (veloracionMedica.checked) {
        document.getElementById("veloracionMedicaR").checked = true;

    }
    var traslado = document.getElementById('traslado');
    if (traslado.checked) {
        document.getElementById("trasladoR").checked = true;

    }

}




var DATOS = [];

function removeToxico(index) {

    let tableBody = document.getElementById('tbody');
    $("#tbody tr>td").remove();
    DATOS.splice(index, 1);
    toxicosAdd.splice(index, 1);
    // Recorriendo los datos de ejemplo
    tableBody.innerHTML = "";
    for (let i = 0; i < DATOS.length; i++) {
        indice = i;
        // Creando los 'td' que almacenarán cada parte de la información del usuario actual
        let generico = `<td>${DATOS[i].generico}</td>`;
        let codigo = `<td>${DATOS[i].codigo}</td>`;
        let marca = `<td>${DATOS[i].marca}</td>`;
        let cantidad = `<td>${DATOS[i].cantidad}</td>`;
        let presentacion = `<td>${DATOS[i].presentacion}</td>`;
        let eliminar = `<td><i style="color:red;" onclick="removeToxico(${indice})" class="fa fa-trash" aria-hidden="true"></i></td>`;

        tableBody.innerHTML += `<tr>${generico + codigo + marca + cantidad + presentacion + eliminar}</tr>`;
    }


}

function addToxico() {
    var indice = 0;
    var params = new FormData();
    var codtox = $('#codtox').val()
    var gen = $('#gen').val();
    var cant = $('#cant').val();
    var pres = $('#pres').val();
    params.append('descripcionTox', gen);
    var fechayhora = document.getElementById('fechaExpo').value

    var gener = gen.split(',')
    var codigotox = codtox.split(',')
    $.ajax({
        url: "/Home/Addtoxico",
        type: "GET",
        data: { id: gener[1] },
        dataType: "json",
        success: function (data) {

            DATOS.push({ generico: gener[1], codigo: codigotox[1], marca: data.data.descripcionClasi, cantidad: cant, presentacion: pres });
            toxicosAdd.push({ QuimiExp: gener[0], CodToxID: codigotox[0], Fecha: fechayhora, CantidadIng: cant, Presentacion: pres })
            // Obteniendo el cuerpo de la tabla a donde añadiremos nuestros datos
            let tableBody = document.getElementById('tbody');
            tableBody.innerHTML = "";
            // Recorriendo los datos de ejemplo
            for (let i = 0; i < DATOS.length; i++) {
                indice = i;
                // Creando los 'td' que almacenarán cada parte de la información del usuario actual
                let generico = `<td>${DATOS[i].generico}</td>`;
                let codigo = `<td>${DATOS[i].codigo}</td>`;
                let marca = `<td>${DATOS[i].marca}</td>`;
                let cantidad = `<td>${DATOS[i].cantidad}</td>`;
                let presentacion = `<td>${DATOS[i].presentacion}</td>`;
                let eliminar = `<td><i style="color:red;" onclick="removeToxico(${indice})" class="fa fa-trash" aria-hidden="true"></i></td>`;

                tableBody.innerHTML += `<tr>${generico + codigo + marca + cantidad + presentacion + eliminar}</tr>`;
            }
        }
    });
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


    if (n = 5) {
        mostrarResumen();
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


function SendData() {
    alert('La información se ha guardado de manera correcta.');
    var params = new FormData();
    var tipoConsulta = document.getElementById('tipoConsulta').value;
    var exp = document.getElementById('exp').value;
    var solicitante = document.getElementById('solicitante').value;
    var identificacion = document.getElementById('identificacion').value;
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    var sexo = $('#sexo').val()
    var peso = document.getElementById('peso').value;
    var canton = $('#canton').val();
    var otrasSeñas = document.getElementById('otrasSeñas').value;
    var telefono = document.getElementById('telefono').value;
    var numSemanas = 0;
    var embarazo = document.getElementById('embarazo');

    if (embarazo.checked) {
        embarazo = 1;
        numSemanas = document.getElementById('numS').value;
    } else {
        embarazo = 0;
    }

    var lactancia = document.getElementById('lactancia');
    if (lactancia.checked) {
        lactancia = 1;
    } else {
        lactancia = 0;
    }

    var fallecimiento = document.getElementById('fallecimiento');
    if (fallecimiento.checked) {
        fallecimiento = 1;
    } else {
        fallecimiento = 0;
    }

    params.append('Direccion.OtrosRasgos', otrasSeñas)
    params.append('Direccion.CantonID', canton)
    params.append('Consulta.TipoConsultanteID', tipoConsulta);
    params.append('Consulta.NConsulta', exp);
    params.append('Consulta.Solicitante', solicitante);
    params.append('Paciente.CedulaID', identificacion);
    params.append('Paciente.Nombre', nombre);
    params.append('Paciente.Edad', edad);
    params.append('Paciente.SexoID', sexo);
    params.append('Paciente.Peso', peso);
    params.append('Paciente.Direccion.CantonID', canton);
    params.append('Paciente.Direccion.OtrosRasgos', otrasSeñas);
    params.append('Paciente.NumeroTelefonico', telefono);
    params.append('Paciente.NSemanasEmb', numSemanas);
    params.append('Paciente.EmbarazoSN', embarazo);
    params.append('Paciente.Lactancia', lactancia);



    var entidad = $('#entidad').val();


    params.append('Paciente.FallecidoSN', fallecimiento);
    params.append('Consulta.EntidadID', entidad);
    params.append('Consutla.Fecha', document.getElementById('fechaConsulta').value);
    params.append('Consutla.IntoxicacionHumanaSN', 1);

    //Exposicion

    var Exposicion = [];

    var fechaExpo = document.getElementById('fechaExpo').value;

    var metabolica = document.getElementById('metabolica');
    if (metabolica.checked) {
        Exposicion.push({ codigo: '1' });
    }
    var alucinaciones = document.getElementById('alucinaciones');
    if (alucinaciones.checked) {
        Exposicion.push({ codigo: '2' });
    }
    var anuria = document.getElementById('anuria');
    if (alucinaciones.checked) {
        Exposicion.push({ codigo: '3' });
    }
    var arritmia = document.getElementById('arritmia');
    if (arritmia.checked) {
        Exposicion.push({ codigo: '4' });
    }
    var asintomatico = document.getElementById('asintomatico');
    if (asintomatico.checked) {
        Exposicion.push({ codigo: '5' });
    }
    var ataxia = document.getElementById('ataxia');
    if (ataxia.checked) {
        Exposicion.push({ codigo: '6' });
    }
    var bradicardia = document.getElementById('bradicardia');
    if (bradicardia.checked) {
        Exposicion.push({ codigo: '7' });
    }
    var cefalea = document.getElementById('cefalea');
    if (cefalea.checked) {
        Exposicion.push({ codigo: '7' });
    }
    var cianosis = document.getElementById('cianosis');
    if (cianosis.checked) {
        Exposicion.push({ codigo: '8' });
    }
    var coma = document.getElementById('coma');
    if (coma.checked) {
        Exposicion.push({ codigo: '9' });
    }
    var confusion = document.getElementById('confusion');
    if (confusion.checked) {
        Exposicion.push({ codigo: '10' });
    }
    var convulsiones = document.getElementById('convulsiones');
    if (convulsiones.checked) {
        Exposicion.push({ codigo: '11' });
    }
    var debilidad = document.getElementById('debilidad');
    if (debilidad.checked) {
        Exposicion.push({ codigo: '12' });
    }
    var diaforesis = document.getElementById('diaforesis');
    if (diaforesis.checked) {
        Exposicion.push({ codigo: '13' });
    }
    var diarrea = document.getElementById('diarrea');
    if (diarrea.checked) {
        Exposicion.push({ codigo: '14' });
    }
    var disnea = document.getElementById('disnea');
    if (disnea.checked) {
        Exposicion.push({ codigo: '15' });
    }
    var dolor = document.getElementById('dolor');
    if (dolor.checked) {
        Exposicion.push({ codigo: '16' });
    }
    var dolorAbdominal = document.getElementById('dolorAbdominal');
    if (dolorAbdominal.checked) {
        Exposicion.push({ codigo: '17' });
    }
    var dolorPecho = document.getElementById('dolorPecho');
    if (dolorPecho.checked) {
        Exposicion.push({ codigo: '18' });
    }
    var edema = document.getElementById('edema');
    if (edema.checked) {
        Exposicion.push({ codigo: '19' });
    }
    var edemaPulmonar = document.getElementById('edemaPulmonar');
    if (edemaPulmonar.checked) {
        Exposicion.push({ codigo: '20' });
    }
    var enrojecimiento = document.getElementById('enrojecimiento');
    if (enrojecimiento.checked) {
        Exposicion.push({ codigo: '21' });
    }
    var eritema = document.getElementById('eritema');
    if (eritema.checked) {
        Exposicion.push({ codigo: '22' });
    }
    var extrapiramidalismo = document.getElementById('extrapiramidalismo');
    if (extrapiramidalismo.checked) {
        Exposicion.push({ codigo: '23' });
    }
    var fiebre = document.getElementById('fiebre');
    if (fiebre.checked) {
        Exposicion.push({ codigo: '24' });
    }
    var hipertension = document.getElementById('hipertension');
    if (hipertension.checked) {
        Exposicion.push({ codigo: '25' });
    }
    var hipotermia = document.getElementById('hipotermia');
    if (hipotermia.checked) {
        Exposicion.push({ codigo: '26' });
    }
    var hipotension = document.getElementById('hipotension');
    if (hipotension.checked) {
        Exposicion.push({ codigo: '27' });
    }
    var lcteria = document.getElementById('lcteria');
    if (lcteria.checked) {
        Exposicion.push({ codigo: '28' });
    }
    var irritabilidad = document.getElementById('irritabilidad');
    if (irritabilidad.checked) {
        Exposicion.push({ codigo: '29' });
    }
    var irritacionOjos = document.getElementById('irritacionOjos');
    if (irritacionOjos.checked) {
        Exposicion.push({ codigo: '30' });
    }
    var irritacionOral = document.getElementById('irritacionOral');
    if (irritacionOral.checked) {
        Exposicion.push({ codigo: '31' });
    }
    var irritacionPiel = document.getElementById('irritacionPiel');
    if (irritacionPiel.checked) {
        Exposicion.push({ codigo: '32' });
    }
    var letargia = document.getElementById('letargia');
    if (letargia.checked) {
        Exposicion.push({ codigo: '33' });
    }
    var mareo = document.getElementById('mareo');
    if (mareo.checked) {
        Exposicion.push({ codigo: '34' });
    }
    var midriasis = document.getElementById('midriasis');
    if (midriasis.checked) {
        Exposicion.push({ codigo: '35' });
    }
    var miosis = document.getElementById('miosis');
    if (miosis.checked) {
        Exposicion.push({ codigo: '36' });
    }
    var nauseas = document.getElementById('nauseas');
    if (nauseas.checked) {
        Exposicion.push({ codigo: '37' });
    }
    var neumonia = document.getElementById('neumonia');
    if (neumonia.checked) {
        Exposicion.push({ codigo: '38' });
    }
    var oliguria = document.getElementById('oliguria');
    if (oliguria.checked) {
        Exposicion.push({ codigo: '39' });
    }
    var palidez = document.getElementById('palidez');
    if (palidez.checked) {
        Exposicion.push({ codigo: '40' });
    }
    var parestesias = document.getElementById('parestesias');
    if (parestesias.checked) {
        Exposicion.push({ codigo: '41' });
    }
    var paroCR = document.getElementById('paroCR');
    if (paroCR.checked) {
        Exposicion.push({ codigo: '42' });
    }
    var prurito = document.getElementById('prurito');
    if (prurito.checked) {
        Exposicion.push({ codigo: '43' });
    }
    var quemaduraPiel = document.getElementById('quemaduraPiel');
    if (quemaduraPiel.checked) {
        Exposicion.push({ codigo: '44' });
    }
    var quemaduraOral = document.getElementById('quemaduraOral');
    if (quemaduraOral.checked) {
        Exposicion.push({ codigo: '45' });
    }
    var rash = document.getElementById('rash');
    if (rash.checked) {
        Exposicion.push({ codigo: '46' });
    }
    var rigidezMuscular = document.getElementById('rigidezMuscular');
    if (rigidezMuscular.checked) {
        Exposicion.push({ codigo: '47' });
    }
    var salivacion = document.getElementById('salivacion');
    if (salivacion.checked) {
        Exposicion.push({ codigo: '48' });
    }
    var sintomasDes = document.getElementById('sintomasDes');
    if (sintomasDes.checked) {
        Exposicion.push({ codigo: '49' });
    }
    var somnolencia = document.getElementById('somnolencia');
    if (somnolencia.checked) {
        Exposicion.push({ codigo: '50' });
    }
    var taquicardia = document.getElementById('taquicardia');
    if (taquicardia.checked) {
        Exposicion.push({ codigo: '51' });
    }
    var tos = document.getElementById('tos');
    if (tos.checked) {
        Exposicion.push({ codigo: '52' });
    }
    var tremors = document.getElementById('tremors');
    if (tremors.checked) {
        Exposicion.push({ codigo: '53' });
    }
    var vertigo = document.getElementById('vertigo');
    if (vertigo.checked) {
        Exposicion.push({ codigo: '54' });
    }
    var visionBorrosa = document.getElementById('visionBorrosa');
    if (visionBorrosa.checked) {
        Exposicion.push({ codigo: '55' });
    }
    var vomito = document.getElementById('vomito');
    if (vomito.checked) {
        Exposicion.push({ codigo: '56' });
    }

    params.append('ListaSintomasConsulta', JSON.stringify(Exposicion));

    params.append('', fechaExpo);


    //Signos 
    var presionArterial = document.getElementById('presionArterial').value;
    var frecuenciaCardiaca = document.getElementById('frecuenciaCardiaca').value;
    var temperatura = document.getElementById('temperatura').value;
    var instituido = document.getElementById('instituido').value;
    if (instituido.checked) {
        instituido = 'S';
    } else {
        instituido = 'N';
    }
    var txtInstituido = document.getElementById('txtInstituido').value;


    params.append('Signos.PresionArterial', presionArterial);
    params.append('Signos.FC', frecuenciaCardiaca);
    params.append('Signos.Temperatura', temperatura);
    params.append('Signos.', instituido);
    params.append('Signos.', txtInstituido);

    //Causa

    var Causa = [];

    var accidente = document.getElementById('accidente');
    if (accidente.checked) {
        Causa.push({ codigo: '1' });
    }
    var desconocida = document.getElementById('desconocida');
    if (desconocida.checked) {
        Causa.push({ codigo: '2' });
    }
    var otra = document.getElementById('otra');
    if (otra.checked) {
        Causa.push({ codigo: '3' });
    }
    var quimico = document.getElementById('quimico');
    if (quimico.checked) {
        Causa.push({ codigo: '4' });
    }
    var terapeutico = document.getElementById('terapeutico');
    if (terapeutico.checked) {
        Causa.push({ codigo: '5' });
    }
    var reacAlimentos = document.getElementById('reacAlimentos');
    if (reacAlimentos.checked) {
        Causa.push({ codigo: '6' });
    }
    var adiccion = document.getElementById('adiccion');
    if (adiccion.checked) {
        Causa.push({ codigo: '7' });
    }
    var malUso = document.getElementById('malUso');
    if (malUso.checked) {
        Causa.push({ codigo: '8' });
    }
    var reacMedicamento = document.getElementById('reacMedicamento');
    if (reacMedicamento.checked) {
        Causa.push({ codigo: '9' });
    }
    var alimentos = document.getElementById('alimentos');
    if (alimentos.checked) {
        Causa.push({ codigo: '10' });
    }
    var maliciosa = document.getElementById('maliciosa');
    if (maliciosa.checked) {
        Causa.push({ codigo: '11' });
    }
    var reacOtros = document.getElementById('reacOtros');
    if (reacOtros.checked) {
        Causa.push({ codigo: '12' });
    }
    var ambiental = document.getElementById('ambiental');
    if (ambiental.checked) {
        Causa.push({ codigo: '13' });
    }
    var folklorica = document.getElementById('folklorica');
    if (folklorica.checked) {
        Causa.push({ codigo: '14' });
    }
    var aborto = document.getElementById('aborto');
    if (aborto.checked) {
        Causa.push({ codigo: '15' });
    }
    var automedicacion = document.getElementById('automedicacion');
    if (automedicacion.checked) {
        Causa.push({ codigo: '16' });
    }
    var ocupacional = document.getElementById('ocupacional');
    if (ocupacional.checked) {
        Causa.push({ codigo: '17' });
    }
    var suicida = document.getElementById('suicida');
    if (suicida.checked) {
        Causa.push({ codigo: '18' });
    }
    var trasvase = document.getElementById('trasvase');
    if (trasvase.checked) {
        Causa.push({ codigo: '19' });
    }
    var errorTerapeutico = document.getElementById('errorTerapeutico');
    if (errorTerapeutico.checked) {
        Causa.push({ codigo: '20' });
    }
    var proteccion = document.getElementById('proteccion');
    if (proteccion.checked) {
        Causa.push({ codigo: '21' }).value;
    }

    params.append('ListaCausaConsulta', JSON.stringify(Causa));

    //Ruta
    var Ruta = [];

    var descon = document.getElementById('descon');
    if (descon.checked) {
        Ruta.push({ codigo: '1' });
    }
    var ingestion = document.getElementById('ingestion');
    if (ingestion.checked) {
        Ruta.push({ codigo: '2' });

    }
    var inhalacion = document.getElementById('inhalacion');
    if (inhalacion.checked) {
        Ruta.push({ codigo: '3' });

    }
    var inhalacionPiel = document.getElementById('inhalacionPiel');
    if (inhalacionPiel.checked) {
        Ruta.push({ codigo: '4' });

    }
    var mordedura = document.getElementById('mordedura');
    if (mordedura.checked) {
        Ruta.push({ codigo: '5' });

    }
    var ojos = document.getElementById('ojos');
    if (ojos.checked) {
        Ruta.push({ codigo: '6' });

    }
    var otros1 = document.getElementById('otros1');
    if (otros1.checked) {
        Ruta.push({ codigo: '7' });

    }
    var parental = document.getElementById('parental');
    if (parental.checked) {
        Ruta.push({ codigo: '8' });

    }
    var picadura = document.getElementById('picadura');
    if (picadura.checked) {
        Ruta.push({ codigo: '9' });

    }
    var piel = document.getElementById('piel');
    if (piel.checked) {
        Ruta.push({ codigo: '10' });

    }

    params.append('ListaRuta', JSON.stringify(Ruta));

    //Tratamiento
    var agenteTerapeutico = document.getElementById('agenteTerapeutico');

    var Tratamiento = [];

    if (agenteTerapeutico.checked) {
        Tratamiento.push({ codigo: '1' });
    }
    var alalnización = document.getElementById('alalnización');
    if (alalnización.checked) {
        Tratamiento.push({ codigo: '2' });

    }
    var antidoto = document.getElementById('antidoto');
    if (antidoto.checked) {
        Tratamiento.push({ codigo: '3' });

    }
    var carbon = document.getElementById('carbon');
    if (carbon.checked) {
        Tratamiento.push({ codigo: '4' });

    }
    var carbon4 = document.getElementById('carbon4');
    if (carbon4.checked) {
        Tratamiento.push({ codigo: '5' });

    }
    var catarico = document.getElementById('catarico');
    if (catarico.checked) {
        Tratamiento.push({ codigo: '6' });

    }
    var demulcente = document.getElementById('demulcente');
    if (demulcente.checked) {
        Tratamiento.push({ codigo: '7' });

    }
    var descartarTex = document.getElementById('descartarTex');
    if (descartarTex.checked) {
        Tratamiento.push({ codigo: '8' });

    }
    var desconocido = document.getElementById('desconocido');
    if (desconocido.checked) {
        Tratamiento.push({ codigo: '9' });

    }
    var dilucion = document.getElementById('dilucion');
    if (dilucion.checked) {
        Tratamiento.push({ codigo: '10' });

    }
    var exg = document.getElementById('exg');
    if (exg.checked) {
        Tratamiento.push({ codigo: '11' });

    }
    var electrolros = document.getElementById('electrolros');
    if (electrolros.checked) {
        Tratamiento.push({ codigo: '12' });

    }
    var endoscopia = document.getElementById('endoscopia');
    if (endoscopia.checked) {
        Tratamiento.push({ codigo: '13' });

    }
    var glcema = document.getElementById('glcema');
    if (glcema.checked) {
        Tratamiento.push({ codigo: '14' });

    }
    var hemograma = document.getElementById('hemograma');
    if (hemograma.checked) {
        Tratamiento.push({ codigo: '15' });

    }
    var lavadoBoca = document.getElementById('lavadoBoca');
    if (lavadoBoca.checked) {
        Tratamiento.push({ codigo: '16' });

    }
    var lavadoGastrico = document.getElementById('lavadoGastrico');
    if (lavadoGastrico.checked) {
        Tratamiento.push({ codigo: '17' });

    }
    var lavadoOjos = document.getElementById('lavadoOjos');
    if (lavadoOjos.checked) {
        Tratamiento.push({ codigo: '18' });

    }
    var lavadoPiel = document.getElementById('lavadoPiel');
    if (lavadoPiel.checked) {
        Tratamiento.push({ codigo: '19' });

    }
    var leche = document.getElementById('leche');
    if (leche.checked) {
        Tratamiento.push({ codigo: '20' });

    }
    var leucograma = document.getElementById('leucograma');
    if (leucograma.checked) {
        Tratamiento.push({ codigo: '21' });

    }
    var ninguno = document.getElementById('ninguno');
    if (ninguno.checked) {
        Tratamiento.push({ codigo: '22' });

    }
    var nivelesPlasma = document.getElementById('nivelesPlasma');
    if (nivelesPlasma.checked) {
        Tratamiento.push({ codigo: '23' });

    }
    var noInducir = document.getElementById('noInducir');
    if (noInducir.checked) {
        Tratamiento.push({ codigo: '24' });

    }
    var observacion = document.getElementById('observacion');
    if (observacion.checked) {
        Tratamiento.push({ codigo: '25' });

    }
    var otros2 = document.getElementById('otros2');
    if (otros2.checked) {
        Tratamiento.push({ codigo: '26' });

    }
    var oxigenoterapia = document.getElementById('oxigenoterapia');
    if (oxigenoterapia.checked) {
        Tratamiento.push({ codigo: '27' });

    }
    var pfHepatica = document.getElementById('pfHepatica');
    if (pfHepatica.checked) {
        Tratamiento.push({ codigo: '28' });

    }
    var pfRenal = document.getElementById('pfRenal');
    if (pfRenal.checked) {
        Tratamiento.push({ codigo: '29' });

    }
    var rayosX = document.getElementById('rayosX');
    if (rayosX.checked) {
        Tratamiento.push({ codigo: '30' });

    }
    var terapiaSoporte = document.getElementById('terapiaSoporte');
    if (terapiaSoporte.checked) {
        Tratamiento.push({ codigo: '31' });

    }
    var tierraFuller = document.getElementById('tierraFuller');
    if (tierraFuller.checked) {
        Tratamiento.push({ codigo: '32' });

    }
    var tpYtat = document.getElementById('tpYtat');
    if (tpYtat.checked) {
        Tratamiento.push({ codigo: '33' });

    }
    var trasladoStat = document.getElementById('trasladoStat');
    if (trasladoStat.checked) {
        Tratamiento.push({ codigo: '34' });

    }
    var veloracionMedica = document.getElementById('veloracionMedica');
    if (veloracionMedica.checked) {
        Tratamiento.push({ codigo: '35' });

    }
    var traslado = document.getElementById('traslado');
    if (traslado.checked) {
        Tratamiento.push({ codigo: '36' });

    }
    var notas = document.getElementById('notas').value;

    params.append('ListaRecomendacionTratamiento', JSON.stringify(Tratamiento));
    params.append('Notas', notas);
    params.append('listaExposicion', JSON.stringify(toxicosAdd));
    //var descr = document.getElementById('solicitante').value;
    //var params = new FormData();
    //params.append('NumeroExpediente', 11);
    //params.append('Paciente.Identificacion', "207830787");



    //Agregar consulta asesoria
    var preguntaConsulta = document.getElementById('preguntaConsulta').value;
    var obsConsulta = document.getElementById('obsConsulta').value;
    var tipoAsesoria = document.getElementById('tipoAsesoria').value;

    params.append('ConsultaAsesoria.PreguntaAsesoriaID', preguntaConsulta);
    params.append('ConsultaAsesoria.TipoAsesoriaID', tipoAsesoria);
    params.append('ConsultaAsesoria.Observaciones', obsConsulta);




    $.ajax({
        type: "POST",
        url: "/Home/MyService",
        data: params,
        contentType: false,
        processData: false,
        dataType: 'json',
        headers: { RequestVerificationToken: $('input:hidden[name="__RequestVerificationToken"]').val() },
        success: function (data) {

        },
        error: function (data) {

            //console.log("Se dectecto un problema con la carga de Información");
        }
    });


}

$(document).ready(function () {
    IniSelect2($("select"));

    $.ajax({
        url: "/Home/Lista",
        type: "GET",
        data: {},
        //contentType: "application/json",
        dataType: "json",
        success: function (data) {
            var html = "<select><option> Seleccione </option>";
            for (key in data.data) {

                html += "<option value='" + data.data[key].entidadID + "'>" + data.data[key].descripcionEnti + "</option>";
            }
            html += "</select";
            $('#entidad').html(html);

        }
    });
    $.ajax({
        url: "/Home/ListaCodTox",
        type: "GET",
        data: {},
        //contentType: "application/json",
        dataType: "json",
        success: function (data) {
            var html = "<select><option> Seleccione </option>";
            for (key in data.data) {
                var a = `${data.data[key].codToxID},${data.data[key].descripcionTox}`
                html += "<option value='" + a + "'>" + data.data[key].descripcionTox + "</option>";
            }
            html += "</select";
            $('#codtox').html(html);

        }
    });
    $.ajax({
        url: "/Home/ListaCantones",
        type: "GET",
        data: {},
        //contentType: "application/json",
        dataType: "json",
        success: function (data) {
            var html = "<select><option> Seleccione </option>";
            for (key in data.data) {

                html += "<option value='" + data.data[key].cantonID + "'>" + data.data[key].descripcion + "</option>";
            }
            html += "</select";
            $('#canton').html(html);

        }
    });
    $.ajax({
        url: "/Home/ListaProvincia",
        type: "GET",
        data: {},
        //contentType: "application/json",
        dataType: "json",
        success: function (data) {
            var html = "<select><option> Seleccione </option>";
            for (key in data.data) {

                html += "<option value='" + data.data[key].provinciaID + "'>" + data.data[key].descripcion + "</option>";
            }
            html += "</select";
            $('#provincia').html(html);

        }
    });
    $.ajax({
        url: "/Home/ListaToxico",
        type: "GET",
        data: {},
        //contentType: "application/json",
        dataType: "json",
        success: function (data) {
            var html = "<select><option> Seleccione </option>";
            for (key in data.data) {
                var toxicoSus = ` ${data.data[key].sustanciaID},${data.data[key].descripconSustancia}`
html += "<option value='" + toxicoSus + "'>" + data.data[key].descripconSustancia + "</option>";

            }
            html += "</select";
            $('#gen').html(html);

        }
    });
    $.ajax({
        url: "/Home/ListaSexo",
        type: "GET",
        data: {},
        //contentType: "application/json",
        dataType: "json",
        success: function (data) {
            var html = "<select><option> Seleccione </option>";
            for (key in data.data) {

                html += "<option value='" + data.data[key].sexoID + "'>" + data.data[key].descripcion + "</option>";
            }
            html += "</select";
            $('#sexo').html(html);

        }
    });

   

});

var consultaAsesoramiento = document.getElementById('consultaAsesoramiento');
consultaAsesoramiento.addEventListener('click', function handleClick() {
    var step3 = document.getElementById('step3');
    var stepC3 = document.getElementById('stepC3');
    var step5 = document.getElementById('step5');
    var stepC5 = document.getElementById('stepC5');
    var boxPaciente = document.getElementById('boxPaciente');

    if (consultaAsesoramiento.checked) {

        step3.style.display = 'none';
        stepC3.style.visibility = 'hidden';
        step5.style.display = 'initial';
        stepC5.style.visibility = 'initial';
        boxPaciente.style.visibility = 'hidden';


        $(document).ready(function () {
            IniSelect2($("select"));
            $.ajax({
                url: "/Home/ListaPregunta",
                type: "GET",
                data: {},
                //contentType: "application/json",
                dataType: "json",
                success: function (data) {
                    var html = "<select><option> Seleccione </option>";
                    for (key in data.data) {

                        html += "<option value='" + data.data[key].preguntaAsesoriaID + "'>" + data.data[key].descripcionPreguntaAsesoria + "</option>";
                    }
                    html += "</select";
                    $('#preguntaConsulta').html(html);

                }
            });
        });



    } else {
        step3.style.display = 'initial';
        stepC3.style.visibility = 'initial';


        step5.style.display = 'none';
        stepC5.style.visibility = 'hidden';


        boxPaciente.style.visibility = 'initial';

        selectedItem(0);
    }
});



function IniSelect2(elemento) {
    elemento.select2({
        width: "100%"
    });
}