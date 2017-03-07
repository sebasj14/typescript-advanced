import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { PublicLibrarian, UniversityLibrarian, ReferenceItem, Employee, Researcher } from './classes';
import * as util from './lib/utilityFunctions';

// ---------------------------- Decorators ----------------------------
let lib1 = new UniversityLibrarian();
let lib2 = new PublicLibrarian();

try {
    lib1.assistFaculty = () => console.log('assistFaculty replacement method');
    lib2.teachCommunity = () => console.log('teachCommunity replacement method');
} catch (error) {
    console.log(error.message);
}

lib1.assistFaculty();
lib2.teachCommunity();