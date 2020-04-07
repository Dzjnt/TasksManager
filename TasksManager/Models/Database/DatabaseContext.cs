using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TasksManager.Models.Database
{
    public class DatabaseContext :  ApiAuthorizationDbContext<TasksManager.Models.ApplicationUser>
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options, IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {

        }
        public   DbSet<Task> Tasks { get; set; }
        
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Task>();
            base.OnModelCreating(builder);
        }
    }
}
