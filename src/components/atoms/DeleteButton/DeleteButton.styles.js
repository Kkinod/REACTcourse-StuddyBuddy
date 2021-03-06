import styled from 'styled-components'

export const StyledButoon = styled.button`
	width: 40px;
	height: 40px;
	background-color: ${({ theme }) => theme.colors.grey};
	border-radius: 50px;
	border: none;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		width: 100%;
		height: 100%;
	}
`