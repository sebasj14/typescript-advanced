"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
const util = require("./lib/utilityFunctions");
require("./LibrarianExtension");
// ---------------------------- Polymorphic this types ----------------------------
class LibraryBook {
    Checkout() {
        console.log('Checking out a book');
        return this;
    }
    Checkin() {
        // console.log('Checking in a book');
        if (this instanceof ChildrensBook) {
            console.log('Cheking in a ChildrensBook');
        }
        if (this instanceof ElectronicBook) {
            console.log('Cheking in an ElectronicBook');
        }
        return this;
    }
}
class ChildrensBook extends LibraryBook {
    Clean() {
        console.log('Cleaning a book');
        return this;
    }
}
class ElectronicBook extends LibraryBook {
    RemoveFromCustomerDevice() {
        console.log('Removing book from device');
        return this;
    }
}
// let kidbook = new ChildrensBook();
// kidbook.Checkin().Clean().Checkout();
// let ebook = new ElectronicBook();
// ebook.Checkin().RemoveFromCustomerDevice().Checkout();
// ---------------------------- Declaration merging and module augmentation ----------------------------
// let mergedBook: Book;
// mergedBook.publisher = 'Programming Press';
// let newLibrarian = new UniversityLibrarian();
// newLibrarian.phone = '555-1234';
// newLibrarian.hostSeminar('Witchcraft and Wizardry.');
// ---------------------------- Type guards ----------------------------
function logVisitor(param) {
    if (typeof param === 'number') {
        console.log(`${param} new visitors arrived.`);
    }
    else {
        console.log(`${param.toUpperCase()} visited.`);
    }
}
// logVisitor(5);
// logVisitor('Sebastián Jiménez');
// let lib: Librarian = new PublicLibrarian();
// if (lib instanceof UniversityLibrarian) {
//     lib.assistFaculty();
// }
// if (lib instanceof PublicLibrarian) {
//     lib.teachCommunity();
// }
function isBook(text) {
    return text.author !== undefined;
}
let readingMaterial = util.GetAllMagazines()[0];
// if (isBook(readingMaterial)) {
//     console.log(`The author is ${readingMaterial.author}.`);
// } else {
//     console.log(`The publisher is ${readingMaterial.publisher}.`);
// }
// ---------------------------- Symbols ----------------------------
let mySymbol = Symbol('first_symbol');
let anotherSymbol = Symbol('first_symbol');
// console.log(mySymbol === anotherSymbol);
// console.log(typeof mySymbol);
let myObject = {
    [mySymbol]: 'value for symbol'
};
// console.log(myObject[mySymbol]);
let librarian = new classes_1.UniversityLibrarian();
// librarian[CLASS_INFO]();
let libraryCustomer = {
    name: 'Thor',
    assistCustomer: (custName) => console.log(`Assisting ${custName}`)
};
if (libraryCustomer instanceof classes_1.UniversityLibrarian) {
    console.log('An asgardian librarian.');
}
else {
    console.log('An ordinary librarian.');
}
//# sourceMappingURL=app.js.map