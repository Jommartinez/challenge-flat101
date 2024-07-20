# Rick and Morty - Flat101

## Proyecto

Se trata de una aplicación web basara en la API de [Rick and Morty](https://rickandmortyapi.com/). Esta cuenta con 4 pantallas, dos pantalla principales con el listado de episodios y localizaciones y dos pantallas secundarias donde mostramos algunos detalles tanto del episodio como de la localización respectivamente. Además en la página de detalle de episodio tenemos un formulario en el que podremos enviar un cometario a un endpoint falso.

En cuanto a tecnología he utilizado **React** con **Vite** ya que se pedía tener un enrutador, y me ha parecido lo más lógico para hacerlo de forma manual con **React router dom**, en vez de usar el router de NextJS.

Para el estado de utilizado **Zustand**, y aque es una librería que para pequeñas aplicaciones como esta funciona muy bien y permite tener el código muy bien organizado.

Para el formulario he decidido hacer las validaciones con **Zod**, ya que es una librería que permite realizar validaciones de forma ágil y para el funcionamiento y estado del formulario **React Hook Form**.

## Stack tecnologico

- React
- TypeScript
- React router dom
- Vite
- Vitest
- React testing library
- Zustand
- Zod
- React Hook Form
- axios

## Instrucciones de funcionamiento

Clonamos y accedemos al repositorio

> ```console
>  $ git clone https://github.com/Jommartinez/challenge-flat101.git
>  $ cd challenge-flat101
> ```

Instalamos dependencias e iniciamos el proyecto

> ```console
> $ npm install
> $ npm run dev
> ```

Para ejecutar los test utilizamos el siguiente comando

> ```console
> $ npm run test
> ```
