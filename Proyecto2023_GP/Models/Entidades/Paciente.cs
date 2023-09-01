namespace Proyecto2023_GP.Models.Entidades
{
    public class Paciente
    {
        public string CedulaID { get; set; }
        public string Nombre { get; set; }
        public string SexoID { get; set; }
        public int Edad { get; set; }
        public int Peso { get; set; }
        public string NumeroTelefonico { get; set; }
        public bool EmbarazoSN { get; set; }
        public bool Lactancia { get; set; }
        public bool FallecidoSN { get; set; }
        public bool NConsulta { get; set; }
        public Direccion Direccion { get; set; }
        public int NSemanasEmb { get; set; }
      
    }
}
