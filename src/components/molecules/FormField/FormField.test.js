import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import FormField from './FormField'
import { renderWithProvider } from 'helpers/renderWithThemeProvider'

describe('Form field', () => {
	it('Renders the component', () => {
		renderWithProvider(<FormField label='name' name='name' id='id' />)
	})
})
