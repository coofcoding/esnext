const superHeroes = [
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

const superHeroesCopy = structuredClone(superHeroes);

console.table(superHeroesCopy);