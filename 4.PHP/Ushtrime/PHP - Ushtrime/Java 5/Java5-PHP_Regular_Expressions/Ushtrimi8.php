<?php
$var = "-15.405";
if (preg_match("/^[+-]?[0-9]*\.?[0-9]+$/",$var))
{ 
  print "Numri i dh�n� '$var' �sht� valid.";
}
else
{
  print "Numri i dh�n� '$var' nuk �sht� valid.";
}
?>
