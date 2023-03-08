using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartAndSmaterAPI.Migrations
{
    /// <inheritdoc />
    public partial class SheildAttackType : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "MeleeWeapon_Attack1Type",
                table: "Weapons",
                type: "varchar(32)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MeleeWeapon_Attack2Type",
                table: "Weapons",
                type: "varchar(32)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MeleeWeapon_Attack1Type",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "MeleeWeapon_Attack2Type",
                table: "Weapons");
        }
    }
}
