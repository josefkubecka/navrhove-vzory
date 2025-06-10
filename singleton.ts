// Třída pro správu nastavení jazyka (Singleton)
class LanguageManager {
    // Jediná instance třídy, na začátku je null
    private static instance: LanguageManager | null = null;
    // Aktuální nastavený jazyk, výchozí je angličtina ("en")
    private currentLanguage: string = "en";

    // Soukromý konstruktor, aby se třída nedala vytvářet zvenčí
    private constructor() {}

    // Metoda pro získání jediné instance třídy (Singleton)
    public static getInstance(): LanguageManager {
        // Pokud instance ještě neexistuje, vytvoříme ji
        if (this.instance === null) {
            this.instance = new LanguageManager();
        }
        // Vrátíme existující nebo nově vytvořenou instanci
        return this.instance;
    }

    // Nastaví aktuální jazyk
    public setLanguage(lang: string): void {
        this.currentLanguage = lang;
    }

    // Vrátí aktuálně nastavený jazyk
    public getLanguage(): string {
        return this.currentLanguage;
    }
}

// --- Použití ---
// Získáme instanci správce jazyka
const lang1 = LanguageManager.getInstance();
lang1.setLanguage("cs");  // Nastavíme jazyk na češtinu

// Znovu získáme instanci (stejnou, protože je Singleton)
const lang2 = LanguageManager.getInstance();
console.log(lang2.getLanguage());  // Vypíše: "cs"
