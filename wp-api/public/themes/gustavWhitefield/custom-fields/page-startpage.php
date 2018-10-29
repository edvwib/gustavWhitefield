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
                'label' => 'Bildtext',
                'instructions' => 'Text som visas över bilden.',
                'required' => false,
            ]),
            acf_tab([
                'name' => 'ENG',
                'label' => 'Engelska',
            ]),
            acf_text([
                'name' => 'textENG',
                'label' => 'Bildtext',
                'instructions' => 'Text som visas över bilden.',
                'required' => false,
            ]),
            acf_tab([
                'name' => 'endpoint',
                'label' => '',
                'endpoint' => true,
            ]),
            acf_repeater([
                'name' => 'slide',
                'label' => 'Bildspel med korta texter',
                'instructions' => 'Här kan ni lägga korta texter om stiftelsen, exempelvis om 90-kontot.',
                'layout' => 'block',
                'sub_fields' => [
                    acf_image([
                        'name' => 'image',
                        'label' => 'Bild',
                        'instructions' => 'Lägg till en bild med något av formaten <strong>jpg</strong>, <strong>jpeg</strong> eller <strong>png</strong>.',
                        'library' => 'all',
                        'mime_types' => 'jpeg, jpg, png',
                        'preview_size' => 'medium',
                        'return_format' => 'array',
                    ]),
                    acf_tab([
                        'name' => 'SV',
                        'label' => 'Svenska',
                    ]),
                    acf_textarea([
                        'name' => 'textSV',
                        'label' => 'Kort textinnehåll',
                        'required' => true,
                        'rows' => 2,
                    ]),
                    acf_tab([
                        'name' => 'ENG',
                        'label' => 'Engelska',
                    ]),
                    acf_textarea([
                        'name' => 'textENG',
                        'label' => 'Kort textinnehåll',
                        'required' => true,
                        'rows' => 2,
                    ]),
                ],
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
