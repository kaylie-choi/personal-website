// use input event hook to track basic keydown movements
// via https://github.com/joelnet/konami-code-react-component
import { useEffect, useState } from "react"

export const useInputEvent = () => {
	const [key, setKey] = useState(null);

	useEffect(() => {
		const keyDownHandler = (event) => {
            setKey(event.code)
            // console.log('keydownhandler', event.code);
        };
		const keyUpHandler = () => setKey(null);

		global.addEventListener("keydown", keyDownHandler);
		global.addEventListener("keyup", keyUpHandler);

		return () => {
			global.removeEventListener("keydown", keyDownHandler);
			global.removeEventListener("keyup", keyUpHandler);
		};
	}, []);

	return key;
};