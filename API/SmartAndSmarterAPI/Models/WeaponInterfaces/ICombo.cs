namespace SmartAndSmaterAPI.Models.WeaponInterfaces
{
    public interface ICombo
    {
        void SetCombos(List<Tuple<WeaponAttackType, float?>> combos);
    }
}
