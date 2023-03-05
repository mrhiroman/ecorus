import React, { useRef } from 'react'

import styles from './LoginModal.module.sass'

import cross from 'assets/cross.svg'
import { Portal } from 'components/Portal'
import { useModalClose } from 'hooks/useModalClose'

export const LoginModal = (props: {isVisible: boolean, onModalClose: () => void}) => {
    const ref = useRef<HTMLDivElement>(null)

    useModalClose(ref, () => props.onModalClose())
  return (<>
  {props.isVisible &&
    <Portal>
        <div className={styles.overlay} ref={ref}>
            <div className={styles.window}>
                <div className={styles.upper}>
                    <h1>Вход</h1>
                    <div onClick={() => props.onModalClose()} className={styles.close}>
                        <img src={cross} alt="cross" />
                    </div>
                </div>
                <div className={styles.inputs}>
                    <input type='text' placeholder='Телефон' className={styles.input} />
                    <input type='password' placeholder='Пароль' className={styles.input} />
                </div>
                <div className={styles.buttons}>
                    <div className={styles.buttonPrimary}>Войти</div>
                    <div className={styles.buttonsSmall}>
                        <div className={styles.buttonLink}>Войти с помощью смс</div>
                        <div className={styles.buttonLink}>Регистрация</div>
                    </div>
                    <div className={styles.buttonSecondary}>Вход для партнеров</div>
                </div>
            </div>
        </div>
    </Portal>
}
</>)
}
