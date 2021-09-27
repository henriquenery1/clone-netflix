{
    slug: 'toprated',
    title: 'Em alta',
    items: await basicFetch(`/movie/top_rated&language=pt-BR&api_key=${apiKey}`)
},
{
    slug: 'action',
    title: 'Ação',
    items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${apiKey}`)
},
{
    slug: 'comedy',
    title: 'Comédia',
    items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${apiKey}`)
},
{
    slug: 'horror',
    title: 'Terror',
    items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${apiKey}`)
},
{
    slug: 'romance',
    title: 'Romance',
    items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${apiKey}`)
},
{
    slug: 'documentary',
    title: 'Documentários',
    items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${apiKey}`)
}