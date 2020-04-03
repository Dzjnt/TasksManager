using Microsoft.AspNetCore.Identity;
using SchedulerApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TasksManager.Models
{
    public class ApplicationUser : IdentityUser
    {
        public int TaskId { get; set; }
        public virtual Task Task { get; set; }
    }
}
