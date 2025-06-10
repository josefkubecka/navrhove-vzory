// Třída, která hledá knihu v katalogu
class BookCatalog {
    findBook(title: string) {
        console.log(`Hledám knihu s názvem "${title}" v katalogu.`);
        return true; // Předstíráme, že knihu našel
    }
}

// Třída, která kontroluje stav členského účtu
class MemberAccount {
    checkAccountStatus(memberId: number) {
        console.log(`Kontroluji stav účtu člena s ID ${memberId}.`);
        return true; // Předstíráme, že účet je v pořádku
    }
}

// Třída, která posílá notifikace členům
class NotificationSystem {
    sendNotification(memberId: number, message: string) {
        console.log(`Posílám notifikaci členu ${memberId}: ${message}`);
    }
}

// Facade třída, která zjednodušuje práci s celým knihovním systémem
class LibraryFacade {
    private catalog = new BookCatalog();        // katalog knih
    private account = new MemberAccount();      // správa účtů členů
    private notifier = new NotificationSystem();// systém notifikací

    // Metoda pro vypůjčení knihy
    borrowBook(memberId: number, bookTitle: string) {
        // Zkontrolujeme, zda je účet člena v pořádku a jestli je kniha k dispozici
        if (this.account.checkAccountStatus(memberId) && this.catalog.findBook(bookTitle)) {
            console.log(`Člen ${memberId} si půjčuje knihu "${bookTitle}".`);
            // Po úspěšném zápůjčení pošleme notifikaci
            this.notifier.sendNotification(memberId, `Půjčil(a) jste si knihu "${bookTitle}". Užijte si čtení!`);
        } else {
            console.log("Půjčení knihy selhalo.");  // Něco se nepovedlo
        }
    }
}

// --- Použití ---
// Vytvoříme instanci Facade a pustíme se do půjčování knihy
const library = new LibraryFacade();
library.borrowBook(123, "1984");
