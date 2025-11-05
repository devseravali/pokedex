export declare const useSearchInput: (pokemons: {
    name: string;
}[], initialValue?: string) => {
    value: string;
    hasError: boolean;
    isSuccess: boolean;
    handleChange: (val: string) => void;
    setValue: import("react").Dispatch<import("react").SetStateAction<string>>;
    setHasError: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setIsSuccess: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
