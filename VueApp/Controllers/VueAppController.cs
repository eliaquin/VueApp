using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace VueApp.Controllers
{
    public class VueAppController : ApiController
    {
        Context db = new Context();

        [HttpPost]
        [Route("api/vueapp/formulario")]
        [ResponseType(typeof(IEnumerable<Formulario>))]
        public IHttpActionResult GuardarFormulario([FromBody] Formulario formulario)
        {
            db.Formularios.Add(formulario);
            db.SaveChanges();

            return Ok(db.Formularios.ToList());
        }

        [HttpGet]
        [Route("api/vueapp/buscarformulario")]
        [ResponseType(typeof(IEnumerable<Formulario>))]
        public IHttpActionResult BuscarFormulario()
        {
            return Ok(db.Formularios.ToList());
        }

    }
}
