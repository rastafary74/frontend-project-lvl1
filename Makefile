install: # install dependencies
		npm ci

brain-games: # start game
		node bin/brain-games.js

brain-even:
		node bin/brain-even.js

brain-calc:
		node bin/brain-calc.js

brain-gcd:
		node bin/brain-gcd.js

brain-progression:
		node bin/brain-progression.js

publish: # publish
		npm publish --dry-run

lint: #linting
		npx eslint .