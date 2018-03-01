using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace YourFitness.Data
{
  public class UserContext : DbContext
  {
    public DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
      => optionsBuilder
         .UseSqlServer(@"Server = np:\\.\pipe\LOCALDB#2828AA55\tsql\query; Database = UserData; Trusted_Connection = True;");
  }
}
