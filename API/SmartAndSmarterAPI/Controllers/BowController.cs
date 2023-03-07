using Microsoft.AspNetCore.Mvc;
using SmartAndSmaterAPI.Models;
using SmartAndSmaterAPI.Models.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SmartAndSmaterAPI.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class BowController : ControllerBase
    {
        private readonly IGenericRepository<Bow> _repository;

        public BowController(IGenericRepository<Bow> repository)
        {
            _repository = repository;
        }


        // GET: Bow
        [HttpGet, ActionName("GetAllBows")]
        public IEnumerable<Bow> GetAllBows()
        {
            return _repository.GetAll();
        }

        [HttpGet("{id}"), ActionName("GetBowById")]
        public ActionResult<Bow> GetBowById(int id)
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

        // GET: Bow/Create
        [HttpPost, ActionName("CreateBow")]
        public IActionResult CreateBow([FromBody] Bow bow)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            try
            {
                _repository.Add(bow);
            }
            catch
            {

                return StatusCode(500);
            }

            return Ok();
        }

        [HttpPut, ActionName("UpdateBow")]
        public IActionResult UpdateBow([FromBody] Bow bow)
        {
            if (!ModelState.IsValid)
                return BadRequest();


            Bow responseBow = _repository.Update(bow);
            if (responseBow == null)
            {
                return StatusCode(500);
            }

            return Ok();
        }

        [HttpDelete("{id}"), ActionName("DeleteBow")]
        public IActionResult DeleteBow(int id)
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
