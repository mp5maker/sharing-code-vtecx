Go to your admin panel page, go to the endpoint management as given below. Then create a endpoint . Let us create a endpoint **users**.

We need to download a file to our project which
is folderacls.json. It should be in your-app-directory/setup/_settings directory

We are downloading this file because if we want to share our endpoints with other developers. Therefore, any changes to the endpoint can be uploaded and download using the npm commands

After creating the endpoint, we need to define our schemas in entry schema management.

You need to be careful when making schema. As in now, it is little bit difficult to modify the schema once its made

We will create a schema similar to this

user <br/>
 &nbsp; name <br/>
 &nbsp; japanese_name <br/>
 &nbsp; email <br/>
 &nbsp; gender <br/>
 &nbsp; company_name <br/>
 &nbsp; job_title <br/>
 &nbsp; age <br/>
 &nbsp; country <br/>
 &nbsp; yoga <br/>
 &nbsp; description <br/>