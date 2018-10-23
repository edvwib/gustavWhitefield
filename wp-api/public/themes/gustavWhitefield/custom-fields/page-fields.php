<?php

declare (strict_types=1);

$fields = [
    acf_group([
        'name' => 'contentSV',
        'label' => 'Innehåll (svenska)',
        'sub_fields' => [
            acf_text([
                'name' => 'titleSV',
                'label' => 'Titel',
                'required' => true,
            ]),
            acf_wysiwyg([
                'name' => 'content',
                'label' => 'Innehåll',
                'required' => true,
                'media_upload' => false,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
        ],
    ]),
    acf_group([
        'name' => 'contentENG',
        'label' => 'Innehåll (engelska)',
        'sub_fields' => [
            acf_text([
                'name' => 'titleENG',
                'label' => 'Titel',
                'required' => true,
            ]),
            acf_wysiwyg([
                'name' => 'content',
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
        acf_location('post_type', 'page')
    ]
];

acf_field_group([
    'title' => 'page',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
