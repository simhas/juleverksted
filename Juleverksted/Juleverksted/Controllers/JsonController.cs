using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Juleverksted.Controllers
{
    public class JsonController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage  Login(string id, string password)
        {
            if (id == "julenissen" && password == "julepils")
            {
                return Request.CreateResponse(HttpStatusCode.OK, "/Index/Testing");
            }
            return new HttpResponseMessage(HttpStatusCode.NotFound);
        }
    }
}
