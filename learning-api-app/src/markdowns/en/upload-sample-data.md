After running the above commands you will see that there are files created in respect of the schema that you have created in
the admin panel.

Instead of creating schema one by one. You can also alternatively upload sample data. To upload the data you need to create a **data** directory at the root of the project and create a sample.json (or you can pick any name for the json file).

Uploading the data without the schema definition will automatically create the folderacls.json and the schema
If schema is already is defined in the admin panel then you need to match the sample data json schema. Don't forget to npm run download:typings and npm run download:template