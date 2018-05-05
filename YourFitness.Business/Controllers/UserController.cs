using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using YourFitness.Business.Models;

namespace YourFitness.Business.Controllers
{
    [Route("api/[controller]")]
   
   public class UserController
   {
      private List<User> user;

      public UserController()
      {
         user = new List<User> {
            new User {
               Email = "john.doe@nodomain.biz",
               FirstName = "John",
               LastName = "Doe",
               ID = 1
            },
            new User {
               Email = "paul.carr@nodomain.biz",
               FirstName = "Paul",
               LastName = "Carr",
               ID = 2
            },
            new User {
               Email = "lucy.jane@nodomain.biz",
               FirstName = "Lucy",
               LastName = "Jane",
               ID = 3
            }
         };
      }

      [HttpGet]
      
      public List<User> Get()
      {
         return user;
      }

      [HttpGet("{id}")]
      
      public bool Get(int id)
      {
         return true;
      }

      [HttpPost]
      
      public User Post([FromBody] User newUser)
      {
            return newUser;

      }

      [HttpPut("{id}")]
      public User Put(int id,[FromBody] User updatedUser)
      { 
          //updatedUser.Email = "test";
        return updatedUser;
      }

      [HttpDelete("{id}")]
      public int Delete(int id)
      {
         return 0;
      }
   }
}