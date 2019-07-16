import React from 'react';

function withMobileSize(Component) {
    return class extends React.Component {
        state = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        
        constructor(props) {
            super(props);
            this.handleWidowResize = this.handleWidowResize.bind(this);
        }

        componentDidMount() {
            window.addEventListener('resize', this.handleWidowResize, false)
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.handleWidowResize);
        }

        handleWidowResize() {
            this.setState({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        render() {
            return (
                <Component {...this.props} {...this.state} />
            )
        }
    }
}

export default withMobileSize;