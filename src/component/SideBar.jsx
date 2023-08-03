import {Stack} from '@mui/material';
import {categories} from '../utils/constants';

export const SideBar = ({selectedCategory, setSelectedCategory}) => (
    <Stack sx={{
        overflowY: "auto", 
        height: {sx: 'auto', md: '95%'},
        flexDirection: { md: 'column'},
    }}>
        {categories.map((category) => (
            <button className='category-btn'
                style={{
                    background: category.name === selectedCategory && '#00f15e',
                    color: '#fff'
                }}
                key={category.name}>
                <span style={{
                    color: category.name === selectedCategory ? 'white' : '#00f15e', 
                    marginRight:'12px'
                }}>{category.icon}</span>
                <span style={{
                    opacity: category.name === selectedCategory ? '1': '0.8'
                }}
                onClick={() => setSelectedCategory(category.name)}>{category.name}</span>
            </button>
        ))}
    </Stack> 
  )

export default SideBar;
