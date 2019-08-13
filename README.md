<p>
  <h1>Hello World with Docker, Mssql, Sequelize and Node.js</h1>
</p>

## Instalation:

```sh
$ yarn
```

Run the container:

```
$ docker run --name=node_app -d -p 9001:9001 --net=hello_world_nw --env DATABASE_NAME=teste --env DATABASE_USER=sa --env DATABASE_PASSWORD=sudoCap2019@# --env DATABASE_HOST=mssql --env DATABASE_PORT=1433 node-hello-world
```
