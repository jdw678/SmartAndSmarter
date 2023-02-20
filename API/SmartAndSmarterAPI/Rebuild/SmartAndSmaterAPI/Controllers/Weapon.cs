using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SmartAndSmaterAPI.Controllers
{
    public class Weapon : Controller
    {
        // GET: Weapon
        public ActionResult Index()
        {
            return View();
        }

        // GET: Weapon/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Weapon/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Weapon/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Weapon/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Weapon/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Weapon/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Weapon/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
