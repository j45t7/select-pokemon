'use client';

import Form from '@/components/organisms/Form/Form';
import theme from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export default function Home() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Form />
      </ThemeProvider>
    </Provider>
  );
}
