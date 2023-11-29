export default {
    name: 'pages',
    title: 'Файлы',
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
            name: 'name',
            title: 'Название',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Ссылка',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            },
        },
        {
            name: 'text',
            title: 'Текст документа',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
}
