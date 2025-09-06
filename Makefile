.PHONY: build
build:
	docker compose up -d --build

.PHONY: up
up:
	docker compose up -d

.PHONY: down
down:
	docker compose down

.PHONY: restart
restart:
	docker-compose restart

.PHONY: exec-backend
exec-backend:
	docker compose exec backend /bin/sh

.PHONY: exec-frontend
exec-frontend:
	docker compose exec frontend /bin/sh

.PHONY: exec-db
exec-db:
	docker compose exec db /bin/bash

.PHONY: exec-nginx
exec-nginx:
	docker compose exec nginx /bin/sh

.PHONY: setup
setup:
	make build
	docker compose exec backend npm install
	docker compose exec frontend npm install
