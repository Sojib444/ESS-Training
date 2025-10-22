using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Shipping.Application.Customers;

namespace Shipping.Infrastructure.Persistence.Customers;

public sealed class CustomerReader : ICustomerReader
{
    private readonly ShippingDbContext _db;
    public CustomerReader(ShippingDbContext db) => _db = db;

    public async Task<CustomerDto?> GetByIdAsync(Guid id, CancellationToken ct)
    {
        var customer = await _db.Customers
                               .FirstOrDefaultAsync(c => c.Id == id, ct);
        if (customer is null)
            return null;
        return new CustomerDto(
            customer.Id,
            customer.Name,
            customer.Email,
            customer.PhoneNumber,
            customer.Address,
            customer.Gender,
            customer.CustomerTypeId,
            customer.HobbiesJson != null ? customer.HobbiesJson.Split(',').ToList() : new List<string>(),
            customer.CountriesJson != null ? customer.CountriesJson.Split(',').ToList() : new List<string>()
        );
    }


    public async Task<IReadOnlyList<CustomerDto>> GetAllAsync(int skip, int take, CancellationToken ct)
    {
        var customers = await _db.Customers
            .OrderBy(c => c.Name)
            .Skip(skip)
            .Take(take)
            .ToListAsync(ct);

        // 2️⃣ Map in memory (safe to use JsonSerializer here)
        if (customers == null)
        {
            return null!;
        }
        
        return customers.Select(c => new CustomerDto(
                    c.Id,
                    c.Name,
                    c.Email,
                    c.PhoneNumber,
                    c.Address,
                    c.Gender,
                    c.CustomerTypeId,
                    JsonSerializer.Deserialize<List<string>>(c.HobbiesJson ?? "[]") ?? new List<string>(),
                    JsonSerializer.Deserialize<List<string>>(c.CountriesJson ?? "[]") ?? new List<string>()
                    )).ToList();
                
    }
}