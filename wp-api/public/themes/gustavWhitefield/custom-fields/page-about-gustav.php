<?php

declare(strict_types=1);


$fields = [
    acf_group([
        'name' => 'about-gustav',
        'label' => 'Om Gustav',
        'sub_fields' => [
            acf_tab([
                'name' => 'SV',
                'label' => 'Svenska',
            ]),
            acf_text([
                'name' => 'titleSV',
                'label' => 'Titel (svenska)',
                'required' => true,
            ]),
            acf_wysiwyg([
                'name' => 'textSV',
                'label' => 'Text (svenska)',
                'required' => true,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
            acf_tab([
                'name' => 'ENG',
                'label' => 'Engelska',
            ]),
            acf_text([
                'name' => 'titleENG',
                'label' => 'Titel (engelska)',
                'required' => true,
            ]),
            acf_wysiwyg([
                'name' => 'textENG',
                'label' => 'Text (engelska)',
                'required' => true,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
        ],
    ]),
];

$location = [
    [
        acf_location('post_taxonomy', 'page-category:om-gustav')
    ]
];

acf_field_group([
    'title' => 'about-gustav',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
