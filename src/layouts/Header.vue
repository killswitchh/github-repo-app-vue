<script setup lang="ts"></script>

<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Github Repos</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link to="/">Home &nbsp;</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/about">About</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
