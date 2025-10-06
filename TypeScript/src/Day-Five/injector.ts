class Injector {
  private static services = new Map<string, any>();

  static register(token: string, instance: any) {
    this.services.set(token, instance);
  }

  static resolve<T>(token: string): T {
    const service = this.services.get(token);
    if (!service) throw new Error(`No provider for ${token}`);
    return service;
  }
}

function Injectable(token: string) {
  return function (constructor: any) {
    Injector.register(token, new constructor());
  };
}

function Inject(token: string) {
  return function (target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
      get: () => Injector.resolve(token),
      enumerable: true,
      configurable: true,
    });
  };
}

