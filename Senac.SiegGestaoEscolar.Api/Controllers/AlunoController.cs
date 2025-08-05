using Microsoft.AspNetCore.Mvc;

namespace Senac.SiegGestaoEscolar.Api.Http.Controllers
{
    public class AlunoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
