﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SmartAndSmaterAPI.Models;
using System.Net;

namespace SmartAndSmaterAPI.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class WeaponController : Controller
    {
        private readonly IWeaponRepository _weaponRepository;

        public WeaponController(IWeaponRepository weaponRepository)
        {
            _weaponRepository = weaponRepository;
        }


        // GET: Weapon
        [HttpGet, ActionName("GetAllWeapons")]
        public IEnumerable<Weapon> GetAllWeapons()
        {
            return _weaponRepository.GetAllWeapons();
        }

        [HttpGet("{id}"), ActionName("GetWeaponById")]
        public ActionResult<Weapon> GetWeaponById(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            try
            {
                return _weaponRepository.GetWeapon(id);
            }
            catch
            {

                return StatusCode(500);
            }

            return Ok();
        }

        // GET: Weapon/Create
        [HttpPost, ActionName("CreateWeapon")]
        public IActionResult CreateWeapon([FromBody]Weapon weapon)
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

        [HttpPut, ActionName("UpdateWeapon")]
        public IActionResult UpdateWeapon([FromBody]Weapon weapon)
        {
            if (!ModelState.IsValid)
                return BadRequest();


            Weapon responseWeapon = _weaponRepository.Update(weapon);
            if(responseWeapon == null)
            {
                return StatusCode(500);
            }

            return Ok();
        }

        [HttpDelete("{id}"), ActionName("DeleteWeapon")]
        public IActionResult DeleteWeapon(int id)
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


        
        [HttpPost, ActionName("ScrapeTable")]
        public async Task<ActionResult<IEnumerable<Weapon>>> ScrapeTable()
        {
            if (!ModelState.IsValid)
                return BadRequest();


            List<Weapon> weapons = await WeaponTableHTML.ParseTable();

            try
            {
                foreach (Weapon weapon in weapons)
                {
                    _weaponRepository.UpdateOrCreateByName(weapon);
                }

            }
            catch
            {
                return StatusCode(500);
            }

            return new ActionResult<IEnumerable<Weapon>>(_weaponRepository.GetAllWeapons());
        }

    }
}
