namespace Proyecto2023_GP.Models.Entidades
{
    public class DatosGenerales
    {
        public Consulta Consulta { get; set; }
        public Paciente Paciente { get; set; }
        public string descripcionTox { get; set; }
        public Direccion Direccion { get; set; }
        public Signos Signos { get; set; }
        public ConsultaAsesoria ConsultaAsesoria { get; set; }
        public string ListaSintomasConsulta { get; set; }
        public Exposicion Exposicione { get; set; }
        public string ListaRecomendacionTratamiento { get; set; }
        public string ListaCausaConsulta { get; set; }
        public string ListaRuta { get; set; }

        //public IEnumerable<CausaConsulta> CausaConsulta { get; set; }

        //public RecomendacionTratamiento[] RecomendacionTratamie{ get; set; }

        public string listaExposicion { get; set; }
        public List<string> ListaSintomaConsulta { get; set; }


        public IEnumerable<Exposicion> Exposicion { get; set; }

        //public IEnumerable<SintomasConsulta> SintomaConsulta { get; set; }

        public int NumeroExpediente { get; set; }
        public DateTime fechaHora { get; set; }
        public string Solicitante { get; set; }
        public int TipoConsultanteID { get; set; }
        public string Notas { get; set; }
    }
}
