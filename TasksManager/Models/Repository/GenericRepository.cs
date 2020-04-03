using Microsoft.EntityFrameworkCore;
using TasksManager.Models;
using TasksManager.Models.Database;
using TasksManager.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace TasksManager.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {

        public readonly DatabaseContext _context;
        public DbSet<T> table;
        public GenericRepository(DatabaseContext context)
        {         
             _context = context;
             table = _context.Set<T>();    
        }
        public async Task<IEnumerable<T>> GetAllAsync()
          => await Task<IEnumerable<T>>.FromResult(table.ToList());

        public async Task<T> GetAsyncById(object id)
          => await table.FindAsync(id);

        public async System.Threading.Tasks.Task UpdateAsync(T obj)
        {
            table.Attach(obj);
            _context.Entry(obj).State = EntityState.Modified;
            await System.Threading.Tasks.Task.CompletedTask;
        }

        public async System.Threading.Tasks.Task DeleteAsync(object id)
        {
            T existing = table.Find(id);
            _context.Remove(existing);
            await System.Threading.Tasks.Task.CompletedTask;
        }
        public async System.Threading.Tasks.Task CreateAsync(T obj)
          => await System.Threading.Tasks.Task.FromResult(table.Add(obj));
        public void SaveChanges()
          => _context.SaveChangesAsync();

    }
}
