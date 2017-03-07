"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
// ---------------------------- Decorators ----------------------------
let lib1 = new classes_1.UniversityLibrarian();
let lib2 = new classes_1.PublicLibrarian();
try {
    lib1.assistFaculty = () => console.log('assistFaculty replacement method');
    lib2.teachCommunity = () => console.log('teachCommunity replacement method');
}
catch (error) {
    console.log(error.message);
}
lib1.assistFaculty();
lib2.teachCommunity();
//# sourceMappingURL=app.js.map