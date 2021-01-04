export const DeleteMultiplePhoto = `
const request = [
    {
      id: '?_delete',
      link: [
        {
          ___href: '/_html/img/sample-1.png',
          ___rel: 'self'
        }
      ]
    },
    {
      id: '?_delete',
      link: [
        {
          ___href: '/_html/img/sample-2.png',
          ___rel: 'self'
        }
      ]
    },
]

axios.put('d', request)`;