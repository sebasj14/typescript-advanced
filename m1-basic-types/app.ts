import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem, Employee, Researcher } from './classes';
import * as util from './lib/utilityFunctions';

// -------------- Destructuring arrays and objects --------------
function printBookInfo({ title: booktitle, author: bookauthor }: Book): void {
    console.log(`${booktitle} was authored by ${bookauthor}`);
}
let [book1, book2] = util.GetAllBooks();

// -------------- The spread operator --------------
function LogFavoriteBooks([book1, book2, ...others]: Book[]) {
    printBookInfo(book1);
    printBookInfo(book2);
    console.log(others);
}
// LogFavoriteBooks(util.GetAllBooks());
// let { title: booktitle, author: bookauthor } = book1;
// console.log(booktitle);
// console.log(bookauthor);

// printBookInfo(book1);

let schoolBooks: Book[] = [
    { id: 101, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', available: true, category: Category.Fiction },
    { id: 102, title: 'A Study In Scarlet', author: 'Arthur C. Doyle', available: true, category: Category.Fiction },
    { id: 103, title: 'Java for Dummies', author: 'John Doe', available: true, category: Category.Software }
]

let booksRead: Book[] = util.GetAllBooks();
booksRead.push(...schoolBooks);
// console.log(booksRead);

let poets: string[] = ['Shelley', 'Collins', 'Hughes'];
let authors: string[] = ['Tolstoy', 'Fitzgerald', ...poets];
// console.log(authors);

// -------------- Tuple types --------------
// let catalogLocation: [string, Book] = ['A 123 789', book1];

interface KeyValuePair<K, V> extends Array<K | V> {
    0: K;
    1: V;
}
let catalogLocation: KeyValuePair<string, Book> = ['A 123 789', book1];

// -------------- Union and intersection types --------------
let allBooks: Book[] = util.GetAllBooks();
let allMagazines: Magazine[] = util.GetAllMagazines();

let readingMaterial: PrintMaterial = allMagazines[0];

function PrintTitle(item: PrintMaterial): void {
    console.log(item.title);
}
let serialNovel: Serial = {
    id: 100,
    title: 'The Gradual Tale',
    author: 'Occasional Pen',
    available: true,
    category: Category.Fiction,
    publisher: 'Serial Press'
};

// -------------- Mixins --------------
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(UniversityLibrarian, [Employee, Researcher]);

let newLibrarian = new UniversityLibrarian();
// newLibrarian.doResearch('Witchcraft.');

// -------------- String literals and type aliases --------------
let frequency: 'monthly' | 'annually' = 'annually';
type Frequency = 'monthly' | 'annually';

function GetMagazineByFrequency(preferredFrequency: Frequency) {
    // Do something...
}
type PrintMaterial = Book | Magazine;
type Serial = Book & Magazine;
