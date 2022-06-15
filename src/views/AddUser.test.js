import React from 'react'
import AddUser from './AddUser'
import Dashboard from './Dashboard'
import { screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithProvider } from 'helpers/renderWithThemeProvider'

describe('Form field', () => {
	it('Renders the component', () => {
		renderWithProvider(
			<>
				<AddUser />
				<Dashboard />
			</>
		)
		fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grażyna' } })
		fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '75%' } })
		fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } })
		fireEvent.click(screen.getByText('Add'))
        screen.getByText('Grażyna')
	})
})
