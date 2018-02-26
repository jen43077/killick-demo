import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    articles: state.articles
});

const MainView = props => {
    return (
        <div className="col-md-9">
            <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                    <li className="nav-item">
                        <a href="" className="nav-link active">
                            Global Brig
              </a>
                    </li>
                </ul>
            </div>
            Article List Here
      </div>
    );
};

export default connect(mapStateToProps)(MainView);