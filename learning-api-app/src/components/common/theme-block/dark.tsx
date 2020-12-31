import * as React from 'react'

export const Dark = () => {
  React.useEffect(() => {
    // @ts-ignore
    import("@learning/styles/prism-dark.css").then(() => {});
  }, [])

  return <></>
}