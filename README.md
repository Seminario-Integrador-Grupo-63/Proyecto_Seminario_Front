# Tecnologías
- TypeScript como lenguaje de programación

- Librería axios para enviar peticiones HTTP

- Librería MUI (Material - UI) para el desarrollo de los componentes. Esta librería tienen componentes enlatados que simplifican aspectos de css y la organización de los elementos en al interfaz

- Librería Storybook. Esta herramienta permite visualizar y probar los distintos componentes que vamos desarrollando de manera individual sin necesidad de ejecutar la interfaz completa

- Todo esto corre sobre el framework Next.js

# Estructura del repositorio
Está estructurado como un monorepo o repositorio monolítico

Hay tres carpetas

### qresto-components
En este paquete se van a colocar todos los componentes que se van a utilizar en qresto-customer y qresto-restaurant. De esta manera podemos reutilizar componentes comunes a ambos si los hubiese como por ejemplo theme, CustomTextField, etc.

Para importar los componentes desde qresto-components se utiliza:
- `@/Customer/...` para los componentes usados en qresto-customer
- `@/Restaurant/...` para los componentes usados en qresto-restaurant
- `@/Common/...` para los componentes que se pueden reutilizar en ambas aplicaciones
- `@/Stories/...` para componentes que se usan únicamente en las stories

Esta forma de importar se puede usar en los tres paquetes

### qresto-customer y qresto-restaurant
En estos paquetes solo se van a trabajar en las carpetas src/pages para armar lo que va a ver el usuario final y las peticiones http.
La idea es no tener que desarrollar componentes ni stories en estas carpetas

# Ejecutar aplicaciones
- Se va a usar yarn que es una herramienta parecida a npm. Si no la tienen instalada en la computadora ejecutar `npm install --global yarn`
- Abrir la carpeta raíz o root "Proyecto_Seminario_Front" con VSCode o el editor de texto que se use
- Se actualizó la versión de Next.js por lo tanto va a ser necesario actualizar los paquetes instalados. Para esto ejecutar `yarn` o `yarn install` (El mismo comando se usa para instalar el proyecto entero)
- Una vez que se actualizó todo, en el apartado "scripts" del archivo package.json de la carpeta root están los comandos de ejecución.

### Comandos de ejecución
- `yarn components:storybook` ejecuta las stories
- `yarn customer:build` compila las páginas de la carpeta qresto-customer/src/pages
- `yarn customer:start` ejecuta la aplicación qresto-customer (la aplicación mobile)
- `yarn restaurant:build` compila las páginas de la carpeta qresto-restaurant/src/pages
- `yarn restaurant:start` ejecuta la aplicación qresto-restaurant (la aplicación del lado del restaurant)

- Siempre que hagamos cambios es necesario ejecutar el build antes del start sino no se van a compilar los últimos cambios
- Durante el desarrollo de los componentes siempre vamos a estar trabajando con las stories
- Las pages se trabajan cuando se hace la integración de los componentes ya desarrollados y las peticiones http.

# Como crear componentes
### Componente básico de React
```
import styles from './Component1.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

export const Component1 = (props: any) => {
    // En esta parte van las funciones

    return (<>
      {/**Acá va todo lo que es HTML y Componentes de Material UI */}
    </>);
}

Component1.defaultProps =
{
  // Acá van los valores por default de los atributos en caso de que no se pasen desde el pader
}

Component1.propTypes = 
{
  // Acá se definen los atributos o propiedades que que se le pasan al componente desde el padre
}

```

### Ejemplo básico usando un botón de Material UI
```
import styles from './Component1.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material' // Importar el componente de Material UI

export const Component1 = (props: any) => {

    const onClickEvent = () => {
        // Esta es la función que definimos cuando se hace click en el botón
        // Acá va toda la lógica que queremos que ese click haga

        // Podemos llamar a la función pasada desde el padre
        props.clickEvent()
    }

    return (<>
      {/**Definimos el botón y le pasamos la función que definimos en el mismo componente */}
      <Button onClick={onClickEvent}>{props.buttonText}</Button>

      {/**Si queremos podemos pasarle directamente la función pasada desde el padre*/}
      <Button onClick={props.clickEvent}>{props.buttonText}</Button>
    </>);
}

Component1.defaultProps =
{
  buttonText: 'Texto del botón',
  clickEvent: function(){} // Esta función por defecto no hace nada
}

Component1.propTypes = 
{
    buttonText: PropTypes.string, // En esta parte se define el tipo de la propiedad haciendo uso de PropTypes
    clickEvent: PropTypes.func // Este es el caso de cuando se pasa la función para el click desde el padre
}

// Algunos tipos de PropTypes
PropTypes.string
PropTypes.number
PropTypes.bool
PropTypes.object // Para objectos JSON
PropTypes.array
PropTypes.func // Funciones
// Hay más ...
```

