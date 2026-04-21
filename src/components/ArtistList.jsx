import ArtistDetails from "./ArtistDetails";

function ArtistList({ artists }) {
  return (
    <>
      {artists.map((artist) => (
        <ArtistDetails
          key={artist.id}
          name={artist.name}
          genre={artist.genre}
        />
      ))}
    </>
  );
}
export default ArtistList;
