import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, stepChanged } from './counterActions'


const Counter = (props) => (
    <div>ok</div>
)

const mapStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps = dispatch => bindActionCreators
    (
    {
        inc,
        dec,
        stepChanged
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)