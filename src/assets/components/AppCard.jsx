
export default function AppCards({comics}) {

    return (
        <>
            <div className="container text-left">
                <div className="row align-items-start">
                    <div className="col">
                        <div className="card">
                            <img src={comics.thumb} />
                            <a href="#">{comics.title}</a>
                            <p>{comics.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}