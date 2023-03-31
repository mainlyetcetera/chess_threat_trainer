import { CSSProperties, forwardRef, ReactNode, Ref } from "react";

type Square =
  | "a8"
  | "b8"
  | "c8"
  | "d8"
  | "e8"
  | "f8"
  | "g8"
  | "h8"
  | "a7"
  | "b7"
  | "c7"
  | "d7"
  | "e7"
  | "f7"
  | "g7"
  | "h7"
  | "a6"
  | "b6"
  | "c6"
  | "d6"
  | "e6"
  | "f6"
  | "g6"
  | "h6"
  | "a5"
  | "b5"
  | "c5"
  | "d5"
  | "e5"
  | "f5"
  | "g5"
  | "h5"
  | "a4"
  | "b4"
  | "c4"
  | "d4"
  | "e4"
  | "f4"
  | "g4"
  | "h4"
  | "a3"
  | "b3"
  | "c3"
  | "d3"
  | "e3"
  | "f3"
  | "g3"
  | "h3"
  | "a2"
  | "b2"
  | "c2"
  | "d2"
  | "e2"
  | "f2"
  | "g2"
  | "h2"
  | "a1"
  | "b1"
  | "c1"
  | "d1"
  | "e1"
  | "f1"
  | "g1"
  | "h1";

type CustomSquareProps = {
  children: ReactNode;
  ref: Ref<any>;
  square: Square;
  squareColor: "white" | "black";
  style: CSSProperties;
};

const CustomSquareRenderer = forwardRef<HTMLDivElement, CustomSquareProps>((props, ref) => {
  const { children, square, squareColor, style } = props;

  const playerTestId = `pl_threat_${square}`;
  const oppTestId = `opp_threat_${square}`;

  return (
    <div ref={ref} style={{ ...style, position: "relative" }}>
      {children}
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 16,
          width: 16,
          borderTopLeftRadius: 6,
          backgroundColor: squareColor === "black" ? "#064e3b" : "#312e81",
          color: "#fff",
          fontSize: 14,
        }}
      >
        <div
	      data-testid={`${oppTestId}`}
	>
	    0
	</div>
        <div
	      data-testid={`${playerTestId}`}
	>
	      {playerTestId === 'pl_threat_c3' ? '3' : '0'}
	</div>
      </div>
    </div>
  );
});

export { CustomSquareRenderer };
