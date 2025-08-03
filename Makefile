.PHONY: install

install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node src/games/even.js

brain-calc:
	node src/games/calc.js

brain-gcd:
	node src/games/gcd.js

brain-progression:
	node src/games/progression.js

brain-prime:
	node src/games/prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .