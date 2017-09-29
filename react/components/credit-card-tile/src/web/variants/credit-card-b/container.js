
import React from 'react';
import styles from './container.json.css';

console.log('styles', styles);
const CreditCardTileContainer = () => {
  return (
    <credit-card-title>
      <div style={styles.container}>
        <div style={styles.creditCardWrapper}>
          <div>
            <img src="images/credit-card-a.png"  style={styles.creditCardImage} />
          </div>
          <div>
            <h3>Credit Card Name</h3>
          </div>
        </div>
        <div>

          <p>Credit Card Summary</p>

          <ul>
            <li>Benifit #1</li>
            <li>Benifit #2</li>
            <li>Benifit #3</li>
          </ul>

          <br/>

          <span>Terms and limitations apply.</span>

          <h3>Offer</h3>
          <p>Offer Details</p>

          <br />
          <div>
            <a href="#" style={styles.link}>Apply</a>
            <a href="#" style={styles.link}>Learn More</a>
          </div>

          <div>
            <a href="#">Offer</a>
            <a href="#">Rates</a>
            <a href="#">Fees</a>
            <a href="#">Benefit</a>
          </div>

        </div>
      </div>
    </credit-card-title>
  )
}

export default CreditCardTileContainer;
