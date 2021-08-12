import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);

    this.setState({ spans });
  };
  render() {
    const { _id, name, imageLink } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} key={_id} alt={name} src={imageLink} />
        <p
          style={{
            fontSize: "15px",
            marginTop: "5px",
            marginBottom: "10px",
          }}
        >
          <strong>{name}</strong>
        </p>
      </div>
    );
  }
}

export default ImageCard;
