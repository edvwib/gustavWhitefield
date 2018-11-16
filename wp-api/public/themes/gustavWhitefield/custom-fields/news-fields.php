<?php

declare (strict_types=1);

$fields = [
    acf_group([
        'name' => 'news',
        'label' => 'Nyhet',
        'sub_fields' => [
            acf_tab([
                'name' => 'SV',
                'label' => 'Svenska',
            ]),
            acf_text([
                'name' => 'titleSV',
                'label' => 'Titel',
                'required' => true,
            ]),
            acf_textarea([
                'name' => 'introSV',
                'label' => 'Inledning',
                'instructions' => 'Eventuella radbrytningar kommer att tas bort.',
                'rows' => 3,
                'required' => true,
            ]),
            acf_wysiwyg([
                'name' => 'contentSV',
                'label' => 'Innehåll',
                'required' => true,
                'media_upload' => false,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
            acf_tab([
                'name' => 'ENG',
                'label' => 'Engelska',
            ]),
            acf_text([
                'name' => 'titleENG',
                'label' => 'Titel',
            ]),
            acf_textarea([
                'name' => 'introENG',
                'label' => 'Inledning',
                'instructions' => 'Eventuella radbrytningar kommer att tas bort.',
                'rows' => 3,
            ]),
            acf_wysiwyg([
                'name' => 'contentENG',
                'label' => 'Innehåll',
                'media_upload' => false,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
            acf_tab([
                'name' => 'endpoint',
                'label' => '',
                'endpoint' => true,
            ]),
            acf_repeater([
                'name' => 'images',
                'label' => 'Bilder',
                'instructions' => 'Den första bilden i listan kommer att fungera som utvald bild. (Visas i listan med alla nyheter och på startsidan.)',
                'required' => false,
                'layout' => 'block',
                'sub_fields' => [
                    acf_image([
                        'name' => 'image',
                        'label' => 'Bild',
                        'instructions' => 'Lägg till en bild i något av formaten <strong>jpg</strong>, <strong>jpeg</strong>, <strong>png</strong> eller <strong>gif</strong>.',
                        'library' => 'all',
                        'mime_types' => 'jpeg, jpg, png, gif',
                        'preview_size' => 'medium',
                        'return_format' => 'array',
                    ]),
                ],
            ]),
        ],
    ]),
];

$location = [
    [
        acf_location('post_type', 'news')
    ]
];

acf_field_group([
    'title' => 'news',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
