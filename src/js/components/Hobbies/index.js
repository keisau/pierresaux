import React, { Component } from 'react'
import { Grid, Col, Row, ListGroup, ListGroupItem, Image, Tooltip, OverlayTrigger } from 'react-bootstrap'

const images = [
  {
    link: '/hobbies/photography',
    title: 'Photography',
    tooltip: (<Tooltip id='hobbiesPhotography'>Photography</Tooltip>),
    src: require('../../../images/hobbies/1.jpg')
  }
]
const IMAGE_PER_ROW = 3

export const Hobbies = ({ children }) => (
  <div id='hobbies'>
    { React.Children.only(children) }
  </div>
)

export const HobbiesIndex = () => {
  const renderImages = () => {
    let retval = []
    for (let i in images) {
      if (i % IMAGE_PER_ROW === 0) {
        let columns = []
        for (let j = 0; j < IMAGE_PER_ROW; j++) {
          if (i + j >= images.length) {
            break
          }

          const index = parseInt(i) + parseInt(j)
          const { link, src, title, tooltip } = images[index]
          columns.push(
            <OverlayTrigger key={index} placement='top' overlay={tooltip} >
              <Col lg={4} md={4} sm={4} >
                <a href={link} >
                  <h3>{title}</h3>
                  <Image src={src} thumbnail />
                </a>
              </Col>
            </OverlayTrigger>
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
    <Grid id='hobbiesMenu'>
      { renderImages() }
    </Grid>
  )
}

export { Photography } from './Photography'
