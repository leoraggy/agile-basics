import './App.css'
import data from './data.json'
import indieMusicImage from './assets/indie-music.jpg'

function App() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Independent Label</p>
        <h1>{data.label}</h1>
        <p className="tagline">{data.tagline}</p>
        <p className="meta">
          Founded {data.founded} • {data.city}
        </p>
      </header>

      <section className="feature-image" aria-label="Indie music banner">
        <img src={indieMusicImage} alt="Indie Music Art" />
      </section>

      <section className="artists" aria-labelledby="artists-title">
        <h2 id="artists-title">Artist Roster</h2>

        <div className="artist-grid">
          {data.artists.map((artist) => (
            <article className="artist-card" key={artist.id}>
              <h3>{artist.name}</h3>
              <p className="genre">{artist.genre}</p>
              <p className="bio">{artist.bio}</p>

              <h4>Albums</h4>
              <ul className="albums">
                {artist.albums.map((album) => (
                  <li key={album.title}>
                    <span>{album.title}</span>
                    <span>{album.year}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App