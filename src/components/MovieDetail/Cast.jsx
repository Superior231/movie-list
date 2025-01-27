/* eslint-disable react/prop-types */
export default function Cast({ cast }) {
    return (
        <div className="container-cast mt-10 sm:mt-10 md:mt-5 lg:mt-20">
            <div className="cast-header">
                <h2 className="text-2xl text-color font-bold mb-4">Top Billed Cast</h2>
            </div>
            <div className="cast-content">
                <div className="cast">
                    {cast.map((actor) => (
                        <div key={actor.id} className="card">
                            <div className="avatar">
                                <img
                                    src={
                                        actor.profile_path
                                            ? `${import.meta.env.VITE_BASEIMGURL}${actor.profile_path}`
                                            : "/camera.png"
                                    }
                                    alt={actor.name}
                                />
                            </div>
                            <p className="text-sm text-color font-semibold mt-2 mt:sm-2 md:mt-3 lg:mt-5">{actor.name}</p>
                            <p className="text-xs text-color opacity-50">as {actor.character}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
