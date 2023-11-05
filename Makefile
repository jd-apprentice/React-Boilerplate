exec: install test build serve

env:
	cp .env.example .env

install:
	@echo "Installing dependencies..."
	npm install

test:
	@echo "Running tests..."
	npm run test

build:
	@echo "Building..."
	npm run build

serve:
	@echo "Serving..."
	npm run serve

dev:
	npm run start

compose:
	docker compose up -d

compose_build:
	docker compose up -d --build