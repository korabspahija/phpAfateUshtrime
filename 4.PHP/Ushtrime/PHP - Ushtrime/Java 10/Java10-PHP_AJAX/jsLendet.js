// JavaScript Document 
var xmlhttp; 
 
//Funksioni kerkoLendet() ekzekutohet cdo her� q� karakteri futet n� �txtLenda�. 
function kerkoLendet(str) 
{ 
  //Th�rret f-onin createRequest() t� krijoj nj� object XMLHTTP 
   xmlhttp = createRequest(); 
   if(xmlhttp==null) 
   { 
     alert("Nuk mund te krijoni kerkesen"); 
     return; 
   } 
 
   //Definon URL (emrin e fajllit) t� d�rgoj n� server 
   var url = "http://localhost/Ushtrimet/Java10/LendetServer.php"; 
   //Shton nj� paramet�r (q) tek URL me p�rmbajtje t� fush�s hyr�se 
       url = url+"?q="+str; 
	   //Hap objektin XMLHTTP me URL-n� e dh�n� 
   xmlhttp.open("GET",url,true); 
   //D�rgon nj� k�rkes� HTTP tek server 
   xmlhttp.send(null); 
   //Sa her� q� ndryshon vetia readyState, f-oni stateChange() do t� ekzekutohet 
   xmlhttp.onreadystatechange = displayRes; 
} 
 
//Ky funksion ekzekutohet sa her� q� gjendja e objektit XMLHTTP ndryshon. 
function displayRes() 
{ 
    //alert(xmlhttp.readyState); 
    //Kur gjendja ndryshon n� 4(�komplet�) dhe status=200, 
    //p�rmbajtja e txtRez mbushet me tekstin p�rgjigje. 
    if(xmlhttp.readyState==4) 
    { 
        if(xmlhttp.status==200) 
         { 
             document.getElementById("txtRez").innerHTML = xmlhttp.responseText; 
         } 
    } 
} 
 
 
//ky funksion krijon objekte t� ndryshme XMLHTTP p�r brouser t� ndrysh�m 
function createRequest() 
{ 
    try 
    { 
      // kodi per IE7+, Firefox, Chrome, Opera, Safari 
      xmlhttp = new XMLHttpRequest(); 
    } 
    catch(ex) 
    { 
        try 
        { 
            // kodi per IE6, IE5 
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); 
        } 
        catch(ex) 
        { 
            xmlhttp = null; 
        } 
    } 
    return xmlhttp; 
	}
	