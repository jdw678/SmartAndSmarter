using Microsoft.AspNetCore.Mvc;
using SmartAndSmaterAPI.Models;
using SmartAndSmaterAPI.Models.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SmartAndSmaterAPI.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class SheildController : ControllerBase
    {
        private readonly IGenericRepository<Sheild> _repository;

        public SheildController(IGenericRepository<Sheild> repository)
        {
            _repository = repository;
        }


        // GET: Sheild
        [HttpGet, ActionName("GetAllSheilds")]
        public IEnumerable<Sheild> GetAllSheilds()
        {
            return _repository.GetAll();
        }

        [HttpGet("{id}"), ActionName("GetSheildById")]
        public ActionResult<Sheild> GetSheildById(int id)
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

        // GET: Sheild/Create
        [HttpPost, ActionName("CreateSheild")]
        public IActionResult CreateSheild([FromBody] Sheild sheild)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            try
            {
                _repository.Add(sheild);
            }
            catch
            {

                return StatusCode(500);
            }

            return Ok();
        }

        [HttpPut, ActionName("UpdateSheild")]
        public IActionResult UpdateSheild([FromBody] Sheild sheild)
        {
            if (!ModelState.IsValid)
                return BadRequest();


            Sheild responseSheild = _repository.Update(sheild);
            if (responseSheild == null)
            {
                return StatusCode(500);
            }

            return Ok();
        }

        [HttpDelete("{id}"), ActionName("DeleteSheild")]
        public IActionResult DeleteSheild(int id)
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
