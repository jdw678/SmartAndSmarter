using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SmartAndSmaterAPI.Models;
using SmartAndSmaterAPI.Models.HTMLScrapers;
using SmartAndSmaterAPI.Models.Repositories;
using System.Net;

namespace SmartAndSmaterAPI.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class MeleeWeaponController : Controller
    {
        private readonly IGenericRepository<MeleeWeapon> _weaponRepository;

        public MeleeWeaponController(IGenericRepository<MeleeWeapon> weaponRepository)
        {
            _weaponRepository = weaponRepository;
        }


        // GET: MeleeWeapon
        [HttpGet, ActionName("GetAllMeleeWeapons")]
        public IEnumerable<MeleeWeapon> GetAllMeleeWeapons()
        {
            return _weaponRepository.GetAll();
        }

        [HttpGet("{id}"), ActionName("GetMeleeWeaponById")]
        public ActionResult<MeleeWeapon> GetMeleeWeaponById(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            try
            {
                return _weaponRepository.Get(id);
            }
            catch
            {

                return StatusCode(500);
            }

        }

        // GET: MeleeWeapon/Create
        [HttpPost, ActionName("CreateMeleeWeapon")]
        public IActionResult CreateMeleeWeapon([FromBody]MeleeWeapon weapon)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            try
            {
                _weaponRepository.Add(weapon);
            }
            catch
            {

                return StatusCode(500);
            }

            return Ok();
        }

        [HttpPut, ActionName("UpdateMeleeWeapon")]
        public IActionResult UpdateMeleeWeapon([FromBody]MeleeWeapon weapon)
        {
            if (!ModelState.IsValid)
                return BadRequest();


            MeleeWeapon responseMeleeWeapon = _weaponRepository.Update(weapon);
            if(responseMeleeWeapon == null)
            {
                return StatusCode(500);
            }

            return Ok();
        }

        [HttpDelete("{id}"), ActionName("DeleteMeleeWeapon")]
        public IActionResult DeleteMeleeWeapon(int id)
        {
            if(!ModelState.IsValid)
                return BadRequest();

            try
            {

                _weaponRepository.Delete(id);
            }
            catch
            {

                return StatusCode(500);
            }
            return Ok();
        }

    }
}
