"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const util = require("./lib/utilityFunctions");
// ------------------------------ Callbacks ------------------------------
// interface LibMgrCallback {
//     (err: Error, titles: string[]): void;
// }
// function getBooksByCategory(cat: Category, callback: LibMgrCallback): void {
//     setTimeout(() => {
//         try {
//             let foundBooks: string[] = util.GetBookTitlesByCategory(cat);
//             if (foundBooks.length > 0) {
//                 callback(null, foundBooks);
//             } else {
//                 throw new Error('No books found');
//             }
//         } catch (error) {
//             callback(error, null);
//         }
//     }, 2000)
// }
// function logCategorySearch(err: Error, titles: string[]): void {
//     if (err) {
//         console.log(`Error message: ${err.message}`);
//     } else {
//         console.log(`Found the following titles: `);
//         console.log(titles);
//     }
// }
// console.log('Beginning search...');
// getBooksByCategory(Category.Biography, logCategorySearch);
// console.log('Search submitted!');
// ------------------------------ Promises ------------------------------
// function getBooksByCategory(cat: Category): Promise<string[]> {
//     let p: Promise<string[]> = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let foundBooks: string[] = util.GetBookTitlesByCategory(cat);
//             if (foundBooks.length > 0) {
//                 resolve(foundBooks);
//             } else {
//                 reject('No books found for that category');
//             }
//         }, 2000);
//     });
//     return p;
// }
// console.log('Beginning search...');
// getBooksByCategory(Category.Fiction)
//     .then(titles => {
//         console.log(`Found titles: ${titles}`);
//         return titles.length;
//     }, reason => { return 0; })
//     .then(numOfBooks => console.log(`Number of books found: ${numOfBooks}`))
//     .catch(reason => console.log(`Error: ${reason}`));
// console.log('Search submitted!');
// ------------------------------ Async/Await ------------------------------
function getBooksByCategory(cat) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundBooks = util.GetBookTitlesByCategory(cat);
            if (foundBooks.length > 0) {
                resolve(foundBooks);
            }
            else {
                reject('No books found for that category');
            }
        }, 2000);
    });
    return p;
}
function logSearchResults(bookCategory) {
    return __awaiter(this, void 0, void 0, function* () {
        let foundbooks = yield getBooksByCategory(bookCategory);
        console.log(foundbooks);
    });
}
console.log('Beginning search...');
logSearchResults(enums_1.Category.Fiction).catch(reason => { console.log(reason); });
console.log('Search submitted!');
//# sourceMappingURL=app.js.map