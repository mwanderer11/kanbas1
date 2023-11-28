import React, {useEffect, useState} from "react";
import axios from "axios"
function EncodingParametersInURLs() {
    const [a, setA] = useState(34);
    const [b, setB] = useState(23);
    const [welcome, setWelcome] = useState("");
    const [result, setResult] = useState(0);
    const link = 'https://kanbas-node-server-app-d13q.onrender.com/';
    const fetchSum = async (a, b) => {
        const response = await
            axios.get(`${link}/a5/add/${a}/${b}`);
        setResult(response.data);
    };
    const fetchSubtraction = async (a, b) => {
        const response = await axios.get(
            `${link}/a5/subtract/${a}/${b}`);
        setResult(response.data);
    };
    const fetchWelcome = async () => {
        const response = await axios.get(`${link}/a5/welcome`);
        setWelcome(response.data);
    };
    useEffect(() => {
        fetchWelcome();
    }, []);
    return (
        <div>
            <h3>Encoding Parameters in URLs</h3>
            <h4>Integrating React with APIs</h4>
            <h5>Fetching Welcome</h5>
            <h6>{welcome}</h6>
            <h4>Calculator</h4>
            <input
                onChange={(e) => setA(e.target.value)}
                className="form-control" type="number" value={a}/>
            <input
                onChange={(e) => setB(e.target.value)}
                className="form-control" type="number" value={b}/>

            <h3>Path parameters</h3>
            <a
                href={`${link}/a5/add/${a}/${b}`}
                className="btn btn-primary"> Add {a} + {b} </a>
            <a
                href={`${link}/a5/subtract/${a}/${b}`}
                className="btn btn-danger"> Subtract {a} - {b} </a>

            <h3>Query Parameters</h3>
            <a href={`${link}/a5/calculator?operation=add&a=${a}&b=${b}`}
                className="btn btn-primary">
                Add {a} + {b}
            </a>
            <a href={`${link}/a5/calculator?operation=subtract&a=${a}&b=${b}`}
                className="btn btn-danger">
                Subtract {a} - {b}
            </a>
            <h3>Fetch Result</h3>
            <input value={result}
                   className="form-control mb-2" type="number" readOnly
            />
            <button onClick={() => fetchSum(a, b)} className="btn btn-primary btn-sm">
                Fetch sum of {a} + {b}
            </button>
            <button onClick={() => fetchSubtraction(a, b)} className="btn btn-danger btn-sm">
                Fetch Subtraction of {a} - {b}
            </button>
        </div>
    )
}
export default EncodingParametersInURLs;