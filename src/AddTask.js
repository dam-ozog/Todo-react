import React from "react";


class AddTask extends React.Component {
	minDate = new Date().toISOString().slice(0, 10);
	state = {
		text: "",
		important: false,
		date: this.minDate,
	};

	handleInput = e => {
		this.setState({
			text: e.target.value,
		});
	};

	handleCheckbox = e => {
		this.setState({
			important: e.target.checked,
		});
	};

	handleDate = e => {
		this.setState({
			date: e.target.value,
		});
	};

	handleClick = () => {
		const { text, important, date } = this.state;
		if (text.length > 2) {
			const add = this.props.add(text, important, date);
			this.setState({
				text: "",
				important: false,
				date: this.minDate,
			});
		} else {
			alert('Za krótka nazwa ;)')
		}
	};

	render() {
		const {text, important, date} = this.state;

		let maxDate = new Date().toISOString().slice(0, 4) * 1 + 2;
		maxDate = maxDate + "-12-31";

		const prioryty = {
			color: 'red',
			textTransform: 'uppercase',
			fontSize: '16px'
		}

		return (
			<div className='add-section'>

			<div className="input-add">

				<input
					type='text'
					value={text}
					onChange={this.handleInput}
					required='required'
					/>
				<span>wpisz zadanie</span>
			</div>

				<br />
			<div className="priority-input">

				<input
					id="prioryty"
					type='checkbox'
					onChange={this.handleCheckbox}
					checked={important}
					/>

				<label 
				htmlFor='prioryty' 
				style={important ? prioryty : null}
				>
				Priorytet
				</label>

			</div>

				<br />

				<label htmlFor='date'>Do kiedy zrobić </label>
				<input
					id="date"
					type='date'
					value={date}
					onChange={this.handleDate}
					min={this.minDate}
					max={maxDate}
				/>
				<br />
				<button onClick={this.handleClick}>Dodaj</button>
			</div>
		);
	}
}

export default AddTask;
