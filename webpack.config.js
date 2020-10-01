const path = require("path"); //permite acceder donde nos estamos moviendo en el proyecto, no importa si es local o en la nube

const HtmlWebpackPlugin = require("html-webpack-plugin"); //Nos permite trabajar con html

//Aquí se encuentra toda la configuración de lo que va a suceder. Modulo para exportar
module.exports = {
  //Punto de entrada con su dirección. Aquí vive el código inicial y de aquí parte al desarrollo.
  entry: "./src/index.js",
  //Donde se envía el proyecto estructurado y compilado listo para producción
  output: {
    //Creamos el lugar dónde se exportará el proyecto
    path: path.resolve(__dirname, "dist"),
    //Este es el nombre del archivo final para producción
    filename: "main.js",
  },
  //extensiones que utilizara nuestro proyecto
  resolve: {
    extensions: [".js"],
  },
  //modulo con las reglas necesarias para trabajar
  //regla para babel
  module: {
    rules: [
      //son pasadas por un arreglo
      {
        //estructura de babel, requiere de un test para determinar el como identificar los archivos según los que se encuentran en nuestro entorno
        //El text tendrá un regex, el cual es una forma de establecer valores que queremos filtrar ya sea de una ruta, de unos elementos o archivos utilizados
        test: /\.js?$/,
        //excluye los archivos js que se encuentran en la carpeta de node_modules
        exclude: /node_modules/,
        //configuración establecida para trabajar todo nuestro código
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  //plugins a utilizar
  plugins: [
    //webpack-plugin que nos permite trabajar con los archivos html
    //instanciamos en la parte superior de este archivo
    new HtmlWebpackPlugin([
      {
        //como inyectamos en un archivo html un valor
        inject: true,
        //donde se encuentra en el template ppal
        template: "./public/index.html",
        //a donde vamos a guardar este archivo y podemos darle un nombre
        filename: "./index.html",
      },
    ]),
  ],
};
