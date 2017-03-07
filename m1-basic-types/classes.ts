import * as Interfaces from './interfaces';

class Employee {
    title: string;

    addToSchedule() {
        console.log('Employee added to schedule.');
    }

    logTitle() {
        console.log(`Employee has the title ${this.title}.`);
    }
}

class Researcher {
    doResearch(topic: string) {
        console.log(`Doing research on ${topic}`)
    }
}

class UniversityLibrarian implements Interfaces.Librarian, Employee, Researcher {

    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }

    // Mixin function
    title: string;
    addToSchedule: () => void;
    logTitle: () => void;
    doResearch: (topic: string) => void;
}

abstract class ReferenceItem {

    private _publisher: string;
    static department: string = 'Research';

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    abstract printCitation(): void;
}

export { UniversityLibrarian, ReferenceItem, Employee, Researcher };