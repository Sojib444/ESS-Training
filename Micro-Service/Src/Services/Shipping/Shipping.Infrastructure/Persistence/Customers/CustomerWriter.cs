using Microsoft.EntityFrameworkCore;
using Shipping.Application.Customers;
using Shipping.Domain;
using Shipping.Infrastructure;

public sealed class CustomerWriter : ICustomerWriter
{
    private readonly ShippingDbContext _db;
    private readonly ICustomerUniqueness _uniqueness;
    public CustomerWriter(ShippingDbContext db, ICustomerUniqueness uniqueness)
    {
        _db = db;
        _uniqueness = uniqueness;
    }

    public async Task<Guid> AddAsync(string name, string email, string phoneNumber, string address, CancellationToken ct)
    {
        if (await _uniqueness.IsCustomerExists(email, phoneNumber, ct))
            throw new ArgumentException("A customer with the same email or phone number already exists.");
        var entity = new Customer(name, email, phoneNumber, address);
        _db.Customers.Add(entity);
        await _db.SaveChangesAsync(ct);
        return entity.Id;
    }

    public async Task UpdateAsync(Guid id, string name, string email, string phoneNumber, string address, CancellationToken ct)
    {
        var entity = await _db.Customers.FindAsync(new object?[] { id }, ct);

        if (entity is null)
        {
            throw new KeyNotFoundException($"Customer with id '{id}' was not found.");
        }

        if (entity.Email != email || entity.PhoneNumber != phoneNumber)
        {
            if (await _uniqueness.IsCustomerExists(email, phoneNumber, ct))
                throw new ArgumentException("A customer with the same email or phone number already exists.");
        }

        entity.GetType().GetProperty("Name")!.SetValue(entity, name);
        entity.GetType().GetProperty("Email")!.SetValue(entity, email);
        entity.GetType().GetProperty("PhoneNumber")!.SetValue(entity, phoneNumber);
        entity.GetType().GetProperty("Address")!.SetValue(entity, address);
        await _db.SaveChangesAsync(ct);
    }

    public async Task DeleteAsync(Guid id, CancellationToken ct)
    {
        var entity = await _db.Customers.FindAsync(new object?[] { id }, ct);
        if (entity is null)
        {
            throw new KeyNotFoundException($"Customer with id '{id}' was not found.");
        }
        _db.Customers.Remove(entity);
        await _db.SaveChangesAsync(ct);
    }
}