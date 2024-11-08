import React from 'react';

interface Props {
    url: string;
}

export default function MusicEmbed(props:Props){
    return <iframe 
            allow="autoplay *; 
            encrypted-media *;" 
            frameBorder="0" style={{
                width:"100%",
                maxWidth:"500px",
                overflow:"hidden",
                background:"transparent"
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src={props.url.replace("music.apple.com", "embed.music.apple.com").replace("open.spotify.com", "open.spotify.com/embed")}
        ></iframe>
}

