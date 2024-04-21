import { users } from "./UserList.js";

export const getActiveUser = () => {
    const activeUser = users.filter(user => user.isActiveUser);
    return activeUser;
}

// console.log(getActiveUser());