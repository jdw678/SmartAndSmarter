using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartAndSmaterAPI.Migrations
{
    /// <inheritdoc />
    public partial class StatusNullException : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Stats",
                table: "Armors",
                type: "varchar(1024)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(1024)");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Stats",
                table: "Armors",
                type: "varchar(1024)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "varchar(1024)",
                oldNullable: true);
        }
    }
}
