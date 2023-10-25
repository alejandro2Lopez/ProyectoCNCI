using Microsoft.AspNetCore.Mvc;
using Proyecto2023_GP.Models;
using Proyecto2023_GP.Models.Dato;
using Proyecto2023_GP.Models.Entidades;
using System.Diagnostics;
using System.Runtime.CompilerServices;
using Microsoft.Data.SqlClient;
using System.Data.SqlClient;
using System.Reflection;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace Proyecto2023_GP.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private ConexionDB conexionDB;
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
            conexionDB = new ConexionDB();
        }

        [HttpPost, ValidateAntiForgeryToken]
        public IActionResult MyService(DatosGenerales datosgenerales, IEnumerable<Exposicion>? listaExposicion)
        {
     
            conexionDB.AgregarConsulta(datosgenerales.Consulta);
            conexionDB.AgregarPaciente(datosgenerales.Paciente, datosgenerales.Consulta);
            conexionDB.AgregarDireccion(datosgenerales.Direccion, datosgenerales.Consulta);
            conexionDB.AgregarSignos(datosgenerales.Signos, datosgenerales.Consulta);
            conexionDB.AgregarConsultaAsesoria(datosgenerales.ConsultaAsesoria, datosgenerales.Consulta);
            var rutas = JsonConvert.DeserializeObject<IEnumerable<RutaConsulta>>(datosgenerales.ListaRuta);
            foreach (var dato in rutas)
            {

                conexionDB.AgregarRuta(dato.codigo, datosgenerales.Consulta);

            }
            var causas = JsonConvert.DeserializeObject<IEnumerable<CausaConsulta>>(datosgenerales.ListaCausaConsulta);

            foreach (var dato in causas)
            {

                conexionDB.AgregarCausaConsulta(dato.codigo, datosgenerales.Consulta);

            }

            var tratamientos = JsonConvert.DeserializeObject<IEnumerable<RecomendacionTratamiento>>(datosgenerales.ListaRecomendacionTratamiento);

            foreach (var dato in tratamientos)
            {

                conexionDB.AgregarTratamiento(dato.codigo, datosgenerales.Consulta);

            }


            
             var listaExposicio = JsonConvert.DeserializeObject<IEnumerable<Exposicion>>(datosgenerales.listaExposicion);
            foreach (var dato in listaExposicio)
            {
                conexionDB.AgregarExpocision(dato.QuimiExp,dato.CodToxID,dato.CantidadIng,dato.Presentacion,dato.Fecha, datosgenerales.Consulta);
            }

            Console.WriteLine(datosgenerales);
            var elemento = JsonConvert.DeserializeObject<IEnumerable<SintomasConsulta>>(datosgenerales.ListaSintomasConsulta);

            foreach (var dato in elemento)
            {
                
                conexionDB.AgregarSintomas(dato.codigo, datosgenerales.Consulta);
            }
           
           
            // Realizar acciones en .NET

            return Ok("");
        }


        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        public IActionResult Lista()
        {
            var elemeo = conexionDB.ListaEntidads().Result;
            return Ok(new { data = elemeo });
        }
        public IActionResult ListaCantones()
        {
            var elemeo = conexionDB.ListaCantones().Result;
            return Ok(new { data = elemeo });
        }
        public IActionResult ListaProvincia()
        {
            var elemeo = conexionDB.ListaProvincia().Result;
            return Ok(new { data = elemeo });
        }

        public ViewResult Index()
        {
            ViewBag.ListaTratamiento = conexionDB.ListaTratamiento().Result;
            ViewBag.ListaRuta = conexionDB.ListaRuta().Result;
            ViewBag.ListaCausa = conexionDB.ListaCausa().Result;
            ViewBag.ListaSintoma = conexionDB.ListaSintoma().Result;
            return View();
        }
        public IActionResult ListaToxico()
        {
            var elemeo = conexionDB.ListaToxico().Result;
            return Ok(new { data = elemeo });
        }
        public IActionResult ListaSexo()
        {
            var elemeo = conexionDB.ListaSexo().Result;
            return Ok(new { data = elemeo });
        }
        public IActionResult ListaCodTox()
        {
            var elemeo = conexionDB.ListaCodigoTox().Result;
            return Ok(new { data = elemeo });
        }

        public IActionResult ListaPregunta()
        {
            var elemeo = conexionDB.ListaPregunta().Result;
            return Ok(new { data = elemeo });
        }
        public IActionResult ListaTipoConsulta()
        {
            var elemeo = conexionDB.ListaTipoConsulta().Result;
            return Ok(new { data = elemeo });
        }
        public IActionResult ListaPatente()
        {
            var elemeo = conexionDB.ListaPatente().Result;
            return Ok(new { data = elemeo });
        }
        public IActionResult ListaAsesoria()
        {
            var elemeo = conexionDB.ListaTipoAsesoria().Result;
            return Ok(new { data = elemeo });
        }
        public IActionResult ListaTraslado()
        {
            var elemeo = conexionDB.ListaTraslado().Result;
            return Ok(new { data = elemeo });
        }
        public IActionResult Addtoxico(string id)
        {
            var elemeo = conexionDB.ToxicoAdd(id).Result;

            return Ok(new { data = elemeo });
        }

        public IActionResult GetListaCantones(int id)
        {
            var elemeo = conexionDB.ListaCantonesPorProvincia(id).Result;
            return Ok(new { data = elemeo });
        }
    }
  

    }


