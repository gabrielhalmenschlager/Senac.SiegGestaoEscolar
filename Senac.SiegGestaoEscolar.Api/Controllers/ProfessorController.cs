using Microsoft.AspNetCore.Mvc;

namespace Senac.SiegGestaoEscolar.Api.Http.Controllers
{
    public class ProfessorController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
