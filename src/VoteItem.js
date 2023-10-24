import React from 'react';

class VoteItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = { voteCount: 0 }
    }

    increaseVoteCount = () => {
        let currVoteCount = this.state.voteCount;
        this.setState({ voteCount : currVoteCount + 1});

        this.props.setResult(this.state.voteCount + 1, this.props.icon);
    }

    render() {
        return (
            <li className={'vote-item'}>
                <label>
                    <input type={'checkbox'} onChange={this.increaseVoteCount}/>
                    <img src={this.props.icon} className={'vote-item__icon'}/>
                    <p className={'vote-item__count'}>{this.state.voteCount}</p>
                </label>
            </li>
        )
    }
}

export default VoteItem;