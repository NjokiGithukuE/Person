class Person {
    constructor(firstName, age, gender, interests = []) {
        this.firstName = firstName;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    interest() {
        
        if(this.interests == undefined || this.interests.length == 0 || this.interests == "") {
            return `I have no interests.`
        }
        else if(this.interests.length == 1) {
            return `My interest is ${this.interests}`
        }
        else if(this.interests.length > 1) {
            let lastInterest = this.interests.pop();
            return `My interests are ${this.interests.join(", ")} and ${lastInterest}.`
        }
    }
    
    hello() {
        return `Hello, my name is ${this.firstName}, my gender is ${this.gender} and I am ${this.age} years old. ${this.interest()}`;
    }
}

module.exports = Person;

// let person = new Person('Njoki', 23, 'female', ['puppies', 'flowers', 'sweets', 'chocolate'])

// let greeting = person.hello();
// console.log(greeting);