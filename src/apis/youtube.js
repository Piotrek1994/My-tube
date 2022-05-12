import axios from 'axios'





const KEY = 'AIzaSyBbjl_wv9-Jqb4WMaBWAbZbfQR0nooTxyU'


export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            type: 'video',
            maxResaults: 5,
            key: KEY
        }
    }
)
