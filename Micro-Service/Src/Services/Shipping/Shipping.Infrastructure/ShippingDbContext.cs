using Microsoft.EntityFrameworkCore;
using Shipping.Domain;

namespace Shipping.Infrastructure;

public sealed class ShippingDbContext : DbContext
{
    private readonly string _schema;
    public ShippingDbContext(DbContextOptions<ShippingDbContext> options) : base(options)
    {
        _schema = (options.FindExtension<
            Microsoft.EntityFrameworkCore.Infrastructure.RelationalOptionsExtension>()?
            .MigrationsHistoryTableSchema) ?? "shipping";
    }

    public DbSet<Customer> Customers => Set<Customer>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasDefaultSchema(_schema);

        modelBuilder.Entity<Customer>(b =>
        {
            b.ToTable("customer");
            b.HasKey(x => x.Id);
            b.Property(x => x.Name).HasMaxLength(256).IsRequired();
            b.Property(x => x.Email).HasMaxLength(256).IsRequired();
            b.Property(x => x.PhoneNumber).HasMaxLength(20).IsRequired();
            b.Property(x => x.Address).HasMaxLength(512).IsRequired();
            b.HasIndex(x => x.Email).IsUnique();
        });
    }
}