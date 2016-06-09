import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-bootstrap'
import marked from 'marked'

export const createEntry = ({ path, data }) => {
  const { title, createdAt, updatedAt, body, category, tags } = data
  console.log(data)
  const entryBody = { __html: marked(body) }
  return () => (
    <Grid className='entry'>
      <Row>
        <Col
          mdOffset={1} md={7}
          lgOffset={2} lg={6}
        >
          <h1>{title}</h1>
        </Col>
        <Col md={3} lg={2}>
          created at: {createdAt}, updated at: {updatedAt}
        </Col>
      </Row>
      <Row>
        <Col
          mdOffset={1} md={10}
          lgOffset={3} lg={6}
        >
          <div className='entryBody' dangerouslySetInnerHTML={entryBody}/>
        </Col>
      </Row>
    </Grid>
  )
}
