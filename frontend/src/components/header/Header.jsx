import { AppBar, Toolbar, styled, Box } from '@mui/material';
import Search from './Search';
import CustomerButtons from './CustomerButtons';

const StyledHeader = styled(AppBar)({
  background: '#20b2aa',
  height: '70px',
});

const Component = styled(Box)({
  marginLeft: '12%',
  lineheight: 0,
});


const CustomerButtonsWrapper = styled(Box)`
  margin: 0 5% 0 auto;
`;

const Header = () => {
  const logoURL = 'https://i.ibb.co/fv5ZZQd/profile.png  ';
  return (
    <StyledHeader>
      <Toolbar>
        <Component>
          <img src={logoURL} alt="logo" style={{ width: 200 }} />
          <Box>

          </Box>
        </Component>
        <Search />
        <CustomerButtonsWrapper>
          <CustomerButtons />
        </CustomerButtonsWrapper>
      </Toolbar>
    </StyledHeader>
  );
  
};

export default Header;