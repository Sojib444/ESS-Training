function logMethod(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
): PropertyDescriptor {   // return the descriptor
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${String(propertyKey)} with`, args);
    const result = originalMethod.apply(this, args);
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
calc.add(2, 3);      // logs calls + result
calc.multiply(4, 5);

class X {
  private p = 5;
  show() {
    console.log(this.p);
  }
}
const x = new X();
console.log((x as any).p);
x.show();





