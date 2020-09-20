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
    'title' => 'board',
    'fields' => [
        Group::make('Styrelsen', 'board')
            ->fields([
                Image::make('Bild', 'image')
                    ->instructions('Väljer ni ingen bild här kommer en placeholder att användas istället.')
                    ->library('all')
                    ->mimeTypes(['jpeg', 'jpg', 'png',])
                    ->previewSize('medium')
                    ->returnFormat('array'),
                Repeater::make('Styrelsemedlemmar', 'members')
                    ->layout('block')
                    ->fields([
                        Image::make('Bild', 'image')
                            ->instructions('Lägg till en bild med något av formaten <strong>jpg</strong>, <strong>jpeg</strong> eller <strong>png</strong>.  Se till att personens ansikte är centrerat i bilden, och att bilden <strong>inte</strong> är tagen i landskapsläge.')
                            ->library('all')
                            ->mimeTypes(['jpeg', 'jpg', 'png',])
                            ->previewSize('thumbnail')
                            ->returnFormat('array'),
                        Text::make('Namn', 'name')
                            ->required(),
                        Tab::make('Svenska', 'SV'),
                        Text::make('Titel', 'titleSV')
                            ->required(),
                        Textarea::make('Om', 'aboutSV')
                            ->instructions('En kort text om personen.')
                            ->rows(3),
                        Tab::make('Engelska', 'ENG'),
                        Text::make('Titel', 'titleENG')
                            ->required(),
                        Textarea::make('Om', 'aboutENG')
                            ->instructions('En kort text om personen.')
                            ->rows(3),
                    ]),
            ]),
    ],
    'style' => 'seamless',
    'location' => [
        Location::if('post_taxonomy', 'page-category:styrelsen'),
    ],
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
