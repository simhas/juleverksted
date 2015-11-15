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

        public class Credentials
        {
            public string Id { get; set; }
            public string Password { get; set; }
        }
    }
}
