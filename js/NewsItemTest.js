var $ = require('jquery');
var NewsItem = require('./NewsItem');
var React = require('react');
var ReactDOM = require('react-dom');

$.ajax({
  url: '/json/items.json'
}).then(function (items) {
  // Log the data so we can inspect it in the developer console.
  console.log('items', items);
  // Use a fake rank for now.
  /*ReactDOM.render(<NewsItem item={items[1]} rank={1}/>, $('#content')[0]);*/
  var lists=[];
  items.forEach(function(value, index){
	lists.push(<NewsItem item={value} rank={index} key={index} />);
  });
  ReactDOM.render(<div>{lists}</div>, $('#content')[0]);
});