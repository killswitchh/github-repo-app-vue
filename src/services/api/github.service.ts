import { GITHUB_API_URLS } from '../../constants'
import { GithubRepository } from '../../models/github-repositories.dto'
import { ApiWrapper } from './../api-wrapper.service'
export const GithubService = {
    getUserRepos(userName: string): Promise<GithubRepository[]> {
        const url = GITHUB_API_URLS.GITHUB_GET_REPOS_URL(userName)
        return ApiWrapper.get(url)
    },
}

export default GithubService
