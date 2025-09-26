import React, { useState, useMemo } from "react";
import useApiWithRetry from "../hooks/useApi";

const BASE_API = "https://swapi.info/api/films"; // keep your existing hook path

export default function Movies() {
  const { data, isLoading, error, isRetrying, cancelRetry } = useApiWithRetry(BASE_API);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null); 

  
  const movies = useMemo(() => (Array.isArray(data) ? data : data || []), [data]);

  const filtered = movies.filter((m) =>
    m.title?.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Star Wars — Movies</h1>
          <p className="text-sm text-base-content/60">A beautiful list of films styled with Tailwind + DaisyUI</p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title..."
            className="input input-bordered input-sm w-64"
          />
          {isRetrying && (
            <button onClick={cancelRetry} className="btn btn-error btn-sm">
              Cancel Retry
            </button>
          )}
        </div>
      </header>

      {isLoading && (
        <div className="flex justify-center items-center h-48">
          <span className="loading loading-spinner text-primary loading-lg"></span>
        </div>
      )}

      {error && (
        <div className="alert alert-warning shadow-lg mb-6">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20 10 10 0 010-20z"/></svg>
            <span>{error}</span>
          </div>
        </div>
      )}

      {!isLoading && filtered.length === 0 && (
        <div className="text-center p-6 text-base-content/70">No movies found.</div>
      )}

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((movie) => (
          <article key={movie.episode_id || movie.url} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="card-body">
              <h2 className="card-title">{movie.title}</h2>
              <p className="text-sm text-base-content/60">Episode: {movie.episode_id}</p>
              <p className="text-sm">Director: <strong>{movie.director}</strong></p>
              <p className="text-sm text-base-content/60">Released: {movie.release_date}</p>

              <div className="card-actions justify-between items-center mt-4">
                <div className="flex flex-wrap gap-2">
                  {(movie.planets || []).slice(0, 3).map((p, i) => (
                    <span key={i} className="badge badge-sm badge-outline">Planet</span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button className="btn btn-ghost btn-sm" onClick={() => setSelected(movie)}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Modal for movie details (DaisyUI) */}
      <input type="checkbox" id="movie-modal" className="modal-toggle" checked={!!selected} readOnly />
      <div className="modal">
        <div className="modal-box max-w-3xl">
          <div className="flex justify-between items-start gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold">{selected?.title}</h3>
              <p className="text-sm text-base-content/60">Directed by {selected?.director} • {selected?.release_date}</p>
            </div>
            <button className="btn btn-sm btn-circle btn-ghost" onClick={() => setSelected(null)}>✕</button>
          </div>

          <div className="prose max-w-full mb-4 whitespace-pre-line text-sm text-base-content/80">
            {selected?.opening_crawl || "No opening crawl available."}
          </div>

          <div className="mb-3">
            <h4 className="font-semibold">Characters</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {(selected?.characters || []).map((c) => (
                <a key={c} href={c} target="_blank" rel="noreferrer" className="badge badge-outline">
                  {c.split("/").filter(Boolean).pop()}
                </a>
              ))}
            </div>
          </div>

          <div className="modal-action">
            <button className="btn" onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
