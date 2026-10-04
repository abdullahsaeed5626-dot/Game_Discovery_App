import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'f3c907fe5a8145849f63d8c754cc4276'
    }
})