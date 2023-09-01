namespace Proyecto2023_GP.Models.Entidades
{
    public class Consulta
    {
        public string NConsulta { get; set; }
        public bool IntoxicacionHumanaSN { get; set; }
        public DateTime Fecha { get; set; }
        public bool e911 { get; set; }
        public int RutaID { get; set; }
        public int TipoConsultanteID { get; set; }
        public int EntidadID { get; set; }
        public string  Solicitante { get; set; }
      
      
    }
}
