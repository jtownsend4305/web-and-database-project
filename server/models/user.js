const users = [
    {
        username: "John1",
        password: "password1",
    },
    {
        username: "John2",
        password: "password2",
    },
    {
        username: "John3",
        password: "password3",
    },
];

async function getAllUsers() {
    return users;
}

module.exports = {getAllUsers};