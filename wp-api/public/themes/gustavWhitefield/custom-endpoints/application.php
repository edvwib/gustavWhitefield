<?php

declare(strict_types=1);

// require_once __DIR__ . '/../../../../vendor/autoload.php';

use JeffOchoa\ValidatorFactory;
use Symfony\Component\HttpFoundation\File\Exception\PartialFileException;

add_action('rest_api_init', function () {
    register_rest_route('api/v1', '/verifyRecaptcha/', [
        'methods' => 'POST',
        'callback' => 'verifyRecaptcha'
    ]);
    register_rest_route('api/v1', '/application/', [
        'methods' => 'POST',
        'callback' => 'processApplication'
    ]);
});

function verifyRecaptcha($request){
    $params = json_decode($request->get_body());
    $token = $params->token;
    $secret = getenv('WP_ENV') === 'local' ? getenv('RECAPTHA_TEST_KEY') : getenv('RECAPTHA_SECRET_KEY');

    $recaptcha = new \ReCaptcha\ReCaptcha($secret);

    $response = $recaptcha->verify($token);
    if ($response->isSuccess()) {
        return true;
    } else {
        $errors = $response->getErrorCodes();
        return $errors;
    }
}

function processApplication($request){
    $formData = json_decode($request->get_body());
    $isOrganization = $formData->isOrganization;
    // return $formData->contact->name;
    // $validatedData = validateData($formData);
    // if(!$validatedData)
    //     return $validatedData;

    if($isOrganization)
        return sendEmail(createEmail($isOrganization, $formData));
    else
        return sendEmail(createEmail($isOrganization, $formData));
}

function setupTransport(){
    return (new Swift_SmtpTransport(getenv('MAIL_HOST'), getenv('MAIL_PORT'), 'ssl'))
        ->setUsername(getenv('MAIL_USERNAME'))
        ->setPassword(getenv('MAIL_PASSWORD'));
}

function setupMailer($transport){
    return new Swift_Mailer($transport);
}

function organizationMessage($data){
    $date = date('Y-n-j');
    $contact = get_object_vars($data->contact);
    $application = get_object_vars($data->application);
    $budget = get_object_vars($data->budget);

    return "
        <h1>Kontaktuppgifter</h1>
        <table style='border: 1px solid black;'>
            <tr>
                <th style='text-align: left;'>Namn organisation:</th>
                <th style='text-align: left;'>Organisationsnummer:</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$contact[name]</td>
                <td style'border-bottom: 1px solid black;'>$contact[organizationNumber]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Gatuadress:</th>
                <th style='text-align: left;'>Postnr och ort:</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$contact[street]</td>
                <td style'border-bottom: 1px solid black;'>$contact[zip] $contact[city]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Hemsida:</th>
                <th style='text-align: left;'>Datum för ansökan:</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$contact[website]</td>
                <td style'border-bottom: 1px solid black;'>$date</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Kontaktperson:</th>
                <th style='text-align: left;'>Telefon:</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$contact[contactPerson]</td>
                <td style'border-bottom: 1px solid black;'>$contact[phone]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>E-post:</th>
                <th style='text-align: left;'>Mobilnummer:</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$contact[email]</td>
                <td style'border-bottom: 1px solid black;'>$contact[mobile]</td>
            </tr>
        </table>

        <h1>Ansökan</h1>
        <table style='border: 1px solid black;'>
            <tr>
                <th style='text-align: left;'>Beskrivning av ändamål/projekt/aktivitet:</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$application[descriptionProject]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Beskriv individens/individernas funktionshinder:</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$application[disability]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Hur många individer kommer att få ta del av aktiviteten samt eventuell personal som kommer delta?</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$application[beneficiaryCount]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Hur ökar aktiviteten individens självkänsla och glädje?</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$application[selfesteemHappiness]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Hur ökar aktiviteten individens kropp- och rumsuppfattning?</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$application[bodySpatialAwareness]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Vilket pedagogiskt värde har aktiviteten?</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$application[educationalValue]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Övrigt:</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$application[other]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>När kommer aktiviteten genomföras?</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$application[when]</td>
            </tr>
        </table>

        <h1>Belopp och budget</h1>
        <table style='border: 1px solid black;'>
            <tr>
                <th style='text-align: left;'>Sökt belopp:</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$budget[subsidy]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Om vi inte kan dela ut det sökta beloppet, är ni då intresserad av delfinansiering?</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>" . ($budget['partialFinancing'] ? 'Ja' : 'Nej') . "</td>
            </tr>" . ($budget['partialFinancing'] ? "
                <tr>
                    <th style='text-align: left;'>Sökt delbelopp:</th>
                </tr>
                <tr>
                    <td style'border-bottom: 1px solid black;'>$budget[partialSubsidy]</td>
                </tr>
            " : '')
        . "<tr>
                <th style='text-align: left;'>Söker ni bidrag från fler stiftelser?</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>" . ($budget['multipleInstitutions'] ? 'Ja' : 'Nej') . "</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Redogör för budget:</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$budget[budget]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Hur garanterar ni att aktiviteten genomförs? Kan Stiftelsen erhålla kvitto eller motsvarande?</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$budget[guarantee]</td>
            </tr>
        </table>
    ";
}

