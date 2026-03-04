function TarjetaUsuario({ nombre, juegoFavorito }) {
  const estilo = {
    border: '2px solid black',
    padding: '10px',
    margin: '10px'
  };

  return (
    <div style={estilo}>
      <h3>Jugador: {nombre}</h3>
      <p>Juego favorito: {juegoFavorito}</p>
    </div>
  );
}

export default TarjetaUsuario;

