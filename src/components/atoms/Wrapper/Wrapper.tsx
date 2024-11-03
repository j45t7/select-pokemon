import React from 'react';
import { Paper, Container, Box } from '@mui/material';
import styled from '@emotion/styled';

interface FormWrapperProps {
  children: React.ReactNode;
}

const StyledContainer = styled(Container)({
  paddingTop: '50px',
  paddingBottom: '50px',
});

const StyledPaper = styled(Paper)({
  padding: '24px',
  borderRadius: '8px',
  width: '100%',
});

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  height: '100%',
});

const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => {
  return (
    <StyledContainer maxWidth='md'>
      <StyledBox>
        <StyledPaper variant='outlined' elevation={0}>
          {children}
        </StyledPaper>
      </StyledBox>
    </StyledContainer>
  );
};

export default FormWrapper;
