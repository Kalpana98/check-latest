import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepositories } from '../../store/slices/test';
import styles from './style.css';

export function AboutUs() {
	const dispatch = useDispatch();

	const { loading, error, repositories } = useSelector((state) => state.lessons);

	useEffect(() => {
		dispatch(fetchRepositories('kalpana98'));
	}, []);

	if (loading) {
		return <h1>Loading Repositories ...</h1>;
	}
	return <div> Total Repositories : {repositories.length}</div>;
}
