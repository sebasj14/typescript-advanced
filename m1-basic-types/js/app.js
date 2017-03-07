"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var classes_1 = require("./classes");
var util = require("./lib/utilityFunctions");
// -------------- Destructuring arrays and objects --------------
function printBookInfo(_a) {
    var booktitle = _a.title, bookauthor = _a.author;
    console.log(booktitle + " was authored by " + bookauthor);
}
var _a = util.GetAllBooks(), book1 = _a[0], book2 = _a[1];
// -------------- The spread operator --------------
function LogFavoriteBooks(_a) {
    var book1 = _a[0], book2 = _a[1], others = _a.slice(2);
    printBookInfo(book1);
    printBookInfo(book2);
    console.log(others);
}
// LogFavoriteBooks(util.GetAllBooks());
// let { title: booktitle, author: bookauthor } = book1;
// console.log(booktitle);
// console.log(bookauthor);
// printBookInfo(book1);
var schoolBooks = [
    { id: 101, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', available: true, category: enums_1.Category.Fiction },
    { id: 102, title: 'A Study In Scarlet', author: 'Arthur C. Doyle', available: true, category: enums_1.Category.Fiction },
    { id: 103, title: 'Java for Dummies', author: 'John Doe', available: true, category: enums_1.Category.Software }
];
var booksRead = util.GetAllBooks();
booksRead.push.apply(booksRead, schoolBooks);
// console.log(booksRead);
var poets = ['Shelley', 'Collins', 'Hughes'];
var authors = ['Tolstoy', 'Fitzgerald'].concat(poets);
var catalogLocation = ['A 123 789', book1];
// -------------- Union and intersection types --------------
var allBooks = util.GetAllBooks();
var allMagazines = util.GetAllMagazines();
var readingMaterial = allMagazines[0];
function PrintTitle(item) {
    console.log(item.title);
}
var serialNovel = {
    id: 100,
    title: 'The Gradual Tale',
    author: 'Occasional Pen',
    available: true,
    category: enums_1.Category.Fiction,
    publisher: 'Serial Press'
};
// -------------- Mixins --------------
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(classes_1.UniversityLibrarian, [classes_1.Employee, classes_1.Researcher]);
var newLibrarian = new classes_1.UniversityLibrarian();
// newLibrarian.doResearch('Witchcraft.');
// -------------- String literals and type aliases --------------
var frequency = 'annually';
function GetMagazineByFrequency(preferredFrequency) {
    // Do something...
}
//# sourceMappingURL=app.js.map