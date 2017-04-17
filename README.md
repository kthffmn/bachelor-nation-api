# Bachelor Nation API

## Data

The database is built using [this](https://raw.githubusercontent.com/kthffmn/bachelor-nation-api/master/data/data.json) file which includes *The Bachelor* Seasons 1-21 and *The Bachelorette* Seasons 1-12. 
Most of this data was fetched from Wikipedia using [this](https://raw.githubusercontent.com/kthffmn/bachelor-nation-api/master/data/scraper.js) scraper.

There are missing contestants for the following seasons:

* Bachelor
  * Season 3
  * Season 4
  * Season 6
  * Season 7
  * Season 8
* Bachelorette
  * Season 3
  
I also can't track down Cosetta Blanca's age. She was a Dancer from Italy who appeared on Season 9 of *The Bachelor*.

## Background

Based on [Endpoints Example Implementation](https://github.com/endpoints/endpoints-example).

## Setup Instructions

* Run the following commands:

```bash
$ git clone https://github.com/kthffmn/bachelor-nation-api.git
$ cd bachelor-nation-api
$ npm install
$ npm start
```

* Open browser to (for example):
  - [http://localhost:8080](http://localhost:8080)
  - [http://localhost:8080/v1](http://localhost:8080/v1)
  - [http://localhost:8080/v1/shows](http://localhost:8080/v1/shows)
  - [http://localhost:8080/v1/shows/1](http://localhost:8080/v1/shows/1)
  - [http://localhost:8080/v1/eligibles?filter[olderThan]=32](http://localhost:8080/v1/eligibles?filter[olderThan]=32)
  - [http://localhost:8080/v1/contestants?filter[youngerThan]=22](http://localhost:8080/v1/contestants?filter[youngerThan]=22)
  - [http://localhost:8080/v1/persons/402?include=eligible_seasons,contestant_seasons](http://localhost:8080/v1/persons/402?include=eligible_seasons,contestant_seasons)

For more details on how to interact with this API, see the [JSON-API Specification](http://jsonapi.org)
