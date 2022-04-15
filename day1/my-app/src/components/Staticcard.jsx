import React from 'react'





 class Staticcard extends React.Component{
  render() {
    return (
        <div className='x'>
        <div className='a'><h2>Mobile Operating System</h2>
        <ul>
        <li>Android</li>
        <li>Blckberry</li>
        <li>iPhone</li>
        <li>Windows Phone</li>
        </ul>
        </div>
        

        <div className='b'><h2>Mobile Manufacturers</h2>
        <ul>
        <li className='square'>Samsung</li>
        <li className='square'>HTC</li>
        <li>Micromax</li>
        <li className='circle'>Apple</li>
        </ul>
        </div>
      </div>
    )
  }
}
export default Staticcard