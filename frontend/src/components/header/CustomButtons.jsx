import { useState, useContext }from 'react';

import { Box, Button,Typography, styled } from "@mui/material";
import { ShoppingCart } from '@mui/icons-material';

import { DataContext } from '../../context/DataProvider';

import LoginDialog from "../login/LoginDialog";

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    $ > button, & > p, & > div  {
        margin-right: 40px;
        font-size: 16px;
        align-items: center;
    }
`
const Container = styled(Box)`
    display: flex;
`

const LoginButton = styled(Button)`
color:#20b2aa;
background:#FFFFFF;
text-transform:none;
padding: 5px 40px;
border-radius: 2px;
box-shadow: none;
front-weight:600;
height:32 ;
margin-top:10px;
`

const CustomButtons = () => {

    const [open, setOpen] = useState(false);
    const {account} = useContext(DataContext);

    const openDialog = () => {
        setOpen(true);
    }

    return(
        <Wrapper >
        <   LoginButton  variant="contained" onClick={() => openDialog()}>Login</LoginButton>
                <Typography style={{marginTop: 10, width:135}}>Become a Seller</Typography>
                <Typography style={{marginTop: 10}}>About</Typography>
                <Container>
                    <ShoppingCart/>
                    <Typography>Cart</Typography>
                </Container>
                <LoginDialog open={open} setOpen={setOpen}/>
       </Wrapper >
    )
}
export default CustomButtons;