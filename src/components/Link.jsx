const Link = ({ name, address }) => {
    return (
        <a href={address}
            className="text-xl text-chocolate-milk hover:text-chocolate-dark underline underline-offset-6 font-bold"
            target="_blank"
        >
            {name}
        </a>
    )
}

export default Link