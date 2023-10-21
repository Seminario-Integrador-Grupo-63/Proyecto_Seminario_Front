import { useScreenWidth } from "@/Common/utils"
import {useEffect, useState} from 'react'

export function useNumCharacters(){
    const screenWidth = useScreenWidth();
    const [numCharacters, setNumCharacters] = useState(calculateNumCharacters(screenWidth));
  
    useEffect(() => {
      // Update numCharacters whenever screenWidth changes
      setNumCharacters(calculateNumCharacters(screenWidth));
    }, [screenWidth]);
  
    // Define your calculation logic here
    function calculateNumCharacters(screenWidth) {
        if(screenWidth < 500){
            return Math.floor(screenWidth * 0.08);
        } else if (screenWidth >= 500) {
            return Math.floor(screenWidth * 0.045);
        } else if (screenWidth >= 1200) {
            return Math.floor(screenWidth * 0.04);
        }
      return Math.floor(screenWidth * 0.045);
    }
  
    return numCharacters;
}