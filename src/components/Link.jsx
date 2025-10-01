const Link = ({ name, address, color, hoverColor }) => {
    return (
        <a href={address}
            className={`text-xl text-${color || "chocolate-milk"} hover:text-${hoverColor || "chocolate-light"} underline underline-offset-6 font-bold`}
            target="_blank"
        >
            {name}
        </a>
    )
}

export default Link