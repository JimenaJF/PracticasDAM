# React + TypeScript + Vite
 
La presente plantilla fue create usando React, TypeScript y Vite. Incluye
adicionalmente los paquetes de:
- React router v7 en su modo data.
- i18next para traducciones.
- Zustand como gestor de estados.
- Eslint para la prevención de errores en el codigo.
- Prettier para aplicar correctos estilos en el código.
- Husky para facilitar el uso de git hooks.
 
## Git hooks
 
Existen dos git hooks configurados para el proyecto:
- **Pre commit**: Ejecuta prettier sobre los archivos modificados.
- **Pre push**: Ejecuta el linter sobre los archivos en los cuales se van a subir.
 
Los hooks se ejecutan automanticamente antes de hacer un commit o subir los cambios.
 
## Comandos
 
Existen varios comandos disponibles para su ejecución.
- **npm run dev** o **yarn dev**: Ejecuta la aplicación con el servidor de desarrollo.
- **npm run build** o **yarn build**: Compila la aplicación para producción.
- **npm run lint** o **yarn lint**: Ejecuta el linter para comprobar posibles errores.
- **npm run lint:fix** o **yarn lint:fix**: Ejecuta el linter y arregla los fallos cuando es posible.
- **npm run format** o **yarn format**: Ejecuta prettier (un formateador de codigo) y aplica los estilos predefinidos.
- **npm run preview** o **yarn preview**: Permite ver en local la aplicación con la *build* de producción. Necesario ejecutar antes el proceso de *build*.
 
Ignorar el script *prepare*, es solo para el uso de git hooks. Todos ellos pueden ser encontrados en el archivo ```package.json```.
