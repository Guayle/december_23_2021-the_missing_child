var doc1="non";
var doc2="non";
var possible="oui";

function degriser(z){
	z.value='';
	z.style.color='#000000';
}
if (document.getElementById('page').textContent==='page2'){
	var histoire1 = document.getElementById('texte1_page_2');
	var texte1=document.getElementById('paragraphe1').innerHTML;
	
	var histoire2=document.getElementById('texte2_page_2');
	var texte2=document.getElementById('paragraphe2').innerHTML;
	
	var lieu3=document.getElementById('p3');
	var texte3=document.getElementById('partie3').innerHTML;

	var index=0;
	
	function randomSpeed(min,max){
	  return Math.floor(Math.random()*(max-min)+min);
	}

	function play (objet,texte) {
	  if (texte[index-1]!=="<"){
		objet.innerHTML=texte.slice(0,index);
		index++;
		timer = setTimeout(function() {
			play(objet, texte);
		}, randomSpeed(2,10));
	  }
	  else if (texte[index-1]==="<" && texte[index]=='i'){
		index=index+3;
		timer = setTimeout(function() {
			play(objet, texte);
		}, randomSpeed(30,50));
	  }
	  else if ((texte[index-1]=="<" && texte[index]=='b' && texte[index+1]=='r')||(texte[index-1]=="<" && texte[index]=='/' && texte[index+1]=='i')){
		index=index+4;
		timer = setTimeout(function() {
			play(objet, texte);
		}, randomSpeed(30,50));
	  }
	  if (index>=texte.length){
		 clearTimeout(timer)
		index=0;
		if (objet === histoire1) {
			timer=setTimeout(function() {
				play(histoire2, texte2);
			}, 200);
        }
		else if (objet===histoire2){
			timer=setTimeout(function() {
				play(lieu3, texte3);
			}, 200);	
		}
		else{
			document.addEventListener("keyup", function(event) {
				if (event.keyCode === 13) {
					window.location.replace("chambre_de_timothee.html");
		}
	});	
		}
		
		return;
	  }
	}

	var timer=setTimeout(play(histoire1,texte1),200);
}




else if (document.getElementById('page').textContent==='ordi_timo'){
	function verifier(id,mdp){
		if (id==="mrpolichinel" && mdp=="lAsouPOch0u"){
			return true;
		}
		else{
			
			return false;
		}
	}
	document.addEventListener("keyup",function(event){
		if (event.keyCode===13){
			var identifiant=document.getElementById("identifiant").value;
			var mdp=document.getElementById("mdp").value;
			if(verifier(identifiant,mdp)===true){
				alert("Correct");
				window.location.replace("ordi_deverouille.html");
			}
			else{
				alert("Identifiant ou mot de passe incorrect(s)");
			}
		}
	});
	
}

else if (document.getElementById('page').textContent==='ordi_dev'){
	function dossier_crypte(){
		var code=prompt("Le dossier est crypté, entrez la clé de sécurité","");
		if (code==="sfRedF96@pasC00L"){
			window.location.replace("dossier.html");
		}
		else{
			alert("Erreur");
		}
	}
}




else if (document.getElementById('page').textContent === 'Dossier') {
    document.getElementById("article1").addEventListener("click", function () {
		if (possible==="oui"){
			doc1 = "oui";
			if (doc2 === "oui") {
				createButton();
				possible="non";
			}
		}
	});

    document.getElementById("article2").addEventListener("click", function () {
		if (possible==="oui"){
			doc2 = "oui";
			if (doc1 === "oui") {
				createButton();
				possible="non";
			}
		}
    });

    function createButton() {
        var bouton = document.createElement("button");
        bouton.innerHTML = "Continuer";
        bouton.style.backgroundColor = "#0088AA";
		bouton.style.color = "white";
		bouton.style.display="block";
		bouton.style.borderRadius="15px";
		bouton.style.border= "thick double #006699";
		bouton.style.textAlign="center";
		bouton.style.alignSelf= "center";
		bouton.style.marginLeft="auto";
		bouton.style.marginRight="auto";
		bouton.style.marginTop="15px";

        bouton.addEventListener("click", function() {
            window.location.replace("introspection.html");
        });
        
        document.body.appendChild(bouton);
    }
}

