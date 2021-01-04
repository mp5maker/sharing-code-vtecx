export const DeleteMultiplePhoto = `
const request = [
    {
      id: '?_delete',
      link: [
        {
          ___href: '/_html/img/report_1603884471368_190.png',
          ___rel: 'self'
        }
      ]
    },
    {
      id: '?_delete',
      link: [
        {
          ___href: '/_html/img/report_1603884471415_191.png',
          ___rel: 'self'
        }
      ]
    },
]

axios.put('d', request)`;