### Run and up

In order to tag the container, run the following command: 

```bash
docker build -t helloworldtag/simpleweb . 
``` 

```bash
docker run helloworldtag/simpleweb 
```

```bash
docker run -p 8080:8080 helloworldtag/simpleweb
```

```bash 
docker run -it helloworldtag/simpleweb sh
```