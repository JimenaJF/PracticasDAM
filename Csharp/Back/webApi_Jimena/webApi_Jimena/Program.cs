using webApi_Jimena.Data;
using webApi_Jimena.Interface;
using webApi_Jimena.Service;
using webApi_Jimena.ServiceTriangle;

using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddScoped<ItriangleService, TriangleService>();
builder.Services.AddScoped<InumberService, NumberService>();
builder.Services.AddScoped<IcircleService, CircleService>();
builder.Services.AddScoped<IpalindromeService, PalindromeService>();
builder.Services.AddScoped<IbookService, BookService>();


builder.Services.AddSwaggerGen(options => { 
    var xmlFilename = $"{System.Reflection.Assembly.GetExecutingAssembly().GetName().Name}.xml";
    options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));
});

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        npgsqlOptions => npgsqlOptions.MigrationsHistoryTable("__EFMigrationsHistory", "JJF")
    )
);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy => policy
        .AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod()
        );
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
