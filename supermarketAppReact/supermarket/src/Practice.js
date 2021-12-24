export default function useFetch(baseUrl) {
    function get(url) {
        const data = fetch(baseUrl + url)
            .then(response => response.json())
        return data
    }

    return { get }
};
