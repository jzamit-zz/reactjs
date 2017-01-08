/**
 * Created by jorge on 08/01/17.
 */
import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    //ES6 syntax to clear code.
    //es lo mismo pasarle ({ video })  que usar const video = props.video; y recibir props como argumento.
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">

                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>

            </div>



        </li>
    );

};

export default VideoListItem;