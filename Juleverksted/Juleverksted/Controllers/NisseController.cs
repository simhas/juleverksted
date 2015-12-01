using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Juleverksted.Controllers
{
    public class NisseController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Check([FromUri] string nisselure)
        {
            int result = 0;
            int.TryParse(nisselure, out result);
            if (result >= 5000)
            {
                return Request.CreateResponse(HttpStatusCode.OK, "{ latlon: '59.9114148, 10.7623711', longtext: 'Fantastisk - dere har funnet frontend-nissens skjulested! Han befnner seg på et sted hvor man skulle tro det fantes eskimoer, på den sjappen hvor navnet tilsier at man kan reparere den mekaniske julenissesleden, men hvor de egentlig bare serverer øl, brus og god stemning!', someString: '59°54 41.5\"N 10°45 43.1\"E', lastText: 'Pakk sakene (og rydd opp etter dere), gi beskjed til en av nissene, og løp i vei for å rekke frem til skjulestedet i tide'}");
            }

            return Request.CreateResponse(HttpStatusCode.OK, false);

        }
    }
}
