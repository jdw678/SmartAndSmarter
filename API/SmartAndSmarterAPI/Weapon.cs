using System.ComponentModel.DataAnnotations;

namespace SmartAndSmarterAPI
{
    public class Weapon
    {
        [Required]
        public int id { get; set; }

        [MaxLength(5), Required]
        public string hand { get; set; }

        [Required]
        public string name { get; set; }

        [Required]
        public string stance { get; set; }

        [Required]
        public decimal damage { get; set; }

        [Required]
        public decimal attackOne { get; set; }
        public decimal attackTwo { get; set; }
        public decimal attackThree { get; set; }
        public decimal attackFour { get; set; }
        public decimal attackFive { get; set; }
        public string imageDiskLocation { get; set; }
    }
}
