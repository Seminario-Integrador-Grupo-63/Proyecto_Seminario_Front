import { useScreenWidth } from "@/Common/utils"
import {useEffect, useState} from 'react'

export function useNumCharacters(breakpoints){
    /**
    breakpoints = [
        {screenWidth: number, m: number}
    ]
    m es un multiplicador.
    La idea es multiplicar el ancho de la pantalla por un decimal
    que representa un porcentaje de ese ancho
    */

    const screenWidth = useScreenWidth();
    const [numCharacters, setNumCharacters] = useState(calculateNumCharacters(screenWidth));
  
    useEffect(() => {
      // Update numCharacters whenever screenWidth changes
      setNumCharacters(calculateNumCharacters(screenWidth));
    }, [screenWidth]);
  
    function calculateNumCharacters(screenWidth){
        let breakpoint = breakpoints.find(bp => screenWidth <= bp.screenWidth)
        let width = screenWidth
        if (breakpoint) {
            width = Math.floor(screenWidth * breakpoint.m);
        } 
        return width
    }
  
    return numCharacters;
}
