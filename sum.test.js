const sum = require("./sum");

describe("Sum tests", () => {
	it("can add 2 nos", () => {
		const result = sum(1, 4);
		expect(result).toBe(5);
	});
});
