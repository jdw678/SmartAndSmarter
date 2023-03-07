using Microsoft.EntityFrameworkCore;

namespace SmartAndSmaterAPI.Models.Repositories
{
    public class SQLGenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly SASDbContext context;

        public SQLGenericRepository(SASDbContext context)
        {
            this.context = context;
        }


        public T Add(T item)
        {
            context.Set<T>().Add(item);
            context.SaveChanges();
            return item;
        }

        public T Delete(int id)
        {
            T item = context.Set<T>().Find(id);
            if (item != null)
            {
                context.Set<T>().Remove(item);
                context.SaveChanges();
            }

            return item;
        }

        public T Get(int id)
        {
            return context.Set<T>().Find(id);
        }

        public IEnumerable<T> GetAll()
        {
            return context.Set<T>();
        }

        public T Update(T itemChanges)
        {
            Console.WriteLine("UPDATING UPDATING UPDATING UPDATING UPDATING UPDATING UPDATING UPDATING ");
            try
            {

                var item = context.Set<T>().Attach(itemChanges);
                item.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                context.SaveChanges();
                return itemChanges;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        }

        public T UpdateOrCreateByIdentifier(T item, Func<T, bool> predicate)
        {


            //true if weapon already exists
            //w => w.Name == weapon.Name
            if (context.Set<T>().FirstOrDefault(predicate) != null)
                return Update(context.Set<T>().FirstOrDefault(predicate));
            else
                return Add(item);
        }
    }
}
