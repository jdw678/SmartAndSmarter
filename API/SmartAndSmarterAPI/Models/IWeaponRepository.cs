namespace SmartAndSmaterAPI.Models
{
    public interface IWeaponRepository
    {

        Weapon Add(Weapon weapon);

        Weapon GetWeapon(int id);
        IEnumerable<Weapon> GetAllWeapons();

        Weapon Update(Weapon weaponChanges);
        Weapon Delete(int id);
        Weapon UpdateOrCreateByName(Weapon weapon);
    }
}