else if(document.getElementById('page').textContent==='cadenas'){
	function changer_num(num_btn){
		if (document.getElementById(num_btn).textContent==="0"){
			document.getElementById(num_btn).textContent="1";
		}
		else if (document.getElementById(num_btn).textContent==="1"){
			document.getElementById(num_btn).textContent="2";
		}
		else if (document.getElementById(num_btn).textContent==="2"){
			document.getElementById(num_btn).textContent="3";
		}
		else if (document.getElementById(num_btn).textContent==="3"){
			document.getElementById(num_btn).textContent="4";
		}
		else if (document.getElementById(num_btn).textContent==="4"){
			document.getElementById(num_btn).textContent="5";
		}
		else if (document.getElementById(num_btn).textContent==="5"){
			document.getElementById(num_btn).textContent="6";
		}
		else if (document.getElementById(num_btn).textContent==="6"){
			document.getElementById(num_btn).textContent="7";
		}
		else if (document.getElementById(num_btn).textContent==="7"){
			document.getElementById(num_btn).textContent="8";
		}
		else if (document.getElementById(num_btn).textContent==="8"){
			document.getElementById(num_btn).textContent="9";
		}
		else if (document.getElementById(num_btn).textContent==="9"){
			document.getElementById(num_btn).textContent="0";
		}
		return;
		
	}
	function verifier(){
		if (document.getElementById("btn1").textContent==="6" && document.getElementById("btn2").textContent==="3" && document.getElementById("btn3").textContent==="7"){
			window.location.replace("devanture.html");
		}
		else{
			alert("FAUX");
		}
	}		
}
else if (document.getElementById('page').textContent==='devanture'){
	function ouvrir_porte(){
		var code=prompt("La porte est vérouillée par un code digital","");
		if (code==="paco"){
			window.location.replace("maison.html");
		}
		else{
			alert("Erreur");
		}
	}
}


else if (document.getElementById('page').textContent==='Introspection'){
	var lieu = document.getElementById('texte_introspection');
	var paroles=document.getElementById('paroles').innerHTML;
	
	var lieu2=document.getElementById('continuer');
	var texte2=document.getElementById('cmd').innerHTML;

	var index=0;
	
	function randomSpeed(min,max){
	  return Math.floor(Math.random()*(max-min)+min);
	}

	function play (objet,texte) {
	  if (texte[index-1]!=="<"){
		objet.innerHTML=texte.slice(0,index);
		index++;
		timer = setTimeout(function() {
			play(objet, texte);
		}, randomSpeed(2,10));
	  }
	  else if (texte[index-1]==="<" && texte[index]=='i'){
		index=index+3;
		timer = setTimeout(function() {
			play(objet, texte);
		}, randomSpeed(30,50));
	  }
	  else if ((texte[index-1]=="<" && texte[index]=='b' && texte[index+1]=='r')||(texte[index-1]=="<" && texte[index]=='/' && texte[index+1]=='i')){
		index=index+4;
		timer = setTimeout(function() {
			play(objet, texte);
		}, randomSpeed(30,50));
	  }
	  if (index>=texte.length){
		 clearTimeout(timer)
		index=0;
		if (objet === lieu) { 
			timer=setTimeout(function() {
				play(lieu2, texte2); 
			}, 200);
        }
		else{
			document.addEventListener("keyup", function(event) {
				if (event.keyCode === 13) {
					window.location.replace("chez_la_dame/entree.html");
				}
			});	
		}
		
		return;
	  }
	}

	var timer=setTimeout(play(lieu,paroles),200);
}


else if (document.getElementById('page').textContent==='porte1'){
	function verifier(mdp){
		if (mdp=="route"){
			return true;
		}
		else{
			return false;
		}
	}
	document.addEventListener("keyup",function(event){
		if (event.keyCode===13){
			var mdp=document.getElementById("mdp").value;
			if(verifier(mdp)===true){
				alert("Correct");
				window.location.replace("cave.html");
			}
			else{
				alert("Le code n'est pas bon !");
				
			}
		}
	});
}
else if (document.getElementById('page').textContent==='fin'){
	var lieu = document.getElementById('lieu');
	var paroles=document.getElementById('texte').innerHTML;
	
	var lieu2=document.getElementById('continuer');
	var texte2=document.getElementById('fin').innerHTML;

	var index=0;
	
	function randomSpeed(min,max){
	  return Math.floor(Math.random()*(max-min)+min);
	}

	function play (objet,texte) {
	  if (texte[index-1]!=="<"){
		objet.innerHTML=texte.slice(0,index);
		index++;
		timer = setTimeout(function() {
			play(objet, texte);
		}, randomSpeed(2,10));
	  }
	  else if (texte[index-1]==="<" && texte[index]=='i'){
		index=index+3;
		timer = setTimeout(function() {
			play(objet, texte);
		}, randomSpeed(30,50));
	  }
	  else if ((texte[index-1]=="<" && texte[index]=='b' && texte[index+1]=='r')||(texte[index-1]=="<" && texte[index]=='/' && texte[index+1]=='i')){
		index=index+4;
		timer = setTimeout(function() {
			play(objet, texte);
		}, randomSpeed(30,50));
	  }
	  if (index>=texte.length){
		 clearTimeout(timer)
		index=0;
		if (objet === lieu) {
			timer=setTimeout(function() {
				play(lieu2, texte2);
			}, 200);
        }
		else{
			document.addEventListener("keyup", function(event) {
				if (event.keyCode === 13) {
					window.location.replace("img_fin.html");
				}
			});	
		}
		
		return;
	  }
	}

	var timer=setTimeout(play(lieu,paroles),200);
}
