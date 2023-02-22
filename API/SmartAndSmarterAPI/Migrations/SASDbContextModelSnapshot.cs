﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SmartAndSmaterAPI.Models;

#nullable disable

namespace SmartAndSmaterAPI.Migrations
{
    [DbContext(typeof(SASDbContext))]
    partial class SASDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("SmartAndSmaterAPI.Models.Weapon", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ActionMovementSpeed")
                        .HasColumnType("varchar(128)");

                    b.Property<float>("Attack1DamageMultiplier")
                        .HasColumnType("real");

                    b.Property<float>("Attack1Speed")
                        .HasColumnType("real");

                    b.Property<string>("Attack1Type")
                        .IsRequired()
                        .HasColumnType("varchar(32)");

                    b.Property<float?>("Attack2DamageMultiplier")
                        .HasColumnType("real");

                    b.Property<float?>("Attack2Speed")
                        .HasColumnType("real");

                    b.Property<string>("Attack2Type")
                        .HasColumnType("varchar(32)");

                    b.Property<float?>("Attack3DamageMultiplier")
                        .HasColumnType("real");

                    b.Property<float?>("Attack3Speed")
                        .HasColumnType("real");

                    b.Property<string>("Attack3Type")
                        .HasColumnType("varchar(32)");

                    b.Property<float?>("Attack4DamageMultiplier")
                        .HasColumnType("real");

                    b.Property<float?>("Attack4Speed")
                        .HasColumnType("real");

                    b.Property<string>("Attack4Type")
                        .HasColumnType("varchar(32)");

                    b.Property<float?>("Attack5DamageMultiplier")
                        .HasColumnType("real");

                    b.Property<float?>("Attack5Speed")
                        .HasColumnType("real");

                    b.Property<string>("Attack5Type")
                        .HasColumnType("varchar(32)");

                    b.Property<bool>("BarbarianCanUse")
                        .HasColumnType("bit");

                    b.Property<float?>("BlackDamageMax")
                        .IsRequired()
                        .HasColumnType("real");

                    b.Property<float>("BlackDamageMin")
                        .HasColumnType("real");

                    b.Property<float>("BlueDamageMax")
                        .HasColumnType("real");

                    b.Property<float>("BlueDamageMin")
                        .HasColumnType("real");

                    b.Property<bool>("ClericCanUse")
                        .HasColumnType("bit");

                    b.Property<bool>("FighterCanUse")
                        .HasColumnType("bit");

                    b.Property<float>("GoldDamageMax")
                        .HasColumnType("real");

                    b.Property<float>("GoldDamageMin")
                        .HasColumnType("real");

                    b.Property<float>("GreenDamageMax")
                        .HasColumnType("real");

                    b.Property<float>("GreenDamageMin")
                        .HasColumnType("real");

                    b.Property<float>("GreyDamageMax")
                        .HasColumnType("real");

                    b.Property<float>("GreyDamageMin")
                        .HasColumnType("real");

                    b.Property<string>("Hand")
                        .HasColumnType("varchar(64)");

                    b.Property<string>("ImageLocation")
                        .IsRequired()
                        .HasColumnType("varchar(1024)");

                    b.Property<float>("MovementSpeedWhileEquiped")
                        .HasColumnType("real");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("varchar(64)");

                    b.Property<float>("OrangeDamageMax")
                        .HasColumnType("real");

                    b.Property<float>("OrangeDamageMin")
                        .HasColumnType("real");

                    b.Property<float>("PurpleDamageMax")
                        .HasColumnType("real");

                    b.Property<float>("PurpleDamageMin")
                        .HasColumnType("real");

                    b.Property<bool>("RangerCanUse")
                        .HasColumnType("bit");

                    b.Property<string>("Reach")
                        .HasColumnType("varchar(64)");

                    b.Property<bool>("RogueCanUse")
                        .HasColumnType("bit");

                    b.Property<string>("SweetSpot")
                        .HasColumnType("varchar(64)");

                    b.Property<string>("UniqueLink")
                        .HasColumnType("varchar(1024)");

                    b.Property<string>("UniqueName")
                        .HasColumnType("varchar(64)");

                    b.Property<float>("WhiteDamageMax")
                        .HasColumnType("real");

                    b.Property<float>("WhiteDamageMin")
                        .HasColumnType("real");

                    b.Property<bool>("WizardCanUse")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("Weapons");
                });
#pragma warning restore 612, 618
        }
    }
}
