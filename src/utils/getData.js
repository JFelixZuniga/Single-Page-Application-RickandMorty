const API = "https://rickandmortyapi.com/api/character/";

//con la siguiente función traeremos los datos desde la API
const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export default getData;
