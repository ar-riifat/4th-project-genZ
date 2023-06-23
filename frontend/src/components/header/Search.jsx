import { InputBase, Box, styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 36%;
    border-radius:5px;
    margin-left: 10px; 
`



const InputSearchBase = styled(Box)`
    padding-left:20px;
    width: 100%;
`;
const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase 
            placeholder='Search for E-Commerce'/>
        </SearchContainer>
        
    )
}

export default Search;