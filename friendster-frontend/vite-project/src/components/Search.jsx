import React from 'react';
import {useSearchParams, Form, Link} from 'react-router-dom';

const byEvent = (title) => (event) =>
  event.title.toLowerCase().includes((title || '').toLowerCase());

const Search = () => {
  const events = [
    { id: 1, title: 'Lady Gaga', description: 'Live Concert', img: 'lady-gaga-card' },
    { id: 2, title: 'Artic Monkeys', description: 'Live Concert', img: 'arctic-monkeys-card' },
    { id: 3, title: 'Imagine Dragons', description: 'Live Concert', img: 'imag-dragons-card' },
    { id: 4, title: 'Foo Fighters', description: 'Live Concert', img: 'foo-fight-card' },
    { id: 5, title: 'The Black Keys', description: 'Live Concert', img: 'black-keys-card' },
    { id: 6, title: 'Twenty One Pilots', description: 'Live Concert', img: 'twtyone-card' },
    { id: 7, title: 'Muse', description: 'Live Concert', img: 'muse-card' },
    { id: 8, title: 'Radiohead', description: 'Live Concert', img: 'radiohead-card' },
  ];

  const [search, setSearch] = useSearchParams();

  const handleTitle = (event) => {
    setSearch({ title: event.target.value });
  };

  const filterOut = events.filter(byEvent(search.get('title'))).map((event) => (
    <div className="col-md-3 mb-4" key={event.id}>
    <Link to={`/events/${event.id}`} className={`card ${event.img}`}>
      <div className="card-body d-flex flex-column">
        <div className="mt-auto">
          <h5 className="card-title">{event.title}</h5>
          <p className="card-text">{event.description}</p>
        </div>
      </div>
    </Link>
    </div>
  ));

  const matchesCheck = filterOut.length > 0 ? filterOut : <h4 className="text-center text-muted p-4">No Matches</h4>;

  return (
    <div className="m-2">
      <h1 className="gradient-text text-center p-2">Event Matches</h1>

      <Form className="search-bar pb-4">
          <input
            type="text"
            name="title"
            placeholder="Search for an event..."
            defaultValue={search.get('title')}
          />
          <button
            type="submit"
            onSubmit={handleTitle}
            className="btn custom-purple-outline-btn"
          >
            Search
          </button>
      </Form>

      <div className="container align-self-center">
        <div className="row">
          {matchesCheck}
        </div>
      </div>
    </div>
  );
};

export default Search;
