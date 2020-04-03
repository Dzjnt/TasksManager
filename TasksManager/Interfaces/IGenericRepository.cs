using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TasksManager.Models.Interfaces
{
    public interface IGenericRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetAsyncById(object id);
        System.Threading.Tasks.Task UpdateAsync(T obj);
        System.Threading.Tasks.Task DeleteAsync(object id);
        System.Threading.Tasks.Task CreateAsync(T obj);
        void SaveChanges();

    }
}
