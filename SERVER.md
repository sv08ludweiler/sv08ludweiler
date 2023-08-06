# sv08ludweiler.de

## How to deploy to server

### Build images

Delete all related docker images locally.

Create an `/.env.server` file with required vairables. 

```shell
docker compose -f docker-compose.server-build.yml up --force-recreate
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
docker save -o sv08ludweiler-strapi-server.tar sv08ludweiler-strapi-server:latest
scp sv08ludweiler-strapi-server.tar server:/tmp

# on server
docker load -i sv08ludweiler-strapi-server.tar
```

### Run docker images on server

```shell
cd .../docker/ludweiler
# docker compose file `./docker-compose.server-run.yml` already copied to server
# .env file already configured with all required environment variables and secrets
docker compose -f docker-compose.server-run.yml --env-file .env up -d
```
