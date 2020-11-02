import { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
	// constructor(props) {
	// 	super();
	// 	this.state = {
	// 		path: props.location
	// 	}
	// };

	componentDidMount() {
		console.log('mounted');
		this.props.changePath(this.props.location.pathname);
		// console.log(this.props.location);
	};

	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			console.log('update');
			// console.log(this.props.location);
			this.props.changePath(this.props.location.pathname);
      window.scrollTo(0, 0);
		}
	};

	render() {
		return this.props.children
	}
}

export default withRouter(ScrollToTop)