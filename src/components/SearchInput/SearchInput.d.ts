import type { SearchInputProps } from "../../types/pokemon";
type Props = SearchInputProps & {
    isEmptyResult?: boolean;
    emptyText?: string;
    hasError?: boolean;
    isSuccess?: boolean;
    onChange: (value: string) => void;
};
export declare const SearchInput: ({ value, onChange, placeholder, disabled, hasError, isSuccess, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
