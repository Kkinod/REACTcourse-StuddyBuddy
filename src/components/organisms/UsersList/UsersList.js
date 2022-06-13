import React from 'react'
import { users } from 'data/users'
import { Wrapper, StyledList } from './UsersList.styles'
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem'

const UsersList = () => (
	<Wrapper>
		<StyledList>
			{users.map(userData => (
				<UsersListItem userData={userData} />
			))}
		</StyledList>
	</Wrapper>
)

export default UsersList
