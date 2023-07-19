import React, {FC, useEffect, useState} from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

type InfoSnackBarPropsType = {
    type: 'success' | 'info' | 'warning' | 'error'
    message: string
    show: boolean
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
})

export const InfoSnackBar: FC<InfoSnackBarPropsType> = ({type,show,message}) => {

    const [open, setOpen] = useState(false)

    useEffect(()=>{
        setOpen(show)
    }, [show])

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={type} variant='filled'>
                {message}
            </Alert>
        </Snackbar>
    )
}

