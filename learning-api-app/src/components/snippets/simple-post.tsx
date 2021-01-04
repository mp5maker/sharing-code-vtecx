export const SimplePost = `
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

  axios.post("/d/users", [{ user }]);
`;


export const NestedPost =
`const req_data = [
    {
      link: [
        {
          ___href: \`/product/\${category_id}\`,
          ___rel: 'self'
        }
      ]
    },
    {
      link: [
        {
          ___href: \`/product/\${category_id}\${product_id}\`,
          ___rel: 'self'
        }
      ],
      title: \${category_id}_\${product_id}
    }
  ]

  axios.put('/d/product/', req_data)
`