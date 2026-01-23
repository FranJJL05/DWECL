import { useEffect } from "react";
import { useState } from "react";



const useGet = (url) => {
    const [data, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);
    useEffect(() => {
        console.log("Custom useEffect");
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if(!Array.isArray(data)) {
                    data = [data];
                }
                setDatos([...data]);
                setCargando(false);
            });
    }, []);
    return { data, cargando };  
}

export default useGet;