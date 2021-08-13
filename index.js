class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.likes = []
    }
    greet(person) {
        console.log(`Hello ${person,name}, this is ${this.name}`)
    }
}

const azra = new Person('azra', 43)
const eli = new Person('eli', 34)