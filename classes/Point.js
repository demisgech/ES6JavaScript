class Point {
    // private fileds
    #x;
    #y;
    constructor(x,y) {
        this.#x = x;
        this.#y = y;
    }

    calculateRadius(p) {
        const dx = this.#x - p.#x;
        const dy = this.#y - p.#y;
        return Math.sqrt(Math.pow(dx,2) + Math.pow(dy, 2)).toFixed(2);
    }
    // Setter (mutator)
    set setX(x) {
        if(typeof x !== 'number')
        throw new TypeError('Value for x must be number.');
    this.#x = x;
}

set setY(y) {
        if(typeof y !== 'number')
        throw new TypeError('Value for y must be number.');
        this.#y = y;
    }

    // Getter (accessor)
    get getY() {
        return this.#y;
    }

    get getX() {
        return this.#x;
    }

}
try {
    const point1 = new Point(1,2);
    const point2 = new Point(3,4);
    let radius = point1.calculateRadius(point2);
    console.log(radius);

    point1.setX = 10;
    point1.setY = 12;
    // const x = point1.getX;

    radius = point1.calculateRadius(point2);
    console.log(radius);

    point1.setX = '10'; // Error!
} 
catch {
    console.log('Error');
}