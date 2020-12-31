export const SimpleUpdate = `
  const user = {
    "name": "Lezley Abelovitz",
    "japanese_name": "佐藤",
    "email": "labelovitz0@bandcamp.com",
    "gender": "Male",
    "company_name": "Gigabox",
    "job_title": "Actuary",
    "age": "41",
    "country": "Japan",
    "yoga": "true",
    "description": "Integer tincidunt ante vel ipsum. tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula."
  }

  const link = [
    {
        "___href": "/users/ah",
        "___rel": "self"
    }
  ]

  axios.put('/d/users', [ { user, link }])
`;
