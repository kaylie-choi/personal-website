// wrap use input event and compare against konami code
import { useEffect, useState } from "react";
import { useInputEvent } from "./useInputEvent";


const konamiCode = [
	"ArrowUp",
	"ArrowUp",
	"ArrowDown",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowLeft",
	"ArrowRight",
	"KeyB",
	"KeyA",
];


export const useKonamiCode = () => {
    const [count, setCount] = useState(0);
    const [success, setSuccess] = useState(false);
    const key = useInputEvent();
    
    // var modal = document.getElementById("secretModal");
    // var img = document.getElementById("secretImg");
    // var modalImg = document.getElementById("modalImg");
    // var secretMsg = document.getElementById("secretMsg");
    // var span = document.getElementById("modalClose");

    useEffect(() => {
        if (key == null) return;

        const success = false;
        // console.log(`useKonamiCode.key = ${key}`)
        // console.log(`useKonamiCode.count = ${count}`)
        
        if (key !== konamiCode[count]) {
            setCount(0);
            return
        }

        setCount((state) => state + 1);
        
        if (count + 1 === konamiCode.length) {
            setSuccess(true);
            
            console.log('congrats!! you\'ve unlocked the surprise');
            // alert('bow chika bow wow');
        }

    }, [key]);

	return success;
};