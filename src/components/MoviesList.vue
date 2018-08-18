<template>
    <div>
    <ul>
        <li v-for="movie in movies" v-bind:key="movie.id">
            <Movie v-bind:movie="movie"></Movie>
        </li>
    </ul>
    </div>
</template>
<script>
    import Movie from './Movie.vue';
    export default {
        name: "MoviesList",
        data() {
            return {
                movies: []
            }
        },
        created: function() {
            this.fetchData();
        },
        methods: {
            fetchData: async function() {
                try {
                    // const api_key = 'https://api.themoviedb.org/3/movie/550?api_key=3d2cd86ef57f0dd3acbb07da86a76b10';
                const api_key_discover = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3d2cd86ef57f0dd3acbb07da86a76b10';
                const res = await fetch(api_key_discover);
                const movies = await res.json();
                return this.movies = movies.results;

                } catch (e) {
                    console.log(e);
                }
            }
        },
        components: {
            Movie
        }
    }
</script>