using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartAndSmaterAPI.Migrations
{
    /// <inheritdoc />
    public partial class WeaponSlowDownOnHit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "SlowDownOnHit",
                table: "Weapons",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SlowDownOnHit",
                table: "Weapons");
        }
    }
}
