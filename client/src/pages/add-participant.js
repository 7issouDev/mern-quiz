import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addParticipant } from '../actions/participantsActions';

import uuid from 'react-uuid';

const AddParticipant = (props) => {
  // state elements
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [generatedPassword, setGeneratedPassword] = useState('');

  // TODO: get participant & move to action
  const addNewParticipant = (e) => {
    e.preventDefault();
    const data = { name, email, generatedPassword };
    props.addParticipant(data);
    resetForm();
  };

  // TODO: this function help us to generate a passowrd
  const generatedPassFunc = () => {
    if (name.length > 0) {
      const genString = uuid().toUpperCase().substr(0, 5);
      const password =
        '_' + name.replace(' ', '_').toUpperCase() + '_' + genString;
      setGeneratedPassword(password);
    } else {
      alert('Type Participant Name, Please !!!!');
    }
  };

  // TODO: reset form to null
  const resetForm = () => {
    setName('');
    setEmail('');
    setGeneratedPassword('');
  };

  return (
    <div>
      <h1>Add New participant</h1>
      <div className="row justify-content-center mt-5">
        <div className="col-md-7">
          <form onSubmit={(e) => addNewParticipant(e)}>
            <div className="form-group">
              <label htmlFor="fullname">Add Your Full Name :</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                value={name}
                aria-describedby="fullname"
                placeholder="Add Your Fullname"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Add Your Email :</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                aria-describedby="email"
                placeholder="Add Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="passwordText">Generate a Password :</label>
              <input
                type="text"
                className="form-control"
                id="passwordText"
                value={generatedPassword}
                aria-describedby="passwordText"
                placeholder="The Generated Password"
                onChange={(e) => setGeneratedPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button
                type="button"
                onClick={() => generatedPassFunc()}
                className="btn btn-success mr-2"
              >
                Generate Password
              </button>
              <button type="submit" className="btn btn-primary">
                Add New Participant
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

AddParticipant.propTypes = {
  addParticipant: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  participants: state.Participant.participants,
  CurrentParticipant: state.Participant.CurrentParticipant,
});

export default connect(mapStateToProps, { addParticipant })(AddParticipant);
