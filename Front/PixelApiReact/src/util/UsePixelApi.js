const API = 'http://localhost:8080/pixel/frontController';

const UsePixelApi = () => {

    async function FillFront() {

        try {
            const response = await fetch(API + "/fillFront", {
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
        FillFront,
        listByCategory
    }
}

export { UsePixelApi }