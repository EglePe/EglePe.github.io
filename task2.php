<?php
//PLYTELES FUNKCIJA
function plytele(){
 $i = 2;
 $a = 7;
 $plytelesPlotis = $i * $a;
  return $plytelesPlotis;
}

//BASEINO FUNKCIJA
function baseinas() {
$i = 200;
$p = 150;
$a = 15;
 
$baseinoPlotis = $i * $p + ($i * $a) * 2 + ($p * $a) *2;
  return $baseinoPlotis;
  
}

$baseinas = baseinas($baseinoPlotis);
$plytele = plytele($plytelesPlotis);

$plyteliuKiekis = $baseinas / $plytele;
echo "Plyteles plotis: ".$plytele."<br />";
echo "Baseino bendras plotis yra: ".$baseinas."<br />";
echo "Is viso reikes ".ceil($plyteliuKiekis)." plyteliu.";


?>
