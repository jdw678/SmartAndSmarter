using Microsoft.EntityFrameworkCore.Metadata.Internal;
using SmartAndSmaterAPI.Models.WeaponInterfaces;
using System.ComponentModel.DataAnnotations.Schema;

namespace SmartAndSmaterAPI.Models
{
    //hase base + reach
    public class Sheild : Weapon, IReach
    {

        //weapon reach / hitbox

        [Column(TypeName = "varchar(64)")]
        public string? Reach { get; set; }

        public void SetReach(string reach)
        {
            Reach = reach;
        }
    }
}
