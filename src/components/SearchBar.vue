<script lang="ts" setup>
import { userStore } from "../store/state";
import githubService from "../services/api/github.service";
import { CONSTANTS } from "../constants";
import { GithubError } from "../models/github-error";

const store = userStore();

const onClickFind = (event: Event)=> {
    store.updateError(null)
    githubService.getUserRepos(store.searchString)
                .then(res => {
                    if (res.length == 0) {
                        throw new Error(
                            CONSTANTS.GITHUB_ERROR_MESSAGES.NOT_FOUND,
                        )
                    }
                    store.updateUserInfo(res[0].owner);
                    store.updateUserRepositories(res);
                })
                .catch((e: GithubError) => {
                    store.updateError(e.message)
                })
}
</script>

<template>
	<section>
		<form>
			<label>
				Github Username:
				<input
					v-model="store.searchString"
					type="text"
					name="name"
				/>
			</label>
			<input @click="onClickFind($event)" type="button" value="Find" />
		</form>
        <div v-if="store.error" class="alert alert-danger" role="alert">
            {{store.error}}
        </div>
	</section>
</template>

<style lang="scss"></style>
