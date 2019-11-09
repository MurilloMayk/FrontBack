import React, {Component} from 'react';

export class HomeCard extends Component {
    render() {
        return (
                <div>
                <div className="col">
                    <div className="card" >
                        <img src={process.env.PUBLIC_URL + '/img/' + this.props.image} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title} </h5>
                            <p className="card-text">{this.props.text}</p>
                            <a href="./Infocamp" className="btn btn-primary">Veja mais...</a>
                        </div>
                    </div>
                </div> 
                </div>
        )
    }
};

export default HomeCard;