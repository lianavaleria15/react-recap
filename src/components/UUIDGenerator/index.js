import "./UUIDGenerator.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export const UUIDGenerator = () => {
  //use use state HOOK
  const [uuid, setUUID] = useState();

  const [copied, setCopied] = useState(false);

  const generateUUID = () => {
    //generate random UUID
    const randomUUID = uuidv4();

    //console.log random UUID
    setUUID(randomUUID);

    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(uuid);
    setCopied(true);
  };

  return (
    <section className="uuid-container">
      <div className="uuid-item">
        <button onClick={generateUUID} className="btn">
          Generate UUID
        </button>
      </div>
      <div className="uuid-item uuid-text-block">
        <h3 className="uuid-text">
          {uuid || "Generated UUID will be displayed here"}
        </h3>
      </div>

      {uuid && (
        <div className="uuid-item">
          <button
            onClick={copyToClipboard}
            className={copied ? "btn btn-copied" : "btn btn-clipboard"}
          >
            {copied ? "Copied" : "Copy to clipboard"}
          </button>
        </div>
      )}
    </section>
  );
};
