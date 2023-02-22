using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SmartAndSmaterAPI.Models
{
    public class Weapon
    {   
        ///////necissary elements
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "varchar(64)"), Required]
        public string Name { get; set; }

        [Column(TypeName = "varchar(1024)"), Required]
        public string ImageLocation { get; set; }

        //damages, all required
        [Required]
        public float BlackDamageMin { get; set; }

        [Required]
        public float? BlackDamageMax { get; set; }

        [Required]
        public float GreyDamageMin { get; set; }

        [Required]
        public float GreyDamageMax { get; set; }

        [Required]
        public float WhiteDamageMin { get; set; }

        [Required]
        public float WhiteDamageMax { get; set; }

        [Required]
        public float GreenDamageMin { get; set; }

        [Required]
        public float GreenDamageMax { get; set; }

        [Required]
        public float BlueDamageMin { get; set; }

        [Required]
        public float BlueDamageMax { get; set; }

        [Required]
        public float PurpleDamageMin { get; set; }

        [Required]
        public float PurpleDamageMax { get; set; }

        [Required]
        public float OrangeDamageMin { get; set; }

        [Required]
        public float OrangeDamageMax { get; set; }

        [Required]
        public float GoldDamageMin { get; set; }

        [Required]
        public float GoldDamageMax { get; set; }

        //attack speeds
        //must have atleast one
        [Required]
        public float Attack1Speed { get; set; }
        public float? Attack2Speed { get; set; }
        public float? Attack3Speed { get; set; }
        public float? Attack4Speed { get; set; }
        public float? Attack5Speed { get; set; }


        //attack type (slash / pierce etc)
        //must have atleast one
        [Column(TypeName = "varchar(32)"), Required]
        public AttackType Attack1Type { get; set; }


        [Column(TypeName = "varchar(32)")]
        public AttackType? Attack2Type { get; set; }


        [Column(TypeName = "varchar(32)")]
        public AttackType? Attack3Type { get; set; }


        [Column(TypeName = "varchar(32)")]
        public AttackType? Attack4Type { get; set; }


        [Column(TypeName = "varchar(32)")]
        public AttackType? Attack5Type { get; set; }


        //attack damage multipliers
        //must have atleast one
        [Required]
        public float Attack1DamageMultiplier { get; set; }
        public float? Attack2DamageMultiplier { get; set; }
        public float? Attack3DamageMultiplier { get; set; }
        public float? Attack4DamageMultiplier { get; set; }
        public float? Attack5DamageMultiplier { get; set; }
        

        /////////not completely essential stuff but still nice to have
        //classes
        public bool BarbarianCanUse { get; set; }
        public bool FighterCanUse { get; set; }
        public bool ClericCanUse { get; set; }
        public bool RangerCanUse { get; set; }
        public bool RogueCanUse { get; set; }
        public bool WizardCanUse { get; set; }

        //movement speed effects
        public float MovementSpeedWhileEquiped { get; set; }

        [Column(TypeName = "varchar(128)")]
        public string? ActionMovementSpeed { get; set; }

        //weapon reach / hitbox

        [Column(TypeName = "varchar(64)")]
        public string? Reach { get; set; }

        //uniques
        [Column(TypeName = "varchar(64)")]
        public string? UniqueName { get; set; }

        [Column(TypeName = "varchar(1024)")]
        public string? UniqueLink { get; set; }

        //maind hand / off hand / two handed
        [Column(TypeName = "varchar(64)")]
        public string? Hand { get; set; }

        [Column(TypeName ="varchar(64)")]
        public string? SweetSpot { get; set; }

    }

    public enum AttackType
    {
        Slash,
        Pierce,
        Blunt

    }

}
