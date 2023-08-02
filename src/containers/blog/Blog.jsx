import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="March 14, 2023" text="GPT-4 is more creative and collaborative than ever before." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="Jan 19, 2022" text="How much RAM do I need for GPT-3?." />
        <Article imgUrl={blog04} date="Dec 20, 2022" text="Is Text-Davinci-003 the best GPT-3 model?" />
        <Article imgUrl={blog05} date="July 26, 2023" text="When can we expect gpt5?" />
      </div>
    </div>
  </div>
);

export default Blog;
