CURRENT_UID := $(shell id -u)
CURRENT_GID := $(shell id -g)
CURRENT_DIR := $(shell pwd)

export CURRENT_UID
export CURRENT_GID

run:
	docker compose down --remove-orphans --rmi local
	docker compose up --remove-orphans --force-recreate
	docker container prune -f
