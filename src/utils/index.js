export const tokenFetch = async (setUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "GET",
            headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
        });
        const data = await response.json();
        setUser(data.user);
        console.log(data.message);
    } catch (error) {
        console.log(error);
    }
}

export const signUpFetch = async (userEmail, password, setUser) => {
    try {
        const email = userEmail.toLowerCase();
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await response.json();
        setUser(data.user);
        console.log(data.message);
        localStorage.setItem("myToken", data.token);
    } catch (error) {
        console.log(error);
    }
};

export const loginFetch = async (userEmail, password, setUser) => {
    try {
        const email = userEmail.toLowerCase();
        const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await response.json();
        setUser(data.user);
        console.log(data.message);
        localStorage.setItem("myToken", data.token);
    } catch (error) {
        console.log(error);
    }
};

export const drinksFetch = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}fetchDrinks`, {
            method: "GET",
            headers: { "Content-Type" : "application/json" }
        });
        const data = await response.json();
        return data.drinks;
    } catch (error) {
        console.log(error);
    }
}

export const drinksByLetterFetch = async (letter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}getAllByLetter`, {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
                letter
            }),
        });
        const data = await response.json();
        return data.drinks;
    } catch (error) {
        console.log(error);
    }
}

export const invertedIngredientsFetch = async (userIngredients) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}fetchIngredients`, {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
                userIngredients
            }),
        });
        const data = await response.json();
        return data.ingredients;
    } catch (error) {
        console.log(error);
    }
}

export const addIngredientsFetch = async (user, ingredients) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}addIngredients`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user,
                ingredients
            }),
        });
        const data = await response.json();
        // setUser(data.user);
        console.log(data)
    } catch (error) {
        console.log(error, "fetch error");
    }
};

export const userIngredientsFetch = async (user) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}fetchUserIngredients`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user
            }),
        });
        const data = await response.json();
        return data.ingredients;
    } catch (error) {
        console.log(error);
    }
};