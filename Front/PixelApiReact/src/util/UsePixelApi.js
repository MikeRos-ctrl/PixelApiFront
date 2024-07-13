const API = 'http://localhost:8080/pixel/frontController';

const UsePixelApi = () => {

    async function CreateAccount(myClient) {

        try {
            const response = await fetch(API + "/createAccount", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(myClient)
            })
            return response.json();
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    async function ValidateAccount(email) {

        try {
            const response = await fetch(API + "/validateAccount/" + email, {
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

    async function ConfirmAccount(id, token) {

        try {
            const response = await fetch(API + "/confirmAccount/" + id + "/" + token, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            return response.json();
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

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
        listByCategory,
        ValidateAccount,
        CreateAccount,
        ConfirmAccount
    }
}

export { UsePixelApi }