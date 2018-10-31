<?php

declare (strict_types = 1);


$fields = [
    acf_group([
        'name' => 'purpose',
        'label' => 'Grundtankar & syfte',
        'sub_fields' => [
            acf_image([
                'name' => 'image',
                'label' => 'Bild',
                'library' => 'all',
                'mime_types' => 'jpeg, jpg, png',
                'preview_size' => 'medium',
                'return_format' => 'array',
            ]),
            acf_tab([
                'name' => 'SV',
                'label' => 'Svenska',
            ]),
            acf_text([
                'name' => 'titleSV',
                'label' => 'Titel',
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
                'required' => true,
            ]),
            acf_wysiwyg([
                'name' => 'contentENG',
                'label' => 'Innehåll',
                'required' => true,
                'media_upload' => false,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
        ],
    ]),
];

$location = [
    [
        acf_location('post_taxonomy', 'page-category:syfte')
    ]
];

acf_field_group([
    'title' => 'purpose',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
