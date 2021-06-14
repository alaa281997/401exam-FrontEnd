import React, { Component } from 'react'
import axios from 'axios';
import FavCard from './FavCard'
import FormUpdate from './FormUpdate'
class FavoriteDigimons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverURL: process.env.REACT_APP_SERVER,
            showDigimons: false,
            showForm: false,
            digimons: [],
            digimonsName: '',
            digimonsLevel: '',
            digimonsImg: '',
            index: 0
        }
    }
    componentDidMount = async () => {
        const digimons = await axios.get(`http://localhost:3003/getFav`)
        this.setState({
            showDigimons: true,
            digimons: digimons.data
        })
    }


    deleteFavFun = async (idx) => {
        const id = this.state.digimons[idx]._id;
        const digimons = await axios.get(`http://localhost:3003/delete/${id}`)
        this.setState({
            digimons: digimons.data
        })
    }

    showUpdateFormFun = (idx) => {
        const updatedDigimos = this.state.digimons[idx];
        this.setState({
            showForm: true,
            digimonsName: updatedDigimos.name,
            digimonsImg: updatedDigimos.img,
            digimonsLevel: updatedDigimos.level,
            index: idx
        })
    }

    updateNameFun = (e => this.setState({
        digimonsName:e.target.value
    }))
    updateImgFun = (e => this.setState({
        digimonsImg:e.target.value
    }))
    updateLevelFun = (e => this.setState({
        digimonsLevel:e.target.value
    }))

    updated = async (e) => {
        e.preventDefault();
        const id = this.state.digimons[this.state.index]._id;
        const digimonsUpdate = {
            digimonsName:this.state.digimonsName,
            digimonsImg:this.state.digimonsImg,
            digimonsLevel:this.state.digimonsLevel
        }

        const digimonsUpdated = await axios.put(`http://localhost:3003/update/${id}`, digimonsUpdate)
        this.state({
            digimons :digimonsUpdated.data
        })
    }
    render() {
        return (
            <>
                {this.state.showForm &&
                    <FormUpdate

                        digimonsName={this.state.digimonsName}
                        digimonsLevel={this.state.digimonsLevel}
                        digimonsImg={this.state.digimonsImg}
                        updateNameFun={this.updateNameFun}
                        updateImgFun={this.updateImgFun}
                        updateLevelFun={this.updateLevelFun}
                        updated={this.updated}

                    />}


                {this.state.showDigimons && this.state.digimons.map((item, idx) => {
                    return (<FavCard
                        item={item}
                        idx={idx}
                        deleteFav={this.deleteFavFun}
                        updateFav={this.showUpdateFormFun}
                    />)
                })}

            </>
        )
    }
}

export default FavoriteDigimons
