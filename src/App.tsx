import { useCallback, useEffect, useState } from 'react';
import words from "./wordList.json";
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';

const container: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
  maxWidth: 800,
  marginInline: "auto"
}

function App() {
  const [wordToGuess] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("")
    .every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return;

    setGuessedLetters([...guessedLetters, letter]);
  }, [guessedLetters, isLoser, isWinner]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    }

    document.addEventListener("keyup", handler);

    return () => {
      document.removeEventListener("keyup", handler);
    }
  }, [guessedLetters]);

  return (
    <div style={container}>
      <h1 style={{ textAlign: "center", margin: 0 }}>
        {isWinner && "You win!"}
        {isLoser && "You lose!"}
      </h1>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
        reveal={isLoser}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          correctLetters={guessedLetters.filter(letter =>
            wordToGuess.includes(letter)
          )}
          incorrectLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App
