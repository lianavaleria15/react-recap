import "./UUIDGenerator.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export const UUIDGenerator = () => {
  //use use state HOOK
  const [uuid, setUUID] = useState("Generated UUID will be displayed here");

  const generateUUID = () => {
    //generate random UUID
    const randomUUID = uuidv4();

    //console.log random UUID
    setUUID(randomUUID);
  };

  return (
    <section className="uuid-container">
      <div className="uuid-item">
        <button onClick={generateUUID} className="btn">
          Generate UUID
        </button>
      </div>
      <div className="uuid-item uuid-text-block">
        <h3 className="uuid-text">{uuid}</h3>
      </div>
    </section>
  );
};
