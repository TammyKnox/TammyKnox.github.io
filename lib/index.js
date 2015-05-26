var langHeader = document.getElementById("langHeader");
var langMessage = document.getElementById("langMessage");

//changes to japanese, spanish, or english translation of webpage.
function  languageChange(element_id){
	var id = element_id;
	if(id == "es"){
		langHeader.innerHTML = "Próximamente!";
		langMessage.innerHTML = "Mi nombre es Tammy-Elizabeth pero me puedes llamar a Tammy. Mi sitio cartera está actualmente en construcción. Pero me pueden encontrar a través de mi medios de comunicación social:";
	}else if(id == "jp"){
		langHeader.innerHTML = "近日公開！";
		langMessage.innerHTML = "私の名前はタミー·エリザベスですが、タミー私を呼び出すことができます。私のポートフォリオサイトは現在工事中です。しかし、あなたは私のソーシャルメディアを通して私を見つけることができます。";
	}else{
		id = "en";
		langHeader.innerHTML = "Coming Soon!";
		langMessage.innerHTML = "My name is Tammy-Elizabeth but you can call me Tammy. My portfolio site is currently under construction. But you can find me through my social media:";
	}
}