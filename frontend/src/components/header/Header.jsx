

import { AppBar, Typography, Toolbar, styled, Box} from '@mui/material';

import Search  from './Search';
import CustomButton from './CustomButtons';

const StyledHeader = styled(AppBar)`
background: #d9603b;
height: 55px;
`;
    
const Component = styled(Box)`
     margin-left:12%;
     line-height:0;
    `

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`
const CustomButtonWrapper = styled(Box)`
     margin: 0 5% 0 auto;
`


const Header  = () => {

     const logoURL = "https://i.ibb.co/KV7DwfN/genz.png";

    return(
        <StyledHeader>
            <Toolbar style={{minHeight: 55}}>
                <Component>
                    <img src={logoURL} alt="logo" style={{ width: 50}} />
                    <Box>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{ color: '#FFE500'}}>Plus</Box>
                        </SubHeading>

                    </Box>
                </Component>

                <Search/>
                <CustomButtonWrapper>
                    <CustomButton/>
                </CustomButtonWrapper>
                
            </Toolbar>
        </StyledHeader>
        
    )
}

export default Header;