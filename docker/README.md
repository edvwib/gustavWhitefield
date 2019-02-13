# Installation
## [Required] [Install Docker](https://docs.docker.com/install/)

### [Optional] Add your user to the docker group to run it without sudo (login again for change to take effect) 
```sh
gpasswd -a $USER docker
```

### [Optional] Add this to your `/etc/hosts`
```/etc/hosts
127.0.0.1 mariadb
127.0.0.1 wp-api.loc
```

# Usage
Now you are ready to start everything.
```sh
. start.sh
```


## Accessing the workspace
If you want to execute commands inside the container (eg. composer, npm, yarn ...)
```sh
docker-compose exec --user=gw-docker workspace bash
```
*Tip: Create a [bash_alias](https://www.digitalocean.com/community/tutorials/an-introduction-to-useful-bash-aliases-and-functions#how-to-declare-a-bash-alias) for easier access*

## Rebuilding
If you've changed anything related to the containers, run:
```sh
docker-compose up -d --build nginx
```


# Access
- Frontend (web-app): [127.0.0.1:3000](127.0.0.1:3000)
- Backend (wp-api): [127.0.0.1](127.0.0.1) / [wp-api.loc](http://wp-api.loc)
- PHPMyAdmin: [127.0.0.1:1776](127.0.0.1:1776)
- mariadb: [127.0.0.1:3306](127.0.0.1:3306)
