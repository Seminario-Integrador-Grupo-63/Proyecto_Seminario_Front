import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Button from "@mui/material/Button";
import {UserList} from "@/Restaurant/Users/UserList";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import {getUsers} from "@/pages/api/requests";
import {Users} from "@/Restaurant/Users/Users";

export default {
  title: "components/Restaurant/Users/UserList",
  component: Users,
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


  
    return (
      <>
        <UserList/>
      </>
    );
  },
};
