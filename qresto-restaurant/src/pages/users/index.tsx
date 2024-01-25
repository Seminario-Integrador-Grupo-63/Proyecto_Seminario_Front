import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { Users } from '@/Restaurant/Users/Users'
import {getUsers} from "@/requests";
import {UserList} from "@/Restaurant/Users/UserList";

export default function UsersPage() {
    const [users, setUsers] = useState([])
    const restaurantID =  null

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

    }
    const deleteUser = async (userId) => {

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
