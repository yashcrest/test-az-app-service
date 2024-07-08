#!/bin/bash

# navigate to backend folder
cd backend

# run build command
oryx build /home/site/repository/backend -o /home/site/wwwroot --platform nodejs --platform-version 20 -p virtualenv_name= --log-file /tmp/build-debug.log  -i /tmp/8dc9ef722cc2f90 -p compress_node_modules=tar-gz | tee /tmp/oryx-build.log