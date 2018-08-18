<template>
    <div>
        {{ movie.title }}
        {{ movie.status }}
    </div>
</template>
<script>
    export default {
        name: "MoviesList",
        data() {
            return {
                movie: {}
            }
        },
        created: function() {
            this.fetchData();
        },
        methods: {
            fetchData: async function() {
                try {
                    const res = await fetch(
                        'https://api.themoviedb.org/3/movie/550?api_key=3d2cd86ef57f0dd3acbb07da86a76b10'
                    );
                const movie = await res.json();
                return this.movie = movie;

                } catch (e) {
                    console.log(e);
                }
            }
        }
    }
</script>