import { useState } from 'react';

import {
  exchangeOptions,
  initialHistory
} from '../../data/exchangeData';

import ExchangeHero from '../../Components/exchange/ExchangeHero';
import BalanceOverview from '../../Components/exchange/BalanceOverview';
import ExchangeCard from '../../Components/exchange/ExchangeCard';
import ExchangeModal from '../../Components/exchange/ExchangeModal';
import ConversionSuccess from '../../Components/exchange/ConversionSuccess';
import ExchangeHistory from '../../Components/exchange/ExchangeHistory';
import ExchangeRules from '../../Components/exchange/ExchangeRules';
import HowExchangeWorks from '../../Components/exchange/HowExchangeWorks';
import Sidebar from '../../Components/exchange/Sidebar';
import Topbar from '../../Components/exchange/Topbar';

import styles from '../../styles/ExchangeCenter.module.css';

function ExchangeCenter() {

  const [gems, setGems] = useState(420);

  const [ves, setVes] = useState(3850);

  const [selected, setSelected] = useState(null);

  const [success, setSuccess] = useState(null);

  const [history, setHistory] = useState(initialHistory);


  function confirmConversion(option) {

    const conversion = {
      gems: option.gems,
      ves: option.ves
    };

    setGems((value) => value - option.gems);

    setVes((value) => value + option.ves);

    setHistory((items) => [
      {
        id: Date.now(),
        ...conversion,
        date: new Date().toLocaleString(),
        status: 'Completed'
      },
      ...items
    ]);

    setSelected(null);

    setSuccess(conversion);

  }


  return (

    <div className={styles.app}>

      <Sidebar />

      <main className={styles.main}>

        <Topbar
          gems={gems}
          ves={ves}
        />

        <div className={styles.layout}>

          <div className={styles.centerColumn}>

            <div className={styles.heroWrap}>

              <ExchangeHero />

              <BalanceOverview
                gems={gems}
                ves={ves}
              />

            </div>


            <section className={styles.conversions}>

              <div className={styles.sectionTitle}>

                <span>🎁</span>

                <div>
                  <h2>Available Conversions</h2>

                  <p>
                    Choose a conversion that works best for you.
                  </p>
                </div>

              </div>


              <div className={styles.cards}>

                {exchangeOptions.map((option) => (

                  <ExchangeCard
                    key={option.id}
                    option={option}
                    onConvert={setSelected}
                  />

                ))}

              </div>

            </section>


            <div className={styles.trust}>

              <span>🛡️</span>

              <div>
                <b>Safe • Fair • Transparent</b>

                <small>
                  Your rewards are secure with VELOOP Rewards.
                </small>
              </div>

              <em>
                Small Steps<br />
                Big Rewards
              </em>

              <span>♧</span>

            </div>

          </div>


          <aside className={styles.rightColumn}>

            <HowExchangeWorks />

            <ExchangeRules />

            <ExchangeHistory
              history={history}
            />

          </aside>

        </div>

      </main>


      <ExchangeModal
        option={selected}
        gems={gems}
        onClose={() => setSelected(null)}
        onConfirm={confirmConversion}
      />


      <ConversionSuccess
        conversion={success}
        onClose={() => setSuccess(null)}
      />

    </div>

  );

}

export default ExchangeCenter;