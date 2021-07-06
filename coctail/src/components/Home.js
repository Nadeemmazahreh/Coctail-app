import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Item from './Item';



class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allData: []
        }
    }

    componentDidMount = async () => {
        const server = process.env.SERVER_URL
        const allData = await axios.get(`${server}/all`)

        this.setState({
            allData: allData.data
        })
        console.log(allData)
    }

    addToFav = async (idx) => {
        const server = process.env.SERVER_URL;
        const object = {
            name : this.state.allData[idx].strDrink,
            img : this.state.allData[idx].strDrinkThumb,
        }
        await axios.post(`${server}/addToFav`,object)
    }   

    render() {
        return (
            <>
            <Row xs={1} md={1}>
            {this.state.allData.map((item,idx) =>(
                <Item
                idx = {idx}
                item = {item}
                addToFav = {this.addToFav}
                />
            ))}  
            </Row>
            </>
        )
    }
}

export default Home;