export const CopyToClipboard = ({ stringifyData, removeTags }: any) => {
  const textArea = document.createElement('textarea')
  textArea.value = removeTags ? stringifyData.replace( /(<([^>]+)>)/ig, '') : stringifyData
  document.body.appendChild(textArea);
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
  return
}