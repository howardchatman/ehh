export default function WaveDivider({
  fill = "white",
  flipped = false,
  height = 70,
}: {
  fill?: string;
  flipped?: boolean;
  height?: number;
}) {
  return (
    <div
      style={{
        lineHeight: 0,
        overflow: "hidden",
        transform: flipped ? "scaleY(-1)" : undefined,
        marginBottom: "-1px",
      }}
    >
      <svg
        viewBox={`0 0 1440 ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: `${height}px` }}
        preserveAspectRatio="none"
      >
        <path
          d={`M0,${height * 0.5} C320,${height} 560,0 900,${height * 0.4} C1140,${height * 0.7} 1300,${height * 0.1} 1440,${height * 0.5} L1440,${height} L0,${height} Z`}
          fill={fill}
        />
      </svg>
    </div>
  );
}
