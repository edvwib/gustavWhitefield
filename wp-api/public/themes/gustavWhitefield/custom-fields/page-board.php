<?php

declare (strict_types = 1);


$fields = [
    acf_group([
        'name' => 'board',
        'label' => 'Styrelsen',
        'sub_fields' => [
            acf_image([
                'name' => 'image',
                'label' => 'Bild',
                'instructions' => 'Väljer ni ingen bild här kommer en placeholder att användas istället.',
                'library' => 'all',
                'mime_types' => 'jpeg, jpg, png',
                'preview_size' => 'medium',
                'return_format' => 'array',
            ]),
            acf_repeater([
                'name' => 'members',
                'label' => 'Styrelsemedlemmar',
                'layout' => 'block',
                'sub_fields' => [
                    acf_image([
                        'name' => 'image',
                        'label' => 'Bild',
                        'instructions' => 'Lägg till en bild med något av formaten <strong>jpg</strong>, <strong>jpeg</strong> eller <strong>png</strong>.  Se till att personens ansikte är centrerat i bilden, och att bilden <strong>inte</strong> är tagen i landskapsläge.',
                        'library' => 'all',
                        'mime_types' => 'jpeg, jpg, png',
                        'preview_size' => 'thumbnail',
                        'return_format' => 'array',
                    ]),
                    acf_text([
                        'name' => 'name',
                        'label' => 'Namn',
                        'required' => true,
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
                    acf_textarea([
                        'name' => 'aboutSV',
                        'label' => 'Om',
                        'instructions' => 'En kort text om personen.',
                        'rows' => 3,
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
                    acf_textarea([
                        'name' => 'aboutENG',
                        'label' => 'Om',
                        'instructions' => 'En kort text om personen.',
                        'rows' => 3,
                    ]),
                ],
            ]),
        ],
    ]),
];

$location = [
    [
        acf_location('post_taxonomy', 'page-category:styrelsen')
    ]
];

acf_field_group([
    'title' => 'board',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
