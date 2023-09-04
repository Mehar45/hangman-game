import styles from "./keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  disabled: boolean
  correctLetters: string[]
  incorrectLetters: string[]
  addGuessedLetter: (letter: string) => void
}

export default function Keyboard({
  disabled,
  correctLetters,
  incorrectLetters,
  addGuessedLetter
}: KeyboardProps) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
      gap: ".5rem"
    }}>
      {KEYS.map(k => {
        const isActive = correctLetters.includes(k);
        const isInactive = incorrectLetters.includes(k);

        return (
          <button
            key={k}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`}
            disabled={isActive || isInactive || disabled}
            onClick={() => addGuessedLetter(k)}
          >
            {k}
          </button>
        )
      })}
    </div>
  )
}