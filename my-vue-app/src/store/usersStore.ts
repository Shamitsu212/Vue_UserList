import { defineStore } from "pinia";
import type { user } from "../data/users";

interface UserState {
    users: user[];
}

export const useUsersStore = defineStore('users', {
    state: (): UserState => ({
        users: []
    }),
    actions: {
        addUser(newUser: user) {
            this.users.push(newUser);
        },
        removeUser(id: number) {
            this.users = this.users.filter(user => user.id !== id)
        }
    }
})