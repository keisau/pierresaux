import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-bootstrap'

export * from './entry'

export const Blog = ({ children }) => (
  <div id='blog' >
    { React.Children.only(children) }
  </div>
)

export const BlogIndex = () => (
  <Grid id='blogIndex'>
    <h1>Under Construction</h1>
  </Grid>
)
