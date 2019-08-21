import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EditMovieModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: props.movie.title,
      description: props.movie.description
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleChange = (e) => {
      this.setState({
          [e.currentTarget.name] : e.currentTarget.value
      })
      console.log(this.state);
  }
  handleSubmit = async (e) => {
      e.preventDefault();
      console.log("READY TO UPDATE");
      const validUpdate = await this.props.updateMovie(this.props.movie._id, this.state)
      if(validUpdate){
        this.toggle();
      }
      
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Edit {this.props.movie.title}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Editing {this.props.movie.title}</ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleSubmit}> 
                Title: <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                Description: <textarea name="description" cols="30" rows="10" onChange={this.handleChange} value={this.state.description}></textarea>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>Edit Movie</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditMovieModal;