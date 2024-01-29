# FoodTruck
# Author : 谢晓晨


There are two projects. 
One is UI “next-detail”, one for API “backend”.


next-detail Script: 
1.	Cd backend
2.	Npm install 
3.	Npm start

demo Script :
1.	Cd demo
2.	mvn install 
3.	start DemoApplication in your own idea


Browser open: http://localhost:3000/,
you will see all the data show in table.


What could change:
1.	First lots of data, can do paging. The API will include the offset, so data transfer will take less time. And the UI side, will add pagination function.
2.	Second Auth function. Since this is only for display data right now. I will level UI. And control by Access-Control-Allow-Origin only in API.
3.	Data search function. If without pagination, can do in UI side only. If not, can add filter into search API.
4.	And now, the UI is ugly, the position is wrong. 
