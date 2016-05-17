import React from 'react'
import { Grid, Col, Row } from 'react-bootstrap'

import { EmailLogo } from './Logos'

export default () => (
  <Grid id='about'>
    <Row>
      <Col xs={8} md={5} lg={4} xsOffset={2} mdOffset={2} lgOffset={2}>
        <h1><i className="fa fa-frown-o"></i> 404</h1>
        <p>Page not found. Please confirm the URL is correct. If this keeps happening, please report to me:</p>
        <EmailLogo>keisau.ching@pierresaux.me</EmailLogo>
      </Col>
    </Row>
  </Grid>
)
