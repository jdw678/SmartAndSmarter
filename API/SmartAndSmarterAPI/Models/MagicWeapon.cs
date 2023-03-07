using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using SmartAndSmaterAPI.Models.WeaponInterfaces;

namespace SmartAndSmaterAPI.Models
{
    //has base +  combo, attack speed, impact zone (sweet spot), reach, but some of these are null sometimes
    public class MagicWeapon : Weapon, ICombo, IAttackSpeed, ISweetSpot, IReach
    {

        //attack speeds
        public float? Attack1Speed { get; set; }
        public float? Attack2Speed { get; set; }
        public float? Attack3Speed { get; set; }


        //attack type (slash / pierce etc)
        //must have atleast one
        [Column(TypeName = "varchar(32)"), JsonConverter(typeof(JsonStringEnumConverter)), Required]
        public WeaponAttackType Attack1Type { get; set; }


        [Column(TypeName = "varchar(32)"), JsonConverter(typeof(JsonStringEnumConverter)),]
        public WeaponAttackType? Attack2Type { get; set; }


        [Column(TypeName = "varchar(32)"), JsonConverter(typeof(JsonStringEnumConverter)),]
        public WeaponAttackType? Attack3Type { get; set; }


        //attack damage multipliers
        public float? Attack1DamageMultiplier { get; set; }
        public float? Attack2DamageMultiplier { get; set; }
        public float? Attack3DamageMultiplier { get; set; }

        //impact zone

        [Column(TypeName = "varchar(64)")]
        public string? SweetSpot { get; set; }


        //weapon reach / hitbox

        [Column(TypeName = "varchar(64)")]
        public string? Reach { get; set; }

        public void SetAttackSpeeds(List<float> attackSpeeds)
        {
            if (attackSpeeds.Count == 0)
            {
                Attack1Speed = 0;
            }
            if (attackSpeeds.Count > 0)
            {
                Attack1Speed = attackSpeeds[0];
            }
            if (attackSpeeds.Count > 1)
            {
                Attack2Speed = attackSpeeds[1];
            }
            if (attackSpeeds.Count > 2)
            {
                Attack3Speed = attackSpeeds[2];
            }
        }

        public void SetCombos(List<Tuple<string, float?>> combos)
        {


            if (combos.Count > 0)
            {

                if (combos[0].Item1.Contains(WeaponAttackType.Slash.ToString())) Attack1Type = WeaponAttackType.Slash;
                if (combos[0].Item1.Contains(WeaponAttackType.Pierce.ToString())) Attack1Type = WeaponAttackType.Pierce;
                if (combos[0].Item1.Contains(WeaponAttackType.Blunt.ToString())) Attack1Type = WeaponAttackType.Blunt;
                if (combos[0].Item1.Contains(WeaponAttackType.Bow.ToString())) Attack1Type = WeaponAttackType.Bow;
                if (combos[0].Item1.Contains(WeaponAttackType.Block.ToString())) Attack1Type = WeaponAttackType.Block;
                if (combos[0].Item1.Contains("Spell")) Attack1Type = WeaponAttackType.SpellCast;
                if (combos[0].Item1.Contains("Ground")) Attack1Type = WeaponAttackType.GroundDeployment;

                //first weapon must have an attack damage multiplier
                if (combos[0].Item2 != null)
                    Attack1DamageMultiplier = (float)combos[0].Item2;
                else Attack1DamageMultiplier = 0;
            }

            if (combos.Count > 1)
            {

                if (combos[1].Item1.Contains(WeaponAttackType.Slash.ToString())) Attack2Type = WeaponAttackType.Slash;
                if (combos[1].Item1.Contains(WeaponAttackType.Pierce.ToString())) Attack2Type = WeaponAttackType.Pierce;
                if (combos[1].Item1.Contains(WeaponAttackType.Blunt.ToString())) Attack2Type = WeaponAttackType.Blunt;
                if (combos[1].Item1.Contains(WeaponAttackType.Bow.ToString())) Attack2Type = WeaponAttackType.Bow;
                if (combos[1].Item1.Contains(WeaponAttackType.Block.ToString())) Attack2Type = WeaponAttackType.Block;
                if (combos[1].Item1.Contains("Spell")) Attack2Type = WeaponAttackType.SpellCast;
                if (combos[1].Item1.Contains("Ground")) Attack2Type = WeaponAttackType.GroundDeployment;

                Attack2DamageMultiplier = combos[1].Item2;
            }

            if (combos.Count > 2)
            {

                if (combos[2].Item1.Contains(WeaponAttackType.Slash.ToString())) Attack3Type = WeaponAttackType.Slash;
                if (combos[2].Item1.Contains(WeaponAttackType.Pierce.ToString())) Attack3Type = WeaponAttackType.Pierce;
                if (combos[2].Item1.Contains(WeaponAttackType.Blunt.ToString())) Attack3Type = WeaponAttackType.Blunt;
                if (combos[2].Item1.Contains(WeaponAttackType.Bow.ToString())) Attack3Type = WeaponAttackType.Bow;
                if (combos[2].Item1.Contains(WeaponAttackType.Block.ToString())) Attack3Type = WeaponAttackType.Block;
                if (combos[2].Item1.Contains("Spell")) Attack3Type = WeaponAttackType.SpellCast;
                if (combos[2].Item1.Contains("Ground")) Attack3Type = WeaponAttackType.GroundDeployment;

                Attack3DamageMultiplier = combos[2].Item2;
            }
        }

        public void SetReach(string reach)
        {
            Reach = reach;
        }

        public void SetSweetSpot(string sweetSpot)
        {
            SweetSpot = sweetSpot;
        }
    }
}
