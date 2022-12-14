<script lang="ts" setup>
import { GithubRepository } from "../models/github-repositories.dto";

const props = defineProps<{
	userRepositories: GithubRepository[] | null;
}>();
</script>

<template>
	<h2>Repository List</h2>
	<div
		class="d-flex justify-content-start flex-wrap align-items-start"
		style="height: 300px"
	>
		<div v-for="repository in props.userRepositories">
			<div class="p-2">
				<div class="card card-width p-2">
					<div class="card-body" style="height: 200px">
						<h5 class="card-title">{{ repository.name }}</h5>
						<h6 class="card-subtitle mb-2 text-muted">
							{{ repository.description }}
						</h6>
						<a :href=repository.html_url class="card-link"> Git URL </a>
						<a :href=repository.url class="card-link"> URL </a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss"></style>
