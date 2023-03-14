using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SmartAndSmaterAPI.Models
{
    public class Armor
    {
        //necissary stuff
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "varchar(64)"), Required]
        public string Name { get; set; }

        [Column(TypeName = "varchar(1024)"), Required]
        public string ImageLocation { get; set; }


        //armors, all required
        [Required]
        public float BlackArmorMin { get; set; }

        [Required]
        public float? BlackArmorMax { get; set; }

        [Required]
        public float GreyArmorMin { get; set; }

        [Required]
        public float GreyArmorMax { get; set; }

        [Required]
        public float WhiteArmorMin { get; set; }

        [Required]
        public float WhiteArmorMax { get; set; }

        [Required]
        public float GreenArmorMin { get; set; }

        [Required]
        public float GreenArmorMax { get; set; }

        [Required]
        public float BlueArmorMin { get; set; }

        [Required]
        public float BlueArmorMax { get; set; }

        [Required]
        public float PurpleArmorMin { get; set; }

        [Required]
        public float PurpleArmorMax { get; set; }

        [Required]
        public float OrangeArmorMin { get; set; }

        [Required]
        public float OrangeArmorMax { get; set; }

        [Required]
        public float GoldArmorMin { get; set; }

        [Required]
        public float GoldArmorMax { get; set; }

        //not necissary stuff

        //classes
        public bool BarbarianCanUse { get; set; }
        public bool FighterCanUse { get; set; }
        public bool ClericCanUse { get; set; }
        public bool RangerCanUse { get; set; }
        public bool RogueCanUse { get; set; }
        public bool WizardCanUse { get; set; }


        //movement speed
        public float MovementSpeed { get; set; }

        [Column(TypeName = "varchar(1024)")]
        public string? Stats { get; set; }

        public ArmorType ArmorType { get; set; }

    }

    public enum ArmorType
    {
        Chest,
        Feet,
        Hands,
        Head,
        Legs
    }
}
