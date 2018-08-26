<template>
    <router-link :to="moviePath">
        <img :src="posterImage" :alt="movie.title">
    </router-link>  
</template>

<script>
    const POSTER_PATH = "https://image.tmdb.org/t/p/w154";
    export default {
        props: ['movie'],
        data() {
            return{
                title: this.movie.title
            }
        },
        computed: {
            slug: function() {
                var slug = this.sanitizeTitle2(this.title);
                return slug;
            },
            posterImage: function() {
                return `${POSTER_PATH}${this.movie.poster_path}`;
            },
            moviePath: function() {
                return `movie/${this.movie.id}-${this.slug}`;
            }
        },
        methods: {
            // sanitizeTitle: function(title) {
            // var slug = "";
            // // Change to lower case
            // var titleLower = title.toLowerCase();
            // // Letter "e"
            // slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
            // // Letter "a"
            // slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
            // // Letter "o"
            // slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
            // // Letter "u"
            // slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
            // slug = slug.replace(/:/, '');
            // // Letter "d"
            // slug = slug.replace(/đ/gi, 'd');
            // // Trim the last whitespace
            // slug = slug.replace(/^\s+|\s+$/g, '');
            // // Change whitespace to "-"
            // slug = slug.replace(/\s+/g, '-');
            
            // return slug;
            // },

            sanitizeTitle2: function(title){
                var slug = "";
                slug = title.replace(/^\s+|\s+$/g, ''); // trim
                slug = slug.toLowerCase();
            
                // remove accents, swap ñ for n, etc
                var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
                var to   = "aaaaeeeeiiiioooouuuunc------";
                for (var i=0, l=from.length ; i<l ; i++) {
                    slug = slug.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
                }

                slug = slug.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
                    .replace(/\s+/g, '-') // collapse whitespace and replace by -
                    .replace(/-+/g, '-'); // collapse dashes

                return slug;
            }
        }
    };
</script>

<style scoped>
img {
    box-shadow: 0 0 35px #000;
}

li {
    text-decoration: none;
}
</style>
