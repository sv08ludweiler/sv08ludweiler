# Homepage of SV 08 Ludweiler

## Development

### Docker

Build container

```shell
docker build -t sv08ludweiler-strapi-dev:latest -f Dockerfile .
```

Running

```shell
docker compose -f docker-compose.dev.yml --env-file ./cms/.env.dev up
```

### Production

```shell
docker build \
  --build-arg NODE_ENV=production \
  # --build-arg STRAPI_URL=https://api.example.com \ # Uncomment to set the Strapi Server URL
  -t sv08ludweilerstrapi:latest \ # Replace with your image name
  -f Dockerfile.prod .
```

Running

```shell
docker
```
