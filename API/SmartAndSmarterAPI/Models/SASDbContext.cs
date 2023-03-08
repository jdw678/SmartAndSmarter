using Microsoft.EntityFrameworkCore;

namespace SmartAndSmaterAPI.Models
{
    public class SASDbContext : DbContext
    {
        public SASDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Weapon> Weapons { get; set; }
        public DbSet<Armor> Armors { get; set; }

        public DbSet<MeleeWeapon> MeleeWeapons { get; set; }

        public DbSet<Shield> Sheilds { get; set; }
        public DbSet<MagicWeapon> MagicWeapons { get; set;}
        public DbSet<Bow> Bows { get; set;}

    }
}
