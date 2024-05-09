
const positions: { [key: string]: string } = {
    'gk': 'Goleiro',
    'df': 'Zagueiro',
    'fb': 'Lateral',
    'mf': 'Meio Campista',
    'dm': 'Volante',
    'am': 'Meia Ofensivo',
    'w': 'Ponta',
    'fw': 'Atacante',
};
Object.freeze(positions);

const translatePosition = (position: string): string => positions[position] || position;

export default translatePosition;