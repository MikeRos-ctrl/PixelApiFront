const API = 'http://localhost:8080/pixel/images';

const UsePixelApi = () => {

    async function ApiCall() {

        try {
            const response = await fetch(API + "/fillFrontWthRandomImages", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            return response.json();
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    async function listByCategory(category) {

        try {
            const response = await fetch(API + "/listByCategory/" + category, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            return response.json();
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    return {
        ApiCall,
        listByCategory
    }
}

export { UsePixelApi }