import MyComponent from '@/components/atoms/Autocomplete/Autocomplete';
import Input from '@/components/atoms/Input/Input';
import { Label } from '@/components/atoms/Label/Label';
import PrimaryButton from '@/components/atoms/PrimaryButton/PrimaryButton';
import SoftButton from '@/components/SoftButton/SoftButton';
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
        <SoftButton>Soft</SoftButton>
        <Input label='Pokemon' />
        <MyComponent></MyComponent>
        <Label label='Label' />
      </div>
    </ThemeProvider>
  );
}
