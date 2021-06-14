import React, { Component } from 'react'

class FormUpdate extends Component {
    render() {
        return (
            <div>
                <form onSubmit={e=>this.props.updated(e)}>
                    <label>Name:</label>
                    <input type="text" value={this.props.digimonsName} onChange={this.props.updateNameFun}/>
                    
                    <label>Image:</label>
                    <input type="text" value={this.props.digimonsImg} onChange={this.props.updateImgFun}/>

                    <label>Level:</label>
                    <input type="text" value={this.props.digimonsLevel} onChange={this.props.updateLevelFun}/>

                    <input type='submit' value='Update'/>
                </form>

            </div>

        )
    }
}

export default FormUpdate
