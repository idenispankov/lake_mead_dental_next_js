import MainStyles from '../../styles/MainStyles.module.css';
import styles from './ContactUs.module.css';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { serviceId, templateId, userId } from '../../env';
import Image from 'next/image';
import contactImage from '../../public/images/contact_image_mobile.png';

export default function ContactUs() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [successButton, setSuccessButton] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [concern, setConcern] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
    emailjs.sendForm(serviceId, templateId, e.target, userId).then(() => {
      setSuccessMessage(false);
    });
    setName('');
    setEmail('');
    setPhone('');
    setConcern('');
    setMessage('');
  };

  useEffect(() => {
    if (
      email == '' ||
      name == '' ||
      concern == '' ||
      phone == '' ||
      message == ''
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [email, name, concern, phone, message]);

  return (
    <section className={styles.section}>
      <h2 className={MainStyles.heading}>Contact Us</h2>
      <p className={styles.section__text}>
        Experience a new kind of dental care, where you are always put first.
      </p>
      <div className={styles.section__container}>
        <div className={styles.section__container_image}>
          <Image
            src={contactImage}
            alt='happy people in dental office'
            layout='responsive'
            className={styles.image}
          />
        </div>
        <div className={styles.form__container}>
          <h2
            className={`${styles.section__heading} ${styles.form__container_heading}`}
          >
            Contact Us
          </h2>
          <p
            className={`${styles.section__text} ${styles.form__container_text}`}
          >
            Experience a new kind of dental care, where you are always put
            first.
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputs__group_container}>
              <div className={styles.label__inputs}>
                <label className={styles.form__label} htmlFor='name'>
                  Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  className={styles.form__input}
                  type='text'
                  name='name'
                  maxLength={20}
                  value={name}
                  placeholder='Your Name'
                />
              </div>
              <div className={styles.label__inputs}>
                <label className={styles.form__label} htmlFor='email'>
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.form__input}
                  type='email'
                  name='email'
                  maxLength={30}
                  value={email}
                  placeholder='Your Email'
                />
              </div>
            </div>

            <div className={styles.inputs__group_container}>
              <div className={styles.label__inputs}>
                <label className={styles.form__label} htmlFor='concern'>
                  Primary Concern
                </label>
                <input
                  onChange={(e) => setConcern(e.target.value)}
                  className={styles.form__input}
                  type='text'
                  name='concern'
                  maxLength={20}
                  value={concern}
                  placeholder='Your Concern'
                />
              </div>
              <div className={styles.label__inputs}>
                <label className={styles.form__label} htmlFor='tel'>
                  Phone
                </label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  className={styles.form__input}
                  type='text'
                  name='phone'
                  maxLength='20'
                  value={phone}
                  placeholder='Your Phone'
                />
              </div>
            </div>

            <label className={styles.form__label} htmlFor='message'>
              Message
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className={styles.form__textarea}
              type='text'
              placeholder='Your message here'
              name='message'
              maxLength={500}
              value={message}
            />
            {buttonDisabled ? (
              <>
                <span className={styles.error}>
                  {successMessage ? 'Success' : name && 'All Fields Required'}
                </span>
                <button
                  type='submit'
                  className={`${styles.form__button_disabled}`}
                  disabled={true}
                >
                  Submit
                </button>
              </>
            ) : (
              <button type='submit' className={styles.form__button}>
                Submit{' '}
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
