using Microsoft.EntityFrameworkCore;

namespace SmartAndSmaterAPI.Models
{
    public class SASDbContext : DbContext
    {
        public SASDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Weapon> Weapons { get; set; }
    }
}
