import React from "react";

interface Props {
    url:string
}

export default function Embed(props:Props){
    return <div style={{
        height : 250,
        width : 400,
        borderRadius : 12,
        display : "flex",
        justifyContent : "center",
        alignContent : "center",
        flex : 1
    }} >
            <iframe 
            src={props.url} 
            allowFullScreen={false} 
            width={400}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            ></iframe>
    </div>
}
