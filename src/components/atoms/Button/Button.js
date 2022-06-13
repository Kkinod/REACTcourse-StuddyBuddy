import React from 'react'
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg'
import { StyledButoon } from './Button.styles'

// 'click' - onClick
// 'mouseenter' - onMouseEnter

const Button = (props) => (
	<StyledButoon {...props}>
		<DeleteIcon />
	</StyledButoon>
)

export default Button
