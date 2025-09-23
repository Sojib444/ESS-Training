using MediatR;

namespace Shipping.Application.Customers;

public sealed record GetCustomerById(Guid Id) : IRequest<CoustomerDto?>;
public sealed record ListCustomers(int Skip, int Take) : IRequest<IReadOnlyList<CoustomerDto>>;
public sealed record CreateCustomer(string Name, string Email, string PhoneNumber, string Address) : IRequest<Guid>;
public sealed record UpdateCustomer(Guid Id, string Name, string Email, string PhoneNumber, string Address) : IRequest;
public sealed record DeleteCustomer(Guid Id) : IRequest;