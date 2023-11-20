export default {
    name: 'banner',
    title: 'Банер',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Картинка',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonText',
            title: 'Текст кнопки',
            type: 'string',
        },
        {
            name: 'smallText',
            title: 'Маленький текст',
            type: 'string',
        },
        {
            name: 'midText',
            title: 'Средний текст',
            type: 'string',
        },
        {
            name: 'largeText1',
            title: 'Большой текст 1',
            type: 'string',
        },
        {
            name: 'largeText2',
            title: 'Большой текст 2',
            type: 'string',
        },
        {
            name: 'largeText3',
            title: 'Большой текст 3',
            type: 'string',
        },
    ],
}
