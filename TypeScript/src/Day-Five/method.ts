function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    return descriptor.value;
  };
}

class Calculator {
  // @first()
  // add() {
  //   console.log("add method called");
  // }
}

// const calc = new Calculator();
// calc.add(2, 3);      // Logs arguments & result
// calc.multiply(4, 5); // Logs arguments & result


function Retry(retries: number = 3, delay: number = 500) {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      let attempts = 0;
      while (attempts < retries) {
        try {
          return await originalMethod.apply(this, args);
        } catch (error) {
          attempts++;
          console.warn(
            `⚠️ Attempt ${attempts} for ${String(propertyKey)} failed. Retrying...`
          );
          if (attempts >= retries) {
            console.error(`❌ ${String(propertyKey)} failed after ${retries} attempts.`);
            throw error;
          }
          await new Promise((res) => setTimeout(res, delay));
        }
      }
    };

    return descriptor;
  };
}

// Example usage
class ApiService {
  private counter = 0;

  @Retry(3, 1000) // retry up to 3 times, wait 1s each time
  async fetchData(): Promise<string> {
    this.counter++;
    if (this.counter < 3) {
      throw new Error("Network error 🌐");
    }
    return "✅ Data fetched successfully!";
  }
}

(async () => {
  const api = new ApiService();
  try {
    const result = await api.fetchData();
    console.log(result);
  } catch (e) {
    console.error("Final error:", e);
  }
})();