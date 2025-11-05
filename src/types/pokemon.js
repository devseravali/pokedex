const getTypeColor = (type, theme) => {
    if (Array.isArray(type)) {
        return theme.types[type[0]] || theme.colors.cardBackground;
    }
    return theme.types[type] || theme.colors.cardBackground;
};
const theme = {
    types: {
        fire: '#F08030',
        water: '#6890F0',
        grass: '#78C850',
        electric: '#F8D030',
    },
    colors: {
        cardBackground: '#FFFFFF',
    },
};
const type = '';
console.log(getTypeColor(type, theme));
export {};
