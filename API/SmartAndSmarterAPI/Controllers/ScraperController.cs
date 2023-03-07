using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SmartAndSmaterAPI.Models.HTMLScrapers;
using SmartAndSmaterAPI.Models.Repositories;
using SmartAndSmaterAPI.Models;

namespace SmartAndSmaterAPI.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class ScraperController : ControllerBase
    {
        private readonly IGenericRepository<MagicWeapon> _magicRepository;
        private readonly IGenericRepository<Sheild> _sheildRepository;
        private readonly IGenericRepository<Bow> _bowRepository;
        private readonly IGenericRepository<MeleeWeapon> _meleeRepository;

        public ScraperController(IGenericRepository<MagicWeapon> magicRepository, IGenericRepository<MeleeWeapon> meleeRepository, IGenericRepository<Sheild> sheildRepository, IGenericRepository<Bow> bowRepository)
        {
            _magicRepository = magicRepository;
            _sheildRepository = sheildRepository;
            _bowRepository = bowRepository;
            _meleeRepository = meleeRepository;

        }


        [HttpPost, ActionName("ScrapeWeaponsTables")]
        public async Task<ActionResult> ScrapeWeaponsTables()
        {
            if (!ModelState.IsValid)
                return BadRequest();


            List<Weapon> weapons = await WeaponTableHTML.ParseTable();

            try
            {
                foreach (Weapon weapon in weapons)
                {
                    if(weapon is MagicWeapon)
                        _magicRepository.UpdateOrCreateByIdentifier((MagicWeapon)weapon, w => w.Name == weapon.Name);

                    if (weapon is MeleeWeapon)
                        _meleeRepository.UpdateOrCreateByIdentifier((MeleeWeapon)weapon, w => w.Name == weapon.Name);

                    if (weapon is Sheild)
                        _sheildRepository.UpdateOrCreateByIdentifier((Sheild)weapon, w => w.Name == weapon.Name);

                    if (weapon is Bow)
                        _bowRepository.UpdateOrCreateByIdentifier((Bow)weapon, w => w.Name == weapon.Name);
                }

            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return StatusCode(500);
            }

            return Ok();
        }
    }
}
