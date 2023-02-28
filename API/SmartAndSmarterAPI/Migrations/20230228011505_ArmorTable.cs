using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartAndSmaterAPI.Migrations
{
    /// <inheritdoc />
    public partial class ArmorTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Armors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "varchar(64)", nullable: false),
                    ImageLocation = table.Column<string>(type: "varchar(1024)", nullable: false),
                    BlackArmorMin = table.Column<float>(type: "real", nullable: false),
                    BlackArmorMax = table.Column<float>(type: "real", nullable: false),
                    GreyArmorMin = table.Column<float>(type: "real", nullable: false),
                    GreyArmorMax = table.Column<float>(type: "real", nullable: false),
                    WhiteArmorMin = table.Column<float>(type: "real", nullable: false),
                    WhiteArmorMax = table.Column<float>(type: "real", nullable: false),
                    GreenArmorMin = table.Column<float>(type: "real", nullable: false),
                    GreenArmorMax = table.Column<float>(type: "real", nullable: false),
                    BlueArmorMin = table.Column<float>(type: "real", nullable: false),
                    BlueArmorMax = table.Column<float>(type: "real", nullable: false),
                    PurpleArmorMin = table.Column<float>(type: "real", nullable: false),
                    PurpleArmorMax = table.Column<float>(type: "real", nullable: false),
                    OrangeArmorMin = table.Column<float>(type: "real", nullable: false),
                    OrangeArmorMax = table.Column<float>(type: "real", nullable: false),
                    GoldArmorMin = table.Column<float>(type: "real", nullable: false),
                    GoldArmorMax = table.Column<float>(type: "real", nullable: false),
                    BarbarianCanUse = table.Column<bool>(type: "bit", nullable: false),
                    FighterCanUse = table.Column<bool>(type: "bit", nullable: false),
                    ClericCanUse = table.Column<bool>(type: "bit", nullable: false),
                    RangerCanUse = table.Column<bool>(type: "bit", nullable: false),
                    RogueCanUse = table.Column<bool>(type: "bit", nullable: false),
                    WizardCanUse = table.Column<bool>(type: "bit", nullable: false),
                    MovementSpeed = table.Column<float>(type: "real", nullable: false),
                    Stats = table.Column<string>(type: "varchar(1024)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Armors", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Armors");
        }
    }
}
