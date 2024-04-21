import { users } from "./UserList.js";

export function getInActiveUsers() {
    const inActiveUser = users.filter(user => !user.isActiveUser);
    return inActiveUser;
}

// console.log(getInActiveUsers());