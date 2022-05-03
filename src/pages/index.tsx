import type { NextPage } from 'next';

import { Box, Button, Typography } from '@mui/material';

import { PromiseAlertToast } from '@components/AlertToast';

const Home: NextPage = () => {
  return (
    <Box p={2}>
      <Typography>Base App</Typography>
      <Box display="flex" gap={2} p={1}>
        <Button>Primary</Button>
        <Button color="success">Success</Button>
        <Button color="error">Error</Button>
        <Button color="warning">Warning</Button>
        <Button
          onClick={() => {
            const p = new Promise(resolve => setTimeout(resolve, 3000));
            PromiseAlertToast(p, {
              pending: 'Carregando...',
              success: 'Sucesso! Terminou',
              error: 'Erro!',
            });
          }}
        >
          Simular request
        </Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="text">text</Button>
      </Box>
    </Box>
  );
};

export default Home;
