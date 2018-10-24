<?php

declare (strict_types=1);


$fields = [
    acf_group([
        'name' => 'startpage',
        'label' => 'Startsida',
        'sub_fields' => [
            acf_image([
                'name' => 'image',
                'label' => 'Bild',
                'instructions' => 'Lägg till en bild som visas på startsidan.',
                'required' => true,
                'mime_types' => 'jpeg, jpg, png',
            ]),
            acf_tab([
                'name' => 'SV',
                'label' => 'Svenska',
            ]),
            acf_text([
                'name' => 'textSV',
                'label' => 'Bildtext (svenska)',
                'instructions' => 'Text som visas över bilden.',
                'required' => false,
            ]),
            acf_tab([
                'name' => 'ENG',
                'label' => 'Engelska',
            ]),
            acf_text([
                'name' => 'textENG',
                'label' => 'Bildtext (engelska)',
                'instructions' => 'Text som visas över bilden.',
                'required' => false,
            ]),
        ],
    ]),
];

$location = [
    [
        acf_location('post_taxonomy', 'page-category:startsida')
    ]
];

acf_field_group([
    'title' => 'startpage',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
