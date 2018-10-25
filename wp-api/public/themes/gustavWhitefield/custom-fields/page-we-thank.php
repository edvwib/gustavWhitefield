<?php

declare (strict_types=1);


$fields = [
    acf_group([
        'name' => 'weThank',
        'label' => 'Vi tackar',
        'sub_fields' => [
            acf_tab([
                'name' => 'SV',
                'label' => 'Svenska',
            ]),
            acf_text([
                'name' => 'titleSV',
                'label' => 'Titel',
                'instructions' => 'Titel för sidan.',
                'required' => false,
            ]),
            acf_text([
                'name' => 'contentSV',
                'label' => 'Innehåll',
                'instructions' => 'Text som visas över företagens logotyper.',
                'required' => false,
            ]),
            acf_tab([
                'name' => 'ENG',
                'label' => 'Engelska',
            ]),
            acf_text([
                'name' => 'titleENG',
                'label' => 'Titel',
                'instructions' => 'Titel för sidan.',
                'required' => false,
            ]),
            acf_text([
                'name' => 'contentENG',
                'label' => 'Innehåll',
                'instructions' => 'Text som visas över företagens logotyper.',
                'required' => false,
            ]),
            acf_tab([
                'name' => 'endpoint',
                'label' => '',
                'endpoint' => true,
            ]),
            acf_gallery([
                'name' => 'images',
                'label' => 'Logotyper',
                'instructions' => 'Företagens logotyper.',
                'required' => false,
                'mime_types' => 'jpeg, jpg, png',
            ]),
        ],
    ]),
];

$location = [
    [
        acf_location('post_taxonomy', 'page-category:vi-tackar')
    ]
];

acf_field_group([
    'title' => 'weThank',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
