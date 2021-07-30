const app = Vue.createApp({
    data(){
        return{
            product: 'Shoes',
            description: 'This is shoes!!!',
            image: './assets/images/socks_green.jpg',
            link: 'https://www.camt.cmu.ac.th',
            inStock: false,
            inventory: 10,
            details: ['50% cotton', '30% wool', '20% polyster'],
            variants:[
                {
                    id:2234, 
                    color:'green',
                    image: './assets/images/socks_green.jpg',

                },
                {
                    id:2235, 
                    color:'blue',
                    image: './assets/images/socks_blue.jpg',

                }],
            sizes:['S', 'M', 'L'],
            cart:0,
            onSale:true
        }
    },
    methods:{
        addToCart(){
            this.cart++
            this.inventory--
            if (incentory == 0) {
                this.onSale = false
            }
        },
        updateImage(img){
            this.image = img
        },
        takeAll(){
            this.cart = this.inventory
            this.inventory = 0
            this.onSale = false
        }
    }
})