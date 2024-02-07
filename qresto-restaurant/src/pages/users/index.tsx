import {useEffect, useState} from 'react'
import { Users } from '@/Restaurant/Users/Users'
import {deleteUser, getUsers, postUser, putUser,} from "@/requests";

export default function UsersPage() {
    const [users, setUsers] = useState([])
    const restaurantID =  1
    const [userFormOpen, setUserFormOpen] = useState(false)

    useEffect(() => {
        fetchUsers()

        // Fetch users every 10 seconds
        const intervalId = setInterval(fetchUsers, 100000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    const fetchUsers = async () => {
        const fetchedUsers = await getUsers(restaurantID)
        setUsers(fetchedUsers)
    }
    const createUser = async (user) => {
        console.log("Usuario?", user)
        const createdUser = await postUser(user)
        const fetchedUsers = await getUsers(restaurantID)
        setUsers(fetchedUsers)
        return createdUser
    }
    const updateUser = async (user) => {
        const editedUser = await putUser(user)
        const fetchedUsers = await getUsers(restaurantID)
        setUsers(fetchedUsers)
        return editedUser
    }
    const removeUser = async (userId) => {
        const removedUser = await deleteUser(userId)
        const fetchedUsers = await getUsers(restaurantID)
        setUsers(fetchedUsers)
        return removedUser
    }

    return (<>
        <Users
            users={users}
            onCreate={createUser}
            onEdit={updateUser}
            onDelete={removeUser}
/*
            userFormOpen={}
*/

        />
    </>)
}
