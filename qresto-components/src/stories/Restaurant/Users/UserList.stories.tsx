import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Button from "@mui/material/Button";
import {UserList} from "@/Restaurant/Users/UserList";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import {getUsers} from "@/pages/api/requests";

export default {
  title: "components/Restaurant/Users/UserList",
  component: UserList,
  argTypes: {},
} as Meta<typeof UserList>;

type Story = StoryObj<typeof UserList>;

export const Common: Story = {
  render: () => {
    function createData(
      nombre: string,
      permiso: string,
      crear: React.ReactNode, 
      borrar: React.ReactNode, 
    ) {
      return { nombre, permiso, crear, borrar };
    }

    const ordenes = [
      createData('Alguien', 'Admin', <CreateIcon />, <DeleteIcon />),
      createData('Alguien2', 'Mozo', <CreateIcon />, <DeleteIcon />),
      createData('Alguien3', 'Mozo', <CreateIcon />, <DeleteIcon />),
    ];
    function fetchUsers(){
      const response = getUsers(1)
      if(response != null)
        return response
      else
        return []
    }
  
    return (
      <>
        <UserList users={fetchUsers}/>
      </>
    );
  },
};
