export default function Card( {
    degree = "none",
        colour = "purple",
        font = "0",
        image = "/icon/face.png"
}) {
    return (
        <div style={{ backgroundColor: colour, fontSize: font }}>
            {
                colour === "green" ? <img src={'icon/face.png'} width="50"/> :
                    colour === "blue" ? <img src={'icon/pretzelphone.png'}/> :
                        <img src={image} width="50" />
}
            {degree}
        </div>
    )
}