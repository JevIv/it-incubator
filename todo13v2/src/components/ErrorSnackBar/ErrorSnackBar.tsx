import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {setAppErrorAC} from "../../app/app-reducer";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function ErrorSnackbars() {

    //const [open, setOpen] = React.useState(false);
    //const handleClick = () => {setOpen(true);};
    const error = useSelector<AppRootStateType, string | null>(state => state.app.error)
    const dispatch = useDispatch()
    const isOpen = error !== null;

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setAppErrorAC(null))
        //setOpen(false);
    }

    return (
        <Stack spacing={2} sx={{width: '100%'}}>
            {/*<Button variant="outlined" onClick={handleClick}>*/}
            {/*    Open success snackbar*/}
            {/*</Button>*/}
            <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                    This is a success message!
                </Alert>
            </Snackbar>
            <Alert severity="error">This is an error message!</Alert>
        </Stack>
    );
}
