import React, {
  PropTypes
} from 'react';
import classNames from 'classnames';


function createSearchTermSuggestionMarkup (suggestion, searchTerm) {
  return {
    __html: suggestion.replace(searchTerm, `<em class="search-bar-component_search-term">${searchTerm}</em>`)
  }
}


export default class Suggestions extends React.Component {
  static propTypes = {
    createSearchTermSuggestionMarkup : PropTypes.func,
    highlightedItem                  : PropTypes.number,
    searchTerm                       : PropTypes.string.isRequired,
    suggestions                      : PropTypes.array.isRequired
  };

  static defaultProps = {
    createSearchTermSuggestionMarkup
  };

  constructor(props) {
    super(props);
    this.state = {
      activeItem: -1
    };
  }

  onTouchStart(index) {
    this.timer = setTimeout(() => {
      this.setState({activeItem: index});
    }, 200);
  }

  onTouchMove() {
    clearTimeout(this.timer);
    this.touchedMoved = true;
    this.setState({activeItem: -1});
  }

  onTouchEnd(suggestion) {
    if (!this.touchedMoved) {
      setTimeout(() => {
        this.props.onSelection(suggestion);
      }, 220);
    }
    this.touchedMoved = false;
  }

  render() {
    const {highlightedItem, searchTerm, suggestions} = this.props;
    const {activeItem} = this.state;
    return (
      <ul
        className="search-bar-component_suggestions"
        onMouseLeave={() => this.setState({activeItem: -1})}>
        {suggestions.map((suggestion, index) =>
          <li
            className={classNames({
              highlighted: highlightedItem === index || activeItem === index
            })}
            key={index}
            onClick={() => this.props.onSelection(suggestion)}
            onMouseEnter={() => this.setState({activeItem: index})}
            onMouseDown={e => e.preventDefault()}
            onTouchStart={() => this.onTouchStart(index)}
            onTouchMove={() => this.onTouchMove()}
            onTouchEnd={() => this.onTouchEnd(suggestion)}>
            <span
              className="search-bar-component_suggestion"
              dangerouslySetInnerHTML={this.props.createSearchTermSuggestionMarkup(suggestion, searchTerm)}>
            </span>
          </li>
        )}
      </ul>
    );
  }
}
