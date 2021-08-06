import styles from './FAQ.module.css';
import { useState } from 'react';

export default function FAQ() {
  // const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState([
    {
      id: 1,
      question: 'Do you see kids?',
      answer:
        "We love kids! However, to ensure the best quality of service, we prefer to work with kids five years of age and older. Our staff is highly trained to calm them down. If the cooperation of your kid compromises their safety, we may refer them to a kid's specialist.",
      open: false,
    },
    {
      id: 2,
      question: 'How can I pay for my treatment?',
      answer:
        'We accept cash, all major credit cards (VISA, MasterCard, Discover, American Express), Debit Cards and Care Credit',
      open: false,
    },
    {
      id: 3,
      question: 'Do you have a payment plan options?',
      answer:
        'We provide our patients with in-house 0% financing options, or you can apply for Care Credit in our office.',
      open: false,
    },
    {
      id: 4,
      question: 'What should I expect on my first visit?',
      answer:
        'A comprehensive oral examination and any necessary X-rays. If you have had recent X-rays in another office, please bring them with you to your new patient appointment. This will help in determining if any additional X-rays are necessaryAll other appointments will be scheduled once the examination has been completed. We take the time to listen to your needs and concerns and offer different treatment options to adjust to your budget​We’ll help you make the best choice according to your individual needs. ​',
      open: false,
    },
    {
      id: 5,
      question: 'How soon should I see a dentist?',
      answer:
        'Immediately. Getting to a dentist within 30 minutes can make the difference between saving or losing a tooth. It is essential to be as detailed as possible regarding the nature of your emergency when you call the office for an emergency appointment.',
      open: false,
    },
    {
      id: 6,
      question: 'Should I go to the ER for a dental emergency?',
      answer:
        '​With the COVID-19 crisis, we join the American Dental Association in urging people to avoid the local ER for dental treatment in order  to preserve capacity for  emergency cases. Additionally, it’s important to note that many ERs are simply not equipped to treat certain emergency dental needs. For example, some issues the local ER or Urgent Care may not be able to help include: A tooth that needs to be pulled. Root canal or other emergency dental work. Lost or cracked  filling. Denture repair. Re-cementing of crowns, bridges, or veneers. Broken, severely chipped, or lost tooth.',
      open: false,
    },
    {
      id: 7,
      question: 'Can I have dental work done if I am pregnant?',
      answer:
        'If you have a dental emergency while you are pregnant, First, call your OBGYN and provide them with our fax number requesting medical clearance with all the precautions to be faxed to our office prior to your arrival. Fax Number: 702-304-9499 ',
      open: false,
    },
    {
      id: 8,
      question: 'Mouth injury due to accident at work',
      answer:
        'Our extensive experience in accident and workers compensation cases allows us to process the necessary documentation, secure approval, and complete all dental procedures for the patient in minimal time. Please pick up the necessary paperwork with information about your workers compensation dental emergency  to bring with you to the initial appointment, or ask your human resources office to fax that information to us. Fax Number: 702-304-9499',
      open: false,
    },
  ]);

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
      <h1 className={styles.section__header}>F.A.Q</h1>
      <p className={styles.section__text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        facere?
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

{
  /* <div item={item} onClick={() => showAnswer(item.id)}>
  <h2
    className={`${styles.container__question} ${
      item.open && styles.container__question_open
    }`}
  >
    {item.question}{' '}
    <div className={`${styles.button} ${item.open && styles.button_open}`}>
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
  </h2>
  <p
    className={`${styles.container__answer} ${
      item.open && styles.container__answer_open
    }`}
  >
    {item.answer}
  </p>
</div>; */
}
