using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SchedulerApp.Models
{
    public class User
    {
        public User()
        {
            this.Tasks = new HashSet<Task>();
        }
        public int Id { get; set; }
        public string Username { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public virtual ICollection<Task> Tasks { get; set; }
    }
}
