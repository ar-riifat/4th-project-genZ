

import { AppBar, Box, Typography, Toolbar, styled} from '@mui/material';

const styledHeader = styled(AppBar)`
     background: "#2874f0";
     height: 55px;
     `;
    
const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
    `

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const Header  = ()=> {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png'; 

    return(
        <styleHeader>
            <Toolbar>
                <Component>
                    <img src={logoURL} alt="logo" style={{ width: 75}} />
                    <box>
                        <subHeading>Explore&nbsp;
                            <Box component="span" style={{ color: '#FFE500'}}>Plus</Box>
                        </subHeading>
                        <img src={subURL} alt="sub-logo" />
                    </box>
                </Component>
            </Toolbar>
        </styleHeader>
        
    )
}

export default Header;