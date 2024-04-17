export default {
    name: 'review',
    title: 'Отзывы',
    type: 'document',
    fields: [
        {
            name: 'text',
            title: 'Текст отзыва',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required().max(150).error('Максимальная длина отзыва 150 символов'),
        },
        {
            name: 'author',
            title: 'Автор отзыва',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
    ]
}