import { Box, Button,Typography, styled } from "@mui/material";
import { ShoppingCart } from '@mui/icons-material'

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    $ > button, & > p, & > div  {
        margin-right:40px;
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
    return(
        <Wrapper >
        <   LoginButton  variant="contained">Login</LoginButton>
                <Typography style={{marginTop: 10, width:135}}>Become a Seller</Typography>
                <Typography style={{marginTop: 10}}>About</Typography>
                <Box>
                    <ShoppingCart/>
                    <Typography>Cart</Typography>
                </Box>

       </Wrapper >
    )
}
export default CustomButtons;