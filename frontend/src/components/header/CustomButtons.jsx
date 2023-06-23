import { Box, Button,Typography, styled } from "@mui/material";
import { ShoppingCart } from '@mui/icons-material'

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    $ >button, & > p, & > div  {
        margin-right:40px;
        font-size: 14px;
        align-item: center;
    }
`
const LoginButton = styled(Button)`
color:#20b2aa;
background:#FFFFFF;
padding: 5px 40px;
border-radius: 2px;
bix-shadow: none;
front-weight:600;
`

const CustomButtons = () => {
    return(
        <Wrapper >
        <   LoginButton  variant="contained">Login</LoginButton>
                <Typography style={{marginTop:3, width:135}}>Explore</Typography>
                <Typography style={{ width:135}}>Become a Seller</Typography>
                <Typography>About</Typography>

       </Wrapper >
    )
}
export default CustomButtons;