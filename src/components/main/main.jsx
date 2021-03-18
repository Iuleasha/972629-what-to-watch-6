import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {ActiveGenre, FilmsType, MovieCardType, OnSelectGenre} from '../../types/types';
import {HeaderMode, MovieCardButtonSize, PosterSize} from '../../utils/constant/constant';
import CatalogGenres from '../catalog-genres/catalog-genres';
import Footer from '../footer/footer';
import Header from '../header/header';
import MovieList from '../movie-list/movie-list';
import PlayButton from '../play-button/play-button';


const MainPage = (props) => {
  const {movieCardInfo, films, onSelectGenre, genre} = props;

  return (<>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={films[0].backgroundImage} alt={films[0].name}/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header type={HeaderMode.MOVIE_CARD}/>
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={films[0].posterImage} alt={`${films[0].name} poster`}
              width={PosterSize.WIDTH}
              height={PosterSize.HEIGHT}/>
          </div>
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{movieCardInfo.TITLE}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{movieCardInfo.GENRE}</span>
              <span className="movie-card__year">{movieCardInfo.RELEASE_DATE}</span>
            </p>
            <div className="movie-card__buttons">
              <PlayButton id={films[0].id}/>

              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox={`0 0 ${MovieCardButtonSize.WIDTH} ${MovieCardButtonSize.HEIGHT}`}
                  width={MovieCardButtonSize.WIDTH} height={MovieCardButtonSize.HEIGHT}>
                  <use xlinkHref="#add"/>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CatalogGenres onSelectGenre={onSelectGenre} activeFilter={genre}/>
        <MovieList films={films}/>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
      <Footer/>
    </div>
  </>);
};

MainPage.propTypes = {movieCardInfo: MovieCardType, films: FilmsType, onSelectGenre: OnSelectGenre, genre: ActiveGenre};

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectGenre(type) {
    dispatch(ActionCreator.setFilter(type));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
