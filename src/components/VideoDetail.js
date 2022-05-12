import React from "react";




const VideoDetail = ({video}) => {

    
    if(!video){
        return <div>Loading...</div>
    }

    const videroSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    //props.video --> video
    return (<div>
        <div className="ui embed">
            <iframe tittle="video player" src={videroSrc} />
        </div>
        <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        </div></div>)
}

export default VideoDetail;