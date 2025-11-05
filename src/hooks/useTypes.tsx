import { useEffect, useState } from "react";
import { fetchTypesWithCache } from "../services/api";

export const useTypes = () => {
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    const loadTypes = async () => {
      try {
        const allTypes = await fetchTypesWithCache();
        setTypes(allTypes);
      } catch (error) {
        console.error("Erro ao carregar tipos:", error);
      }
    };
    loadTypes();
  }, []);

    return {
        types
    };
};
