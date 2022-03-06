import { css } from '@emotion/react'
import React from 'react'
import GridLoader from 'react-spinners/GridLoader'
const Loading = () => {
  const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
`;
  return (
    <>
    <div className="loaderSecondaryContainer">
        <GridLoader color='#0D1A1F' css={override} size={50} margin={2} />
    </div>
</>
  )
}

export default Loading