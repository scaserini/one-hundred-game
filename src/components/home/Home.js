import React from 'react';
import Game from '../game/Game';
import Header from '../game/header/Header';
import Board from '../game/board/Board';
import SignIn from '../signIn/SignIn';
import useLocalStorage from '../../hooks/useLocalStorage';

const Home = () => {
  const { value: username, setValue: setUsername } = useLocalStorage('username', null);
  const { value: bestScore, setValue: setBestScore } = useLocalStorage('bestscore', null);

  function handleBestScore(score) {
    if (score > bestScore) {
      setBestScore(score);
    }
  }

  if (username) {
    return (
      <Game bestScore={bestScore}>
        <Header username={username} bestScore={bestScore} />
        <Board handleBestScore={handleBestScore} />
      </Game>
    );
  }
  return <SignIn setUsername={setUsername} />;
};

export default Home;
