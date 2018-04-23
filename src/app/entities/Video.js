class Video {
    constructor(videos){
        this.id = videos.id.videoId;
        this.title = videos.snippet.title,
     this.description = videos.snippet.description,
     this.image = videos.snippet.thumbnails.high.url
    }
}

export default Video