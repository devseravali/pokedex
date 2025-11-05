import { useState, useEffect } from "react";

export const useFilterByType = (types: string[] = [], initialType: string = "") => {
  const [selectedType, setSelectedType] = useState(initialType);

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };

  useEffect(() => {
    if (!types.includes(selectedType)) {
      setSelectedType("");
    }
  }, [types, selectedType]);

  return {
    selectedType,
    handleTypeChange,
  };
};
