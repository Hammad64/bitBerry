import React from 'react'
import Graphs from "../../Assets/Images/Group222.png";
import './Graphs.css'

function Graph() {
  return (
    <div className='graph-over' id='Brp-pool'>
        <div className='container graph-bg'>
        <div className='row d-flex justify-content-center'>
        <div className='col-md-8 graph-margin'>
        <img src={Graphs} className="img-fluid graph-img"/>

        </div>
        </div>

        </div>
    </div>
  )
}

export default Graph