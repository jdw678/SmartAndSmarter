namespace SmartAndSmaterAPI.Models.Repositories
{
    public interface IGenericRepository<T> where T : class
    {

        T Add(T item);

        IEnumerable<T> GetAll();

        T Get(int id);

        T Update(T weaponChanges);
        T Delete(int id);
        T UpdateOrCreateByIdentifier(T item, Func<T, bool> predicate);
    }
}
