# Server Template, with TS, Jest Tests, and Docker

## Build
* `sudo docker build [-f name-of-dockerfile] .`
    * using diff dockerfiles to build the test containers
        * note the id of the container
        * or give it a name (or tag)

## Run
* `sudo docker run --rm [-it] <id|name|tag>`
    * i'm not automating finding the id and supplying it to run rn
        * nope
