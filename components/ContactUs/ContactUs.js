import styles from './ContactUs.module.css';

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
    e.target.reset();
  };

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
                  className={styles.form__input}
                  type='text'
                  placeholder=''
                  name='name'
                />
              </div>
              <div className={styles.label__inputs}>
                <label className={styles.form__label} htmlFor='email'>
                  Email
                </label>
                <input
                  className={styles.form__input}
                  type='email'
                  placeholder=''
                  name='email'
                />
              </div>
            </div>

            <div className={styles.inputs__group_container}>
              <div className={styles.label__inputs}>
                <label className={styles.form__label} htmlFor='concern'>
                  Primary Concern
                </label>
                <input
                  className={styles.form__input}
                  type='text'
                  placeholder=''
                  name='concern'
                />
              </div>
              <div className={styles.label__inputs}>
                <label className={styles.form__label} htmlFor='tel'>
                  Phone
                </label>
                <input
                  className={styles.form__input}
                  type='phone'
                  placeholder=''
                  name='phone'
                />
              </div>
            </div>

            <label className={styles.form__label} htmlFor='message'>
              Message
            </label>
            <textarea
              className={styles.form__textarea}
              type='text'
              placeholder=''
              name='message'
            />
            <button className={styles.form__button}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
