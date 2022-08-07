const first = Vue.createApp({
    data() {
        return {
            url: 'https://github.com/Trevor-143',
            showBooks: true,
            books: [
                {title: 'Name them all', author: 'Hes the one', img: 'images/1.png', isFav: true},
                {title: 'What are you looking for', author: 'Hes the second', img: 'images/2.png', isFav: false},
                {title: 'All the winds', author: 'Hes the third', img: 'images/3.jpg', isFav: true}
            ],
            x: 0,
            y:0,
            favTitle: 'Your Favorites'
        }
    },
    methods: {
        toggleBooks() {
            this.showBooks = !this.showBooks
        },
        changeTitle(title) {
            this.title = title
        },
        handleEvents(e, data) {
            console.log(e.bubbles, e.button, e.altKey)
            if(data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        favOrNot(thing) {
            thing.isFav = !thing.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((thing) => thing.isFav)
        }
    }
})

first.mount('#app')