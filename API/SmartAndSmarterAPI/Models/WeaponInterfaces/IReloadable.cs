namespace SmartAndSmaterAPI.Models.WeaponInterfaces
{
    public interface IReloadable
    {
        void SetReloadSpeed(float speed);

        void SetQuiverSize(int quiverSize);
    }
}
