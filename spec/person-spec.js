const Person = require("../src/script");


describe("Person class hello()", () => {
    let person;

    beforeEach(() => {
        person = new Person("Eddah", 24, "Female", ["dogs", "code", "family"]);
        spyOn(person, "interest");
        person.hello();
    });

    afterEach(() => {
        person = undefined;
    });

    
    it("should call the interest method", () => {
        expect(person.interest).toHaveBeenCalled()
    });

    it("should be called with 4 arguments", () => {
        expect(person.interest).toHaveBeenCalledWith();
    });

    
    it("should return a greeting when the hello method is called", () => {
        expect(person.interest).toHaveBeenCalledTimes(1);
    });
});