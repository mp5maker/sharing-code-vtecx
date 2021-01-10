For the BigQuery integration, you need to have a google account. You need to get familiar with the google console.

* Go to Google Cloud Platform
* IAM And Admin > Service Accounts > Action > Create Key > (create JSON type for private key)
* Copy the json contents to setup/_settings as bigquery.json
* Update the properties.xml
* Give Permission to the User


Next you should pin the data
+ Add Data -> Pin Data -> To the tab (All)

After that you can query like an regular SQL to fetch the data. There are some differences regular database and SQL.

After setting in the google console, you also need to update your properties.xml.

First in BigQuery we never delete the data. Therefore if we create the a data using post and later on try to update it. We will not update in the traditional fashion. Instead we would be creating another data. In BigQuery data is never deleted. If we delete a data we just change one of the attributes which is **deleted** to true.

We would be using BigQuery functions as server sides. Therefore, if we can write all the logics using vtecxapi in server side javascript, in the front end we would just be calling

```
  axios.get('/s/get-big-query')
```

/d/ => is mostly used for the server

/s/ => is mostly used for BigQuery, upload pictures and server side javascript

When we would be creating a new data using BigQuery first we need to store the data in our database as well as BigQuery.
BigQuery is mostly used to fetch large amounts of data and it is very helpful when searching, sorting and filtering data.


To create new data [POST]

1. We save the data to our database [creates a new data] (Our database)

2. We save the data in BigQuery [creates a new data] (BigQuery)


To update the data [PUT]

1. We update the data to our database [updates existing data] (Our Database)

2. We save the data in BigQuery [creates a new data along with the previous data] (BigQuery)


To delete the data [DELETE]

1. We delete the data from our database [deletes the existing data] (Our Database)

2. We change the delete attribute to true [creates a new data with deleted false attribute and previous data also stays] (BigQuery)
