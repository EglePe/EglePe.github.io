<?php
//PLYTELES FUNKCIJA
function plytele(){
 $i = 2;
 $a = 7;
 $plytelesPlotis = $i * $a;
  return $plytelesPlotis;
  echo "Plyteles plotis: ".$plytelesPlotis."<br />";
}

//BASEINO FUNKCIJA
function baseinas() {
$i = 200;
$p = 150;
$a = 15;
 
$baseinoPlotis = $i * $p + ($i * $a) * 2 + ($p * $a) *2;
  return $baseinoPlotis;
  echo "Baseino bendras plotis yra: ".$baseinoPlotis."<br />";
  
}

$baseinas = baseinas($baseinoPlotis);
$plytele = plytele($plytelesPlotis);

$plyteliuKiekis = $baseinas / $plytele;
echo "Plyteles plotis: ".$baseinas."<br />";
echo "Baseino bendras plotis yra: ".$plytele."<br />";
echo "Is viso reikes ".ceil($plyteliuKiekis)." plyteliu.";

?>