import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [], loading: "false" };
  onSearchSubmit = async (term) => {
    this.setState({ loading: "true" });
    console.log("1st Attempt", this.state.attempt);

    console.log("2nd Attempt", this.state.loading);
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results, loading: "false" });
    console.log("3rd attempt", this.state.loading);
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
