import React, { useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

const Faq = ({ faqs }) => {
    const [selected, setSelected] = useState(null)

    const toggle = i => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <div className='wrapper'>
            <div className='accordion'>
                {faqs.map((item, i) => (
                    <div className='faq-item' key={item._id}>
                        <div className='faq-title' onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>
								{selected === i ? (
                                    <AiOutlineArrowUp className='faq-arrow' />
                                ) : (
                                    <AiOutlineArrowDown className='faq-arrow' />
                                )}
							</span>
                        </div>
                        <div
                            className={selected === i ? 'faq-content show' : 'faq-content'}
                        >
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq
