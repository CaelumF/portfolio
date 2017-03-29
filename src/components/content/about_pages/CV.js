import React, {Component} from 'react'

import cv from '../../../images/CV 2017 14 3.pdf'
import ReactPDF from 'react-pdf';

export default class CV extends Component{
  onDocumentLoad({ total }) {
    this.setState({ total });
  }

  onPageLoad({ pageIndex, pageNumber }) {
    this.setState({ pageIndex, pageNumber });
  }

  render(){
    return(
      <div>
        <p>Inline pdf viewer coming soon. For now a .pdf of my CV can be found</p> <a href="https://s3-eu-west-1.amazonaws.com/cfsitecdn/new+folder/CV+2017+27+3.pdf">here</a>
      </div>
    )
  }
}
