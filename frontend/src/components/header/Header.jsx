

import { AppBar, Typography, Toolbar, styled, Box} from '@mui/material';

import Search  from './Search';

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


const Header  = () => {

     const logoURL = "https://www.logodesignteam.com/images/portfolio-images/ecommerce-websites-logo-design/ecommerce-websites-logo-design20.jpg";

    return(
        <StyledHeader>
            <Toolbar>
                <Component>
                    <img src={logoURL} alt="logo" style={{ width: 50}} />
                    <Box>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{ color: '#FFE500'}}>Plus</Box>
                        </SubHeading>

                    </Box>
                </Component>

                <Search/>
            </Toolbar>
        </StyledHeader>
        
    )
}

export default Header;