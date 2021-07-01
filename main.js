const app = Vue.createApp({
    data(){
        return{
            product: 'Shoes',
            description: 'This is shoes!!!',
            image: './assets/images/socks_green.jpg',
            link: 'https://www.camt.cmu.ac.th',
            inStock: true,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyster'],
            variants:[{id:2234, color:'green'},{id:2235, color:'blue'}],
            sizes:['S', 'M', 'L'],
            onSale:true
        }
    }
})