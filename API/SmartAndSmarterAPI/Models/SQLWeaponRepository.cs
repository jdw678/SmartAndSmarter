namespace SmartAndSmaterAPI.Models
{
    public class SQLWeaponRepository : IWeaponRepository
    {
        private readonly SASDbContext context;

        public SQLWeaponRepository(SASDbContext context)
        {
            this.context = context;
        }

        public Weapon Add(Weapon weapon)
        {
            context.Weapons.Add(weapon);
            context.SaveChanges();
            return weapon;
        }

        public Weapon Delete(int id)
        {
            Weapon weapon = context.Weapons.Find(id);
            if(weapon != null)
            {
                context.Weapons.Remove(weapon);
                context.SaveChanges();
            }

            return weapon;
        }

        public IEnumerable<Weapon> GetAllWeapons()
        {
            return context.Weapons;
        }

        public Weapon GetWeapon(int id)
        {
            return context.Weapons.Find(id);
        }

        public Weapon Update(Weapon weaponChanges)
        {
            try
            {

                Console.WriteLine(weaponChanges.Id);
                var weapon = context.Weapons.Attach(weaponChanges);
                weapon.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                context.SaveChanges();
                return weaponChanges;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        }

        public Weapon UpdateOrCreateByName(Weapon weapon)
        {
            //true if weapon already exists
            if(context.Weapons.Where(w => w.Name == weapon.Name).FirstOrDefault() != null)
                return Update(weapon);
            else
                return Add(weapon);
        }
    }
}
