import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import CustomAutocomplete from '@/components/atoms/Autocomplete/Autocomplete';
import { FormValues, Pokemon } from '@/components/organisms/Form/Form';
import {
  capitalizeFirstLetter,
  lowercaseFirstLetter,
} from '@/utils/text-utils';

interface PokemonAutocompleteProps {
  filteredPokemon: Pokemon[];
  handlePokemonSearch: (query: string) => void;
  setSelectedPokemonId: React.Dispatch<React.SetStateAction<number | null>>;
}

const PokemonSearch: React.FC<PokemonAutocompleteProps> = ({
  filteredPokemon,
  handlePokemonSearch,
  setSelectedPokemonId,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <Controller
      name='pokemon'
      control={control}
      rules={{ required: 'Please select a Pokémon' }}
      render={({ field: { onChange, value } }) => (
        <CustomAutocomplete
          options={filteredPokemon}
          onInputChange={(_, newValue) => {
            handlePokemonSearch(newValue);
            const selectedPokemon = filteredPokemon.find(
              (p) => p.name === lowercaseFirstLetter(newValue)
            );
            console.log(newValue, 'selectedPokemon');
            onChange(
              selectedPokemon ? capitalizeFirstLetter(selectedPokemon.name) : ''
            );
            setSelectedPokemonId(selectedPokemon ? selectedPokemon.id : null);
          }}
          value={value}
          errors={errors}
        />
      )}
    />
  );
};

export default PokemonSearch;
