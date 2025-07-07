// const API = 'http://localhost:8080/pixel/frontController';
//const API = 'http://192.168.100.149:8080/pixel/frontController';
const API = 'https://pixelapiback.onrender.com/pixel/frontController';

const ApiCall = () => {

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

    async function CreateFreeSubscription(email) {

        try {
            const response = await fetch(API + "/freeSubscription?email=" + email, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
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
                    'Content-Type': 'application/json'
                }
            })
            return response.json();
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    async function ConfirmAccount(token) {

        try {
            const response = await fetch(API + "/confirmAccount/" + token, {
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

    async function ForgotPwd(email) {

        try {
            const response = await fetch(API + "/forgotPwd/" + email, {
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

    async function listByCategory(category, imageId) {

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
        listByCategory,
        ValidateAccount,
        CreateAccount,
        ConfirmAccount,
        UpdateAccount,
        Login,
        ForgotPwd,
        CreateStripeSubscription,
        StripeCredentials,
        GetRandomImageWithCategories,
        CreateFreeSubscription
    }
}

export { ApiCall }