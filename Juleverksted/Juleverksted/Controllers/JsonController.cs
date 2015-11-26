using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Juleverksted.Controllers
{
    public class JsonController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Login([FromUri] Credentials credentials)
        {
            if (credentials.Id == "julenissen" && credentials.Password == "julepils")
            {
                return Request.CreateResponse(HttpStatusCode.OK, "/Index/Testing");
            }
            return new HttpResponseMessage(HttpStatusCode.NotFound);
        }

        [HttpGet]
        public HttpResponseMessage Check([FromUri] string password)
        {
            if (password == "9")
            {
                return Request.CreateResponse(HttpStatusCode.OK, 
                    "<div class=\"col-md-12\" id=\"task-two-content\" style=\"display:none;\"><!-- BEGIN task-two -->" +
				"<!-- hint: https://www.youtube.com/watch?v=q6AQL55zMR4 -->" +
				"<div class=\"portlet\">" +
					"<div class=\"portlet-title\">" +
						"<div class=\"caption\">" +
							"<span class=\"caption-subject text-uppercase\"> Front-end hacking</span>" +
							"<span class=\"caption-helper\">Finn den skjulte koden</span>" +
						"</div>" +
					"</div>" +
					"<div class=\"portlet-body\">" +
						"<h4>Finn det skjulte passordet</h4>" +
						"<p>Se igjennom htmlen og bruk hacker skillsen din til å finne passordet.</p>" +
						"<div class=\"portlet-input input-inline input-medium\">" +
							"<div class=\"input-group\">" +
								"<input type=\"password\" class=\"form-control input-circle-left\" id=\"password-hack\" placeholder=\"Legg inn et passord\">" +
								"<span class=\"input-group-btn\">" +
								"<button class=\"btn btn-circle-right btn-default\" id=\"pw-checker\" type=\"submit\">Sjekk!</button>" +
								"</span>" +
							"</div>" +
						"</div>" +
						"<br>" +
						"<br>" +
						"<img class=\"img-responsive\" src=\"./img/codeHack.jpg\">" +
					"</div>" +
					"<br>" +
					
				"</div>" +
			"</div>");
            }
            else if (password == "reinsdyretRudolf")
            {
                return Request.CreateResponse(HttpStatusCode.OK, "");
            }
            else if (password == "Summary_off_Sales_by_Years")
            {
                return Request.CreateResponse(HttpStatusCode.OK, "");
            }
            int result = 0;
            int.TryParse(password, out result);
            if (result >= 5000)
            {
                return Request.CreateResponse(HttpStatusCode.OK, "");
            }

            return Request.CreateResponse(HttpStatusCode.OK, false);
        }

        public class Credentials
        {
            public string Id { get; set; }
            public string Password { get; set; }
        }
    }
}
