import { articles_url, sources_url, everything_url, _api_key, country_code } from '../config/rest_config';

export async function getArticles(category='business') {

    try {
        let articles = await fetch(`${articles_url}?country=${country_code}&category=${category}`, {
            headers: {
                'X-API-KEY': _api_key
            }
        });

        let result = await articles.json();
        articles = null;

        return result.articles;
    }
    catch(error) {
        throw error;
    }
}

export async function getSources() {

    try {
        let sources = await fetch(`${sources_url}?country=${country_code}`, {
            headers: {
                'X-API-KEY': _api_key
            }
        });
        let result = await sources.json();
        sources = null;

        return result.sources;
    }
    catch(error) {
        throw error;
    }
}

export async function getEverything(domain) {

    try {
        let everything = await fetch(`${everything_url}?domains=${domain}`, {
            headers: {
                'X-API-KEY': _api_key
            }
        });
        let result = await everything.json();
        everything = null;

        return result.articles;
    }
    catch(error) {
        throw error;
    }
}
