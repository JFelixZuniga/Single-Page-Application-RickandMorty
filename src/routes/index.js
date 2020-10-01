import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": Character,
  "/:contact": "Contact",
};

//Manejador -> el cual se encargará de mostrar los elementos según la lógica que vamos a establecer
const router = async () => {
  //Creamos una constante llamada header, a la cual le pasamos un valor null en caso que no lo encuentre OR busca el ID del elemento header.
  //Sobre estos 2 elementos haremos render
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};

export default router;
