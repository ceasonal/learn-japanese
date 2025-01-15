import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom'; 

const pages = ['Search', 'Convert'];
const Characters = ['Hiragana', 'Katakana', 'Kanji', 'Kana'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElCharacters, setAnchorElCharacters] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenCharactersMenu = (event) => {
    setAnchorElCharacters(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseCharactersMenu = () => {
    setAnchorElCharacters(null);
  };

  return (
    <AppBar position="static" sx={{ background: 'none', boxShadow: 'none', marginTop: '40px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for medium and larger screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ height: '80px', width: 'auto' }}
            />
          </Box>

          {/* Text for medium and larger screens */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              fontSize: '2.5rem',
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              fontFamily: 'Japan Rich, sans-serif',
            }}
          >
            Japanese-Easy
          </Typography>

          {/* Menu button for small screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center', color: 'black' }}>
                    <Link to={`/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'black' }}>
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}

              {/* Characters menu for small screens */}
              <MenuItem onClick={handleOpenCharactersMenu}>
                <Typography sx={{ textAlign: 'center', color: 'black' }}>Characters</Typography>
              </MenuItem>
              <Menu
                anchorEl={anchorElCharacters}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElCharacters)}
                onClose={handleCloseCharactersMenu}
              >
                {Characters.map((character) => (
                  <MenuItem key={character} onClick={handleCloseCharactersMenu}>
                    <Typography sx={{ textAlign: 'center' }}>
                      <Link to={`/${character.toLowerCase()}`} style={{ textDecoration: 'none', color: 'black' }}>
                        {character}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Menu>
          </Box>

          {/* Logo for small screens */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ height: '30px', width: 'auto' }}
            />
          </Box>

          {/* Text for small screens */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Japan Rich, sans-serif',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Japanese-Easy
          </Typography>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            <Button
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '1.5rem', fontWeight: 700 }}
              onClick={handleOpenCharactersMenu}
            >
              Characters
            </Button>
            <Menu
              anchorEl={anchorElCharacters}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElCharacters)}
              onClose={handleCloseCharactersMenu}
            >
              {Characters.map((character) => (
                <MenuItem key={character} onClick={handleCloseCharactersMenu}>
                  <Typography sx={{ textAlign: 'center' }}>
                    <Link to={`/${character.toLowerCase()}`} style={{ textDecoration: 'none', color: 'black' }}>
                      {character}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>

            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', fontSize: '1.5rem', fontWeight: 700 }}
              >
                <Link to={`/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'black' }}>
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
