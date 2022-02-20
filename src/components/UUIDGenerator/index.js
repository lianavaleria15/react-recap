import "./UUIDGenerator.css";

export const UUIDGenerator = () => {
  const generateUUID = () => {
    console.log("click");
  };

  return (
    <section className="uuid-container">
      <div className="uuid-item">
        <button onClick={generateUUID} className="btn">
          Generate UUID
        </button>
      </div>
      <div className="uuid-item uuid-text-block">
        <h3 className="uuid-text">Generated UUID will be displayed here</h3>
      </div>
    </section>
  );
};
