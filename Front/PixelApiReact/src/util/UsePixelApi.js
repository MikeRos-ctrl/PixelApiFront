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

    async function GetRandomImageWithCategories() {
        try {
            const response = await fetch(API + "/getRandomImageWithCategories", {
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

    async function CreateStripeSubscription(data) {

        try {
            const response = await fetch(API + "/stripeSubscription", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            return response.json();
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    async function UpdateAccount(myClient) {

        try {
            const response = await fetch(API + "/updateAccount", {
                method: 'PUT',
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

    async function StripeCredentials(plan) {

        try {
            const response = await fetch(API + "/stripeCredentials?plan=" + plan, {
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

    async function Login(email, accountKey) {

        try {
            const response = await fetch(API + "/login/" + email + "/" + accountKey, {
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

    async function ForgotPwd(email, id) {

        try {
            const response = await fetch(API + "/forgotPwd/" + email + "/" + id, {
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

    async function FillFrontHeader() {

        try {
            const response = await fetch(API + "/fillFrontHeader", {
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

    async function listByCategory2(category, imageId) {

        try {
            const response = await fetch(API + "/listByCategory/" + category + "/" + imageId, {
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
        FillFrontHeader,
        listByCategory,
        listByCategory2,
        ValidateAccount,
        CreateAccount,
        ConfirmAccount,
        UpdateAccount,
        Login,
        ForgotPwd,
        CreateStripeSubscription,
        StripeCredentials,
        GetRandomImageWithCategories
    }
}

export { UsePixelApi }