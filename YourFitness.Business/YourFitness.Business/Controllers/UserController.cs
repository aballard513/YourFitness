using Microsoft.AspNetCore.Mvc;
using YourFitness.Business.Models;

namespace YourFitness.Business.Controllers
{
   [Controller]
   [Produces("application/json")]
   [Route("api/User")]
   public class UserController
   {
      public string Index()
      {
         return "Hello from user controller";
      }

   }
}