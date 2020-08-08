import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showAllParticipants } from '../actions/participantsActions';

const ShowParticipants = (props) => {
  useEffect(() => {
    props.showAllParticipants();
  }, []);

  return (
    <div>
      <h1>Show All Participant</h1>
      <div className="links mt-5">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Generated Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Full Name</td>
              <td>Email</td>
              <td>Generated Password</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  participants: state.Participant.participants,
});

ShowParticipants.propTypes = {
  participants: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { showAllParticipants })(
  ShowParticipants
);
