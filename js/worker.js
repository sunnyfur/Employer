class Worker {
    static _count = 0;
    _number;

    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
        Worker._count += 1;
        this._number = Worker._count;
    }

    getCount() {
        return _count;
    }

    getNumber() {
        return this._number;
    }

    getSalary() {
        return Number(this.rate) * Number(this.days);
    }

    getArrayFields() {
        const arr = [];
        arr.push(this.name);
        arr.push(this.surname);
        arr.push(this.rate);
        arr.push(this.days);
        arr.push(this.getSalary());
        return arr;
    }

}