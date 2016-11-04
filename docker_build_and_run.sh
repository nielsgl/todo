#
# Builds the docker container.
#

echo "###Building the docker container..."
docker build -t todo-api .
echo "###Container 'todo-api' built."

# Runs the image
echo "### Running docker image 'todo-api'"
docker run -e "DB_USER=ntsantsarov" -e "DB_PASSWORD=facepalm123" -e "DB_HOST=todo-db.coigj17hrrst.us-east-1.rds.amazonaws.com" -e "DB_NAME=TodoDB" --name todo-api -p 8080:3000 -d todo-api
echo "### Image 'todo-api' is running"