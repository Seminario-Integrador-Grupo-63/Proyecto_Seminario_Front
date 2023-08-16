# Proyecto_Seminario_Front

## Herramientas que utiliza el proyecto 
- TypeScript como lenguaje de programación

- Librería axios para enviar peticiones HTTP

- Librería MUI (Material - UI) para el desarrollo de los componentes. Esta librería tienen componentes enlatados que simplifican aspectos de css y la organización de los elementos en al interfaz

- Librería Storybook. Esta herramienta permite visualizar y probar los distintos componentes que vamos desarrollando de manera individual sin necesidad de ejecutar la interfaz completa

- Todo esto corre sobre el framework Next.js

## Estructura de carpeta
- Los componentes se desarrollan en el directorio src/components

- Las historias para Storybook se desarrollan en el directorio src/stories

- Pueden copiar el código de los archivos de la carpeta templates

- Al momento de ejecutar la aplicaciones se ejecutan los componentes de la carpeta pages, por tanto los componentes desarrollados deben ser llamados desde index.ts de pages

- Las peticiones HTTP se colocan en la carpeta pages/api. Las peticiones HTTP no se pueden probar con Storybook

## Instalación
npm i

## Correr aplicación
npm run build

npm run start

Se ejecuta en el navegador con la URL http://localhost:3000

## Correr Storybook
npm run storybook

Se ejecuta en el navegador con la URL http://localhost:6006/



