using Microsoft.EntityFrameworkCore;
using SmartAndSmaterAPI.Models;
using SmartAndSmaterAPI.Models.Repositories;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()
    .AddJsonOptions(options => options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter()));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContextPool<SASDbContext>(options => 
    options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection"))
);

builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

builder.Services.AddScoped<IGenericRepository<MeleeWeapon>, SQLGenericRepository<MeleeWeapon>>();
builder.Services.AddScoped<IGenericRepository<MagicWeapon>, SQLGenericRepository<MagicWeapon>>();
builder.Services.AddScoped<IGenericRepository<Shield>, SQLGenericRepository<Shield>>();
builder.Services.AddScoped<IGenericRepository<Bow>, SQLGenericRepository<Bow>>();
builder.Services.AddScoped<IArmorRepository, SQLArmorRepository>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors("corsapp");
app.UseHttpsRedirection();
app.UseAuthorization();

app.Run();
