import React from 'react'
import { connect } from 'react-redux'
import Word from './component/Word'
import { fetchWord, editWord } from '../../app/duck' 

class WordContainer extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchWord(this.props.params.id))
    }

    onSubmit(value) {
        this.props.dispatch(editWord(value))
    }

    render() {
        return this.props.word ?
            <Word onSubmit={this.onSubmit.bind(this)} initialValues={this.props.word.toJS()} />
            :
            null
    }
}

const mapStateToProps = ({ appReducer }) => ({
    word: appReducer.get("word")
})

export default connect(mapStateToProps)(WordContainer)
