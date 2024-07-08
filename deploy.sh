#!/bin/sh

# navigate to backend folder
cd backend

# run build command
oryx build /home/site/repository -o /home/site/wwwroot --platform nodejs --platform-version 20 -p virtualenv_name= --log-file /tmp/build-debug.log  -i /tmp/8dc9ef722cc2f90 -p compress_node_modules=tar-gz | tee /tmp/oryx-build.log
2024-07-08T02:39:08.546Z - Operation performed by Microsoft Oryx, https://github.com/Microsoft/Oryx