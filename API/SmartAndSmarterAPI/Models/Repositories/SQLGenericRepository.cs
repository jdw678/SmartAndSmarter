using Microsoft.EntityFrameworkCore;
using SmartAndSmaterAPI.Models.WeaponInterfaces;

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
            //item passed does not always have the proper ID. Get it from db, set it, then update
            if (context.Set<T>().FirstOrDefault(predicate) != null)
            {
                //get the corresponding item from the db
                T dbItem = context.Set<T>().FirstOrDefault(predicate);

                //make sure it implements IIdentifiable (GetId and SetId)
                if (!(dbItem is IIdentifiable))
                    throw new Exception("Item passed does not implement IIdentifiable.");

                //create a temp item as IIdentifiable from the passed item in order to update it's Id
                //update the temp item's Id and re-cast it as the passed item
                var tempItem = (IIdentifiable)item;
                tempItem.SetId(((IIdentifiable)dbItem).GetId());
                item = (T)tempItem;

                context.Entry(dbItem).State = EntityState.Detached;

                //finally, update the item
                return Update(item);
            }
            else
                return Add(item);
        }
    }
}
