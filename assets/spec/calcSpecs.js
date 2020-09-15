// Challenge
describe("contact us page", function () {
    it("name field should not have special carachters", function () {
        expect(whatCanIDrink(5)).toBe("Drink Toddy1");
    })
    it("if age is less than 18, drink coke.", function () {
        expect(whatCanIDrink(16)).toBe("Drink Coke");
    })
    it("if age is less than 21 drink beer", function () {
        expect(whatCanIDrink(20)).toBe("Drink Beer");

    })
    it("if age is less than 130, drink whisky", function () {
        expect(whatCanIDrink(50)).toBe("Drink Whisky");
    })
    it("if age is 130 or more, or 0 or less, Sorry message", function () {
        expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");

    })
})