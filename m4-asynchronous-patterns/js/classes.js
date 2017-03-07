"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorators_1 = require("./decorators");
class Employee {
    addToSchedule() {
        console.log('Employee added to schedule.');
    }
    logTitle() {
        console.log(`Employee has the title ${this.title}.`);
    }
}
exports.Employee = Employee;
class Researcher {
    doResearch(topic) {
        console.log(`Doing research on ${topic}`);
    }
}
exports.Researcher = Researcher;
exports.CLASS_INFO = Symbol();
// @logger
// @sealed('UniversityLibrarian')
class UniversityLibrarian {
    [exports.CLASS_INFO]() {
        console.log('This class represents a UniversityLibrarian');
    }
    static [Symbol.hasInstance](obj) {
        return obj.hasOwnProperty('name') && obj.hasOwnProperty('assistCustomer');
    }
    assistCustomer(custName) {
        console.log(this.name + ' is assisting ' + custName);
    }
    assistFaculty() {
        console.log('Assisting faculty.');
    }
}
__decorate([
    decorators_1.writable(true)
], UniversityLibrarian.prototype, "assistFaculty", null);
exports.UniversityLibrarian = UniversityLibrarian;
// @logger
class PublicLibrarian {
    assistCustomer(customerName) {
        console.log('Assisting customer.');
    }
    teachCommunity() {
        console.log('Teaching community.');
    }
}
__decorate([
    decorators_1.writable(false)
], PublicLibrarian.prototype, "teachCommunity", null);
exports.PublicLibrarian = PublicLibrarian;
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenceItem...');
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
}
ReferenceItem.department = 'Research';
exports.ReferenceItem = ReferenceItem;
//# sourceMappingURL=classes.js.map