<script lang="ts" setup>
import { Owner } from '../models/github-repositories.dto';

const props = defineProps<{
  userInfo: Owner
}>()
</script>

<template>
	<div v-if="props.userInfo != null">
        <div className='p-2'>
            <div className="card profile-card-width">
                <img className="card-img-top" :src=props.userInfo.avatar_url alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{{props.userInfo.login}}</h5>
                    <p className="card-text">
                        {{props.userInfo.type}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss"></style>
