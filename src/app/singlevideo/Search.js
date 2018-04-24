import React, { Component, Fragment } from "react";


class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

handleChange = (event) => {
    console.log(event.target.value);
    
    this.setState({
        value:event.target.value
    })
    this.props.props(event.target.value)
}

clearHistory = () => {
localStorage.clear()
window.location.reload()
}

    render() {
        return (
            <Fragment>
                <nav>
                    <div className="nav-wrapper">
                        <form>
                            <div className="input-field">
                                <input
                                    id="search"
                                    type="search"
                                    required
                                    onChange={this.handleChange}
                                    value={this.state.value}
                                />
                                <label className="label-icon" htmlFor="search">
                                    <i className="material-icons">search</i>
                                </label>
                                <i className="material-icons">close</i>
                            </div>
                        </form>
                        <a className="waves-effect waves-light btn" onClick = {this.clearHistory}>clear history</a>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default Search