class Pizza {
    size: string = "";
    crust: string = "";
    toppings: string[] = [];
}

class PizzaBuilder {
    private pizza = new Pizza();

    setSize(size: string): PizzaBuilder {
        this.pizza.size = size;
        return this;
    }

    setCrust(crust: string): PizzaBuilder {
        this.pizza.crust = crust;
        return this;
    }

    addTopping(topping: string): PizzaBuilder {
        this.pizza.toppings.push(topping);
        return this;
    }

    build(): Pizza {
        return this.pizza;
    }
}

// --- Použití ---
const myPizza = new PizzaBuilder()
    .setSize("Large")
    .setCrust("Thin")
    .addTopping("Pepperoni")
    .addTopping("Mushrooms")
    .build();

console.log(myPizza);
