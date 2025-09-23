namespace Shipping.Application.Customers;

public record CoustomerDto(Guid Id, string Name, string Email, string PhoneNumber, string Address);