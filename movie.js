class Movie{
    #defaultRating
    constructor(title ,studio , rating = "PG"){
        this.title =title;
        this.studio = studio;
        this.rating =rating;
        this.#defaultRating = "PG";
    }
    get Rating(){
        return this.rating;
    }
    get rating_1(){
        return this.rating;
    }
    set rating_1(rat){
        if(rat != ["U","U/A","PG"] ){
            return this.#defaultRating;
        }else{
            return this.rating;
        }
    }
    movies(){
        console.log(`Movie :${this.title}, studio : ${this.studio}, rating:${this.rating}`)
    }
    get PGMovies(){
        return movies.filter(movie => movie.rating === "PG");
    }
}
const movie1 = new Movie("Casino Royale","Eon Productions","PG­13");
movie1.movies();
