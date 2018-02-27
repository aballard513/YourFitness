using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using YourFitness.Business.Models;

namespace YourFitness.Business.Controllers
{
    [Produces("application/json")]
    [System.Web.Http.Route("api/User")]
    public class UserController : ApiController
    {
        public bool Create(User U)
        {
            return true;
        }

    }
}