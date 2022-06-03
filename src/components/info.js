import { Component } from "react";
import backgroudImg from "../assets/imgae/people-playing-casino.jpg"
import defaultImg from "../assets/imgae/dice.png"
import dice1 from "../assets/imgae/1.png"
import dice2 from "../assets/imgae/2.png"
import dice3 from "../assets/imgae/3.png"
import dice4 from "../assets/imgae/4.png"
import dice5 from "../assets/imgae/5.png"
import dice6 from "../assets/imgae/6.png"


class Dice extends Component {
    constructor(props){
        super(props);

        this.state = {
            dice: "",
            imgSrc: defaultImg
        };
    }
    rollDice = (value) => {
        const randomNumber = Math.floor(Math.random() * 6) + 1
        console.log(randomNumber)
        if (randomNumber == 1){
            this.setState({
                dice: randomNumber,
                imgSrc: dice1
            })
        }
        if (randomNumber == 2){
            this.setState({
                dice: randomNumber,
                imgSrc: dice2
            })
        }
        if (randomNumber == 3){
            this.setState({
                dice: randomNumber,
                imgSrc: dice3
            })
        }
        if (randomNumber == 4){
            this.setState({
                dice: randomNumber,
                imgSrc: dice4
            })
        }
        if (randomNumber == 5){
            this.setState({
                dice: randomNumber,
                imgSrc: dice5
            })
        }
        if (randomNumber == 6){
            this.setState({
                dice: randomNumber,
                imgSrc: dice6
            })
        }
    }

    render() {
        return (
            <>
            <div>
                <h3>Devcamp Basic Lucky Dice</h3>
                <img src={backgroudImg} class="img-thumbnail"></img>
            </div>
            <div>
            <img src={this.state.imgSrc} class="img-thumbnail" style={{maxWidth:"150px"}}></img>
            <p>Kết quả là : {this.state.dice}</p>
            </div>
            <div>
            <button className="btn btn-success mt-3" onClick={this.rollDice}>Ném</button>
            </div>
            </>
        );
    }
    }

export default Dice;