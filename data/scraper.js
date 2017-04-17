var contestants  = [];
var attributes = [];
var header = $('h1').text();
var stringSeason = header.match(/\d+/)[0];
var season = parseInt(stringSeason, 10);

var $table = $('.wikitable.sortable.jquery-tablesorter');
var $columnNames = $table.find('thead').find('tr').find('th');
var $contestantRows = $table.find('tbody').find('tr');

$.each($columnNames, function(i, th){
  var columnName = $(th).text();
  attributes.push(columnName);
});

$.each($contestantRows, function(i, contestantRow){
  var contestant = {};
  var $contestantAttributes = $(contestantRow).find('td');
  $.each($contestantAttributes, function(index, attribute){
    var dirtyText = $(attribute).text();
    var cleanText;
    var indexOfChar = dirtyText.indexOf('[');
    if(indexOfChar >= 0){
      cleanText = dirtyText.substr(0, indexOfChar);
    } else {
      cleanText = dirtyText;
    }
    var attributeName = attributes[index];
    contestant[attributeName] = cleanText;
  });
  contestants.push(contestant);
});

var data = {};
data[season] = contestants;
var json = JSON.stringify(data);
console.log(json);
