import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addQuiz } from '../actions/quizActions';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

const AddQuiz = (props) => {
  const [TitleQuiz, setTitle] = useState('');
  const [QuestionsCount, setQuestionCount] = useState(0);
  const [VisibilityQuiz, setVisibility] = useState(true);

  useEffect(() => {
    if (props.quiz._id !== undefined) {
      props.history.push(`add-question/${props.quiz._id}`);
    }
    console.log(props.quiz);
  }, [props.quiz]);

  // TODO: send a new Quiz into the Redux Store
  const sendNewQuiz = (e) => {
    e.preventDefault();
    const data = { TitleQuiz, QuestionsCount, VisibilityQuiz };
    localStorage.setItem('TitleQuiz', TitleQuiz);
    localStorage.setItem('QuestionsCount', QuestionsCount.toString());
    props.addQuiz(data);
    resetForm();
  };

  // TODO: reset the form
  const resetForm = () => {
    setTitle('');
    setQuestionCount(0);
    setVisibility(false);
  };

  return (
    <div>
      <h1>Add A New Quiz</h1>
      <div className="results mt-5">
        <form onSubmit={(e) => sendNewQuiz(e)}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="fullname">Add Your Quiz Title :</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="fullname"
                  value={TitleQuiz}
                  onChange={(e) => setTitle(e.target.value)}
                  aria-describedby="fullname"
                  placeholder="Quiz Title (Example: Random Questions)"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="fullname">
                  How Many Question Do You Want To Add :
                </label>
                <input
                  required
                  type="number"
                  className="form-control"
                  value={QuestionsCount}
                  onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                  id="question-counter"
                  aria-describedby="question-counter"
                  placeholder="Questions Number Between (10 and 40) Questions"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="checkbox"
                  checked={VisibilityQuiz}
                  onChange={() => setVisibility(!VisibilityQuiz)}
                  id="visibility"
                  aria-describedby="visibility"
                  className="mr-2"
                />
                Disabled Visibility
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Add New Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  quiz: state.Quiz.CurrentQuiz,
});

AddQuiz.propTypes = {
  addQuiz: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, { addQuiz })(AddQuiz));
