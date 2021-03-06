# search-bar-component

A search bar component with Google-like autosuggest, built in React.

![search bar](http://s3.io/aU1rkdpjjSajYDvv8Xlv069w.gif)

## Installation

```
npm i search-bar-component -SE
```

## Demo

View the [demo online](https://jameswomack.github.io/search-bar-component).

Alternatively, run it locally:

```
npm install
npm run demo
```

Then visit [localhost:5000](http://localhost:5000).

## Usage

```js
<SearchBar
  onChange={(searchTerm, resolve) => {
    // get suggestions asynchronously based on `searchTerm`,
    // then pass them to `resolve()` to populate suggestions
  }}
  onSearch={(searchTerm) => {
    // do something on search
  }} />
```

## Props

### autoFocus

type: `boolean`

indicates whether the component should take focus on
page load

### delay

type: `number`

the number of milliseconds to wait after the last key
stroke before performing autosuggest

### inputName

type: `string`

sets the `name` attribute on the input field

### onChange

type: `function`

callback that executes on input and populates suggestions

### onSearch

type: `function`

callback that executes on search, triggered either by selecting a suggestion
or clicking the submit button

### placeholder

type: `string`

sets the `placeholder` attribute on the input field

### createSearchTermSuggestionMarkup

type: `function`

Determines how the relationship between a searchTerm and suggestion is represented in the DOM

## License

MIT
