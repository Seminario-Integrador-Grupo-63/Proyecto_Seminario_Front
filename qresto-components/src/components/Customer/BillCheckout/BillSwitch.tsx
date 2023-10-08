import {styled, Switch, SwitchProps} from "@mui/material";
import {theme} from "@/Common/Theme/themes"



export const BillSwitch = styled(Switch)(({  }) => ({
    '& .MuiSwitch-switchBase': {
        '&.Mui-checked': {
            '& .MuiSwitch-thumb': {
                backgroundColor: theme.palette.secondary.main,
            },
        },
    },
    '& .MuiSwitch-track': {
        borderRadius: 22 / 2,
        backgroundColor: theme.palette.secondary.main,
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.primary.main,
        width: 16,
        height: 16,
        margin: 2,
    },
}));
