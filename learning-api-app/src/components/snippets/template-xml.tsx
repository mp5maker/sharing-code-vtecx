export const FullTextSearchTemplate =
`<?xml version="1.0" encoding="UTF-8" ?>
<feed>
<entry>
  <content type="text/html">user
 name(string)
 japanese_name(string)
 email(string)
 gender(string)
 company_name(string)
 job_title(string)
 age(string)
 country(string)
 yoga(string)
 description(string)
result
 gender
 yoga_yes
 yoga_no
 yoga
 united_states
 japan
 bangladesh
 total
 five_twenty
 twenty_thirty
 thirty_forty
 fourty_fifty
 fifty_sixty
 country
 male
 female
 other
</content>
  <contributor>
    <uri>urn:vte.cx:acl:/_group/$admin,CRUD</uri>
  </contributor>
  <contributor>
    <uri>urn:vte.cx:acl:+,R</uri>
  </contributor>
  <link href="/_settings/template" rel="self"/>
  <rights>user.email:/users
user.description|user.name|user.email;/users
</rights>
</entry>
`;