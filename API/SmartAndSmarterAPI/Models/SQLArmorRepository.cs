namespace SmartAndSmaterAPI.Models
{
    public class SQLArmorRepository : IArmorRepository
    {
        private readonly SASDbContext context;

        public SQLArmorRepository(SASDbContext context)
        {
            this.context = context;
        }

        public Armor Add(Armor armor)
        {
            context.Armors.Add(armor);
            context.SaveChanges();
            return armor;
        }

        public Armor Delete(int id)
        {
            Armor armor = context.Armors.Find(id);
            if(armor != null)
            {
                context.Armors.Remove(armor);
                context.SaveChanges();
            }

            return armor;
        }

        public IEnumerable<Armor> GetAllArmors()
        {
            return context.Armors;
        }

        public Armor GetArmor(int id)
        {
            return context.Armors.Find(id);
        }

        public Armor Update(Armor armorChanges)
        {
            try
            {

                Console.WriteLine(armorChanges.Id);
                var armor = context.Armors.Attach(armorChanges);
                armor.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                context.SaveChanges();
                return armorChanges;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        }

        public Armor UpdateOrCreateByName(Armor armor)
        {
            //true if armor already exists
            if(context.Armors.Where(w => w.Name == armor.Name).FirstOrDefault() != null)
                return Update(armor);
            else
                return Add(armor);
        }
    }
}
