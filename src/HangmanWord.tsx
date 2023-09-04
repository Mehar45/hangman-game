type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal: boolean
}

export default function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal
}: HangmanWordProps) {
  return (
    <div style={{
      display: "flex",
      gap: ".25em",
      fontFamily: "monospace",
      fontSize: "6rem",
      fontWeight: "bold",
      textTransform: "uppercase"
    }}>
      {wordToGuess.split("").map((letter, i) =>
        <span key={i} style={{ borderBottom: ".1em solid black" }}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black"
            }}
          >
            {letter}
          </span>
        </span>
      )}
    </div>
  )
}