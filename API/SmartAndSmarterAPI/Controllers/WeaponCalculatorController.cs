using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SmartAndSmarterAPI.Controllers
{


    [Route("[controller]/[action]")]
    [ApiController]
    public class WeaponCalculatorController : ControllerBase
    {
        private readonly IConfiguration _config;
        string connectionString = "";

        public WeaponCalculatorController(IConfiguration config)
        {
            _config = config;
            connectionString = _config["ConnectionStrings:SmartAndSmarter"];
        }


        // GET: api/<WeaponCalculatorController>
        [HttpGet, ActionName("GetAllWeapons")]
        public string GetAllWeapons()
        {
            string json = "";


            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                using (SqlCommand command = new SqlCommand("GetAllWeapons", connection))
                {
                    connection.Open();
                    command.CommandType = System.Data.CommandType.StoredProcedure;

                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while(reader.Read())
                        {
                            json += reader.GetString(0);
                        }
                    }


                }
            }
            catch (Exception ex)
            {
                return ex.Message;
            }


            return json;
        }

        // GET api/<WeaponCalculatorController>/5
        [HttpGet("{id}"), ActionName("GetWeaponById")]
        public string GetWeaponById(int id)
        {
            string json = "";


            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                using (SqlCommand command = new SqlCommand("GetWeapon", connection))
                {
                    connection.Open();
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    command.Parameters.Add(new SqlParameter("@Id", id));

                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            json += reader.GetString(0);
                        }
                    }


                }
            }
            catch (Exception ex)
            {
                return ex.Message;
            }


            return json;
        }

        // POST api/<WeaponCalculatorController>
        [HttpPost, ActionName("CreateWeapon")]
        public IActionResult CreateWeapon([FromBody]Weapon weapon)
        {
            if (weapon.imageDiskLocation == null) weapon.imageDiskLocation = "";

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                using (SqlCommand command = new SqlCommand("CreateWeapon", connection))
                {
                    connection.Open();
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    command.Parameters.Add(new SqlParameter("@Name", weapon.name));
                    command.Parameters.Add(new SqlParameter("@Hand", weapon.hand));
                    command.Parameters.Add(new SqlParameter("@Stance", weapon.stance));
                    command.Parameters.Add(new SqlParameter("@Damage", weapon.damage));
                    command.Parameters.Add(new SqlParameter("@AttackOne", weapon.attackOne));
                    command.Parameters.Add(new SqlParameter("@AttackTwo", weapon.attackTwo));
                    command.Parameters.Add(new SqlParameter("@AttackThree", weapon.attackThree));
                    command.Parameters.Add(new SqlParameter("@AttackFour", weapon.attackFour));
                    command.Parameters.Add(new SqlParameter("@AttackFive", weapon.attackFive));
                    command.Parameters.Add(new SqlParameter("@ImageDiskLocation", weapon.imageDiskLocation));

                    command.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message + "\n" + ex.StackTrace + "\n---------");
                return StatusCode(500);
            }


            return StatusCode(200);
        }

        // DELETE api/<WeaponCalculatorController>/5
        [HttpDelete("{id}"), ActionName("DeleteWeaponById")]
        public IActionResult DeleteWeaponById(int id)
        {

            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                using (SqlCommand command = new SqlCommand("DeleteWeapon", connection))
                {
                    connection.Open();
                    command.CommandType = System.Data.CommandType.StoredProcedure;

                    command.Parameters.Add(new SqlParameter("@Id", id));

                    command.ExecuteNonQuery();


                }
            }
            catch
            {
                return StatusCode(500);
            }

            return StatusCode(200);
        }
    }
}
