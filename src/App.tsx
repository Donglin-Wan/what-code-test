import React, { useState } from 'react';
import './App.css';
import TodoList from './common/todos/index'
import {
  useAddPostMutation,
} from './service/postsApi';
function App() {
  const [formValue, setFormValue] = useState({
    title: '',
    content: ''
  });
  const submitForm = (event: any) => {
    event.preventDefault();
  };
  const [addPost] = useAddPostMutation();
  const addHandler = async () => {
    await addPost(formValue);
  }
  return (
    <div className="app">
      <header className="app__header">
        <h3 className="text__heading3">Congrats!</h3>
        <p className="text__normal">
          If you're able to start this app, you just passed the first test on
          version control
        </p>
        <p className="text__normal">
          Right now, we just need you to finish this simple todo list feature.
          😊
        </p>
      </header>

      <section className="to-do-list">
        <h3 className="text__heading3">To Do List</h3>
        <form className="to-do-list__form" onSubmit={submitForm}>
          <div className="form__row">
            <label htmlFor="input" className="text__normal">
              New To-Do Item:
            </label>
            <input
              type="text"
              id="title"
              className="to-do-list__input"
              value={formValue.title}
              onChange={({ target: { value } }) =>
                setFormValue((preValue) => ({ ...preValue, title: value }))
              }
            />
            <input
              type="text"
              id="content"
              className="to-do-list__input"
              value={formValue.content}
              onChange={({ target: { value } }) =>
                setFormValue((preValue) => ({ ...preValue, content: value }))
              }
            />
            <button type="submit" className="to-do-list__submit" onClick={addHandler}>
              Add
            </button>
          </div>
        </form>
        {/* You should render your todo list down here */}
        <TodoList />
      </section>
    </div>
  );
}

export default App;
