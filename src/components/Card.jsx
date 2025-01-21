export default function Card() {
    return (
        <div className="movie-card-container grid grid-cols-3 lg:grid-cols-5 md:grid-cols-3 gap-2 mt-5">
            {[1, 2, 3, 4, 5].map(num => (
                <div className="movie-card" key={num}>
                    <div className="movie-card-header">
                        <img src={`/src/assets/img/img${num}.jpg`} alt={`Movie ${num}`} />
                        <div className="movie-card-img-overlay">
                            <div className="flex items-center justify-end">
                                <span className="rate"><i className="bx bxs-star"></i> 8.6</span>
                            </div>
                            <div className="flex items-center">
                                <span className="type">Movie</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-card-footer text-color mt-2 mt-lg-3">
                        <h4 className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, ad?</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}
