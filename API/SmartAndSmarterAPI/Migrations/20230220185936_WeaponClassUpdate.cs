using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartAndSmaterAPI.Migrations
{
    /// <inheritdoc />
    public partial class WeaponClassUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ActionMovementSpeed",
                table: "Weapons",
                type: "varchar(128)",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "Attack1DamageMultiplier",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "Attack1Speed",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<string>(
                name: "Attack1Type",
                table: "Weapons",
                type: "varchar(32)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<float>(
                name: "Attack2DamageMultiplier",
                table: "Weapons",
                type: "real",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "Attack2Speed",
                table: "Weapons",
                type: "real",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Attack2Type",
                table: "Weapons",
                type: "varchar(32)",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "Attack3DamageMultiplier",
                table: "Weapons",
                type: "real",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "Attack3Speed",
                table: "Weapons",
                type: "real",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Attack3Type",
                table: "Weapons",
                type: "varchar(32)",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "Attack4DamageMultiplier",
                table: "Weapons",
                type: "real",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "Attack4Speed",
                table: "Weapons",
                type: "real",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Attack4Type",
                table: "Weapons",
                type: "varchar(32)",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "Attack5DamageMultiplier",
                table: "Weapons",
                type: "real",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "Attack5Speed",
                table: "Weapons",
                type: "real",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Attack5Type",
                table: "Weapons",
                type: "varchar(32)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "BarbarianCanUse",
                table: "Weapons",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<float>(
                name: "BlackDamageMax",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "BlackDamageMin",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "BlueDamageMax",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "BlueDamageMin",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<bool>(
                name: "ClericCanUse",
                table: "Weapons",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "FighterCanUse",
                table: "Weapons",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<float>(
                name: "GoldDamageMax",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "GoldDamageMin",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "GreenDamageMax",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "GreenDamageMin",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "GreyDamageMax",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "GreyDamageMin",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<string>(
                name: "Hand",
                table: "Weapons",
                type: "varchar(64)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageLocation",
                table: "Weapons",
                type: "varchar(1024)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<float>(
                name: "MovementSpeedWhileEquiped",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Weapons",
                type: "varchar(64)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<float>(
                name: "OrangeDamageMax",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "OrangeDamageMin",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "PurpleDamageMax",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "PurpleDamageMin",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<bool>(
                name: "RangerCanUse",
                table: "Weapons",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Reach",
                table: "Weapons",
                type: "varchar(64)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "RogueCanUse",
                table: "Weapons",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UniqueLink",
                table: "Weapons",
                type: "varchar(1024)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UniqueName",
                table: "Weapons",
                type: "varchar(64)",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "WhiteDamageMax",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "WhiteDamageMin",
                table: "Weapons",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<bool>(
                name: "WizardCanUse",
                table: "Weapons",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ActionMovementSpeed",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Attack1DamageMultiplier",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Attack1Speed",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Attack1Type",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Attack2DamageMultiplier",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Attack2Speed",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Attack2Type",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Attack3DamageMultiplier",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Attack3Speed",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Attack3Type",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Attack4DamageMultiplier",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Attack4Speed",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Attack4Type",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Attack5DamageMultiplier",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Attack5Speed",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Attack5Type",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "BarbarianCanUse",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "BlackDamageMax",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "BlackDamageMin",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "BlueDamageMax",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "BlueDamageMin",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "ClericCanUse",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "FighterCanUse",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "GoldDamageMax",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "GoldDamageMin",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "GreenDamageMax",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "GreenDamageMin",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "GreyDamageMax",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "GreyDamageMin",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Hand",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "ImageLocation",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "MovementSpeedWhileEquiped",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "OrangeDamageMax",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "OrangeDamageMin",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "PurpleDamageMax",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "PurpleDamageMin",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "RangerCanUse",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "Reach",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "RogueCanUse",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "UniqueLink",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "UniqueName",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "WhiteDamageMax",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "WhiteDamageMin",
                table: "Weapons");

            migrationBuilder.DropColumn(
                name: "WizardCanUse",
                table: "Weapons");
        }
    }
}
