export default function Card({ url, title }) {
  const u = "https://image.tmdb.org/t/p/w500" + url;
  return (
    <div
      style={{
        height: "300px",
        width: "200px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img style={{ height: "200px", width: "150px" }} src={u}></img>
      <span>{title}</span>
    </div>
  );
}
