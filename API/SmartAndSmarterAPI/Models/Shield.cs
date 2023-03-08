using Microsoft.EntityFrameworkCore.Metadata.Internal;
using SmartAndSmaterAPI.Models.WeaponInterfaces;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace SmartAndSmaterAPI.Models
{
    //hase base + reach
    public class Shield : Weapon, IReach, ICombo
    {

        //weapon reach / hitbox
        [Column(TypeName = "varchar(32)"), JsonConverter(typeof(JsonStringEnumConverter)), Required]
        public WeaponAttackType Attack1Type { get; set; }


        [Column(TypeName = "varchar(32)"), JsonConverter(typeof(JsonStringEnumConverter)),]
        public WeaponAttackType? Attack2Type { get; set; }


        [Column(TypeName = "varchar(64)")]
        public string? Reach { get; set; }

        public void SetCombos(List<Tuple<WeaponAttackType, float?>> combos)
        {
            Attack1Type = combos[0].Item1;
            if(combos.Count > 1 )
            {
                Attack2Type = combos[1].Item1;
            }
        }

        public void SetReach(string reach)
        {
            Reach = reach;
        }
    }
}
