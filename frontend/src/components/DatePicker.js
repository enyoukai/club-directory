import React, { useState, useEffect } from 'react';

export default function DatePicker(props) {
	const { dateHandler } = props;
	const [selectedDates, setSelectedDates] = useState(Array.apply(null, Array(7)).map(() => false));

	function toggleDate(date) {
		const newSelectedDates = Array.from(selectedDates);
		newSelectedDates[date] = !newSelectedDates[date];

		dateHandler(newSelectedDates);
	}

	return (
		<div className="grid grid-cols-7 text-center gap-4">
			{
				props.theme === 'light' ? <>
					<button type="button" onClick={toggleDate(0)} className={`border border-neutral-600 rounded-md ease-in-out duration-300 ${selectedDates[0] ? 'bg-neutral-800 text-neutral-100 ' : 'text-neutral-800'}`}>S</button>
					<button type="button" onClick={toggleDate(1)} className={`border border-neutral-600 rounded-md ease-in-out duration-300 ${selectedDates[1] ? 'bg-neutral-800 text-neutral-100 ' : 'text-neutral-800'}`}>M</button>
					<button type="button" onClick={toggleDate(2)} className={`border border-neutral-600 rounded-md ease-in-out duration-300 ${selectedDates[2] ? 'bg-neutral-800 text-neutral-100 ' : 'text-neutral-800'}`}>T</button>
					<button type="button" onClick={toggleDate(3)} className={`border border-neutral-600 rounded-md ease-in-out duration-300 ${selectedDates[3] ? 'bg-neutral-800 text-neutral-100 ' : 'text-neutral-800'}`}>W</button>
					<button type="button" onClick={toggleDate(4)} className={`border border-neutral-600 rounded-md ease-in-out duration-300 ${selectedDates[4] ? 'bg-neutral-800 text-neutral-100 ' : 'text-neutral-800'}`}>T</button>
					<button type="button" onClick={toggleDate(5)} className={`border border-neutral-600 rounded-md ease-in-out duration-300 ${selectedDates[5] ? 'bg-neutral-800 text-neutral-100 ' : 'text-neutral-800'}`}>F</button>
					<button type="button" onClick={toggleDate(6)} className={`border border-neutral-600 rounded-md ease-in-out duration-300 ${selectedDates[6] ? 'bg-neutral-800 text-neutral-100 ' : 'text-neutral-800'}`}>S</button>
				</> : 
				<>
					<button type="button" onClick={toggleDate(0)} className={`border rounded-md ease-in-out duration-300 ${selectedDates[0] ? 'bg-neutral-100 text-neutral-900 ' : 'bg-neutral-800 text-neutral-100'}`}>S</button>
					<button type="button" onClick={toggleDate(1)} className={`border rounded-md ease-in-out duration-300 ${selectedDates[1] ? 'bg-neutral-100 text-neutral-900 ' : 'bg-neutral-800 text-neutral-100'}`}>M</button>
					<button type="button" onClick={toggleDate(2)} className={`border rounded-md ease-in-out duration-300 ${selectedDates[2] ? 'bg-neutral-100 text-neutral-900 ' : 'bg-neutral-800 text-neutral-100'}`}>T</button>
					<button type="button" onClick={toggleDate(3)} className={`border rounded-md ease-in-out duration-300 ${selectedDates[3] ? 'bg-neutral-100 text-neutral-900 ' : 'bg-neutral-800 text-neutral-100'}`}>W</button>
					<button type="button" onClick={toggleDate(4)} className={`border rounded-md ease-in-out duration-300 ${selectedDates[4] ? 'bg-neutral-100 text-neutral-900 ' : 'bg-neutral-800 text-neutral-100'}`}>T</button>
					<button type="button" onClick={toggleDate(5)} className={`border rounded-md ease-in-out duration-300 ${selectedDates[5] ? 'bg-neutral-100 text-neutral-900 ' : 'bg-neutral-800 text-neutral-100'}`}>F</button>
					<button type="button" onClick={toggleDate(6)} className={`border rounded-md ease-in-out duration-300 ${selectedDates[6] ? 'bg-neutral-100 text-neutral-900 ' : 'bg-neutral-800 text-neutral-100'}`}>S</button>
				</>
			}
		</div>
	)
}