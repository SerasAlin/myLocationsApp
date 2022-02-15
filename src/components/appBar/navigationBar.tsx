import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router';
import { AppBar } from '@mui/material';

const pages: string[] = ['Categories', 'Locations'];

const NavigationBar = () => {

  const router = useRouter();

  const handleCloseNavMenu = async (e) => {
    if (e.target.innerText === 'CATEGORIES') {
      await router.push('/myLocations/categories');
    } else {
      await router.push('/myLocations/locations');
    }
  };

  return (
    <AppBar style={{ background: 'darkcyan' }} position="static">
      <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* @ts-ignore */}
            {pages.map((page: any) => (
              <Button
                key={page}
                onClick={(e) => handleCloseNavMenu(e)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
