using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TasksManager.Models
{
    public class Task
    {
        protected Task()
        {
           
        }
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }
        public TaskStatus Status { get; set; }
        public string Topic { get; set; }

        public int UserId { get; set; }
        public virtual TasksManager.Models.ApplicationUser User { get; set; }
        //It's for future purposes like background task reminder
        public DateTime ReminderTime { get; set; }

    }
}
