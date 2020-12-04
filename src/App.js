import React, { Component } from "react";

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import DataApi from "./services/dataApi.js";
import Loaders from "react-loader-spinner";
import Modal from "./components/Modal/Modal";

export default class App extends Component {
  state = {
    data: [],
    loading: false,
    error: null,
    query: "",
    page: 1,
    largeImageURL: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      this.fetchData();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight + document.documentElement.scrollTop,
      behavior: "smooth",
    });
  }

  fetchData = () => {
    const { query, page } = this.state;
    this.setState({
      loading: true,
    });
    DataApi.fetchDataWithQuery(query, page)
      .then((data) => {
        if (data.length < 1) {
          this.setState({ error: true });
        } else {
          this.setState((prevState) => ({
            data: [...prevState.data, ...data],
            page: prevState.page + 1,
            error: false,
          }));
        }
      })

      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  onSubmitForm = (querySearch) => {
    this.setState({
      data: [],
    });
    this.setState({
      query: querySearch,
    });
  };
  openModal = (largeImageURL) => {
    this.setState({
      largeImageURL: largeImageURL,
    });
  };
  modalClose = () => {
    this.setState((prevState) => ({ largeImageURL: !prevState.largeImageURL }));
  };

  render() {
    const { data, loading, error, largeImageURL } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmitForm} />
        {error && <p>Whoops, something went wrong {error.message}</p>}
        {loading && <Loaders />}
        <ImageGallery data={data} openModal={this.openModal} />
        {data.length > 0 && <Button handleClick={this.fetchData} />}
        {largeImageURL && (
          <Modal onSubmit={this.openModal} largeImageURL={largeImageURL} modalClose={this.modalClose} />
        )}
      </>
    );
  }
}
