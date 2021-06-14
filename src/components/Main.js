
import React, { Component } from 'react'
import DigimonsCard from './DigimonsCard';
import axios from 'axios';

class Main extends Component {
   
    constructor(props){
        super(props);
        this.state={
            serverURL:process.env.REACT_APP_SERVER,
            showDigimons:false,
            digimons:[]
        }
    }


    // `${this.state.serverURL}
 
  componentDidMount = async ()=>{
      const digimons = await axios.get(`http://localhost:3003/pictures?digimonsList=digimons`)
      this.setState({
        showDigimons:true,
        digimons: digimons.data
      })
  }

  AddToFavFun = async (itemData)=>{
      await axios.post(`http://localhost:3003/addFav`,itemData)
  }
    render() {
        return (
            <>
              {this.state.showDigimons && this.state.digimons.map(item =>{
                  return(<DigimonsCard
                    item={item}
                    AddToFav={this.AddToFavFun}
                  />)
              })}
            </>
        )
    }
}

export default Main
