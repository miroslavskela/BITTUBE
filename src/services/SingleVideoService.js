import Video from '../app/entities/Video'
import {url} from '../app/shares/Constants'

class VideoService {
    constructor(props){
       
    }




    fetchVideo = (searchInput) =>{ 
        return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchInput}&type=video&key=AIzaSyAjSJSYlrEQNwIWrSY57ewuham7Bnz4Y1Q`)
        .then(response=> response.json())
        .then(videos => videos.items.map(video => new Video(video))
        )

    }

}

export const videoService = new VideoService()