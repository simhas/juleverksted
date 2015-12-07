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
										"<div class='col-md-12' id='task-two-content'><!-- BEGIN task-two --><!-- hint: https://www.youtube.com/watch?v=q6AQL55zMR4 --><div class='portlet'><div class='portlet-title'><div class='caption'><span class='caption-subject text-uppercase'> Front-end hacking</span></div></div><div class='portlet-body'><h4>Finn det skjulte passordet</h4><p>Frontend-nissen er Slick.js, men vi vet at han er Less.js Slick.js enn dere! Greier dere å finne passordet hans?</p><div class='portlet-input input-inline input-medium'><div class='input-group'><input type='password' class='form-control input-circle-left' id='password-hack' placeholder='Legg inn et passord'><span class='input-group-btn'><button class='btn btn-circle-right btn-default' id='pw-checker' type='submit'>Sjekk!</button></span></div></div><br><br><img class='img-responsive' src='./img/codeHack.jpg'></div><br></div></div>");
            }
            else if (password == "reinsdyretRudolf")
            {
							return Request.CreateResponse(HttpStatusCode.OK, "<div class='col-md-12' id='task-three-content'> <input id='hiddenPassWord' class='hidden' type='password' /> <div class='portlet'> <div class='portlet-title'> <div class='caption'> <span class='caption-subject text-uppercase'> Front-end hacking</span> <span class='caption-helper'></span> </div> </div> <div class='portlet-body'> <h4>Fudge!</h4> <p>Frontend-nissen er mer Slick.js enn vi trodde! 2-veis-autentisering kan legge seg, her er det DoublePassword som gjelder - hjelp oss videre!?</p> <div class='portlet-input input-inline input-medium'> <div class='input-group'> <input type='password' class='form-control input-circle-left' id='password-hack2' placeholder='Legg inn et passord'> <span class='input-group-btn'> <button class='btn btn-circle-right btn-default' id='pw-checker2' type='submit'>Sjekk!</button> </span> </div> </div> <br /> <br /> <img class='img-responsive' src='./img/jsImg.jpg'> </div> <br /> </div> </div>");
            }
            else if (password == "Summary_of_Sales_by_Years")
            {
							return Request.CreateResponse(HttpStatusCode.OK, "<div class='col-md-12' id='task-four-content'><!-- BEGIN task-four --> <div class='portlet'> <div class='portlet-title'> <div class='caption'> <span class='caption-subject text-uppercase'> Trykk 5000 ganger </span> <span class='caption-helper'>...på knappen</span> </div> </div> <div class='portlet-body'> <h4>Hvor mange ganger gidder du å trykke?</h4> <p>For noen Express.js-hjelpere dere er! Nå gjenstår det bare et siste hinder før frontend-nissens skjulested blir avslørt - har dere utholdenheten som trengs?</p> <p class='pushez'><span id='push-times'>0</span> / 5000</p> <br /> <br /> <a id='o-ztuff' href='#'>Trykk</a> </div> <br /> </div> </div>");
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
