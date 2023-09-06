## Como crear componentes
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

Los componentes se colocan en la carpeta src/components
Los archivos se crean con la extensión .tsx (React + TypeScript)

## Como escribir Stories con Storybook
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

Las stories se escriben en la carpeta src/stories
Los archivos se crean con la extensión .stories.tsx (Storybook + React + TypeScript)

## Como utilizar estilos 

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


