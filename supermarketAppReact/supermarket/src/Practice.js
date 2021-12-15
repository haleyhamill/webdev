const getUser = () => {
    const name = "Sam";

    const getWelcomeMessage = () => {
        return `Hello ${name}`;
    }

    return {
        name: name,
        message: getWelcomeMessage()
    }
}