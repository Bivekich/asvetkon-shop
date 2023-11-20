import React, { useState } from 'react'
import {HeroBanner} from "../components";


const botToken = '6508226475:AAH1mHWK-Yqv_EOBPHYUTcrJTcUeDQZohW4'
const chatId = '5379725422'

function sendOrderToTelegram(name, phoneNumber, email) {

    // Формируем сообщение с данными заказа
    const message = `Новый заказ!\n\nИмя: ${name}\nНомер телефона: ${phoneNumber}\nEmail: ${email}}`;

    // Ссылка для отправки сообщения через Telegram Bot API
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Параметры запроса
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    };

    // Отправляем запрос
    fetch(telegramApiUrl, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            if (data.ok) {
                console.log('Сообщение успешно отправлено в Telegram');
            } else {
                console.error('Ошибка отправки сообщения в Telegram:', data.description);
            }
        })
        .catch((error) => {
            console.error('Ошибка при отправке запроса:', error);
        });
}


const orderPage = ({ cartItems }) => {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [nameError, setNameError] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState('')
    const [emailError, setEmailError] = useState('')

    console.log(cartItems)

    const handleNameChange = (e) => {
        const value = e.target.value
        setName(value)
        // Пример валидации имени: только буквы и пробелы
        if (/[^А-Яа-я\s]/.test(value)) {
            setNameError('Имя должно содержать только буквы и пробелы')
        } else {
            setNameError('')
        }
    }

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value
        setPhoneNumber(value)
        // Пример валидации номера телефона: только цифры и дефисы
        if (/[^0-9-]/.test(value)) {
            setPhoneNumberError('Номер телефона должен содержать только цифры и дефисы')
        } else {
            setPhoneNumberError('')
        }
    }

    const handleEmailChange = (e) => {
        const value = e.target.value
        setEmail(value)
        // Пример валидации адреса электронной почты: использование простой регулярки
        if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)) {
            setEmailError('Введите корректный адрес электронной почты')
        } else {
            setEmailError('')
        }
    }


    const handleConfirmOrder = () => {
        if (!nameError && !phoneNumberError && !emailError) {
            sendOrderToTelegram(name, phoneNumber, email)
        }
    }

    return (
        <>
        {/*/!*<HeroBanner />*!/ TODO: make banner*/}
            <div className="page-container">
                <h2 className="page-tittle">Оформление заказа</h2>
                <form>
                    <div>
                        <label>ФИО: </label>
                        <input type="text" value={name} onChange={handleNameChange} />
                        <p className="error-message">{nameError}</p>
                    </div>
                    <div>
                        <label>Номер телефона: </label>
                        <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />
                        <p className="error-message">{phoneNumberError}</p>
                    </div>
                    <div>
                        <label>Электронная почта: </label>
                        <input type="email" value={email} onChange={handleEmailChange} />
                        <p className="error-message">{emailError}</p>
                    </div>
                    <button className="confirm-button" onClick={handleConfirmOrder}>Подтвредить заказ</button>
                </form>
            </div>
        </>
    )
}

export default orderPage