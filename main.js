const app = Vue.createApp({
    data(){
        return{
            product: 'Shoes',
            description: 'This is shoes!!!',
            image: './assets/images/socks_green.jpg',
            link: 'https://www.camt.cmu.ac.th',
            inStock: true,
            inventory: 100,
            onSale:true
        }
    }
})