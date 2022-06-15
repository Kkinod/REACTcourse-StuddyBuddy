import React from 'react'
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg'
import { StyledButoon } from './DeleteButton.styles'

const DeleteButton = (props) => (
	<StyledButoon {...props}>
		<DeleteIcon />
	</StyledButoon>
)

export default DeleteButton
