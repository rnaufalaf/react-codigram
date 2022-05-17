npx sequelize-cli model:generate --name User --attributes email:string,username:string,password:string,phone:string,country:string,image:string

npx sequelize-cli model:generate --name Post --attributes title:string,content:string,image:string,UserId:integer
