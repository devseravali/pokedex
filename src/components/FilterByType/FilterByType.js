import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FilterByTypeContainer, Form, Label, Select, Option } from "./FilterByType.style";
export const FilterByType = ({ types = [], selectedType, onTypeChange, }) => {
    return (_jsx(FilterByTypeContainer, { children: _jsxs(Form, { children: [types.length > 0 && _jsx(Label, { htmlFor: "type", children: "Filtrar por tipo:" }), _jsxs(Select, { id: "type", name: "type", "aria-label": "Filtrar por tipo", value: selectedType, onChange: (e) => onTypeChange(e.target.value), disabled: types.length === 0, children: [_jsx(Option, { value: "", children: "Todos" }), types.filter(Boolean).map((type) => (_jsx(Option, { value: type, children: type.charAt(0).toUpperCase() + type.slice(1) }, type)))] }), types.length === 0 && _jsx("p", { role: "status", children: "Carregando tipos..." })] }) }));
};
