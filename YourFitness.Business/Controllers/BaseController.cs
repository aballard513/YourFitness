using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using YourFitness.Business.Models;


namespace YourFitness.Business.Controllers
{
    [Route("api/[controller]")]
   
   public class BaseController
   {
      protected HttpClient client = new HttpClient();
      public BaseController(string route)
      {
          client.BaseAddress = new Uri("https://yourfitness-data.azurewebsites.net/api/" + route+ "/");
          client.DefaultRequestHeaders.Accept.Clear();
          client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
      }

      public async Task<string> GetProductAsync(int param)
        {
            
            List<string> list = new List<string>();
            var result = "";
            var responsemessage= "";
            HttpResponseMessage response = await client.GetAsync(param.ToString());
            if (response.IsSuccessStatusCode)
            {
                result = await response.Content.ReadAsStringAsync();            
                responsemessage = string.Join("\\",result);
            }
            return responsemessage;
            
        }
   }
}