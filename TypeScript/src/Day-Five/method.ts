// function first() {
//   console.log("first(): factory evaluated");
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     return descriptor.value;
//   };
// }

// // class Calculator {
// //   // @first()
// //   // add() {
// //   //   console.log("add method called");
// //   // }
// // }

// // const calc = new Calculator();
// // calc.add(2, 3);      // Logs arguments & result
// // calc.multiply(4, 5); // Logs arguments & result


// function Retry(retries: number = 3, delay: number = 500) {
//   return function (
//     target: Object,
//     propertyKey: string | symbol,
//     descriptor: PropertyDescriptor
//   ) {
//     const originalMethod = descriptor.value;

//     descriptor.value = async function (...args: any[]) {
//       let attempts = 0;
//       while (attempts < retries) {
//         try {
//           return await originalMethod.apply(this, args);
//         } catch (error) {
//           attempts++;
//           console.warn(
//             `⚠️ Attempt ${attempts} for ${String(propertyKey)} failed. Retrying...`
//           );
//           if (attempts >= retries) {
//             console.error(`❌ ${String(propertyKey)} failed after ${retries} attempts.`);
//             throw error;
//           }
//           await new Promise((res) => setTimeout(res, delay));
//         }
//       }
//     };

//     return descriptor;
//   };
// }

// // Example usage
// // class ApiService {
// //   private counter = 0;

// //   @Retry(3, 1000) // retry up to 3 times, wait 1s each time
// //   async fetchData(): Promise<string> {
// //     this.counter++;
// //     if (this.counter < 3) {
// //       throw new Error("Network error 🌐");
// //     }
// //     return "✅ Data fetched successfully!";
// //   }
// // }

// // (async () => {
// //   const api = new ApiService();
// //   try {
// //     const result = await api.fetchData();
// //     console.log(result);
// //   } catch (e) {
// //     console.error("Final error:", e);
// //   }
// // })();


// function EnsureNumberReturn(
//   target: Object,
//   propertyKey: string | symbol,
//   descriptor: PropertyDescriptor
// ) {
//   const originalMethod = descriptor.value;

//   descriptor.value = function (...args: any[]) {
//     const result = originalMethod.apply(this, args);

//     if (typeof result !== "number") {
//       throw new Error(
//         `Method "${String(propertyKey)}" must return a number, but got ${typeof result}`
//       );
//     }

//     return result;
//   };

//   return descriptor;
// }


// function MaxLength(length: number) {
//   return function (target: any, propertyKey: string) {
//     const backingKey = Symbol(propertyKey);

//     Object.defineProperty(target, propertyKey, {
//       get: function () {
//         return this[backingKey];
//       },
//       set: function (val: any) {
//         if (val != null && typeof val === "string" && val.length > length) {
//           throw new Error(
//             `Property "${propertyKey}" length must be <= ${length}. Received length ${val.length}`
//           );
//         }
//         // store the value on the instance so each instance has its own value
//         Object.defineProperty(this, backingKey, {
//           value: val,
//           writable: true,
//           enumerable: false,
//         });
//       },
//       enumerable: true,
//       configurable: true,
//     });
//   };
// }

// function MaxLength1(max: number) {
//   return function (target: any, propertyKey: string) {
//     const privateKey = Symbol();

//     Object.defineProperty(target, propertyKey, {
//       get: function () {
//         return this[privateKey];
//       },
//       set: function (newVal: string) {
//         if (newVal && newVal.length > max) {
//           throw new Error(
//             `Property "${propertyKey}" length must not exceed ${max} characters`
//           );
//         }
//         this[privateKey] = newVal;
//       },
//       enumerable: true,
//       configurable: true,
//     });
//   };
// }


// // Example usage
// class Calculator {
//   @MaxLength1(10)
//   public name?: string;
//   // @EnsureNumberReturn
//   // add(a: number, b: number) {
//   //   return a + b; // ✅ valid
//   // }

//   // @EnsureNumberReturn
//   // greet(name: string) {
//   //   return `Hello, ${name}`; // ❌ will throw an error
//   // }
  
// }

// const calc = new Calculator();
// calc.name = "Shortsdgfsdfgdsgfsd"; // ✅ valid

// console.log(calc.name);
// //  console.log(calc.add(2, 3)); // 5

// //  console.log(EnsureNumberReturn);

// // console.log(calc.greet("Sojib")); // ❌ Error: Method "greet" must return a number


function MaxLength(max: number) {
  return function (target: any, propertyKey: string) {
    const backingKey = Symbol(propertyKey); // per-property, per-decorator unique key

    Object.defineProperty(target, propertyKey, {
      get: function (this: any) {
        return this[backingKey];
      },
      set: function (this: any, newVal: any) {
        // allow null/undefined
        if (newVal != null && typeof newVal === "string" && newVal.length > max) {
          throw new Error(
            `Property "${propertyKey}" length must not exceed ${max} characters (got ${newVal.length}).`
          );
        }
        this[backingKey] = newVal;
      },
      enumerable: true,
      configurable: true,
    });
  };
}


// Example usage
class Calculator {
  @MaxLength(10)
  public name?: string;
}

const a = new Calculator();
a.name = "short"; // ok
console.log(a.name); // "short"

try {
  a.name = "this-name-is-way-too-long";
} catch (e: any) {
  console.error("Caught:", e.message); // prints the error
}

const b = new Calculator();
b.name = "another"; // independent from `a`
console.log("a:", a.name, "b:", b.name);