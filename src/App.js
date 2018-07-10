import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
	state = {
		/**
		 * TODO: Instead of using this state variable to keep track of which page
		 * we're on, use the URL in the browser's address bar. This will ensure that
		 * users can use the browser's back and forward buttons to navigate between
		 * pages, as well as provide a good URL they can bookmark and share.
		 */
		books: [],
		showSearchPage: true
	}

	componentDidMount() {
		BooksAPI.getAll()
			.then((books) => {
				console.dir((books[0]));
				this.setState({
					books
				});
			});
		//BooksAPI.getAll().then((books) => console.log(typeof books));
	}

	render() {
		return (
			<div className="app">
				{this.state.showSearchPage ? (
					<SearchBooks />
				) : (
					<ListBooks books={this.state.books}/>
				)}
			</div>
		)
	}
}

export default BooksApp
