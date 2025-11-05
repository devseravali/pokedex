import { useState } from "react";

export const useSearchInput = (pokemons: { name: string }[], initialValue: string = "") => {
  const [value, setValue] = useState(initialValue);
  const [hasError, setHasError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (val: string) => {
    setValue(val);

    if (val.trim() === "") {
      setHasError(false);
      setIsSuccess(false);
      return;
    }

    const isValid = pokemons.some(p => p.name.toLowerCase() === val.toLowerCase());
    setHasError(!isValid && val.length > 0);
    setIsSuccess(isValid);
  };

  return {
    value,
    hasError,
    isSuccess,
    handleChange,
    setValue,
    setHasError,
    setIsSuccess,
  };
};
