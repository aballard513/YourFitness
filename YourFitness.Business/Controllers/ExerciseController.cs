using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using YourFitness.Business.Models;


namespace YourFitness.Business.Controllers
{
    [Route("api/[controller]")]
   
   public class ExerciseController : BaseController
   {
      private List<Exercise> excercise;
      
      public ExerciseController() : base("Exercise")
      {
         
      }

      [HttpGet("{id}")]
      
      public async Task<string> Get(int id)
      {
            return await GetProductAsync(id);
      }

      [HttpPost]
      
      public bool Post([FromBody] Exercise exercise)
      {
            return true;

      }

      [HttpPut("{id}")]
      public bool Put(int id,[FromBody] Exercise exercise)
      { 
          //updatedUser.Email = "test";
        return true;
      }

      [HttpDelete("{id}")]
      public bool Delete(int id)
      {
         return true;
      }
   }
}