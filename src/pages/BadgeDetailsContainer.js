import React from "react";

import BadgeDetails from "./BadgeDetails";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";

class BadgeDetailsContainer extends React.Component {
  state = { loading: true, error: null, data: undefined, modalIsOpen: false };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };
  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  handleDeleteBadge = async () => {
    this.setState({ loading: true, error: null });
    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    } else if (this.state.error) {
      return <PageError />;
    }

    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        onDeleteBadge={this.handleDeleteBadge}
        modalIsOpen={this.state.modalIsOpen}
        badge={this.state.data}
      />
    );
  }
}

export default BadgeDetailsContainer;
