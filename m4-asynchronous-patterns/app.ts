import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { PublicLibrarian, UniversityLibrarian, ReferenceItem, Employee, Researcher } from './classes';
import * as util from './lib/utilityFunctions';

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
function getBooksByCategory(cat: Category): Promise<string[]> {
    let p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundBooks: string[] = util.GetBookTitlesByCategory(cat);
            if (foundBooks.length > 0) {
                resolve(foundBooks);
            } else {
                reject('No books found for that category');
            }
        }, 2000);
    });
    return p;
}

async function logSearchResults(bookCategory: Category) {
    let foundbooks = await getBooksByCategory(bookCategory);
    console.log(foundbooks);
}

console.log('Beginning search...');
logSearchResults(Category.Fiction).catch(reason => { console.log(reason) });
console.log('Search submitted!');