
import TarjetaUsuario from './TarjetaUsuario';

function App() {
  return (
    <div>
      <h1>Lista de Jugadores</h1>
      {/* Le pasamos los props como si fueran atributos HTML */}
      <TarjetaUsuario nombre="Lucia" juegoFavorito="Valorant" />
      <TarjetaUsuario nombre="Marcos" juegoFavorito="Minecraft" />
      <TarjetaUsuario nombre="Sofia" juegoFavorito="Elden Ring" />
    </div>
  );
}

export default App
