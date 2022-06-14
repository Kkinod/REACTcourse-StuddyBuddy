import React, { useState } from 'react'
import { users as usersData } from 'data/users'
import { StyledList, StyledTitle, Wrapper } from './UsersList.styles';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem'


const UsersList = () => {
	const [users, setUsers] = useState(usersData)

	const deleteUser = name => {
		const filteredUsers = users.filter(user => user.name !== name)
		setUsers(filteredUsers)
	}

	
		return (
			<Wrapper>
				<StyledTitle>Students list</StyledTitle>
				<StyledList>
					{users.map((userData, i) => (
						<UsersListItem deleteUser={deleteUser} index={i} key={userData.name} userData={userData} />
					))}
				</StyledList>
			</Wrapper>
		)
	
}

export default UsersList
