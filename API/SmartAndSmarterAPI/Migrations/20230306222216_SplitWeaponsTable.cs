using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartAndSmaterAPI.Migrations
{
    /// <inheritdoc />
    public partial class SplitWeaponsTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ClipSize",
                table: "Weapons",
                newName: "QuiverSize");

            migrationBuilder.AlterColumn<string>(
                name: "Attack1Type",
                table: "Weapons",
                type: "varchar(32)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(32)");

            migrationBuilder.AlterColumn<float>(
                name: "Attack1Speed",
                table: "Weapons",
                type: "real",
                nullable: true,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AlterColumn<float>(
                name: "Attack1DamageMultiplier",
                table: "Weapons",
                type: "real",
                nullable: true,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AddColumn<float>(
                name: "Bow_Attack1Speed",
                table: "Weapons",
                type: "real",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Weapons",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<float>(
                name: "MagicWeapon_Attack1DamageMultiplier",
                table: "Weapons",
                type: "real",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "MagicWeapon_Attack1Speed",
                table: "Weapons",
                type: "real",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MagicWeapon_Attack1Type",
                table: "Weapons",
                type: "varchar(32)",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "MagicWeapon_Attack2DamageMultiplier",
                table: "Weapons",
                type: "real",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "MagicWeapon_Attack2Speed",
                table: "Weapons",
                type: "real",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MagicWeapon_Attack2Type",
                table: "Weapons",
                type: "varchar(32)",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "MagicWeapon_Attack3DamageMultiplier",
                table: "Weapons",
                type: "real",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "MagicWeapon_Attack3Speed",
                table: "Weapons",
                type: "real",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MagicWeapon_Attack3Type",
                table: "Weapons",
                type: "varchar(32)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MagicWeapon_Reach",
                table: "Weapons",
                type: "varchar(64)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MagicWeapon_SweetSpot",
                table: "Weapons",
                type: "varchar(64)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MeleeWeapon_Reach",
                table: "Weapons",
                type: "varchar(64)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Bow_Attack1Speed",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "MagicWeapon_Attack1DamageMultiplier",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "MagicWeapon_Attack1Speed",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "MagicWeapon_Attack1Type",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "MagicWeapon_Attack2DamageMultiplier",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "MagicWeapon_Attack2Speed",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "MagicWeapon_Attack2Type",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "MagicWeapon_Attack3DamageMultiplier",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "MagicWeapon_Attack3Speed",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "MagicWeapon_Attack3Type",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "MagicWeapon_Reach",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "MagicWeapon_SweetSpot",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "MeleeWeapon_Reach",
                table: "Weapons");

            migrationBuilder.RenameColumn(
                name: "QuiverSize",
                table: "Weapons",
                newName: "ClipSize");

            migrationBuilder.AlterColumn<string>(
                name: "Attack1Type",
                table: "Weapons",
                type: "varchar(32)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "varchar(32)",
                oldNullable: true);

            migrationBuilder.AlterColumn<float>(
                name: "Attack1Speed",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f,
                oldClrType: typeof(float),
                oldType: "real",
                oldNullable: true);

            migrationBuilder.AlterColumn<float>(
                name: "Attack1DamageMultiplier",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f,
                oldClrType: typeof(float),
                oldType: "real",
                oldNullable: true);
        }
    }
}
