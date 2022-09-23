import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './TenArtists.css';
import spotlogo from './assets/image/spotlogo.png';

export default function TenArtists({artistToGenres}) {


    const artist = artistToGenres.map((art) => {
        return art.artistName;
    })

    const href = artistToGenres.map((art) => {
        return art.artistHref;
    })

    const genreArt = artistToGenres.map((art) => {
        return art.genresArr.join(', ');

    })

    const follow = artistToGenres.map((art) => {
        return art.artistFollowers;
    })

    return (

        <div>
            <img src={spotlogo} style={{width: '250px', display: 'block', marginRight: 'auto', marginLeft: 'auto'}}/>
            <div className="list-box">
                <ListGroup as="ol" numbered>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        action variant="dark"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold"><a href={href[0]}>{artist[0]}</a></div>
                            {genreArt[0]}
                        </div>

                        <Badge bg="primary" pill>
                            {follow[0]}
                        </Badge>

                    </ListGroup.Item>

                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        action variant="dark"

                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold"><a href={href[1]}>{artist[1]}</a></div>
                            {genreArt[1]}
                        </div>

                        <Badge bg="primary" pill>
                            {follow[1]}
                        </Badge>

                    </ListGroup.Item>

                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        action variant="dark"

                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold"><a href={href[2]}>{artist[2]}</a></div>
                            {genreArt[2]}
                        </div>

                        <Badge bg="primary" pill>
                            {follow[2]}
                        </Badge>

                    </ListGroup.Item>

                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        action variant="dark"

                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold"><a href={href[3]}>{artist[3]}</a></div>
                            {genreArt[3]}
                        </div>

                        <Badge bg="primary" pill>
                            {follow[3]}
                        </Badge>

                    </ListGroup.Item>

                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        action variant="dark"

                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold"><a href={href[4]}>{artist[4]}</a></div>
                            {genreArt[4]}
                        </div>

                        <Badge bg="primary" pill>
                            {follow[4]}
                        </Badge>

                    </ListGroup.Item>

                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        action variant="dark"

                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold"><a href={href[5]}>{artist[5]}</a></div>
                            {genreArt[5]}
                        </div>

                        <Badge bg="primary" pill>
                            {follow[5]}
                        </Badge>

                    </ListGroup.Item>

                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        action variant="dark"

                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold"><a href={href[6]}>{artist[6]}</a></div>
                            {genreArt[6]}
                        </div>

                        <Badge bg="primary" pill>
                            {follow[6]}
                        </Badge>


                    </ListGroup.Item>

                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        action variant="dark"

                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold"><a href={href[7]}>{artist[7]}</a></div>
                            {genreArt[7]}
                        </div>

                        <Badge bg="primary" pill>
                            {follow[7]}
                        </Badge>

                    </ListGroup.Item>

                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        action variant="dark"

                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold"><a href={href[8]}>{artist[8]}</a></div>
                            {genreArt[8]}
                        </div>

                        <Badge bg="primary" pill>
                            {follow[8]}
                        </Badge>

                    </ListGroup.Item>

                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        action variant="dark"

                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold"><a href={href[9]}>{artist[9]}</a></div>
                            {genreArt[9]}
                        </div>

                        <Badge bg="primary" pill>
                            {follow[9]}
                        </Badge>

                    </ListGroup.Item>


                </ListGroup>


            </div>
            <img src={spotlogo} style={{width: '250px', display: 'block', marginRight: 'auto', marginLeft: 'auto'}}/>

        </div>


    );
}



