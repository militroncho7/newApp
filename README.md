# App Covid-19

- Chapter 1: Introducción.Aplicación que consulta una API externa y crearemos una web donde ver las cifras del covid-19.
- Chapter 2: Declaración de useState en componentes funcionales. Versión 16.8 Los componenetes funcionales no podían almacenar estado interno. 
- Chapter 3: ProTypes, Styled Components & Hoook useEffect y useState.
realizar una serie de comprobaciones acerca del tipo de las propiedades que se van pasando a los componentes. Permite identificar propiedades de un componente a otro.
- Chapter 4: Librería React Router para meter enrutado en la app.
    Ruta 1: Home, donde se muestran los datos globales Covid-19
    Ruta 2: Resultados en España.
- Chapter 5: API Context & Dark-Light Theme: Nos permite declarar una serie de valores a los cuales lso componentes hijos pueden acceder sin la necesidad de recibir como props. el mejor el ejemplo es el cambio de tema.
    Creamos un CONTEXTO.
- Chapter 6: Suspense/Lazy y limpieza & organización del proyecto. Hardcodear las rutas (Home y Spain).
    Cambiar el menú.
    Lazy y Suspense: importar rutas de manera dinámica.
    Lazy envuelve las rutas en funciones (Home y Spain).
    Suspense: Comprueba si algún componente se está cargando de forma lazy. Si es así comprueba si están renderizados y si no lo están hace una llamada asíncrona para cargar los componentes.
- Chapter 7: Formularios.
    En React tenemos dos formas de trabajar con formularios de contacto. Los componetes controlados y los no controlados. Los primeros delegan en el propio coponente la gestión del estado del formulario sin almacenar los valores en el DOM. Este método es el más recomendado y el que utilizamos en la App.
    Los valores del formulario lo vamos a ir almacenando en el estado.
- Chapter 8: Input File & hook useReducer.
    Gestión de Archivos & Refactorizar el código del formulario.
    useReducer: Redux en pequeño dentro de React. Permite almacenar un estado global de nuestro componente. En vez de tener un useState para cada input creamos como un estado global y modificarlo a través de una función reducer. Modifica el estado inicial/actual a través de una acción
    Investigar en qué consiste Redux y cómo funciona.

    REPASAR CAPÍTULO 8
    
- Chapter 9: Dudas.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# newApp
