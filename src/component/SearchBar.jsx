// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    return (
        <Paper
            elevation={3}
            component="form"
            onSubmit={() => { }}
            sx={{
                borderRadius: 20,
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}>
            <input
                className="search-bar"
                placeholder="Search..."
                value=""
                onChange={() => { }} />
            <IconButton type="submit" sx={{ p: '10px', color: '#00f15e' }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar;