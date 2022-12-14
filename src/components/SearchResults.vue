<script lang="ts" setup>
import { userStore } from "../store/state";
import GithubUserInfo from './GithubUserInfo.vue'
import GithubUserRepositories from './GithubUserRepositories.vue'

const store = userStore();
</script>

<template>
    <div v-if="store.userInfo != null">
        <GithubUserInfo :userInfo="store.userInfo"></GithubUserInfo>
        <GithubUserRepositories :userRepositories="store.userRepositories"></GithubUserRepositories>
    </div>
</template>

<style lang="scss"></style>
