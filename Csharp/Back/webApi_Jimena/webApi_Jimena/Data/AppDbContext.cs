using Microsoft.EntityFrameworkCore;
using webApi_Jimena.Models;

namespace webApi_Jimena.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<TriangleModel> TriangleCalculations { get; set; }
        
        public DbSet<CircleModel> CircleCalculations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("JJF");

            modelBuilder.Entity<TriangleModel>().ToTable("TriangleModel", "JJF");

            modelBuilder.Entity<CircleModel>()
                .ToTable("CircleModel", "JJF");

            base.OnModelCreating(modelBuilder);
        }
    }
}