class LanguageManager {
    private static instance: LanguageManager | null = null;
    private currentLanguage: string = "en";

    private constructor() {}

    public static getInstance(): LanguageManager {
        if (this.instance === null) {
            this.instance = new LanguageManager();
        }
        return this.instance;
    }

    public setLanguage(lang: string): void {
        this.currentLanguage = lang;
    }

    public getLanguage(): string {
        return this.currentLanguage;
    }
}

// --- Použití ---
const lang1 = LanguageManager.getInstance();
lang1.setLanguage("cs");

const lang2 = LanguageManager.getInstance();
console.log(lang2.getLanguage());  // "cs"
