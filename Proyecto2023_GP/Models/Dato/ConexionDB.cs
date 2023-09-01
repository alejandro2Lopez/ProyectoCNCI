using Microsoft.Data.SqlClient;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Proyecto2023_GP.Models.Entidades;
using System.Data;
using System.Reflection;
using System.Diagnostics;

namespace Proyecto2023_GP.Models.Dato
{
    public class ConexionDB
    {
        private string connString = "Data Source=DESKTOP-5BP4D4C\\SQLSERVERDEV2019;Initial Catalog=CNCIPrueba;Integrated Security=True;Persist Security Info=False;Pooling=False;MultipleActiveResultSets=False;Encrypt=False;TrustServerCertificate=False";

        public ConexionDB()
        {

        }

        public async Task<IEnumerable<Sintoma>> ListaSintomas()
        {
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            string query = "select * from [dbo].[Sintomas]";
            return await connection.QueryAsync<Sintoma>(query);
        }

        public async Task<Sintoma> Sintomas(int Id)
        {
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            string query = "select * from [dbo].[Sintomas]";
            return await connection.QueryFirstOrDefaultAsync<Sintoma>(query);
        }

        public void AgregarPaciente(Paciente paciente, Consulta consulta)
        {
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();


            SqlCommand cmd = new SqlCommand("AgregarPaciente", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@CedulaID", paciente.CedulaID);
            cmd.Parameters.AddWithValue("@Nombre", paciente.Nombre);
            cmd.Parameters.AddWithValue("@SexoID", paciente.SexoID);
            cmd.Parameters.AddWithValue("@Edad", paciente.Edad);
            cmd.Parameters.AddWithValue("@Peso", paciente.Peso);
            cmd.Parameters.AddWithValue("@NumeroTelefonico", paciente.NumeroTelefonico);
            cmd.Parameters.AddWithValue("@EmbarazoSN", paciente.EmbarazoSN);
            cmd.Parameters.AddWithValue("@Lactancia", paciente.Lactancia);
            cmd.Parameters.AddWithValue("@FallecidoSN", paciente.FallecidoSN);
            cmd.Parameters.AddWithValue("@NConsulta", consulta.NConsulta);
            cmd.Parameters.AddWithValue("@NSemanasEmb", paciente.NSemanasEmb);

            try
            {
                cmd.ExecuteNonQuery();
            }
            catch (SqlException ex)
            {
            }
            connection.Close();
        }
        public void AgregarConsulta(Consulta consulta)
        {
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            SqlCommand cmd = new SqlCommand("InsertarConsulta", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Nconsulta", consulta.NConsulta);
            cmd.Parameters.AddWithValue("@IntoxicacionHumanaSN", consulta.IntoxicacionHumanaSN);
            cmd.Parameters.AddWithValue("@Fecha", DateTime.Now);
            cmd.Parameters.AddWithValue("@e911", consulta.e911);
            cmd.Parameters.AddWithValue("@TipoConsultanteID", consulta.TipoConsultanteID);
            cmd.Parameters.AddWithValue("@EntidadID", consulta.EntidadID);
            cmd.Parameters.AddWithValue("@Solicitante", consulta.Solicitante);
            try
            {
                cmd.ExecuteNonQuery();
            }
            catch (SqlException ex)
            {
            }


        }
        public void AgregarTratamiento(int tratamiento, Consulta consulta)
        {
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
           
                SqlCommand cmd = new SqlCommand("AgregarRecomendacionTratamiento", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@TratamientoID", tratamiento);
                cmd.Parameters.AddWithValue("@NConsulta", consulta.NConsulta);

       
            try
                {
                    cmd.ExecuteNonQuery();
                }
                catch (SqlException ex)
                {
                

            }
            connection.Close();
        }
        public void AgregarCausaConsulta(int causa, Consulta consulta)
        {
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();

            SqlCommand cmd = new SqlCommand("InsertarCausaConsulta", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@CausaID", causa);
            cmd.Parameters.AddWithValue("@NConsulta", consulta.NConsulta);


            try
            {
                cmd.ExecuteNonQuery();
            }
            catch (SqlException ex)
            {


            }
            connection.Close();
        }

        public void AgregarDireccion(Direccion direccion, Consulta consulta)
        {
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            SqlCommand cmd = new SqlCommand("AgregarDireccion", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@NConsulta", consulta.NConsulta);
            cmd.Parameters.AddWithValue("@CantonID", direccion.CantonID);
            cmd.Parameters.AddWithValue("@OtrosRasgos", direccion.OtrosRasgos);
            try
            {
                cmd.ExecuteNonQuery();
            }
            catch (SqlException ex)
            {
            }


        }
        public void AgregarRuta(int rutaID, Consulta consulta)
        {
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            SqlCommand cmd = new SqlCommand("AgregarRuta", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@NConsulta", consulta.NConsulta);
            cmd.Parameters.AddWithValue("@RutaID", rutaID);
       
            try
            {
                cmd.ExecuteNonQuery();
            }
            catch (SqlException ex)
            {
            }


        }
        public void AgregarExpocision(int QuimiExp, int CodToxID, int CantidadIng, string Presentacion, DateTime Fecha, Consulta consulta)
        {
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            SqlCommand cmd = new SqlCommand("AgregarExpocision", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@NConsulta", consulta.NConsulta);
          
            cmd.Parameters.AddWithValue("@QuimiExp", QuimiExp);
          
            cmd.Parameters.AddWithValue("@CodToxID", CodToxID);
            cmd.Parameters.AddWithValue("@CantidadIng", CantidadIng);
            cmd.Parameters.AddWithValue("@Presentacion", Presentacion);
            cmd.Parameters.AddWithValue("@Fecha", Fecha);

            try
            {
                cmd.ExecuteNonQuery();
            }
            catch (SqlException ex)
            {
            }


        }
        public void AgregarSignos(Signos signos, Consulta consulta)
        {
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            SqlCommand cmd = new SqlCommand("InsertarSignos", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@NConsulta", consulta.NConsulta);
            cmd.Parameters.AddWithValue("@PresionArterial", signos.PresionArterial);
            cmd.Parameters.AddWithValue("@Temperatura", signos.Temperatura);
            cmd.Parameters.AddWithValue("@FC", signos.FC);
            try
            {
                cmd.ExecuteNonQuery();
            }
            catch (SqlException ex)
            {
            }


        }
        public void AgregarConsultaAsesoria(ConsultaAsesoria consultaAsesoria, Consulta consulta)
        {
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();
            SqlCommand cmd = new SqlCommand("InsertarConsultaAsesoria", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@NConsulta", consulta.NConsulta);
            cmd.Parameters.AddWithValue("@PreguntaAsesoriaID", consultaAsesoria.PreguntaAsesoriaID);
            cmd.Parameters.AddWithValue("@TipoAsesoriaID", consultaAsesoria.TipoAsesoriaID);
            cmd.Parameters.AddWithValue("@Observaciones", consultaAsesoria.Observaciones);

            try
            {
                cmd.ExecuteNonQuery();
            }
            catch (SqlException ex)
            {
            }


        }
        public void AgregarSintomas(int sintoma, Consulta consulta)
        {
            SqlConnection connection = new SqlConnection(connString);
            connection.Open();

             
                    SqlCommand cmd = new SqlCommand("InsertarSintomasConsulta", connection);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@SintomaID", sintoma);
                    cmd.Parameters.AddWithValue("@Nconsulta", consulta.NConsulta);

                    try
                    {
                        cmd.ExecuteNonQuery();
                    }
                    catch (SqlException ex)
                    {
                        // Manejar la excepción según sea necesario
                    }
              
           

            connection.Close();
        }
        public async Task<IEnumerable<Entidad>> ListaEntidads()
        {

          
            using (IDbConnection Conexion = new SqlConnection(connString))
            {
                IEnumerable<Entidad> ListaEntidad = Conexion.Query<Entidad>("ListaEntidades").ToList();
                return ListaEntidad;
            }
        }
        public async Task<IEnumerable<Canton>> ListaCantones()
        {


            using (IDbConnection Conexion = new SqlConnection(connString))
            {
                IEnumerable<Canton> ListaCantones = Conexion.Query<Canton>("ListaCanton").ToList();
                return ListaCantones;
            }
        }
        public async Task<IEnumerable<Provincia>> ListaProvincia()
        {


            using (IDbConnection Conexion = new SqlConnection(connString))
            {
                IEnumerable<Provincia> ListaProvincia = Conexion.Query<Provincia>("ListaProvincia").ToList();
                return ListaProvincia;
            }
        }
        public async Task<IEnumerable<Toxico>> ListaToxico()
        {


            using (IDbConnection Conexion = new SqlConnection(connString))
            {
                IEnumerable<Toxico> ListaToxico = Conexion.Query<Toxico>("ListaToxico").ToList();
                return ListaToxico;
            }
        }
        public async Task<IEnumerable<Sexo>> ListaSexo()
        {


            using (IDbConnection Conexion = new SqlConnection(connString))
            {
                IEnumerable<Sexo> ListaSexo = Conexion.Query<Sexo>("ListaSexo").ToList();
                return ListaSexo;
            }
        }

        public async Task<IEnumerable<CodigoToxico>> ListaCodigoTox()
        {


            using (IDbConnection Conexion = new SqlConnection(connString))
            {
                IEnumerable<CodigoToxico> ListaCodigoTox = Conexion.Query<CodigoToxico>("ListaCodTox").ToList();
                return ListaCodigoTox;
            }
        }

        public async Task<IEnumerable<PreguntaAsesoria>> ListaPregunta()
        {


            using (IDbConnection Conexion = new SqlConnection(connString))
            {
                IEnumerable<PreguntaAsesoria> ListaPregunta = Conexion.Query<PreguntaAsesoria>("ListaPregunta").ToList();
                return ListaPregunta;
            }
        }


        public async Task<AddToxico> ToxicoAdd (string descripcionTox)
            {

            using (IDbConnection DbConexion = new SqlConnection(connString))
            {
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("FARM_SUS", descripcionTox);

                AddToxico Resultado = (await DbConexion.QueryAsync<AddToxico>("EncotrarClasificacion", 
                    param: dynamicParameters,
                    commandType: CommandType.StoredProcedure)).FirstOrDefault();
                return Resultado ;
            }
        }

      

        internal void AgregarSintomas(Exposicion dato, Consulta consulta)
        {
            throw new NotImplementedException();
        }

        internal void AgregarConsultaAsesoria(Signos consultaAsesoria, Consulta consulta)
        {
            throw new NotImplementedException();
        }
    }
   
}
