import DcLogo from "../img/dc-logo.png";
import '../css/navbar.css'

export default function AppNavBar() {


    // const navItem = ["CHARACTERS","COMICS","MOVIES","TV","GAMES","COLLECTIBLES","VIDEOS","FANS","NEWS","SHOP"]

    const navItem = [
    {
        id: 1,
        Text: "CHARACTERS",
        path: "/characters"
    },
    {
        id: 2,
        Text: "COMICS",
        path: "/comics"
    },
    {
        id: 3,
        Text: "MOVIES",
        path: "/movies"
    },
    {
        id: 4,
        Text: "TV",
        path: "/tv"
    },
    {
        id: 5,
        Text: "GAMES",
        path: "/GAMES"
    },
    {
        id: 6,
        Text: "COLLECTIBLES",
        path: "/collectibles"
    },
    {
        id: 7,
        Text: "VIDEOS",
        path: "/videos"
    },
    {
        id: 8,
        Text: "FANS",
        path: "/fans"
    },
    {
        id: 9,
        Text: "NEWS",
        path: "/news"
    },
    {
        id: 10,
        Text: "SHOP",
        path: "/shop"
    },

    ]

    return (
        <>

            <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                      <img src={DcLogo} />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            
                            {navItem.map((item) => (
                                <li class="nav-item">
                                    <a key={item.id} class="nav-link" aria-current="page" href={path}>{item.Text}</a>
                                </li>
                            ))}
                            
                        </ul>
                    </div>

                </div>
            </nav>

        </>
    )


}