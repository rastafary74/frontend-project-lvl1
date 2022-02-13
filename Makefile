install: # install dependencies
		npm ci

brain-games: # start game
		node bin/brain-games.js

publish: # publish
		npm publish --dry-run

lint: #linting
		npx eslint .