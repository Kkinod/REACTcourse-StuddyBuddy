import React from 'react'
import UsersList from 'components/organisms/UsersList/UsersList'
import { ThemeProvider } from 'styled-components'
import { Wrapper } from './Root.styles'
import { GlobalStyle } from 'assets/styles/GlobalbStyle'
import { theme } from 'assets/styles/theme'

const Root = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Wrapper>
			<UsersList title="Users list" />
		</Wrapper>
	</ThemeProvider>
)

export default Root
