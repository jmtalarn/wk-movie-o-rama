import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MovieLink from '../../MovieLink';
import ProfileLink from '../../ProfileLink';

import './Inbox.css';


class Inbox extends React.Component {
	componentWillMount() {
		this.props.getInbox();
	}

	renderInbox() {
		const { inbox: { data: messages } } = this.props;
		console.log(this.props);

		return (
			<div className="messages">
				<table>
					<thead>
						<tr>
							<th>From</th>
							<th>Movie</th>
							<th>Message</th>
						</tr>
					</thead>
					<tbody>
						{
							messages.map((item, idx) => (
								<tr key={idx} >
									<td>
										<ProfileLink className="from" profile={item.from} />
									</td>
									<td>
										<MovieLink className="movie" movie={item.movie} />
									</td>
									<td className="message">
										<blockquote>
											<FontAwesomeIcon className="" icon="quote-left" />
											{item.message}
											<FontAwesomeIcon className="" icon="quote-right" />
										</blockquote>
									</td>
								</tr>
							)
							)
						}
					</tbody>
				</table>
			</div>
		);
	}

	render() {

		return (
			<div className="inbox-view">
				<h2>Inbox</h2>
				{this.renderInbox()}
			</div>

		);
	}
}

export default Inbox;
