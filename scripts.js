'use strict';


var movies = [
{
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    image: './photo/harry.png',
    //sep: '',
},
{
    id: 2,
    title: 'Król Lew',
    desc: 'film o królu sawanny',
    image: './photo/leo.png',
    //sep: ''
},
{
    id: 3,
    title: 'Gladiator',
    desc: 'film o herosie',
    image: './photo/gladiator.png',
    //sep: ''
},
{
    id: 4,
    title: 'Spiderman',
    desc: 'film o człowieku pająku',
    image: './photo/spider.png',
    //sep: ''
}

];


var MovieTitle = React.createClass({
    propTypes: {
      title: React.PropTypes.string.isRequired,
    },
  
    render: function() {
      return (
          React.createElement('h2', {}, this.props.title)
      );
    },
});

var MovieDesc = React.createClass({
    propTypes: {
      desc: React.PropTypes.string.isRequired,
    },
  
    render: function() {
      return (
          React.createElement('p', {}, this.props.desc)
      );
    },
});

var MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired,
    },

    render: function(){
        return (
            React.createElement('img', {src:this.props.image, style: {width:"200px", height:"auto"}})
        );
    },
});


var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('li', {key:this.props.movie.id, style: {margin: "100px", textAlign: "center" }},
            React.createElement(MovieTitle, {title: this.props.movie.title}),
            React.createElement(MovieDesc, {desc: this.props.movie.desc}),
            React.createElement(MovieImage, {image: this.props.movie.image})) 
        );
    }
});

var moviesElements = movies.map(function(movie) {
    return React.createElement(Movie, {key: movie.id, movie:movie}
      );
  });

  var MoviesList =
    React.createElement('div', {},
      React.createElement('h1', {style: {textAlign: "center", marginTop: "50px"}}, 'Lista filmów'),
      React.createElement('ul', { style: {display: "flex", flexWrap: "wrap", justifyContent: "space-around", margin: "30px"}}, moviesElements)
    );
  
  ReactDOM.render(MoviesList, document.getElementById('app'));