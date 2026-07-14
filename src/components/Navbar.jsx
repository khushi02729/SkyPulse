function Navbar() {
  const today = new Date();

  const date = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="navbar">
      <h2>🌤 SkyPulse - Accurate weather anywhere</h2>

      <p className="date">{date}</p>
    </div>
  );
}

export default Navbar;
