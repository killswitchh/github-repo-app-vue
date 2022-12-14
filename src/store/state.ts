import { defineStore } from 'pinia'
import { CONSTANTS } from '../constants'
import { GithubRepository, Owner } from '../models/github-repositories.dto'

export type Store = {
    searchString: string
    userInfo: Owner | null
    userRepositories: GithubRepository[] | null
    error?: string | null
}

const defaultStoreValue: Store = {
    searchString: CONSTANTS.EMPTY_STRING,
    userInfo: null,
    userRepositories: null,
    error: null
}

export const userStore = defineStore('counter', {
    state: () => {
        return defaultStoreValue
    },
    actions: {
        updateSearchString(searchString: string) {
            this.searchString = searchString
        },
        updateUserInfo(userInfo: Owner | null) {
            this.userInfo = userInfo
        },
        updateError(error: string | null) {
            this.error = error
        },
        updateUserRepositories(userRepositories: GithubRepository[] | null) {
            this.userRepositories = userRepositories
        },
    },
})