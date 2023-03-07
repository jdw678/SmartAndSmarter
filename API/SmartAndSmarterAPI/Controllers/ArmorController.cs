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
    public class ArmorController : Controller
    {
        private readonly IArmorRepository _armorRepository;

        public ArmorController(IArmorRepository armorRepository)
        {
            _armorRepository = armorRepository;
        }


        // GET: Armor
        [HttpGet, ActionName("GetAllArmors")]
        public IEnumerable<Armor> GetAllArmors()
        {
            return _armorRepository.GetAllArmors();
        }

        [HttpGet("{id}"), ActionName("GetArmorById")]
        public ActionResult<Armor> GetArmorById(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            try
            {
                return _armorRepository.GetArmor(id);
            }
            catch
            {

                return StatusCode(500);
            }

        }

        // GET: Armor/Create
        [HttpPost, ActionName("CreateArmor")]
        public IActionResult CreateArmor([FromBody]Armor armor)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            try
            {
                _armorRepository.Add(armor);
            }
            catch
            {

                return StatusCode(500);
            }

            return Ok();
        }

        [HttpPut, ActionName("UpdateArmor")]
        public IActionResult UpdateArmor([FromBody]Armor armor)
        {
            if (!ModelState.IsValid)
                return BadRequest();


            Armor responseArmor = _armorRepository.Update(armor);
            if(responseArmor == null)
            {
                return StatusCode(500);
            }

            return Ok();
        }

        [HttpDelete("{id}"), ActionName("DeleteArmor")]
        public IActionResult DeleteArmor(int id)
        {
            if(!ModelState.IsValid)
                return BadRequest();

            try
            {

                _armorRepository.Delete(id);
            }
            catch
            {

                return StatusCode(500);
            }
            return Ok();
        }


        
        [HttpPost, ActionName("ScrapeTable")]
        public async Task<ActionResult<IEnumerable<Armor>>> ScrapeTable()
        {
            if (!ModelState.IsValid)
                return BadRequest();


            List<Armor> armors = await ArmorTableHTML.ParseTable();
            try
            {
                foreach (Armor armor in armors)
                {
                    _armorRepository.UpdateOrCreateByName(armor);
                }

            }
            catch(Exception ex)
            {
                System.IO.File.AppendAllText(Directory.GetCurrentDirectory() + "\\HardData\\" + "Log.txt", "\n\n" + ex.ToString());
                return StatusCode(500);
            }

            return new ActionResult<IEnumerable<Armor>>(_armorRepository.GetAllArmors());
        }

    }
}
