### Build docker image

```bash
docker build -t orcunnodeapp:latest .
```

### Run the pre-built image 
```bash
docker run -p 8080:8080 orcunnodeapp
```

### Run Docker-compose app

```bash
docker-compose up -d
```

### Stop Containers
```bash
docker-compose down
```

### Build your image
You should build your image, after you have changed the Docker-compose configuration file. 

```bash
docker-compose up --build 
```

### Status and monitor containers in Docker-compose

```bash
docker-compose ps
````

This command only works under the folder that you have defined the docker-compose file.

