namespace  Shipping.Application.Customers;

public interface ICustomerReader
{
    Task<CoustomerDto?> GetByIdAsync(Guid id, CancellationToken ct);
    Task<IReadOnlyList<CoustomerDto>> GetAllAsync(int skip, int take, CancellationToken ct);
}


public interface ICustomerWriter
{
    Task<Guid> AddAsync(string name, string email, string phoneNumber, string address, CancellationToken ct);
     Task UpdateAsync(Guid id, string name, string email, string phoneNumber, string address, CancellationToken ct);
    Task DeleteAsync(Guid id, CancellationToken ct);
}
