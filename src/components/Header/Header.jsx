import "./Header.css"

const Header = (heading) => {

    return(
        <>
        <div className="header">
            <h1>{heading.first}</h1>
            <h2>{heading.second}</h2>
        </div>
        </>
    )
}

export default Header;