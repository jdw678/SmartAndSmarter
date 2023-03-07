using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using SmartAndSmaterAPI.Models.WeaponInterfaces;

namespace SmartAndSmaterAPI.Models
{
    //has base + attack speed, reload speed, quiver size
    public class Bow : Weapon, IAttackSpeed, IReloadable
    {

        [Required]
        public float Attack1Speed { get; set; }

        public int QuiverSize { get; set; }

        public float ReloadSpeed { get; set; }

        public void SetAttackSpeeds(List<float> attackSpeeds)
        {
            Attack1Speed = attackSpeeds[0];
        }

        public void SetQuiverSize(int quiverSize)
        {
            QuiverSize = quiverSize;
        }

        public void SetReloadSpeed(float speed)
        {
            ReloadSpeed = speed;
        }
    }
}
