import React, { useState } from 'react';
import { Button, Form, FormControl, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MovieBox from './MovieBox';
import MovieRequest from './MovieRequest';

const Navbar = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <NavbarBs expand="lg" variant="dark">
        <NavbarBs.Brand as={Link} to="/" className="text-danger">
          <h3>Movies</h3>
        </NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="navbarScroll" />
        <NavbarBs.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-3" style={{ maxHeight: '100px' }} navbarScroll />
          <Form className="d-flex">
            <FormControl
              type="search"
              className="me-2"
              placeholder="Search for a movie"
              value={searchInput}
              onChange={handleSearch}
              aria-label="search"
            />
            <Button variant="outline-light" type="submit" >
              Search
            </Button>
          </Form>
        </NavbarBs.Collapse>
      </NavbarBs>

      <MovieBox searchInput={searchInput} />
      <MovieRequest/>
     
    </div>
  );
};

export default Navbar;