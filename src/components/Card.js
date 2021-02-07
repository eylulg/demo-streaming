function Card({ u, title }) {
  const url = "https://image.tmdb.org/t/p/w500" + u;
  return (
    <div>
      <img
        style={{ height: "200px", width: "150px", backgroundColor: "#212121" }}
        src={url}
      ></img>
      <span>{title}</span>
    </div>
  );
}

export default Card;
