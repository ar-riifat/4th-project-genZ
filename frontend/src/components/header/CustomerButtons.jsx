import { useState, useContext} from "react";
import { Box, Button,Typography, styled } from "@mui/material";

import { DataContext } from "../../context/DataProvider";


//components
import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";

const Wrapper = styled(Box)`
display:flex;
margin:0 3%  0 auto;
& > button, & > p{
    margin-right:40px;
    front-size:16px;
    align-items: center;
}
`
const LoginButton = styled(Button)`
color:#20b2aa;
background:#FFFFFF;
padding: 5px 40px;
border-radius: 2px;
box-shadow: none;
front-weight:600;

`
const CustomerButtons = ()=>{

   const [open, setOpen]=useState(false);
   const { account, setAccount} = useContext(DataContext);
   
   const openDialog =()=>{
    setOpen(true);

   }
    return(

       <Wrapper >
        {
            account ? <Profile account={account} setAccount={setAccount} /> :
            <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
        }

       
                
        <Typography>Explore</Typography>
        <Typography style={{ width:135}}>Become a Seller</Typography>
        <Typography>Service</Typography>
        <Typography>About</Typography>
        <Typography>Contact</Typography>
        <LoginDialog open={open} setOpen={setOpen}/>

       </Wrapper >
    )
}
export default CustomerButtons;
