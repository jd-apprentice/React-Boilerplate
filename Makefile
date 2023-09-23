exec: install test build serve

env:
	cp .env.example .env

install:
	npm run install

test:
	npm run test

build:
	npm run build

serve:
	npm run serve

dev:
	npm run start

compose:
	docker compose up -d

compose_build:
	docker compose up -d --build