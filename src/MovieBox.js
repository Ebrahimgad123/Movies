import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import './MovieBox.css'
const ApiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=7c3f35114eaffed73b69a20883250db6';
const ApiImg = 'https://image.tmdb.org/t/p/w500/';
const urlSearch = 'https://api.themoviedb.org/3/search/movie?api_key=7c3f35114eaffed73b69a20883250db6';

const MovieBox = ({ searchInput }) => {
  const [movies, setMovies] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const handelShow = (movie) => {
    setSelectedMovie(movie);
    setOpenModal(true);
  };

  const handelClose = () => setOpenModal(false);

  useEffect(() => {
    const apiUrl = searchInput ? `${urlSearch}&query=${searchInput}` : ApiUrl;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }, [searchInput]);

  return (
    <Container>
      <h1 className='text-primary'>Popular</h1>
      <Row lg={4}>
        {movies.map((movie) => (
          <Col key={movie.id} lg={3} sm={12} className="mb-4">
            <Card className="card h-100">
              <Card.Img style={{ height: '300px' }} variant="top" src={ApiImg + movie.poster_path} alt="" />
              <Card.Body>
                <Button onClick={() => handelShow(movie)}>View More</Button>
                
                <Modal show={openModal} onHide={handelClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Movie Information</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <img style={{ height: '300px', width: '100%' }} variant="top" src={ApiImg + selectedMovie.poster_path} alt="" />
                    <h3>{selectedMovie.title}</h3>
                    <h4>IMDB: {selectedMovie.vote_average}</h4>
                    <h5>Release Date: {selectedMovie.release_date}</h5>
                    <br />
                    <h6>Overview</h6>
                    <p>{selectedMovie.overview}</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" type="submit" onClick={handelClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieBox;