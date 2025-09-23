using Microsoft.EntityFrameworkCore;
using Shipping.Application.Customers;

namespace Shipping.Infrastructure.Persistence.Customers;

public sealed class CustomerReader : ICustomerReader
{
    private readonly ShippingDbContext _db;
    public CustomerReader(ShippingDbContext db) => _db = db;

    public Task<CoustomerDto?> GetByIdAsync(Guid id, CancellationToken ct) =>
        _db.Customers
           .Where(c => c.Id == id)
           .Select(c => new CoustomerDto(
               c.Id,
               c.Name,
               c.Email,
               c.PhoneNumber,
               c.Address
           ))
           .FirstOrDefaultAsync(ct);

    public async Task<IReadOnlyList<CoustomerDto>> GetAllAsync(int skip, int take, CancellationToken ct) =>
        await _db.Customers
                 .OrderBy(c => c.Name)
                 .Skip(skip).Take(take)
                 .Select(c => new CoustomerDto(
                     c.Id,
                     c.Name,
                     c.Email,
                     c.PhoneNumber,
                     c.Address
                 ))
                 .ToListAsync(ct);

    
    
}