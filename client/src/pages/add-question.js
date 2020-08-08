import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addNewQuestion, reduceCounter } from '../actions/quizActions';

const AddQuestion = (props) => {
  // question title
  const [questionTitle, setQuestionTitle] = useState('');
  const [doneQuestions, setDoneQuestions] = useState(false);

  // counter
  const [counter, setCounter] = useState(0);

  // question options
  const [questionOptionFirst, setQuestionOptionFirst] = useState('');
  const [questionOptionSecond, setQuestionOptionSecond] = useState('');
  const [questionOptionThird, setQuestionOptionThird] = useState('');
  const [questionOptionFourth, setQuestionOptionFourth] = useState('');

  // question options truth
  const [questionOptionTruthFirst, setQuestionOptionTruthFirst] = useState(
    true
  );
  const [questionOptionTruthSecond, setQuestionOptionTruthSecond] = useState(
    true
  );
  const [questionOptionTruthThird, setQuestionOptionTruthThird] = useState(
    true
  );
  const [questionOptionTruthFourth, setQuestionOptionTruthFourth] = useState(
    true
  );

  // TODO: redirect the user if currentQuiz is empty
  useEffect(() => {
    console.log(props);
    console.log(`the counter is ${counter}`);
  }, [props]);

  // TODO: redirect the user if currentQuiz is empty
  useEffect(() => {
    setCounter(parseInt(localStorage.getItem('QuestionsCount')));
  }, []);

  // TODO: this is to send Data to Global State
  const addNewQuestionFunc = (e) => {
    e.preventDefault();
    const data = {
      TitleQuestion: questionTitle,
      options: [
        {
          TitleOption: questionOptionFirst,
          OptionTruth: questionOptionTruthFirst,
        },
        {
          TitleOption: questionOptionSecond,
          OptionTruth: questionOptionTruthSecond,
        },
        {
          TitleOption: questionOptionThird,
          OptionTruth: questionOptionTruthThird,
        },
        {
          TitleOption: questionOptionFourth,
          OptionTruth: questionOptionTruthFourth,
        },
      ],
    };
    props.addNewQuestion(data, props.currentQuiz._id);
    const newPayload = parseInt(localStorage.getItem('QuestionsCount')) - 1;
    localStorage.setItem('QuestionsCount', newPayload.toString());
    setCounter(newPayload);
    props.reduceCounter(newPayload);
  };

  const getTitleQuiz = () => {
    return localStorage.getItem('TitleQuiz');
  };

  return (
    <div>
      <h1>Add New Question</h1>
      <div className="results mt-5">
        <h3 className="text-center">Quiz Title: ({getTitleQuiz()})</h3>
        <form onSubmit={(e) => addNewQuestionFunc(e)}>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="form-group">
                <p className="text-center mb-5 text-danger font-weight-bold">
                  Remember: you have {counter} questions
                </p>
                <label htmlFor="question-title">Question Title :</label>
                <input
                  required
                  value={questionTitle}
                  onChange={(e) => setQuestionTitle(e.target.value)}
                  type="text"
                  min="40"
                  max="100"
                  className="form-control form-control-lg"
                  id="question-title"
                  aria-describedby="question-title"
                  placeholder="Add Your Question Title (40, 100) Characters"
                />
              </div>
            </div>
            <div className="col-md-8">
              <h5 className="my-4">Question Options:</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="question-title">Question Option #1:</label>
                    <input
                      required
                      type="text"
                      min="40"
                      max="100"
                      className="form-control"
                      id="question-title"
                      aria-describedby="question-title"
                      placeholder="Add Question Option #1"
                      value={questionOptionFirst}
                      onChange={(e) => setQuestionOptionFirst(e.target.value)}
                    />
                    <div className="mt-1">
                      <input
                        type="radio"
                        checked={questionOptionTruthFirst}
                        onChange={() =>
                          setQuestionOptionTruthFirst(!questionOptionTruthFirst)
                        }
                        name="response-opt-1"
                        id="response"
                      />
                      <span className="mr-2">True</span>
                      <input
                        type="radio"
                        checked={!questionOptionTruthFirst}
                        onChange={() =>
                          setQuestionOptionTruthFirst(!questionOptionTruthFirst)
                        }
                        name="response-opt-1"
                        id="response"
                      />
                      False
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="question-title">Question Option #2:</label>
                    <input
                      required
                      type="text"
                      min="40"
                      max="100"
                      className="form-control"
                      id="question-title"
                      aria-describedby="question-title"
                      placeholder="Add Question Option #2"
                      value={questionOptionSecond}
                      onChange={(e) => setQuestionOptionSecond(e.target.value)}
                    />
                    <div className="mt-1">
                      <input
                        type="radio"
                        checked={questionOptionTruthSecond}
                        onChange={() =>
                          setQuestionOptionTruthSecond(
                            !questionOptionTruthSecond
                          )
                        }
                        name="response-opt-2"
                        id="response"
                      />
                      <span className="mr-2">True</span>
                      <input
                        type="radio"
                        checked={!questionOptionTruthSecond}
                        onChange={() =>
                          setQuestionOptionTruthSecond(
                            !questionOptionTruthSecond
                          )
                        }
                        name="response-opt-2"
                        id="response"
                      />
                      False
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="question-title">Question Option #3:</label>
                    <input
                      required
                      type="text"
                      min="40"
                      max="100"
                      className="form-control"
                      id="question-title"
                      aria-describedby="question-title"
                      placeholder="Add Question Option #3"
                      value={questionOptionThird}
                      onChange={(e) => setQuestionOptionThird(e.target.value)}
                    />
                    <div className="mt-1">
                      <input
                        type="radio"
                        checked={questionOptionTruthThird}
                        onChange={() =>
                          setQuestionOptionTruthThird(!questionOptionTruthThird)
                        }
                        name="response-opt-3"
                        id="response"
                      />
                      <span className="mr-2">True</span>
                      <input
                        type="radio"
                        checked={!questionOptionTruthThird}
                        onChange={() =>
                          setQuestionOptionTruthThird(!questionOptionTruthThird)
                        }
                        name="response-opt-3"
                        id="response"
                      />
                      False
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="question-title">Question Option #4:</label>
                    <input
                      required
                      type="text"
                      min="40"
                      max="100"
                      className="form-control"
                      id="question-title"
                      aria-describedby="question-title"
                      placeholder="Add Question Option #4"
                      value={questionOptionFourth}
                      onChange={(e) => setQuestionOptionFourth(e.target.value)}
                    />
                    <div className="mt-1">
                      <input
                        type="radio"
                        checked={questionOptionTruthFourth}
                        onChange={() =>
                          setQuestionOptionTruthFourth(
                            !questionOptionTruthFourth
                          )
                        }
                        name="response-opt-4"
                        id="response"
                      />
                      <span className="mr-2">True</span>
                      <input
                        type="radio"
                        checked={!questionOptionTruthFourth}
                        onChange={() =>
                          setQuestionOptionTruthFourth(
                            !questionOptionTruthFourth
                          )
                        }
                        name="response-opt-4"
                        id="response"
                      />
                      False
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3 justify-content-center">
                <div className="col-md-6">
                  <button
                    type="submit"
                    className="btn btn-lg btn-block btn-primary"
                    disabled={doneQuestions}
                  >
                    Add Question
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-success"
                    disabled={!doneQuestions}
                  >
                    Done Questions !!!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentQuestions: state.Quiz.CurrentQuestions,
  currentQuiz: state.Quiz.CurrentQuiz,
});

AddQuestion.propTypes = {
  addNewQuestion: PropTypes.func.isRequired,
  reduceCounter: PropTypes.func.isRequired,
  currentQuestions: PropTypes.array.isRequired,
  currentQuiz: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { addNewQuestion, reduceCounter })(
  AddQuestion
);
