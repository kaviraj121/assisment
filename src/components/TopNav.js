import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';

function TopNav() {
  const [page, setPage] = React.useState('tracking'); // Initialize with a valid value

  const handleChange = (event) => {
    setPage(event.target.value);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'var(--Color-bg-fill-fill, #FFFFFF)', height: '56px', width: '100%', top: 0, left: 0 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Button sx={{ color: 'black' }} color="inherit">Home</Button>
          <Button sx={{ color: 'black' }} color="inherit">Order</Button>
          <Button sx={{ color: 'black' }} color="inherit">Integrations</Button>
          <Select
            value={page}
            onChange={handleChange}
            sx={{ 
              color: 'black', 
              border: 'none', 
              '& .MuiSelect-select': {
                padding: '0', // Adjust padding as needed
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Remove border from the select box
              }
            }}
          >
            <MenuItem value="tracking">Tracking Page</MenuItem>
            <MenuItem value="integration">Integration</MenuItem>
          </Select>
          <Button sx={{ color: 'black' }} color="inherit">Partner With Us</Button>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            InputProps={{
              sx: { backgroundColor: 'white', borderRadius: '5px' },
            }}
          />
          <IconButton color="black">
            <AccountCircle />
          </IconButton>
          <IconButton color="black">
            <SettingsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopNav;
