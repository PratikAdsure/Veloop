import styles from '../../styles/HowExchangeWorks.module.css';

const steps = [
  {
    number: 1,
    title: 'Select an exchange option',
    description: 'Choose from available conversion opportunities.'
  },
  {
    number: 2,
    title: 'Review conversion',
    description: 'Check the Gems required and VEs received.'
  },
  {
    number: 3,
    title: 'Confirm',
    description: 'Click on Convert and complete the process.'
  },
  {
    number: 4,
    title: 'Receive VEs',
    description: 'Your VEs will be added to your balance instantly.'
  }
];

function HowExchangeWorks() {
  return (
    <section className={styles.panel}>

      <h3>☼ How It Works?</h3>

      {steps.map((step) => (
        <div className={styles.step} key={step.number}>

          <span>{step.number}</span>

          <div>
            <strong>{step.title}</strong>
            <p>{step.description}</p>
          </div>

        </div>
      ))}

    </section>
  );
}

export default HowExchangeWorks;