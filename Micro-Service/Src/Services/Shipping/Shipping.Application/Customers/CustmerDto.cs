namespace Shipping.Application.Customers;

public record CustomerDto(Guid Id, string Name, string Email, string PhoneNumber, string Address);