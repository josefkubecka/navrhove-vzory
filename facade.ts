class BookCatalog {
    findBook(title: string) {
        console.log(`Hledám knihu s názvem "${title}" v katalogu.`);
        return true; // předstíráme, že ji našel
    }
}

class MemberAccount {
    checkAccountStatus(memberId: number) {
        console.log(`Kontroluji stav účtu člena s ID ${memberId}.`);
        return true; // předstíráme, že je účet v pořádku
    }
}

class NotificationSystem {
    sendNotification(memberId: number, message: string) {
        console.log(`Posílám notifikaci členu ${memberId}: ${message}`);
    }
}

class LibraryFacade {
    private catalog = new BookCatalog();
    private account = new MemberAccount();
    private notifier = new NotificationSystem();

    borrowBook(memberId: number, bookTitle: string) {
        if (this.account.checkAccountStatus(memberId) && this.catalog.findBook(bookTitle)) {
            console.log(`Člen ${memberId} si půjčuje knihu "${bookTitle}".`);
            this.notifier.sendNotification(memberId, `Půjčil(a) jste si knihu "${bookTitle}". Užijte si čtení!`);
        } else {
            console.log("Půjčení knihy selhalo.");
        }
    }
}

// --- Použití ---
const library = new LibraryFacade();
library.borrowBook(123, "1984");
