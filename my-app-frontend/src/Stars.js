import React from 'react';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfStars: 0
    };
  }

  handleStarClick = (num) => {
    this.setState({ numOfStars: num });
  }

  render() {
    const { numOfStars } = this.state;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const className = i <= numOfStars ? "star filled" : "star";
      stars.push(
        <span key={i} className={className} onClick={() => this.handleStarClick(i)}>
          &#9733;
        </span>
      );
    }

    return (
      <div className="sTars">
        {stars}
      </div>
    );
  }
}

export default Stars;
