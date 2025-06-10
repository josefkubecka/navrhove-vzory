// Třída představující pizzu s vlastnostmi velikost, těsto a přísady
class Pizza {
    size: string = "";          // velikost pizzy (např. malá, střední, velká)
    crust: string = "";         // druh těsta (např. tenké, silné)
    toppings: string[] = [];    // seznam přísad (např. salám, houby)
}

// Třída, která pomáhá stavět objekt Pizza krok po kroku
class PizzaBuilder {
    private pizza = new Pizza();  // nová prázdná pizza, kterou budeme tvořit

    // Nastaví velikost pizzy a vrátí builder, abychom mohli pokračovat
    setSize(size: string): PizzaBuilder {
        this.pizza.size = size;
        return this;
    }

    // Nastaví druh těsta a vrátí builder
    setCrust(crust: string): PizzaBuilder {
        this.pizza.crust = crust;
        return this;
    }

    // Přidá jednu přísadu do seznamu a vrátí builder
    addTopping(topping: string): PizzaBuilder {
        this.pizza.toppings.push(topping);
        return this;
    }

    // Vrátí hotovou pizzu (už sestavený objekt)
    build(): Pizza {
        return this.pizza;
    }
}

// --- Použití ---
// Vytvoříme novou pizzu, nastavíme velikost, těsto a přísady, pak ji "postavíme"
const myPizza = new PizzaBuilder()
    .setSize("Large")           // Velká pizza
    .setCrust("Thin")           // Tenké těsto
    .addTopping("Pepperoni")    // Přidáme salám
    .addTopping("Mushrooms")    // Přidáme houby
    .build();                   // Sestavíme hotovou pizzu

console.log(myPizza);          // Vypíšeme vytvořenou pizzu
