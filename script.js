console.log("Vue OK", Vue);


const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            name: 'luca'
    }   
    }
})


app.mount('#root');