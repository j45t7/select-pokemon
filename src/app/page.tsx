import PrimaryButton from '@/components/atoms/PrimaryButton/PrimaryButton';
import theme from '@/styles/theme';
import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <Typography>Pokemon</Typography>
        <p>Pokemon</p>
        <PrimaryButton>Primary</PrimaryButton>
      </div>
    </ThemeProvider>
  );
}
