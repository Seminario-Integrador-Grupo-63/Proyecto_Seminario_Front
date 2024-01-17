import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { Users } from '@/Restaurant/Users/Users'
import {getUsers} from "@/requests";

export default function UsersPage() {
    const [users, setUsers] = useState([])
    const restaurantID =  null

    useEffect(() => {
        // Initial fetch
        fetchUsers();

        // Fetch users every 2 seconds
        const intervalId = setInterval(fetchUsers, 2000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    })

    const fetchUsers = async () => {
        const fetchedUsers = await getUsers(restaurantID)
        setUsers(fetchedUsers)
    }
    return (<>
        <Users users={users}/>
    </>)
}
