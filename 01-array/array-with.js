const state = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
    },
    {
        id: 3,
        name: 'Flash',
    },
    {
        id: 4,
        name: 'Aquaman',
    },
]

const index = 1;
const newName = 'Green Lantern';

// const newState = state.map( ( hero, index ) => {
//     ( i === index ) && (hero.name = newName);

//     return {...hero};
// })

const newState = structuredClone(state.with(index, {
    ...state.at(index),
    name: newName
}))

newState[0].name = 'Volcan Negro';

console.table(state);
console.table(newState);

console.log('El último: ', state.at(-1))

