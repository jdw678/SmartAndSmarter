using Microsoft.AspNetCore.Mvc;
using SmartAndSmaterAPI.Models;
using SmartAndSmaterAPI.Models.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SmartAndSmaterAPI.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class MagicWeaponController : ControllerBase
    {
        private readonly IGenericRepository<MagicWeapon> _repository;

        public MagicWeaponController(IGenericRepository<MagicWeapon> repository)
        {
            _repository = repository;
        }


        // GET: MagicWeapon
        [HttpGet, ActionName("GetAllMagicWeapons")]
        public IEnumerable<MagicWeapon> GetAllMagicWeapons()
        {
            return _repository.GetAll();
        }

        [HttpGet("{id}"), ActionName("GetMagicWeaponById")]
        public ActionResult<MagicWeapon> GetMagicWeaponById(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            try
            {
                return _repository.Get(id);
            }
            catch
            {

                return StatusCode(500);
            }

        }

        // GET: MagicWeapon/Create
        [HttpPost, ActionName("CreateMagicWeapon")]
        public IActionResult CreateMagicWeapon([FromBody] MagicWeapon weapon)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            try
            {
                _repository.Add(weapon);
            }
            catch
            {

                return StatusCode(500);
            }

            return Ok();
        }

        [HttpPut, ActionName("UpdateMagicWeapon")]
        public IActionResult UpdateMagicWeapon([FromBody] MagicWeapon weapon)
        {
            if (!ModelState.IsValid)
                return BadRequest();


            MagicWeapon responseMagicWeapon = _repository.Update(weapon);
            if (responseMagicWeapon == null)
            {
                return StatusCode(500);
            }

            return Ok();
        }

        [HttpDelete("{id}"), ActionName("DeleteMagicWeapon")]
        public IActionResult DeleteMagicWeapon(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            try
            {

                _repository.Delete(id);
            }
            catch
            {

                return StatusCode(500);
            }
            return Ok();
        }
    }
}
