// import * as React from 'react';
// import { 
//     Typography, 
//     Button, 
//     Grid,
//     ThemeProvider 
// } from '@mui/material';
// import { theme } from '@/Common/Theme/themes';
// import PropTypes from "prop-types";
// import {DataTable} from "@/Common/DataTable/DataTable";

// export default function UpdateList(props: any) {
//   const [isDialogOpen, setIsDialogOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setIsDialogOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setIsDialogOpen(false);
//   };
//     const createHeaders = () => {
//         return [
//             {label: "Plato", id: "dishName"},
//             {label: "Precio", id: "dishPrice", price: true},
//         ]
//     }
//     const createRows = (dishes) => {
//         return dishes.map(d => {
//             return {
//                 dishName: d.dishName,
//                 dishPrice: d.dishPrice,
//             }
//         })
//     }

//     return (
//         <Grid container>
//             <Grid item xs={12} lg={12}>
//                 <Typography
//                     color="white"
//                     sx={{
//                         backgroundColor: theme.palette.primary.main,
//                         textAlign: "center",
//                         fontSize:25,
//                         marginTop:5
//                     }}>
//                     Vista previa
//                 </Typography>
//             </Grid>

//             <Grid item xs={12} lg={12}>
//                 <Typography variant="h6" gutterBottom align="center" marginTop={1}>
//                     Estos serán los precios actualizados
//                 </Typography>
//             </Grid>
            
//             <Grid item xs={12} lg={12}>
//                 <hr />
//                 <DataTable
//                     headers={createHeaders()}
//                     rows={createRows(props.dishList)}
//                     actions={false}/>
//             </Grid>

//             <Grid item xs={12} lg={12}>
//                 <div style={{ display: 'flex', marginTop: '10px', justifyContent: 'end' }}>
//                     <ThemeProvider theme={theme}>
//                         <Button
//                             type="submit"
//                             color="primary"
//                             onClick={props.onSubmit}>
//                         Actualizar
//                         </Button>
//                     </ThemeProvider>

//                     <Button
//                         type="submit"
//                         onClick={props.onClose}
//                         sx={{color: 'black'}}>
//                     Cancelar
//                     </Button>
//                 </div>
//             </Grid>

//         </Grid>
//     );
// }


import * as React from 'react';
import { 
    Typography, 
    Button, 
    Grid,
    ThemeProvider 
} from '@mui/material';
import { theme } from '@/Common/Theme/themes';
import PropTypes from "prop-types";
import {DataTable} from "@/Common/DataTable/DataTable";

export default function UpdateList(props: any) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleClickOpen = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
    const createHeaders = () => {
        return [
            {label: "Plato", id: "dishName"},
            {label: "Precio", id: "dishPrice", price: true},
        ]
    }
    const createRows = (dishes) => {
        return dishes.map(d => {
            return {
                dishName: d.dishName,
                dishPrice: d.dishPrice,
            }
        })
    }

    const onSubmit = async () => {
        props.onSubmit()
    }

    return (
        <Grid container>
            <Grid item xs={12} lg={12}>
                <Typography
                    color="white"
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        textAlign: "center",
                        fontSize:25,
                        marginTop:5
                    }}>
                    Vista previa
                </Typography>
            </Grid>

            <Grid item xs={12} lg={12}>
                <Typography variant="h6" gutterBottom align="center" marginTop={1}>
                    Estos serán los precios actualizados
                </Typography>
            </Grid>
            
            <Grid item xs={12} lg={12}>
                <hr />
                <DataTable
                    headers={createHeaders()}
                    rows={createRows(props.dishList)}
                    actions={false}/>
            </Grid>

            <Grid item xs={12} lg={12}>
                <div style={{ display: 'flex', marginTop: '10px', justifyContent: 'end' }}>
                    <ThemeProvider theme={theme}>
                        <Button
                            type="submit"
                            color="primary"
                            onClick={onSubmit}>
                            Actualizar
                        </Button>
                    </ThemeProvider>

                    <Button
                        type="submit"
                        onClick={props.onClose}
                        sx={{color: 'black'}}>
                    Cancelar
                    </Button>
                </div>
            </Grid>
        </Grid>
    );
}

UpdateList.defaultProps = {
    onSubmit: function () {},
    open: false,
    onClose: function () {},
    // productList: [],
    dishList: [],
}
UpdateList.propTypes = {
    onSubmit: PropTypes.func,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    // productList: PropTypes.array,
    dishList: PropTypes.array,

}
