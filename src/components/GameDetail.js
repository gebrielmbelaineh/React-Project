import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const GameDetail = () => {
  const { screenshot, game } = useSelector((state) => state.detail);

  const history = useHistory();

  const exitHandler = (event) => {
    const element = event.target;
    if (element.classList.contains('card-shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };

  return (
    <>

      <div className="card-shadow" onClick={exitHandler} role="button" tabIndex="0">
        <div className="detail">
          <div className="stats">
            <div className="rating">
              <h3>{game.name}</h3>
              <p>Rating: {game.rating}</p>
            </div>
          </div>
          <div className="media">
            <img src={game.background_image} alt="img" />
          </div>
          <div className="description">
            <p>{game.description_raw}</p>
          </div>
          <div className="gallery">
            {screenshot.results.map((data) => {
              return (<img src={data.image} key={data.id} alt="screeenshots" />);
            })}
          </div>
        </div>
      </div>

    </>
  );
};

export default GameDetail;
