import React from 'react';
import VoteItem from './VoteItem'

const icons = [
  {
    id: 1,
    img: 'icon1.svg'
  }, 
  {
    id: 2,
    img: 'icon2.svg'
  },
  {
    id: 3,
    img: 'icon3.svg'
  },
  {
    id: 4,
    img: 'icon4.svg'
  },
]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.results = [];
  }

  setResult = (votes, icon) => {
    this.results = this.results.filter(item => item.icon != icon);
    this.results.push({votes: votes, icon: icon});
  }

  getResult = () => {
    if (this.results.length != 0) {
      const max = this.results.reduce((a, b) => {
        return a.votes > b.votes ? a : b;
      })

      const maxVotes = this.results.filter(item => {
        return item.votes == max.votes;
      })

      console.log('max votes', maxVotes);

      let res = '';
      maxVotes.map(el => {
        res += `
          <li class='vote-item'>
              <img src=${el.icon} class={'vote-item__icon'}/>
              <p className={'vote-item__count'}>${el.votes}</p>
          </li>`
      })

      document.querySelector('#result').innerHTML = '';
      document.querySelector('#result').innerHTML = res;
    }
  }

  render() {
    return (
    <section className={'container'}>
      <ul className={'vote-container'}>
        {icons.map(item => (
          <VoteItem setResult={this.setResult} key={item.id} icon={require(`./svg/${item.img}`)}/>
        ))}
      </ul>
      <button type={'button'} className={"button"} onClick={this.getResult}>Show Results</button>
      <ul id={'result'}></ul>
    </section>
    )
  }
}

export default App;
