<?php
session_start();

echo "<!DOCTYPE html>\n<html><head>";

require_once 'functions.php';

$userstr = ' (Guest) ';

if (isset($_SESSION['user']))
{
    $user = $_SESSION['user'];
    $loggedin = TRUE;
    $userstr = " ($user) ";
}

else $loggedin = FALSE;

echo "<title>$appname$userstr</title><link rel='stylesheet'"