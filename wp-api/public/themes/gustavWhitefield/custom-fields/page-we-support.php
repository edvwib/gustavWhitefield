<?php

declare(strict_types=1);

use WordPlate\Acf\Fields\Group;
use WordPlate\Acf\Fields\Image;
use WordPlate\Acf\Fields\Repeater;
use WordPlate\Acf\Fields\Tab;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Fields\Textarea;
use WordPlate\Acf\Fields\Wysiwyg;
use WordPlate\Acf\Location;

register_extended_field_group([
    'title' => 'weSupport',
    'fields' => [
        Group::make('Vi stödjer', 'weSupport')
            ->fields([
                Image::make('Bild', 'image')
                    ->instructions('Väljer ni ingen bild här kommer en placeholder att användas istället.')
                    ->library('all')
                    ->mimeTypes(['jpeg', 'jpg', 'png',])
                    ->previewSize('medium')
                    ->returnFormat('array'),
                Tab::make('Svenska', 'SV'),
                Wysiwyg::make('Innehåll', 'contentSV')
                    ->mediaUpload(false)
                    ->tabs('visual')
                    ->toolbar('simple')
                    ->required(),
                Tab::make('Engelska', 'ENG'),
                Wysiwyg::make('Innehåll', 'contentENG')
                    ->mediaUpload(false)
                    ->tabs('visual')
                    ->toolbar('simple')
                    ->required(),
                Tab::make('', 'endpoint')->endpoint(),
                Tab::make('Svenska', 'SV2'),
                Text::make('Titel för animation', 'titleSV')
                    ->instructions('Förklara vad texterna i animationerna handlar om.')
                    ->required(),
                Tab::make('Engelska', 'ENG2'),
                Text::make('Titel för animation', 'titleENG')
                    ->instructions('Förklara vad texterna i animationerna handlar om.')
                    ->required(),
                Tab::make('', 'endpoint2')->endpoint(),
                Repeater::make('Tidigare aktiviteter', 'item')
                    ->instructions('Här kan ni lägga till exempel på tidigare aktiviteter som ni har bidragit till.')
                    ->layout('block')
                    ->fields([
                        Tab::make('Svenska', 'SV'),

                        Textarea::make('Kort text om aktiviteten.', 'contentSV')
                            ->rows(3)
                            ->required(),

                        Tab::make('Engelska', 'ENG'),
                        Textarea::make('Kort text om aktiviteten.', 'contentENG')
                            ->rows(3)
                            ->required(),
                    ]),
            ]),
    ],
    'style' => 'seamless',
    'location' => [
        Location::if('post_taxonomy', 'page-category:vi-stodjer'),
    ],
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
