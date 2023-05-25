import axios from 'axios';
const GetPolicyNews = () => {
    return axios.get('http://localhost:9003/crawling/policynews')
}

const GetDrugNews = () => {
    return axios.get('http://localhost:9003/crawling/Drugnews')
}

const GetAnimalNews = () => {
    return axios.get('http://localhost:9003/crawling/Animalnews')
}

const GetAInews = () => {
    return axios.get('http://localhost:9003/crawling/AInews')
}

export { GetPolicyNews, GetDrugNews, GetAnimalNews, GetAInews }