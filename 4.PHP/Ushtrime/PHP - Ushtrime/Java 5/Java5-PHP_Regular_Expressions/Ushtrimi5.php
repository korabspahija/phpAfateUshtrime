<?php
$var = "#FFFFFE";

if(preg_match('/^#?([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?$/',$var))
{ 
  print "'$var' �sht� valide.";
}
else
{
  print "'$var' nuk �sht� valide.";
}
?>
