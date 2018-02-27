using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourFitness.Business.Models
{
    public class User
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Weight { get; set; }
        public string Height { get; set; }
        public string Goal { get; set; }
    }
}
