import React, { useMemo, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import CustomAutocomplete from '@/components/atoms/Autocomplete/Autocomplete';
import { FormValues, Pokemon } from '@/components/organisms/Form/Form';
import {
  capitalizeFirstLetter,
  lowercaseFirstLetter,
} from '@/utils/text-utils';
import Fuse from 'fuse.js';

interface PokemonAutocompleteProps {
  filteredPokemon: Pokemon[];
  setSelectedPokemonId: React.Dispatch<React.SetStateAction<number | null>>;
}

const PokemonSearch: React.FC<PokemonAutocompleteProps> = ({
  filteredPokemon,
  setSelectedPokemonId,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>();
  const [inputValue, setInputValue] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fuseOptions = {
    keys: ['name'],
    threshold: 0.6,
  };

  const fuse = useMemo(
    () => new Fuse(filteredPokemon, fuseOptions),
    [filteredPokemon, fuseOptions]
  );
  const filteredItems = useMemo(() => {
    if (!inputValue) return filteredPokemon;
    const results = fuse.search(inputValue);
    return results.map((result) => result.item);
  }, [inputValue, filteredPokemon, fuse]);

  return (
    <Controller
      name='pokemon'
      control={control}
      rules={{ required: 'Please select a Pokémon' }}
      render={({ field: { onChange, value } }) => (
        <CustomAutocomplete
          options={filteredItems}
          filterOptions={(options) => options}
          inputValue={inputValue}
          onInputChange={(_, newValue) => {
            setInputValue(newValue);
            const selectedPokemon = filteredPokemon.find(
              (p) => p.name === lowercaseFirstLetter(newValue)
            );

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
