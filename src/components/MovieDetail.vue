<template>
    <transition name="fade">
    <div class="movie-wrapper" :style="styles">
        <div class="movie-info">
            <h1>{{ movie.title }}</h1> 
            <h3>Release Data: {{ movie.release_date }}</h3> 
            <p>{{ movie.overview }}</p>
        </div>
    </div>
    </transition> 
</template>

<script>
    const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';
    export default {
        data(){
            return {
                movie: {}
            };
        },
        created: function() {
            this.fetchData();
        },
        computed: {
            styles() {
                return {
                    background: `url(${BACKDROP_PATH}/${this.movie.backdrop_path}) no-repeat`,
                    height: `50%`,
                    width: `100%`
                }
            }
        },
        methods: {
            fetchData: async function() {
                try {
                    const res = await fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=3d2cd86ef57f0dd3acbb07da86a76b10`);
                    const movie = await res.json();
                    this.movie = movie;
                } catch (e) {
                    console.log(e);
                }
            }
        }

    }
</script>

<style scoped>
    .movie-wrapper {
        position: relative;
        padding-top: 100vh;
        background-size: cover;
    }
    .movie-info {
        background: #fff;
        color: #222;
        padding: 5rem 10%;
    }

.fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
    /* transform: scale(0); */
}    
</style>
