import React from 'react';
import { connect } from 'react-redux';

import './app.scss';
import Header from './components/header';
import Headline from './components/headline';
import Button from './components/button';
import ListItem from './components/listItem';
import { fetchPosts } from './actions';

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    };
};

const App = ({ posts, fetchPosts }) => {
    return (
        <div className="App">
            <Header />
            <section className="main">
                <Headline header="Posts" desc="Click the button to render posts!" />
                <Button text="Get posts" onClick={() => fetchPosts()} />
                {posts.length > 0 && posts.map(post => (
                    <ListItem
                        title={post.title}
                        desc={post.body}
                        key={post.id}
                    />
                ))}
            </section>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
