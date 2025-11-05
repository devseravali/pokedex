import { useState, useEffect } from "react";
export const useFilterByType = (types = [], initialType = "") => {
    const [selectedType, setSelectedType] = useState(initialType);
    const handleTypeChange = (value) => {
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
