using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TasksManager.Models;
using TasksManager.Models.Interfaces;

namespace TasksManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly IGenericRepository<Models.Task> _taskRepository;
   

        public TaskController(IGenericRepository<Models.Task> taskRepository)
        {
            _taskRepository = taskRepository;
        } 


        [HttpPost("[action]")]
        public IActionResult AddTask([FromBody]Models.Task task)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _taskRepository.CreateAsync(task);
            return new JsonResult(task.Id);
        }
        [HttpGet("[action]")]
        public IActionResult GetTasks()
        {
            var tasks = new JsonResult(_taskRepository.GetAllAsync());
            return tasks;
        }
 

    }
}