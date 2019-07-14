import React, { Component } from 'react';
import Head from './components/head'
import Body from './components/body'
import InfiniteScroll from 'react-infinite-scroller';
import * as actionCreator from '../../store/actions/index'
import { connect } from 'react-redux'


class MediaLibrary extends Component {

    componentDidMount=()=>{
        this.props.getMovieLibraryStart();
    }

    loadFunc = (page) => {
        this.props.getMovieLibrary(page);
    }

    search=(event)=>{
        this.props.searchMovie(event.target.value);
    }
    searchClear=(event)=>{
        this.props.searchMovie('');
    }

    render() {

        return (
            <div className='bg-black'>

                <Head search={this.search} searchClear={this.searchClear}></Head>

                <div style={{ height: '100vh', overflow: 'auto' }}>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadFunc}
                        hasMore={this.props.hasMoreItems}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                        useWindow={false}
                    >
                        <Body
                            movies={this.props.movieLibrary}
                        ></Body>
                    </InfiniteScroll>
                </div>





            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        movieLibrary : state.filteredMovieLibraby,
        hasMoreItems : state.hasMoreItems,
    }
}

const mapDispatchtoToProps = dispatch => {
    return {
        getMovieLibraryStart: () => dispatch(actionCreator.getMovieLibraryStart()),
        getMovieLibrary: (page) => dispatch(actionCreator.getMovieLibrary(page)),
        searchMovie: (searchText) => dispatch(actionCreator.searchMovie(searchText)),
  
    }
  }

export default connect(mapStateToProps,mapDispatchtoToProps) (MediaLibrary);
