const CLIENT_ID = '08a7xkw8556uq1gpo7eyto4mq32odk';
const CLIENT_SECRET = 'lfuycsyqmk1i9skguecqfn23y4ht9s';
const axios = require("axios")
let TOKEN;

getGames().then(resposta => {
    console.log(resposta.data);
})

async function getAccessToken() {
    return axios.post(`https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`)
}

async function getGames(accessToken) {
    let resposta = await getAccessToken();
    let token = resposta.data.access_token;
    return axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': CLIENT_ID,
            'Authorization': `Bearer ${token}`,
        },
        data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
    })
}