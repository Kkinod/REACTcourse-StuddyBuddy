import React, { useState } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const InputWithButton = () => {
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = e => setInputValue(e.target.value)

	return (
		<>
			<input
				value={inputValue}
				onChange={handleInputChange}
				name='Name'
				id='name'
				placeholder='Enter your name'></input>
			<button disabled={!inputValue}>Submit</button>
		</>
	)
}

// Test
// Kiedy opisujemy test, warto rozpocząć go od metody "describe" która opisuje całą grupę testów dla danego komponentu, będzie to ładniej pogrupowane w konsoli
describe('Input With Button', () => {
	it('Renders the component', () => {
		render(<InputWithButton />)
		screen.getByText('Submit')
	})

	it('Properly handles value change', () => {
		render(<InputWithButton />)
		// Pobieramy input
		const input = screen.getByPlaceholderText('Enter your name')

        const button = screen.getByText('Submit')
        expect(button).toBeDisabled()
		
		fireEvent.change(input, { target: { value: 'Kamil' } })
		expect(input).toHaveValue('Kamil')
        expect(button).not.toBeDisabled()
	})
})
