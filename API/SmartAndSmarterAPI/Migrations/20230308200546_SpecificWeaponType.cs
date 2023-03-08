using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartAndSmaterAPI.Migrations
{
    /// <inheritdoc />
    public partial class SpecificWeaponType : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "SpecificWeaponType",
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
        }
    }
}
