import React, { useState } from "react";
import axios from "axios";

function App() {
  const [domain, setDomain] = useState("");
  const [whois, setWhois] = useState("");

  const fetchWhois = async () => {
    const res = await axios.get(`https://backenddomain/whois?domain=${domain}`);
    setWhois(res.data.whois);
  };

  return (
    <div>
      <input value={domain} onChange={(e) => setDomain(e.target.value)} />
      <button onClick={fetchWhois}>Whois Lookup</button>
      <pre>{whois}</pre>
    </div>
  );
}

export default App;