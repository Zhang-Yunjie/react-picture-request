import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID 5hTLtlPDFAfdPC5sQCkC1OOEZaW9d6qfBRA2FMQs7XI'
    }
});