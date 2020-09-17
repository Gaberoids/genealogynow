// Challenge
describe("no email", function () {
    it("should have an email", function () {
        expect(validateEmail("xyz")).toBe(false);
    })
})