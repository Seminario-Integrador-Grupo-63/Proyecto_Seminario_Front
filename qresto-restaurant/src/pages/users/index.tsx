import {useEffect, useState} from 'react'
import { Users } from '@/Restaurant/Users/Users'
import {deleteUser, getUsers, postUser, putUser,} from "@/requests";
import {getCookieRId} from "qresto-components/src/pages/api/utils";

export default function UsersPage() {
    const [users, setUsers] = useState([])
    const [restaurantId, setRestaurantId] = useState(1)
    const [userFormOpen, setUserFormOpen] = useState(false)

    useEffect(() => {
        setRestaurantId(getCookieRId)
        fetchUsers()

        // Fetch users every 10 seconds
        const intervalId = setInterval(fetchUsers, 100000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    const fetchUsers = async () => {
        const fetchedUsers = await getUsers(restaurantId)
        setUsers(fetchedUsers)
    }
    const createUser = async (user) => {
        console.log("Usuario?", user)
        const createdUser = await postUser(user)
        await fetchUsers()
        return createdUser
    }
    const updateUser = async (user) => {
        const editedUser = await putUser(user)
        await fetchUsers()
        return editedUser
    }
    const removeUser = async (userId) => {
        const removedUser = await deleteUser(userId)
        await fetchUsers()
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
