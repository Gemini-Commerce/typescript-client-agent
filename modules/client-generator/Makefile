SHELL := /bin/bash

CUR_UID := $(shell id -u)
CUR_GID := $(shell id -g)

mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
current_dir := $(dir $(mkfile_path))
openapi_generator = docker run --rm --user ${CUR_GID}:${CUR_UID} -v ${current_dir}/:/client-generator -v ${PWD}/:/client-${lower_service} openapitools/openapi-generator-cli:v7.2.0
lower_service = $(shell echo $(service) | sed -e 's/\(.*\)/\L\1/')
ucf_service = $(shell echo $(service) | sed -e "s/\b\(.\)/\u\1/g")
artifact_version = $(shell if [ ! -z "${version}" ]; then echo "artifactVersion=${version},"; fi)

generate-client:
	[ ! -z "${service}" ] || (printf "\e[31mError: this command is meant to be execute from specific service client repo\e[0m\n"; exit 1) && \
	${openapi_generator} \
	generate -i client-generator/modules/proto/${lower_service}/${lower_service}.swagger.json \
	--skip-validate-spec \
	--git-repo-id typescript-client-${service} --git-user-id Gemini-Commerce --git-host github.com \
	-g typescript-axios -t client-generator/templates/ts -o client-${lower_service} \
	-apiPackage=${lower_service} \
	--additional-properties ${artifact_version}\
	packageName="${lower_service}",\
	npmName="@gemini-commerce/typescript-client-${lower_service}",\
	npmVersion="${version}",\
