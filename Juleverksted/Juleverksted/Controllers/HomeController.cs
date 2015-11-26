using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Juleverksted.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Velkommen()
        {
            return View();
        }

        public ActionResult Jada()
        {
            return View();
        }

        public ActionResult Reinsdyr()
        {
            return View(new Reinsdyrmodel());
        }
        
        public ActionResult Login() {
            return View();
        }

        public ActionResult MyPost(Reinsdyrmodel reinsdyrmodel)
        {
            if (ModelState.IsValid)
            {
                return RedirectToAction("Angular");

            }
            return View("Reinsdyr", reinsdyrmodel);
        }

        public ActionResult Angular()
        {
            return View();
        }
    }

    public class Reinsdyrmodel
    {
        [Required(ErrorMessage = "Field can't be empty")] //Email
        [RegularExpression(@"^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$", ErrorMessage = "Please Enter Correct Regex")]
        public string Something0 { get; set; }

        [Required(ErrorMessage = "Field can't be empty")] //American postnummer
        [RegularExpression(@"^\d{5}$", ErrorMessage = "Please Enter Correct Regex")]
        public string Something1 { get; set; }

        [Required(ErrorMessage = "Field can't be empty")]  //Strong password
        [RegularExpression(@"^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,50}$", ErrorMessage = "Please Enter Correct Regex")]
        public string Something2 { get; set; }

        [Required(ErrorMessage = "Field can't be empty")] //Social security number
        [RegularExpression(@"^\d{3}-?\d{2}-?\d{4}$", ErrorMessage = "Please Enter Correct Regex")]
        public string Something3 { get; set; }

        [Required(ErrorMessage = "Field can't be empty")] //Ett ord
        [RegularExpression(@"\b(?:the|and|a|to|of|in|i|is|that|it|on|you|this|for|but|with|are|have|be|at|or|as|was|so|if|out|not)\b", ErrorMessage = "Please Enter Correct Regex")]
        public string Something4 { get; set; }

        [Required(ErrorMessage = "Field can't be empty")] //Filesystem path
        [RegularExpression(@"^(?:[A-Z]\:|\\)(\\[\w\.$]+)+\\?$", ErrorMessage = "Please Enter Correct Regex")]
        public string Something5 { get; set; }
            
        [Required(ErrorMessage = "Field can't be empty")] //Flightnumber path
        [RegularExpression(@"^D[Y8](99..|7921)$", ErrorMessage = "Please Enter Correct Regex")]
        public string Something6 { get; set; }


    }
}