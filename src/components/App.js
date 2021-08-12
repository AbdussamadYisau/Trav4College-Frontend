import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [], loading: "false" };

  componentDidMount = async () => {
    const response = await axios.get(
      "https://trav4college-backend-assesment-abdussamadyisau.vercel.app/imageList"
    );

    this.setState({ images: response.data?.data, loading: "false" });
  };

  onSearchSubmit = async (term) => {
    this.setState({ loading: "true" });
    const response = await axios.get(
      "https://trav4college-backend-assesment-abdussamadyisau.vercel.app/imageList"
    );

    const imageArray = response.data?.data.filter((image) =>
      image.name.toLowerCase().includes(term.toLowerCase())
    );

    this.setState({ images: imageArray, loading: "false" });
  };
  render() {
    return (
      <>
        <div
          className="ui container"
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1 className="ui blue header">Explore colleges and universities</h1>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>

        <div className="ui container" style={{ marginTop: "10px" }}>
          <ImageList images={this.state.images} />
        </div>
      </>
    );
  }
}

export default App;
