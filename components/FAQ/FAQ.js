import styles from './FAQ.module.css';
import { useState } from 'react';

export default function FAQ() {
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
      question: 'Mouth injury due to accident at work?',
      answer:
        'Our extensive experience in accident and workers compensation cases allows us to process the necessary documentation, secure approval, and complete all dental procedures for the patient in minimal time. Please pick up the necessary paperwork with information about your workers compensation dental emergency  to bring with you to the initial appointment, or ask your human resources office to fax that information to us. Fax Number: 702-304-9499',
      open: false,
    },
    {
      id: 9,
      question: 'What is a partial denture?',
      answer:
        'A Partial Denture is a removable appliance that replaces one or multiple missing teeth in the same jaw. There are several types of partial dentures that are available to patients. 1. Stay-plate, or temporary partial, is made out of acrylic with plastic teeth. It can replace all missing teeth in the same jaw, or just front ones for temporary aesthetics. 2. Metal Partial, silver or clear, is done for long-term use to replace partially missing teeth and restore chewing function to an optimum level. It is made of a metal skeleton that grasps the partial onto the remaining teeth with acrylic attached to it supporting plastic teeth. 3. Flexible partial, originally carrying the name Valplast after the company who introduced the concept in dentistry, is made purely out of plastic prepared under high temperatures. Over the years, this material evolved, giving patients many choices of colors to match any possible coloration of the gums. These partials are very durable besides being the primary choice for aesthetics.',
      open: false,
    },
    {
      id: 10,
      question: 'What is a full denture?',
      answer:
        'A Full Denture is a removable appliance that replaces all of the missing teeth in the same arch. Therefore, a full denture procedure can be done to replace either all upper or all lower teeth. They are fabricated by the dental laboratory and made individually for every single patient. In case of complete loss of teeth, dentures allow patients to eat, speak, and smile with confidence. ',
      open: false,
    },
    {
      id: 11,
      question: 'How is the denture repair process?',
      answer:
        'If your denture is broken, loose, or not fitting you properly, in most cases the denture can be repaired.To do so, you will come to our office as early as we open our doors. The doctor will evaluate your denture and will let you know what type of repair needs to be done. Then, we will proceed to take a mold of your mouth to send to the laboratory along with your denture. By the end of the day, you will come back to our office to have the repaired denture adjusted to your mouth. We will make sure there are no sharp edges and fits to your comfort. It is important to mention that as you start chewing with your newly repaired denture, you might get new sore spots. ​If this happens, you are welcome to come back to our office for extra adjustments for no extra charge.',
      open: false,
    },
    {
      id: 12,
      question: 'What is the difference between different whitening products?',
      answer:
        'The most common procedure in aesthetic dentistry is Teeth Whitening. Over the years the market got oversaturated with different whitening products. 1. In-Home whitening kit is provided by the dentist. Custom made trays will be fabricated to hold the whitening gel on the teeth. The most important part about the In-Home whitening kit is to use it as instructed every single day without interruption. 2. In-Office whitening is usually done by a dental professional in the office. This procedure usually takes 2 - 2 ½ hours. At the end of the procedure, the results will be very similar to In-Home whitening. The type of the whitening must be chosen individually, so whether the choice is to use over-the-counter products or products that are given by the dentist, make an appointment for a consultation first.  Dentists can explain everything to help make a better choice. Please remember that whitening only works on the natural teeth. Crowns, veneers, filling, and any type of artificial teeth will not change the color.',
      open: false,
    },
    {
      id: 13,
      question: 'Does Whitening make my teeth sensitive?',
      answer:
        'Every single whitening procedure gives tooth sensitivity. This is usually related to the dehydration of teeth.  This dehydration and sensitivity is temporary. Dentists can help get rid of that sensitivity much quicker by using concentrated fluoride treatment after whitening is completed.',
      open: false,
    },
    {
      id: 14,
      question: 'What are the different types of veneers?',
      answer:
        'Veneers come in two different types: porcelain veneers and composite veneers. 1. Porcelain veneers are  custom made of glass particles by the dental laboratory individually. This procedure involves a couple of appointments, preparation, impression, and the 2nd appointment is actual cementation. 2. Composite veneers are made by the dentist as a sculpture while patient is in the dental chair using plastic-like filling material. In either procedure, the result can be amazing; however, due to the difference in the material glass vs. plastic, the lifespan and their glossiness can be different. Not every patient is a candidate for both, so please make an appointment with your dentist for consultation.',
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
      <h1 className={styles.section__heading}>F.A.Q</h1>
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
