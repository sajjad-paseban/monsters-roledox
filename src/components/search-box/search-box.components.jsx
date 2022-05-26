import React from "react";
import "./search-box.styles.css"
import {TextField} from '@mui/material';

export const SearchBox = props =>{
    return(
        <TextField sx={{width:"100%" , marginTop:"20px"}} onChange={props.handleChange} id="outlined-basic" label="search" variant="outlined" />
    )
}