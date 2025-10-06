function logMethod(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value; // save original method
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments:`, args);
    const result = originalMethod.apply(this, args); // call original method
    console.log(`Result:`, result);
    return result;
  };
  return descriptor;
}
class Calculator {
  @logMethod
  add(a: number, b: number) {
    return a + b;
  }
  @logMethod
  multiply(a: number, b: number) {
    return a * b;
  }
}
const calc = new Calculator();
calc.add(2, 3);      // Logs arguments & result
calc.multiply(4, 5); // Logs arguments & result