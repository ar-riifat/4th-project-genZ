import { InputBase, Box, styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 36%;
    border-radius:5px;
    margin-left: 10px;
    display: flex;
    font-size: unset; 
`;

const SearchIconWrapper = styled(Box)`
    color: black;
    padding-top: 4px;
`

const InputSearchBase = styled(InputBase)`
    padding-left:20px;
    width: 100%;
`;
const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase 
            placeholder='Search for E-Commerce'
            />
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
        </SearchContainer>
        
    )
}

export default Search;