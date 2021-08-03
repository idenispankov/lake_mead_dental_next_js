import styles from './ContactUs.module.css';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { serviceId, templateId, userId } from '../../env';

export default function ContactUs() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [concern, setConcern] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs.sendForm(serviceId, templateId, e.target, userId);
    e.target.reset();
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
      <h2 className={styles.section__heading}>Contact Us</h2>
      <p className={styles.section__text}>
        Experience a new kind of dental care, where you are always put first.
      </p>
      <div className={styles.section__container}>
        <div className={styles.section__container_image}></div>
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
                  placeholder=''
                  name='name'
                  maxLength={20}
                  value={name}
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
                  placeholder=''
                  name='email'
                  maxLength={20}
                  value={email}
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
                  placeholder=''
                  name='concern'
                  maxLength={20}
                  value={concern}
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
                  placeholder=''
                  name='phone'
                  maxLength='20'
                  value={phone}
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
              placeholder=''
              name='message'
              maxLength={500}
              value={message}
            />
            {buttonDisabled ? (
              <>
                <span className={styles.error}>All Fields Required</span>
                <button
                  type='submit'
                  className={`${styles.form__button_disabled}`}
                  disabled={true}
                >
                  Submit
                </button>
              </>
            ) : (
              <button
                type='submit'
                className={styles.form__button}
                disabled={true}
              >
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
