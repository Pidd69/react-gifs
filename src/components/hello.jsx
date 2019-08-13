/*const Hello = (props) => {
  return <div>Hello, {props.name}</div>;
};*/

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true
    };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render () {
// Build and returm HTML
  return (
    <h1 className={this.state.clicked ? 'clicked' : null}
      onClick={this.handleClick}>
      Hello {this.props.name}
    </h1>
    )
  }
}
