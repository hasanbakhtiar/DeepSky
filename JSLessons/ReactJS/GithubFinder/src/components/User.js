import React, { Component } from 'react'

class User extends Component {
    render() {
        const {login,avatar_url,html_url,blog} = this.props.user;
        return (
            <div className="card">
                <img src={avatar_url} alt={login} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{login}</h5>
                    <p className="card-text">{blog}</p>
                    <a href={html_url} className="btn btn-primary">Go Profile</a>
                </div>
            </div>
        )
    }
}

export default User
