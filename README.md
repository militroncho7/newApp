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

    Virtual DOM (REACT): tiene en DOM  virtual en memoria donde va iterando los cambios que vamos haciendo en nuestros componentes, una vez que procesa todos los cambios los traslada al DOM que se ve en nuestro navegador. Este proceso se llama consolidación. De esta forma tiene un perfomance bastante buena para ejuctar los cambios. No lo hace de una forma tan costosa. Por esto le exige un elemento raíz al componente. Se puede sustituir con los fragmentos <> </> React.Fragment
    También se pueden devolver los componentes como un arra [div,div,etc..] pero esta forma no se utiliza.

    · https://latteandcode.medium.com/y-eso-del-virtual-dom-de-react-qu%C3%A9-es-3feed6366925

    REDUX: para aplicaciones con un volumen de usuarios bastante considerable. La ventaja es que te permite centralizar el estado de la app e irlo modificando a través de ACTIONS.
    Algo parecido dentro de la aplicación es el componente Contac.js que utiliza el hook useReducer basado en la filosofía Redux para modificar el estado.

    La ventaja que tiene es que establece un protocolo para modificar este estado, no permite llevar a cabo acciones que tengan efectos secundarios (manera muy limpia de modificar el estado global de la App). Tiene alguna pega. Cada vez que modificamos el estado de nuestra App pasa por todos elementos que estén escuchando ese estado. Tenemos que tener cuidado por donde pasa la App para evitar renders innecesarios.

    Libreria para crear formularios y simple de usar: FORMIK & BUILDER:
    · https://formik.org/
    · https://react-hook-form.com/form-builder

- Chapter 10: La librería Formik. https://formik.org/

    Profundizar en styled-components para crear estilos globales.
    Manejo de validaciones en formularios.

- Chapter 11: REDUX.

    Es una alternativa a API context de React para almacenar el estado global de una app. Su principal ventaja es que tiene una manera muy limpia de modificar el estado e induce a buenas prácticas.
    El primera paso es envolver nuestra app con un Provider (muy similar al Provider de la API Context). Su función es permitir el acceso global a ese estado del cual nos provee Redux desde nuestros componentes.
    A este Provider que nos provee Redux hay que pasarle un objeto que sea store. Esto representa el sestado global de nuestra app.
    store.js --> Aquí configuramos el estado global de la App. Necesitamos una función que nos provee también Redux createStore. Esta función lo que nos pide es que le pasamos una función que sea el reducer de nuestra App. Es como el hook useReducer pero a lo grande. Vamos a tener un estado global desde el cual vamos a poder acceder desde todos los componentes.

    Leer documentación completa de Redux.

- Chapter 12: Extensión para Chrome y modo offline

    También crearemos un custom hook para limpiar la forma en la que estamos recuperando nuestra información de la API y almacenarla en el local storage de nuestro navegador para poder acceder a ellas sin conexión.

    Modificaremos el archivo manifest.json para que Google Chrome sea capaz de leerlo y pueda procesa nuestra nueva extensión.

    Declaramos una browser_action: Es lo que va a permitir a Chrome tratarlo como si fuera una extensión.
    En el diremos que el punto de entrada es index.html y el título de la App. También tenemos que indicar la versión de la app y la versión de manifest. Por último, como vamos a utilizar el local storage también lo indicamos.

    En el navegador de Chrome vamos a extensiones: chrome//extensions. Habilitamos modo desarrollador y seleccionamos: cargar descomprimida.
    
    MINUTO 07:41
