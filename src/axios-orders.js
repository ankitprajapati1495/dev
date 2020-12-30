import axios from 'axios';

const instance = axios.create({
    baseURL:"https://react-my-burger-dfbdc-default-rtdb.firebaseio.com/"
});

export default instance;