Desde el padre se llama de la siguiente manera
```
import styles from './Parent.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {Component1} from '../Component1' // Import del hijo

export const Parent = (props: any) => {
    // En esta parte van las funciones
    const clickEventInParent = () => {
        
    }

    return (<>
      {/** Acá colocamos el componente hijo y le pasamos la función del click a través de la propiedad que le definimos (clickEvent) */}
      <Component1 clickEvent={clickEventInParent}/>
    </>);
}

Parent.defaultProps =
{
   
}

Parent.propTypes = 
{
  
}
```

Los componentes se colocan en la carpeta qresto-components/components/...
Los archivos se crean con la extensión .tsx (React + TypeScript)

# Como escribir Stories con Storybook
### Story básica
```
import { Meta, StoryObj } from "@storybook/react";
import { Component } from "../../components/Common/Component/Component"; // Importamos nuestro componente

export default {
    title: "components/Component", // Acá podemos separar por carpetas
    component: Component ,
    argTypes: {}

} as Meta<typeof Component >;

type Story = StoryObj<typeof Component>;

export const Common: Story = { // "Common" es el nombre de la story, le podemos colocar el que queramos
    render: () =>{
        // Acá colocamos funciones por si queremos probar algo
        const setData = () => { // Está es una función de ejemplo, podemos colocar cualquier otra cosa
            
        }

        return(<>
            {/** Acá colocamos el componente*/}
            <Component/>
        </>);
    } 
};
```

Cuando digo separar por carpetas, me refiero a esto
Por ejemplo en este caso sería `Library/Histogram`

![image](https://github.com/Seminario-Integrador-Grupo-63/Proyecto_Seminario_Front/assets/63880187/4b415cdb-3313-48e5-8c0d-bf21cd2dcdb4)



### Story múltiple
Si queremos probar diferentes aspectos de un mismo componente podemos agregar mas componentes Story
```
import { Meta, StoryObj } from "@storybook/react";
import { Component } from "../../components/Common/Component/Component";

export default {
    title: "components/Component",
    component: Component ,
    argTypes: {}

} as Meta<typeof Component >;

type Story = StoryObj<typeof Component>;

export const Aspecto1: Story = { // Cambiamos el nombre a "Aspecto1"
    render: () =>{

        return(<>
            <Component/>
        </>);
    } 
};

export const Aspecto2: Story = { // Cambiamos el nombre a "Aspecto2"
    render: () =>{

        return(<>
            <Component/>
        </>);
    } 
};

```

Las stories se escriben en la carpeta qresto-components/src/stories
Los archivos se crean con la extensión .stories.tsx (Storybook + React + TypeScript)

# Como utilizar estilos 

### CSS en Material UI
Si hacemos uso de la librería Material UI casi todo el código css que necesitamos se puede poner en la propiedad de los componentes sx={{}}

Ejemplo

```
<Toolbar 
    sx={{
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }}>
</Toolbar>
```

Los colores globales van a estar definidos en el archivo theme.ts y se puede usar así

```
import {theme} from '../theme'


<Toolbar 
    sx={{
        backgroundColor: theme.palette.primary.contrastText // Acá
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }}>
</Toolbar>
```

### Usando el HTML y CSS de siempre
En este caso usamos los archivos .module.scss

Component.tsx
```
import styles from './Component.module.scss'; // Estos archivos usamos
import React from 'react';
import PropTypes from 'prop-types';

export const Component = (props: any) => {
    return (<>
        {/** Las clases css que definimos en .module.scss se llaman desde styles */}
        <div className={styles.myClass}></div>
    </>);
}

Component.defaultProps =
{

}

Component.propTypes = 
{

}

```

Component.module.scss
```
.myClass {
  color: black;
  display: flex;
}
```

En los archivos .module.scss se puede usar tanto código css como scss, el que más te parezca

# Manejo de ramas del proyecto

- La rama `master` representa el sistema deployado, no hacer cambios en ella

- La rama `develop` tiene todos los cambios ya terminados pero que no estan deployados

- Para iniciar el desarrollo de una nueva funcion crear una rama desde `develop`

- Para seguimiento el nombre de la rama debe ser `SI-XX-(una breve descripcion de la tarea)`

- SI-XX es la Key que se encuentra en cada card de trelo

- Antes de empezar a desarrollar correr todos los tests y notificar si alguno fallo
