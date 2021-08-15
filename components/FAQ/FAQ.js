import MainStyles from '../../styles/MainStyles.module.css';
import styles from './FAQ.module.css';
import { useState } from 'react';
import faqData from '../../data/faqData';

export default function FAQ() {
  const [data, setData] = useState(faqData);

  const showAnswer = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
        return item;
      })
    );
  };

  return (
    <section className={styles.section}>
      <h1 className={MainStyles.heading}>F.A.Q</h1>
      <p className={styles.section__text}>
        This page answers some of the frequently asked questions
      </p>
      <div className={styles.container}>
        {data.map((item) => {
          return (
            <div key={item.id} className={styles.container__item}>
              <div
                className={styles.question__container}
                onClick={() => showAnswer(item.id)}
              >
                <h2
                  className={`${styles.question__container__text} ${
                    item.open && styles.question__container__text_open
                  }`}
                >
                  {item.question}
                </h2>
                <div
                  className={`${styles.button} ${
                    item.open && styles.button_open
                  }`}
                >
                  <div
                    className={`${styles.button__before} ${
                      item.open && styles.button__before_open
                    }`}
                  ></div>
                  <div
                    className={`${styles.button__present} ${
                      item.open && styles.button__present_open
                    }`}
                  ></div>
                </div>
              </div>
              <p
                className={`${styles.answer} ${
                  item.open && styles.answer__open
                }`}
              >
                {item.answer}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
