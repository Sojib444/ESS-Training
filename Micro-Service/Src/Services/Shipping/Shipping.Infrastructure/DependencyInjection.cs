
using Microsoft.Extensions.DependencyInjection;
using Shipping.Application.Abstraction;
using Shipping.Application.Customers;
using Shipping.Infrastructure.Persistence.Customers;

namespace Shipping.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddCustomerInfrastructure(this IServiceCollection services)
    {
        // Application abstractions -> EF Core implementations
        services.AddScoped<ICustomerWriter, CustomerWriter>();
        services.AddScoped<ICustomerReader, CustomerReader>();
        services.AddScoped<ICustomerUniqueness, CustomerUniqueness>();
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddScoped<CreateCustomerHandler>();
        services.AddScoped<ShippingDbContext>();
        return services;
    }
}
