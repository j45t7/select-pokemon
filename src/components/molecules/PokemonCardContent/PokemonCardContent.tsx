import React from 'react';
import { CardContent, Typography, Box } from '@mui/material';
import Image from 'next/image';
import { Label } from '@/components/atoms/Label/Label';
import styled from '@emotion/styled';
import { capitalizeFirstLetter } from '@/utils/text-utils';

interface PokemonCardProps {
  id: number;
  name: string;
  types?: { type: { name: string } }[];
  baseExperience: number;
  imageUrl: string;
}

const StyledCardContent = styled(CardContent)({
  display: 'flex',
});

const StyledImageBox = styled(Box)({
  flex: '1 0 auto',
});

const StyledDetailsBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '16px',
});

const PokemonCard: React.FC<PokemonCardProps> = ({
  id,
  name,
  types,
  baseExperience,
  imageUrl,
}) => {
  return (
    <>
      <StyledCardContent>
        <StyledImageBox>
          <Image src={imageUrl} alt={name} width={250} height={250} />
        </StyledImageBox>
        <StyledDetailsBox>
          <Typography variant='body1'>
            Name: {capitalizeFirstLetter(name)}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',

              gap: 1,
            }}
          >
            <Typography variant='body1'>Type:</Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              {types?.flatMap((pokemon) => (
                <Label
                  key={pokemon.type.name}
                  label={capitalizeFirstLetter(pokemon.type.name)}
                />
              ))}
            </Box>
          </Box>
          <Typography variant='body1'>
            Base Experience: <strong>{baseExperience}</strong>
          </Typography>
          <Typography variant='body1'>
            ID: <strong>{id}</strong>
          </Typography>
        </StyledDetailsBox>
      </StyledCardContent>
    </>
  );
};

export default PokemonCard;
