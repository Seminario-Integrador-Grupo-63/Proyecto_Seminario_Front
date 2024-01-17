import React from 'react';
import PropTypes from "prop-types";
import {UserList} from "@/Restaurant/Users/UserList";

export const Users = (props: any) => {



    return <>
        <UserList users={props.users}/>
    </>;
}

Users.defaultProps =
{
    users: []
}

Users.propTypes = 
{
    users: PropTypes.array
}


