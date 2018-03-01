using System.IO;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace YourFitness.Business
{
   public class Program
   {
      //public static void Main(string[] args)
      //{
      //   BuildWebHost(args).Run();
      //}

      //public static IWebHost BuildWebHost(string[] args) =>
      //   WebHost.CreateDefaultBuilder(args)
      //   .UseStartup<Startup>()
      //   .Build();

      public static void Main()
      {
         var host = new WebHostBuilder()
            .UseKestrel()
            .UseContentRoot(Directory.GetCurrentDirectory())
            .UseIISIntegration()
            .UseStartup<Startup>()
            .UseApplicationInsights()
            .Build();
         host.Run();
      }
   }
}
