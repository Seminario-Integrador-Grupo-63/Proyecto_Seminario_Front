import { imageCategory1 } from "./DefaultImagesCategories/imageCategory1"
import { imageCategory2 } from "./DefaultImagesCategories/imageCategory2"
import { imageCategory3 } from "./DefaultImagesCategories/imageCategory3"
import { imageCategory4 } from "./DefaultImagesCategories/imageCategory4"
import { imageCategory5 } from "./DefaultImagesCategories/imageCategory5"

import { imageDish1 } from "./DefaultImagesDishes/imageDish1"
import { imageDish2 } from "./DefaultImagesDishes/imageDish2"
import { imageDish3 } from "./DefaultImagesDishes/imageDish3"
import { imageDish4 } from "./DefaultImagesDishes/imageDish4"
import { imageDish5 } from "./DefaultImagesDishes/imageDish5"
import { categories } from "./CategoriesData"
import { sideDishes } from "./SideDishesData"

export const dishes = [
    {
        id: 1,
        name: 'Milanesa Napolitana',
        description: 'Esta es una descripción re larga de la milanesa napolitana que explica todos los ingredientes que tiene',
        preparationTime: 30,
        category: 1,
        price: 3000,
        sideDishes: sideDishes,
        image: imageDish1
    },
    {
        id: 2,
        name: 'Milanesa rellena',
        description: 'Esta es una descripción re larga de la milanesa rellena que explica todos los ingredientes que tiene',
        preparationTime: 30,
        category: 1,
        price: 3300,
        sideDishes: sideDishes,
        image: imageDish2
    },
    {
        id: 3,
        name: 'Milanesa vegana',
        description: 'Esta es una descripción re larga de la milanesa vegana que explica todos los ingredientes que tiene',
        preparationTime: 30,
        category: 2,
        price: 2500,
        sideDishes: sideDishes,
        image: imageDish3
    },
    {
        id: 3,
        name: 'Milanesa vegana 2',
        description: 'Esta es una descripción re larga de la milanesa vegana que explica todos los ingredientes que tiene',
        preparationTime: 30,
        category: 2,
        price: 2500,
        sideDishes: [],
        image: imageDish3
    },
    {
        id: 4,
        name: 'Milanesa Napolitana',
        description: 'Esta es una descripción re larga de la milanesa napolitana que explica todos los ingredientes que tiene',
        preparationTime: 30,
        category: 1,
        price: 3000,
        sideDishes: sideDishes,
        image: imageDish1
    },
    {
        id: 5,
        name: 'Milanesa rellena',
        description: 'Esta es una descripción re larga de la milanesa rellena que explica todos los ingredientes que tiene',
        preparationTime: 30,
        category: 1,
        price: 3300,
        sideDishes: sideDishes,
        image: imageDish2
    },
    {
        id: 6,
        name: 'Milanesa vegana',
        description: 'Esta es una descripción re larga de la milanesa vegana que explica todos los ingredientes que tiene',
        preparationTime: 30,
        category: 2,
        price: 2500,
        sideDishes: sideDishes,
        image: imageDish3
    },
    {
        id: 7,
        name: 'Milanesa vegana 2',
        description: 'Esta es una descripción re larga de la milanesa vegana que explica todos los ingredientes que tiene',
        preparationTime: 30,
        category: 2,
        price: 2500,
        sideDishes: [],
        image: imageDish3
    }
]
