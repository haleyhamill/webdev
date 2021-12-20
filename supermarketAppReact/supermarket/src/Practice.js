function Stopwatch() {
    const [counter, setCounter] = useState(0);
    const [running, setRunning] = useState(false);

    if (running) {
    useEffect(() => {
        let timerId = setTimeout(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);
        return () => {
            clearTimeout(timerId)
        }
    })};

    function handleButtonClick() {
        setRunning(prevValue => !prevValue)
    }

    return <>
        <h2>{counter}</h2>
        <button onClick={handleButtonClick}>Start / Pause</button>
    </>
}