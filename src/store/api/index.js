

export function getUserAccess () {
    var user = localStorage.getItem("user");
    user = JSON.parse(user);

    return user;
}

