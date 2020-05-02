import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './textField.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100ch',
        },
    },
}));

export default function BasicTextFields(props) {
    const classes = useStyles();

    return (
            <div>
            {/*<TextField id="standard-basic" label={props.label} className="inputField" />*/}
            <TextField id="outlined-basic" label={props.label} variant="outlined" className="inputField" />
            </div>
    );
}