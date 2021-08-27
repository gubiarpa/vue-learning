
describe('Example Component', () => {
	test('It has to be greater than 10', () => {
		/// Arrange
		let value = 7

		/// Act
		value += 2

		/// Assert
		expect(value).toBeGreaterThan(10)
	})
})
