class User extends React.Component {
  render() {
    return (
      <a href={this.props.user.html_url} target="_blank" className='user'>
        <img src={this.props.user.avatar_url}/>
        <p>{this.props.user.login}</p>
      </a>
    );
  }
}