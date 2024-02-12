#!/usr/bin/bash

 yarn add sqlite3
 node ace migration:run 
 node ace db:seed
 node ace serve
