import React from 'react';
import Typography from '@mui/material/Typography';
import PokemonCard from '../PokemonCardContent/PokemonCardContent';
import { Pokemon } from '@/store/pokemonApi';
import { Card } from '@mui/material';
import styled from '@emotion/styled';

interface PokemonDisplayProps {
  isLoading: boolean;
  pokemonData?: Pokemon;
  selectedPokemonId: number | null;
}

const StyledCard = styled(Card)({
  height: 300,
  padding: 24,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const PokemonDisplay: React.FC<PokemonDisplayProps> = ({
  isLoading,
  pokemonData,
  selectedPokemonId,
}) => {
  const pokemonInfo = selectedPokemonId && pokemonData;

  const renderContent = () => {
    if (isLoading) {
      return <Typography>Loading...</Typography>;
    }
    if (pokemonInfo) {
      return (
        <PokemonCard
          types={pokemonData.types}
          name={pokemonData.name}
          id={pokemonData.id}
          baseExperience={pokemonData.base_experience}
          imageUrl={pokemonData.sprites.front_default}
        />
      );
    }
    return <Typography>Your Pokemon</Typography>;
  };

  return (
    <StyledCard variant='outlined' elevation={0}>
      {renderContent()}
    </StyledCard>
  );
};

export default PokemonDisplay;
