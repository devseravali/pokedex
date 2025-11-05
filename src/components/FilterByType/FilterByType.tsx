import type { FilterByTypeProps } from "../../types/pokemon";
import { FilterByTypeContainer, Form, Label, Select, Option } from "./FilterByType.style";

export const FilterByType = ({
  types = [],
  selectedType,
  onTypeChange,
}: FilterByTypeProps & { selectedType: string; onTypeChange: (type: string) => void }) => {
  return (
    <FilterByTypeContainer>
      <Form>
        {types.length > 0 && <Label htmlFor="type">Filtrar por tipo:</Label>}

        <Select
          id="type"
          name="type"
          aria-label="Filtrar por tipo"
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
          disabled={types.length === 0}
        >
          <Option value="">Todos</Option>
          {types.filter(Boolean).map((type) => (
            <Option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Option>
          ))}
        </Select>

        {types.length === 0 && <p role="status">Carregando tipos...</p>}
      </Form>
    </FilterByTypeContainer>
  );
};