# OSS License Aggregator

Aggregates licensing information for npm based dependencies for one or more repositories. 

NOTE: I hacked this together for a specific need I had. You'll probably want to edit the script a bit to suit your needs. Maybe in the future I'll come back to this and make it nice. 

## Usage

First install dependencies by running `npm i`

create a file at the root of this repo called `config.json`. This is where you provide the paths to all your repositories you wish to aggregate. See `config.example.json` for an example.

Once you've created your config, then just run `npm run build`. A file called  `out.csv` will be generated at the root of this repository containing all the licensing information for your aggregated dependencies.
