# sv08ludweiler.de

## How to deploy to server

### Build images

Delete all related docker images locally.

Create an `/.env.server` file with required vairables.

```shell
docker compose -f docker-compose.server-build.yml up --build --force-recreate --no-deps
```

### Pack images and copy to server

Detailed information in this [article](https://www.linkedin.com/pulse/how-copy-docker-image-from-one-machine-another-abhishek-rana/)

```shell
## pack image on local machine
docker save -o <generated tar file name> <repository_name:tag_name>1

# load image on server
docker load -i <path to image tar file>
```

#### Example

```shell
docker save -o sveltekit-node_00x.tar sv08ludweiler-sveltekit-node:latest
scp sveltekit-node_00x.tar server:/tmp

docker save -o strapi_00x.tar sv08ludweiler-strapi:latest
scp strapi_00x.tar server:/tmp

# on server
docker load -i strapi_00x.tar
```

### Run docker images on server

```shell
cd .../docker/ludweiler
# docker compose file `./docker-compose.server-run.yml` already copied to server
# .env file already configured with all required environment variables and secrets
docker compose -f docker-compose.yml --env-file .env up -d
```
