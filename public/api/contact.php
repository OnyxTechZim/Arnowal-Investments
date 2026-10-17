<?php
header('Content-Type: application/json; charset=utf-8');

function respond($status, $body) {
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, array('error' => 'Method not allowed.'));
}

$rawBody = file_get_contents('php://input');
if ($rawBody === false || strlen($rawBody) > 20000) {
    respond(413, array('error' => 'Request is too large.'));
}
$data = json_decode($rawBody, true);
if (!is_array($data)) {
    respond(400, array('error' => 'Invalid request body.'));
}

if (
    !isset($data['firstName'], $data['lastName'], $data['email'], $data['message']) ||
    !is_string($data['firstName']) ||
    !is_string($data['lastName']) ||
    !is_string($data['email']) ||
    !is_string($data['message']) ||
    (isset($data['phone']) && !is_string($data['phone']))
) {
    respond(400, array('error' => 'Please complete the form with valid details.'));
}

$firstName = trim($data['firstName']);
$lastName = trim($data['lastName']);
$email = trim($data['email']);
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$message = trim($data['message']);
$phoneDigits = preg_replace('/\D/', '', $phone);
$nameHasControlCharacters = preg_match('/[\x00-\x1F\x7F]/', $firstName . $lastName);
$phoneIsValid = $phone === '' || (
    preg_match('/^[+()0-9 .-]+$/', $phone) &&
    strlen($phoneDigits) >= 7 &&
    strlen($phoneDigits) <= 15
);

if (
    $firstName === '' || preg_match('/^.{1,100}$/us', $firstName) !== 1 ||
    $lastName === '' || preg_match('/^.{1,100}$/us', $lastName) !== 1 ||
    $nameHasControlCharacters ||
    strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    strlen($phone) > 40 || !$phoneIsValid ||
    $message === '' || preg_match('/^.{1,5000}$/us', $message) !== 1
) {
    respond(400, array('error' => 'Please complete the form with valid details.'));
}

if (!function_exists('mail')) {
    error_log('Contact form email failed: PHP mail() is unavailable.');
    respond(503, array('error' => 'Email delivery is not enabled on this hosting account. Please email info@arnowal.co.zw directly.'));
}

$recipient = 'info@arnowal.co.zw';
$subject = 'Website enquiry from ' . $firstName . ' ' . $lastName;
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$headers = array(
    'From: Arnowal Website <info@arnowal.co.zw>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
);
$body = implode("\n", array(
    'Name: ' . $firstName . ' ' . $lastName,
    'Email: ' . $email,
    'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
    '',
    'Message:',
    $message,
));

if (!mail($recipient, $encodedSubject, $body, implode("\r\n", $headers))) {
    error_log('Contact form email failed: PHP mail() returned false.');
    respond(502, array('error' => 'The hosting server could not send your message. Please email info@arnowal.co.zw directly.'));
}

respond(200, array('ok' => true));
