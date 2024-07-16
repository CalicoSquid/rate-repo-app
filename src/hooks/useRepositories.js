import { useState, useEffect } from "react";
const useRepositories = () => {

    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const response = await fetch("http://192.168.1.109:5000/api/repositories");
        const json = await response.json();
        setRepositories(json);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { repositories, loading, refetch: fetchData};
};
export default useRepositories