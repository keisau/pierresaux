import React, { Component } from 'react'
import { Grid, Col, Row, ListGroup, ListGroupItem, Image, Tooltip, OverlayTrigger } from 'react-bootstrap'

const tooltips = [
  'A cup of coffee',
  'A cup of coffee',
  'Sai Kung - a beautiful place',
  'A cup of coffee',
  'I love spaghetti!',
  'Sai Kung - a beautiful place'
]
const images = []
for (let i = 1; i <= 6; ++i) {
  images.push({
    tooltip: (<Tooltip id={`photography${i}`}>{tooltips[i - 1]}</Tooltip>),
    src: require(`../../../images/hobbies/photography/${i}.jpg`)
  })
}

const IMAGE_PER_ROW = 3

export const Photography = () => {
  const renderImages = () => {
    let retval = []
    for (let i in images) {
      if (i % IMAGE_PER_ROW === 0) {
        let columns = []
        for (let j = 0; j < IMAGE_PER_ROW; j++) {
          const sum = parseInt(i) + parseInt(j)
          if (sum >= images.length) {
            break
          }

          const index = parseInt(i) + parseInt(j)
          const { src, tooltip } = images[index]
          columns.push(
            <Col lg={4} md={4} sm={4} key={index} >
              <OverlayTrigger placement='top' overlay={tooltip} >
                <Image src={src} thumbnail />
              </OverlayTrigger>
            </Col>
          )
        }

        retval.push(<Row key={i / IMAGE_PER_ROW}> { columns } </Row>)
      } else {
        continue
      }
    }
    return retval
  }
  return (
    <div id='photography' className='container'>
      <div id='title'>
        <h3>
          Gallery
        </h3>
        Photography is one of my hobbies. I usually take snapshots. Well, as you can see, I do love coffee <i className="fa fa-heart-o" aria-hidden="true"></i>.
      </div>
      <Grid >
        { renderImages() }
      </Grid>
    </div>
  )
}
