function HighlightCard({ children, color }) {
  return (
    <div
      style={{
        border: `3px solid ${color}`,
        padding: "15px",
        margin: "15px auto",
        width: "250px",
        borderRadius: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default HighlightCard;