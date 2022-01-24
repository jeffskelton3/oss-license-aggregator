# OSS License Aggregator

Aggregates licensing information for npm based dependencies for one or more repositories.

## Usage

First install dependencies by running `npm i`

create a file at the root of this repo called `config.json`. This is where you provide the paths to all your repositories you wish to aggregate. See `config.example.json` for an example.

Once you've created your config, then just run `npm run build`. A file called  `out.csv` will be generated at the root of this repository containing all the licensing information for your aggregated dependencies.
