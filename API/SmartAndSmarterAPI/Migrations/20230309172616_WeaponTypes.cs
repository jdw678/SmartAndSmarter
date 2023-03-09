using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartAndSmaterAPI.Migrations
{
    /// <inheritdoc />
    public partial class WeaponTypes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ClipSize",
                table: "Weapons",
                newName: "QuiverSize");

            migrationBuilder.AddColumn<int>(
                name: "SpecificWeaponType",
                table: "Weapons",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WeaponType",
                table: "Weapons",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SpecificWeaponType",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "WeaponType",
                table: "Weapons");

            migrationBuilder.RenameColumn(
                name: "QuiverSize",
                table: "Weapons",
                newName: "ClipSize");
        }
    }
}
