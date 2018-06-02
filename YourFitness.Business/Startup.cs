using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace YourFitness.Business
{
   public class Startup
   {
      public IConfigurationRoot Configuration;
      /// <summary>
      /// Make resouces available to DI container and middleware
      ///   such as appsettings and environment variables
      /// </summary>
      /// <param name="env"></param>
      public Startup(IHostingEnvironment env)
      {
         var builder = new ConfigurationBuilder()
            .SetBasePath(env.ContentRootPath)
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
            .AddEnvironmentVariables();
         Configuration = builder.Build();
      }

      // This method gets called by the runtime. Use this method to add services to the container.
      // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
      public void ConfigureServices(IServiceCollection services)
      {
         services.AddCors();
         services.AddMvc();
         
         
      }

      // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
      public void Configure(IApplicationBuilder app, IHostingEnvironment env)
      {
         app.UseCors(
                options => options.WithOrigins("https://yourfitness.azurewebsites.net").AllowAnyMethod().AllowAnyHeader()
            );

         app.UseMvc();
         
         
      }
   }
}