function privateMessage($data){
    $date = date('Y-n-j');
    $contact = get_object_vars($data->contact);
    $application = get_object_vars($data->application);
    $budget = get_object_vars($data->budget);

    return "
        <h1>Kontaktuppgifter</h1>
        <table style='border: 1px solid black;'>
            <tr>
                <th style='text-align: left;'>Namn sökande:</th>
                <th style='text-align: left;'>Datum för ansökan:</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$contact[name]</td>
                <td style'border-bottom: 1px solid black;'>$date</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Gatuadress:</th>
                <th style='text-align: left;'>Postnr och ort:</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$contact[street]</td>
                <td style'border-bottom: 1px solid black;'>$contact[zip] $contact[city]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Telefon:</th>
                <th style='text-align: left;'>E-post:</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$contact[phone]</td>
                <td style'border-bottom: 1px solid black;'>$contact[email]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Namn mottagare av sökta medel:</th>
                <th style='text-align: left;'>Födelsedata mottagare av sökta medel:</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$contact[applicantName]</td>
                <td style'border-bottom: 1px solid black;'>$contact[applicantBirthdate]</td>
            </tr>
        </table>

        <h1>Ansökan</h1>
        <table style='border: 1px solid black;'>
            <tr>
                <th style='text-align: left;'>Beskrivning av ändamål/aktivitet:</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$application[descriptionProject]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Beskriv personens funktionshinder:</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$application[disability]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Hur stärks personens självkänsla och glädje genom det eventuella bidraget?</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$application[selfesteemHappiness]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Hur stärks personens kropp- och rumsuppfattning genom det eventuella bidraget?</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$application[bodySpatialAwareness]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Övrigt:</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$application[other]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>När kommer ändamålet/aktiviteten genomföras?</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$application[when]</td>
            </tr>
        </table>

        <h1>Belopp</h1>
        <table style='border: 1px solid black;'>
            <tr>
                <th style='text-align: left;'>Sökt belopp:</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$budget[subsidy]</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Om vi inte kan dela ut det sökta beloppet, är ni då intresserad av delfinansiering?</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>" . ($budget['partialFinancing'] ? 'Ja' : 'Nej') . "</td>
            </tr>" . ($budget['partialFinancing'] ? "
                <tr>
                    <th style='text-align: left;'>Sökt delbelopp:</th>
                </tr>
                <tr>
                    <td style'border-bottom: 1px solid black;'>$budget[partialSubsidy]</td>
                </tr>
            " : '')
        . "<tr>
                <th style='text-align: left;'>Söker ni bidrag från fler stiftelser?</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>" . ($budget['multipleInstitutions'] ? 'Ja' : 'Nej') . "</td>
            </tr>
            <tr>
                <th style='text-align: left;'>Hur garanterar ni att ändamålet/aktiviteten genomförs? Kan Stiftelsen erhålla kvitto eller motsvarande?</th>
            </tr>
            <tr>
                <td style'border-bottom: 1px solid black;'>$budget[guarantee]</td>
            </tr>
        </table>
    ";
}

function createEmail($isOrganization, $data){
    return (new Swift_Message("Ansökan - {$data->contact->name}"))
        ->setFrom([getenv('MAIL_USERNAME') => 'formulär@gustavwhitefield.com'])
        ->setTo([getenv('WP_ENV') === 'local' ?
            'formular@gustavwhitefield.com' :
            'info@gustavwhitefield.com'
            => 'info@gustavwhitefield.com'])
        ->setBody(
            $isOrganization ? organizationMessage($data) : privateMessage($data),
            'text/html'
        );
}

function sendEmail($message){
    $mailer = setupMailer(setupTransport());
    return $mailer->send($message);
}







function validateData($form)
{
    // $form->date = date('Y-n-j');

    $factory = new ValidatorFactory();

    $validator = $factory->make(
        $data = $form,
        $rules = [
            'isOrganization' => 'required|boolean',
            'contactDetails.name' => 'required|String',
            'contactDetails.organizationNumber' => 'required_if:isOrganization,true|String',
            'contactDetails.street' => 'required|String',
            'contactDetails.zip' => 'required|String',
            'contactDetails.city' => 'required|String',
            'contactDetails.webpage' => 'url',
            'contactDetails.phone' => 'required_without:contactDetails.mobile|String',
            'contactDetails.mobile' => 'required_without:contactDetails.phone|String',
            'contactDetails.email' => 'required|email',
        ]
    );
    if ($validator->fails()) {
        return $validator->messages()->all();
    }
    return $form;
}
