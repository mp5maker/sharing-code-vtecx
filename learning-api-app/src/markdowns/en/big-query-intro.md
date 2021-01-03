For the big query integration, you need a have google account. You need to get familiar with the google console.

* Go to Google Cloud Platform
* IAM And Admin > Service Accounts > Action > Create Key > (create JSON type for private key)
* Copy the json contents to setup/_settings as bigquery.json
* Update the properties.xml
* Give Permission to the User


Next you should pin the data
+ Add Data -> Pin Data -> To the tab (All)

After that you can query like an regular SQL to fetch the data. There are some differences regular database and SQL.

After setting in the google console, you also need to update your properties.xml.

First in big query we never delete the data. Therefore if we create the a data using post and later on try to update it. We will not update in the traditional fashion. Instead we would be creating another data. In big query data is never deleted. If we delete a data we just change one of the attributes which is **deleted** to true.

We would be using big query functions as server sides. Therefore, if we can write all the logics using vtecxapi in server side javascript, in the front end we would just be calling

```
  axios.get('/s/get-big-query')
```

/d/ => is mostly used for the server

/s/ => is mostly used for big query, upload pictures and server side javascript

When we would be creating a new data using big query first we need to store the data in our database as well as big query.
Big Query is mostly used to fetch large amounts of data and it is very helpful when searching, sorting and filtering data.


To create new data [POST]

1. We save the data to our database [creates a new data] (Our database)

2. We save the data in big query [creates a new data] (Big Query)


To update the data [PUT]

1. We update the data to our database [updates existing data] (Our Database)

2. We save the data in big query [creates a new data along with the previous data] (Big Query)


To delete the data [DELETE]

1. We delete the data from our database [deletes the existing data] (Our Database)

2. We change the delete attribute to true [creates a new data with deleted false attribute and previous data also stays] (Big Query)