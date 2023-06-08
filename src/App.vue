<script setup></script>

<template>
	<div className="navbar">
		<router-link className="nav-item" to="/">Timeline</router-link>
		<router-link className="nav-item" to="/californios"
			>Californios</router-link
		>
		<router-link className="nav-item" to="/american">American</router-link>
		<router-link className="nav-item" to="/restoration"
			>Restoration</router-link
		>
		<router-link className="nav-item" to="/citation">Citations</router-link>
	</div>
	<main><router-view /></main>
</template>

<style scoped>
	.navbar {
		display: flex;
		justify-content: space-evenly;
		border-bottom: 3px solid #fbad23;
		background-color: rgba(0, 51, 102, 0.65);
	}

	.navbar > a {
		text-decoration: none;
		display: block;
		font-size: 1.21em;
		font-weight: bold;
		padding: 13px 0;
		color: #fff;
	}

	.navbar > a:hover {
	}
</style>
