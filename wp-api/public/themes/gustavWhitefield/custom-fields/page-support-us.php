<?php

declare(strict_types=1);

$fields = [
    acf_group([
        'name' => 'supportUs',
        'label' => 'Stöd oss',
        'sub_fields' => [
            acf_tab([
                'name' => 'SV',
                'label' => 'Svenska',
            ]),
            acf_text([
                'name' => 'titleSV',
                'label' => 'Titel (svenska)',
                'instructions' => 'Titel för sidan.',
                'required' => false,
            ]),
            acf_wysiwyg([
                'name' => 'textSV',
                'label' => 'Text (svenska)',
                'required' => false,
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
                'instructions' => 'Titel för sidan.',
                'required' => false,
            ]),
            acf_wysiwyg([
                'name' => 'textENG',
                'label' => 'Text (engelska)',
                'required' => false,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
        ],
    ]),
];

$location = [
    [
        acf_location('post_taxonomy', 'page-category:stod-oss')
    ]
];

acf_field_group([
    'title' => 'supportUs',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
