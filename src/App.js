import { useEffect, useState } from "react";

function App() {
  const [type, setType] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json), setLoading(false));
  }, [type]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>hellow:{type}</h1>
          <button onClick={() => setType("users")}>users</button>
          <button onClick={() => setType("todos")}>Todos</button>
          <button onClick={() => setType("posts")}>posts</button>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
export default App;
