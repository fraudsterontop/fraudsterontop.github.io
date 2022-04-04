const App = Vue.createApp({
    data() {
        return {
            Books: [
                {title: "Harry Potter: Philosopher's Stone", author: "J. K. Rowling", age: 56, isFav: false, img: 'assets/1.jpg'},
                {title: "Harry Potter: Chamber of Secrets", author: "J. K. Rowling", age: 56, isFav: true, img: 'assets/2.jpg'},
                {title: "Harry Potter: Prisoner of Azkaban", author: "J. K. Rowling", age: 56, isFav: true, img: 'assets/3.jpg'},
                {title: "Harry Potter: Goblet of Fire", author: "J. K. Rowling", age: 56, isFav: false, img: 'assets/4.jpg'},
                {title: "Harry Potter: Order of the Phoenix", author: "J. K. Rowling", age: 56, isFav: false, img: 'assets/5.jpg'},
                {title: "Harry Potter: Half-Blood Prince", author: "J. K. Rowling", age: 56, isFav: true, img: 'assets/6.jpg'},
                {title: "Harry Potter: Deathly Hallows I", author: "J. K. Rowling", age: 56, isFav: true, img: 'assets/7.jpg'},
                {title: "Harry Potter: Deathly Hallows II", author: "J. K. Rowling", age: 56, isFav: true, img: 'assets/7.jpg'},

            ]
        }
    },
    methods: {
        toggleFav(book) {
            book.isFav = !book.isFav
            console.log('You clicked!')
        }
    }
})

App.mount('#app')