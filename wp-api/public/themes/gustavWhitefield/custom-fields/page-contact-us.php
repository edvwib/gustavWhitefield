<?php

declare (strict_types = 1);


$fields = [
    acf_group([
        'name' => 'contactUs',
        'label' => 'Kontakta oss',
        'sub_fields' => [
            acf_repeater([
                'name' => 'contact',
                'label' => 'Kontaktpersoner',
                'layout' => 'table',
                'sub_fields' => [
                    acf_text([
                        'name' => 'name',
                        'label' => 'Namn',
                    ]),
                    acf_email([
                        'name' => 'email',
                        'label' => 'E-post',
                    ]),
                    acf_text([
                        'name' => 'phone',
                        'label' => 'Telefon',
                    ]),
                ],
            ]),
        ],
    ]),
];

$location = [
    [
        acf_location('post_taxonomy', 'page-category:kontakta-oss')
    ]
];

acf_field_group([
    'title' => 'contactUs',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
