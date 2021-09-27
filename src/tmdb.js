const apiKey = '7e9466a78a71cab5c68249f40e404997';
const apiBase = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {
    const req = await fetch(`${apiBase}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${apiKey}`)
            },   
        ];
    },
    
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch(type) {
                case 'movie':
                    info =await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${apiKey}`);
                break;
                case 'tv':
                    info =await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${apiKey}`);
                break;
                default:
                    info = null;
                    break;
            }
        }

        return info;
    }  
} 