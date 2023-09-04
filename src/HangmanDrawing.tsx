const HEAD = (
  <div
    style={{
      position: "absolute",
      top: 50,
      right: -30,
      width: 50,
      height: 50,
      border: "10px solid black",
      borderRadius: "50%"
    }}
  />
);

const BODY = (
  <div
    style={{
      position: "absolute",
      top: 120,
      right: 0,
      width: 10,
      height: 100,
      background: "black"
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      position: "absolute",
      top: 150,
      right: -100,
      width: 100,
      height: 10,
      background: "black",
      rotate: "-30deg",
      transformOrigin: "left bottom"
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      position: "absolute",
      top: 150,
      right: 10,
      width: 100,
      height: 10,
      background: "black",
      rotate: "30deg",
      transformOrigin: "right bottom"
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      position: "absolute",
      top: 210,
      right: -90,
      width: 100,
      height: 10,
      background: "black",
      rotate: "60deg",
      transformOrigin: "left bottom"
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      position: "absolute",
      top: 210,
      right: 0,
      width: 100,
      height: 10,
      background: "black",
      rotate: "-60deg",
      transformOrigin: "right bottom"
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number
}

export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}

      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: 10,
        height: 50,
        backgroundColor: "black",
        marginLeft: 120
      }} />

      <div style={{
        width: 200,
        height: 10,
        backgroundColor: "black",
        marginLeft: 120
      }} />

      <div style={{
        width: 10,
        height: 400,
        backgroundColor: "black",
        marginLeft: 120
      }} />

      <div style={{ width: 250, height: 10, backgroundColor: "black" }} />
    </div>
  )
}