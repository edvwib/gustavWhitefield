<?php

declare(strict_types=1);

use WordPlate\Acf\Fields\Group;
use WordPlate\Acf\Fields\Image;
use WordPlate\Acf\Fields\Repeater;
use WordPlate\Acf\Fields\Tab;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Fields\Textarea;
use WordPlate\Acf\Location;

register_extended_field_group([
    'title' => 'startpage',
    'fields' => [
        Group::make('Startsida', 'startpage')
            ->fields([
                Image::make('Bild', 'image')
                    ->instructions('Lägg till en bild som visas högst upp på startsidan.')
                    ->library('all')
                    ->mimeTypes(['jpeg', 'jpg', 'png',])
                    ->returnFormat('array')
                    ->required(),
                Tab::make('Svenska', 'SV'),
                Text::make('Bildtext', 'textSV')
                    ->instructions('Text som visas över bilden.')
                    ->required(),
                Tab::make('Engelska', 'ENG'),
                Text::make('Bildtext', 'textENG')
                    ->instructions('Text som visas över bilden.')
                    ->required(),
                Tab::make('', 'endpoint')->endpoint(),
                Repeater::make('Bildspel med korta fakta', 'slide')
                    ->instructions('Här kan ni lägga korta texter om stiftelsen, exempelvis om 90-kontot, som kommer att visas i ett bildspel.')
                    ->layout('block')
                    ->fields([
                        Image::make('Bild', 'image')
                            ->instructions('Lägg till en bild med något av formaten <strong>jpg</strong>, <strong>jpeg</strong> eller <strong>png</strong>.')
                            ->library('all')
                            ->mimeTypes(['jpeg', 'jpg', 'png',])
                            ->previewSize('medium')
                            ->returnFormat('array')
                            ->required(),
                        Tab::make('Svenska', 'SV'),
                        Textarea::make('Text', 'contentSV')
                            ->instructions('Denna text kommer att visas under bilden')
                            ->rows(2)
                            ->required(),
                        Tab::make('Engelska', 'ENG'),
                        Textarea::make('Text', 'contentENG')
                            ->instructions('Denna text kommer att visas under bilden')
                            ->rows(2)
                            ->required(),
                    ]),
            ]),
    ],
    'style' => 'seamless',
    'location' => [
        Location::if('post_taxonomy', 'page-category:startsida'),
    ],
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
