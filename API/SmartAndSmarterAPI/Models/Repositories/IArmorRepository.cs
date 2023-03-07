namespace SmartAndSmaterAPI.Models.Repositories
{
    public interface IArmorRepository
    {

        Armor Add(Armor armor);

        Armor GetArmor(int id);
        IEnumerable<Armor> GetAllArmors();

        Armor Update(Armor armorChanges);
        Armor Delete(int id);
        Armor UpdateOrCreateByName(Armor armor);
    }
}
