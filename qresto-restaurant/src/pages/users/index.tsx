import {useEffect, useState} from 'react'
import { Users } from '@/Restaurant/Users/Users'
import {deleteUser, getUsers, updateUser} from "@/requests";

export default function UsersPage() {
    const [users, setUsers] = useState([])
    const restaurantID =  1

    useEffect(() => {
        // Initial fetch
        fetchUsers();

        // Fetch users every 10 seconds
        const intervalId = setInterval(fetchUsers, 10000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    })

    const fetchUsers = async () => {
        const fetchedUsers = await getUsers(restaurantID)
        setUsers(fetchedUsers)
    }
    const postUser = async (user) => {

    }
    const putUser = async (user) => {
        const editedUser = await updateUser(user)
        const fetchedUsers = await getUsers(restaurantID)
        setUsers(fetchedUsers)
        return editedUser
    }
    const deleteU = async (userId) => {
        const deletedUser = await deleteUser(userId)
        const fetchedUsers = await getUsers(restaurantID)
        setUsers(fetchedUsers)
        return deletedUser
    }

    return (<>
        <Users
            users={users}
            onCreate={postUser}
            onEdit={putUser}
            onDelete={deleteUser}

        />
    </>)
}
