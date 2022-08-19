import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './TenArtists.css';


export default function TenArtists({artistToGenres}) {



	const artist = artistToGenres.map((art) => {
		return art.artistName;
	})

	const genreArt = artistToGenres.map((art) =>{
		return art.genresArr.join(', ');

	})


	return (

		<div className="list-box">
		<ListGroup as="ol" numbered>
			<ListGroup.Item
				as="li"
				className="d-flex justify-content-between align-items-start"
				action variant="dark"
			>
				<div className="ms-2 me-auto">
					<div className="fw-bold">{artist[0]}</div>
					{genreArt[0]}
				</div>
			</ListGroup.Item>

			<ListGroup.Item
				as="li"
				className="d-flex justify-content-between align-items-start"
				action variant="dark"

			>
				<div className="ms-2 me-auto">
					<div className="fw-bold">{artist[1]}</div>
					{genreArt[1]}
				</div>

			</ListGroup.Item>

			<ListGroup.Item
				as="li"
				className="d-flex justify-content-between align-items-start"
				action variant="dark"

			>
				<div className="ms-2 me-auto">
					<div className="fw-bold">{artist[2]}</div>
					{genreArt[2]}
				</div>

			</ListGroup.Item>

			<ListGroup.Item
				as="li"
				className="d-flex justify-content-between align-items-start"
				action variant="dark"

			>
				<div className="ms-2 me-auto">
					<div className="fw-bold">{artist[3]}</div>
					{genreArt[3]}
				</div>

			</ListGroup.Item>

			<ListGroup.Item
				as="li"
				className="d-flex justify-content-between align-items-start"
				action variant="dark"

			>
				<div className="ms-2 me-auto">
					<div className="fw-bold">{artist[4]}</div>
					{genreArt[4]}
				</div>

			</ListGroup.Item>

			<ListGroup.Item
				as="li"
				className="d-flex justify-content-between align-items-start"
				action variant="dark"

			>
				<div className="ms-2 me-auto">
					<div className="fw-bold">{artist[5]}</div>
					{genreArt[5]}
				</div>

			</ListGroup.Item>

			<ListGroup.Item
				as="li"
				className="d-flex justify-content-between align-items-start"
				action variant="dark"

			>
				<div className="ms-2 me-auto">
					<div className="fw-bold">{artist[6]}</div>
					{genreArt[6]}
				</div>

			</ListGroup.Item>

			<ListGroup.Item
				as="li"
				className="d-flex justify-content-between align-items-start"
				action variant="dark"

			>
				<div className="ms-2 me-auto">
					<div className="fw-bold">{artist[7]}</div>
					{genreArt[7]}
				</div>

			</ListGroup.Item>

			<ListGroup.Item
				as="li"
				className="d-flex justify-content-between align-items-start"
				action variant="dark"

			>
				<div className="ms-2 me-auto">
					<div className="fw-bold">{artist[8]}</div>
					{genreArt[8]}
				</div>

			</ListGroup.Item>

			<ListGroup.Item
				as="li"
				className="d-flex justify-content-between align-items-start"
				action variant="dark"

			>
				<div className="ms-2 me-auto">
					<div className="fw-bold">{artist[9]}</div>
					{genreArt[9]}
				</div>

			</ListGroup.Item>





		</ListGroup>

		</div>

	);
}



