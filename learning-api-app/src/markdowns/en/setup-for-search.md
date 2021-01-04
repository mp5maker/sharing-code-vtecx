To apply full text search and indexing we need to go through the template file

Inside the right tags there are some important configuration that we need to setup.
Let us consider the example below. If you see the contents inside the <rights> tag
you will see first. Indexing and full text search will help us to return query result faster

:/ allows to index the property of email from user

[parent].[child]:/[folderacl]

    user.email:/users


;/ allows to add full text search index of desciption

[parent].[child];/[folderacl]

    user.description;/users

user.description;/users


We can allow multiple full text search indexing by this

[parent].[child]|[parent].[child];/users

user.description|user.name|user.email;/users

