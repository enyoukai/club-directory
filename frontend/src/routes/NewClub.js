import useApi from '../hooks/useApi';

import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { useAuth } from '../contexts/AuthContext'

import './NewClub.scss';

export default function NewClub() {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [location, setLocation] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [advisor, setAdvisor] = useState('');

	const {token} = useAuth();

	const createClub = useApi('/clubs', 'post', token);

	const navigate = useNavigate();

	async function submitClub() {
		const body = {name: name, description: description, location: location, date: date, time: time, advisor: advisor};
		createClub.dispatch({body: body});

	}

	useEffect(() => {
		if (!createClub.loading)
		{
			navigate('/');
		}
	}, [createClub.loading])

	return (
		<div className="newClub">
			<div className="newClub__text newClub__text--large">Requesting Club</div>
			<div className="newClub__form">
				<div className="newClub__text">Name</div>
				<input value={name} className="newClub__input" onChange={e => setName(e.target.value)}></input>
				<div className="newClub__text">Description</div>
				<textarea value={description} className="newClub__input" onChange={e => setDescription(e.target.value)}></textarea>
				<div className="newClub__text">Location</div>
				<input value={location} className="newClub__input" onChange={e => setLocation(e.target.value)}></input>
				<div className="newClub__text">Day</div>
				<input value={date} className="newClub__input" onChange={e => setDate(e.target.value)}></input>
				<div className="newClub__text">Time</div>
				<input value={time} className="newClub__input" onChange={e => setTime(e.target.value)}></input>
				<div className="newClub__text">Advisor</div>
				<input value={advisor} className="newClub__input" onChange={e => setAdvisor(e.target.value)}></input>
			</div>
			<button className="newClub__btn" onClick={submitClub}>Add Club</button>
		</div>
	)

}