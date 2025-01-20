using Microsoft.EntityFrameworkCore;
using MySql.Data;
using MySql.EntityFrameworkCore.Extensions;


namespace Shop_Desktop_App.Data
{
    public class ShopDbContext : DbContext
    {
        // Constructor to configure the DbContext options
        public ShopDbContext(DbContextOptions<ShopDbContext> options) : base(options) { }

        public ShopDbContext() { }

        // DbSet for the Users table
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                // Specify your connection string here
                optionsBuilder.UseMySQL("Server=localhost;" +
                    "Database=signup_desktop;" +
                    "User=root;" +
                    "Password=Hashi@1234;"
                    );

            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure the Users table
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(u => u.Email); // Primary key
                entity.Property(u => u.Email).IsRequired().HasMaxLength(100);
                entity.Property(u => u.PhoneNumber).IsRequired().HasMaxLength(15);
                entity.Property(u => u.Password).IsRequired().HasMaxLength(255);
                entity.Property(u => u.Role).IsRequired().HasMaxLength(10);
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}
