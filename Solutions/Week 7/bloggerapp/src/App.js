import React from 'react';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="column">
          <CourseDetails />
        </div>
        <div className="column">
          <BookDetails />
        </div>
        <div className="column">
          <BlogDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
