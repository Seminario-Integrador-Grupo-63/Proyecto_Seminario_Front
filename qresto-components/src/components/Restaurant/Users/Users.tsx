import React from 'react';
import PropTypes from "prop-types";
import {UserList} from "@/Restaurant/Users/UserList";
import {Box} from "@mui/material";

export const Users = (props: any) => {



    return <Box>
        <UserList users={props.users}/>
    </Box>;
}

Users.defaultProps =
{
    users: []
}

Users.propTypes = 
{
    users: PropTypes.array
}


