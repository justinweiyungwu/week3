export default function Employ({
    name = "none",
    department = "none",
    colour = "none",
    font = "0",
    image = "/icon/andrew.jpg"

}) {
    return (
        <div style={{ backgroundColor: colour, fontSize: font }}>
            {

                colour === "#000356" ? <img src={'icon/manamejeff.jpg'} width="50" /> :
                    colour === "#000037" ? <img src={'icon/sarah.jpg'} width="50" /> :
                        colour === "blue" ? <img src={'icon/george.jpg'} max-width="50" /> :
                            colour === "#000022" ? <img src={'icon/luis-villasmil-hh3ViD0r0Rc-unsplash.jpg'} width="50" /> :
                                <img src={image} width="50" />
            }
            {name},
            {department}

        </div>
    )
}