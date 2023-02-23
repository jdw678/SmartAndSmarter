using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartAndSmaterAPI.Migrations
{
    /// <inheritdoc />
    public partial class WeaponTableClipSizeAndReloadSpeed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ClipSize",
                table: "Weapons",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "ReloadSpeed",
                table: "Weapons",
                type: "real",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ClipSize",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "ReloadSpeed",
                table: "Weapons");
        }
    }
}
