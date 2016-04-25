import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

export default class extends Component {
	/* override to create a custom blog page */
	getEntry() {
		return (
			<div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu mauris dolor. Maecenas commodo porta neque, ac ultrices lorem iaculis ut. Morbi metus leo, iaculis id dignissim et, condimentum id sem. Proin metus enim, facilisis in ligula id, laoreet iaculis elit. Morbi posuere lacus at dui interdum, nec posuere libero tempor. Phasellus eget turpis nec quam ullamcorper eleifend eu eu nunc. Donec a tellus quam. Fusce est tellus, mattis tempor eleifend efficitur, tempus sed dui. Nulla facilisi. Morbi at augue ornare enim bibendum pellentesque.
				</p>

				<p>
					Phasellus vel scelerisque odio. Ut fringilla nunc eu diam vestibulum, a lobortis quam ultrices. Curabitur dictum sed ligula vitae dictum. Nunc eu quam tincidunt, interdum metus ut, vehicula urna. Integer augue erat, ullamcorper at ipsum eget, volutpat aliquam mauris. Ut bibendum, eros sed feugiat vestibulum, odio massa mattis eros, vel dignissim nisi turpis id lorem. Vestibulum ullamcorper pulvinar elit sit amet ornare. Aenean in urna convallis, consectetur neque eu, vestibulum eros. Morbi molestie dapibus ipsum, eu egestas sapien euismod a. Suspendisse ullamcorper mi libero, id volutpat erat condimentum sit amet. Mauris non nisi eros. Nulla facilisi.
				</p>

				<p>
					Etiam pellentesque varius nibh id vehicula. Morbi placerat velit diam. Praesent nec dictum risus, ac fringilla nunc. Suspendisse potenti. Vestibulum eu aliquet felis. Duis eget sapien at arcu imperdiet congue. Ut finibus dui vitae erat gravida, eget euismod dolor rutrum. Nunc sit amet lorem neque.
				</p>

				<p>
					Donec maximus mi mi, sit amet vestibulum elit pulvinar non. Praesent vitae fringilla mauris, quis ornare enim. Donec blandit quam sem, placerat consectetur tellus porta eu. Vestibulum sit amet mauris et lectus fermentum tincidunt. Aenean egestas, risus sed ultricies tempus, nulla nibh lobortis nisl, vel lacinia nisi turpis ac nunc. Nulla maximus metus non nibh consequat dignissim. Donec cursus mi sit amet elit hendrerit, ut accumsan tortor consequat.
				</p>

				<p>
					In gravida mi sed mauris maximus semper. Phasellus tellus elit, commodo et euismod id, mattis maximus quam. Fusce eu massa ac diam tincidunt luctus. Nam efficitur volutpat rhoncus. Phasellus ut sapien suscipit, aliquam elit ut, ultrices justo. Nullam fringilla odio mauris, sit amet auctor metus vehicula sodales. Vestibulum fringilla ex lorem, faucibus vulputate eros luctus vitae.
				</p>
			</div>
		)
	}
	getDates() {
		return {
			created: '2016-04-25 16:10:12',
			updated: '2016-04-25 16:44:45',
		}
	}

	_renderContent() {
		return <div className='blogEntryContent' key={1}>
			{ this.getEntry() }
		</div>
	}
	_renderFooter() {
		const { created, updated } = this.getDates()
		return (
			<div className='blogEntryFooter' key={2}>
				{
					`created at: ${created}, updated at: ${updated}`
				}
			</div>
		)
	}
	_renderEntryPreview() {
		return this._renderContent()
	}
	render() {
		return (
			<div className='blogEntry'>
				<Col lg={2} md={1} sm={0}></Col>
				<Col lg={8} md={10} sm={12} >
					{
						[ this._renderContent(), this._renderFooter() ]
					}
				</Col>
				<Col lg={2} md={1} sm={0}></Col>
			</div>
		)
	}
}
