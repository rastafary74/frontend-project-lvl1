install: # install dependencies
		npm ci

brain-games: # start game
		node bin/brain-games.js

brain-even:
		node bin/brain-even.js

brain-calc:
		node bin/brain-calc.js

publish: # publish
		npm publish --dry-run

lint: #linting
		npx eslint .