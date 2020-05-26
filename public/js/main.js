window.addEventListener('load', () => {
	const preloader = document.querySelector('.loader');
    preloader.classList.add('loader-finish');
})
var taluks = ["Agasteeswaram", "Alandur", "Alangudi", "Alangulam", "Alathur", "Ambur", "Ambasamuthiram", "Ambattur", "Aminjikarai", "Anaicut", "Anaimalai", "Andimadam", "Andipatti", "Annur","Anthiyur", "Arani", "Arakkonam", "Aranthangi", "Aravakurichi","Arcot", "Ariyalur", "Arupukottai", "Attur(dindugal)", "Attur(salem)","Avadaiyarkoil", "Avadi", "Avinashi", "Ayanavaram", "Bargur", "Bhavani","Bhuvanagiri","Bodinayakanur","Budalur","Chengalpattu","Chengam","Chidambaram","Chinnaselam","Cheranmahadevi","Chetpet","Cheyyur","Coimbatore(North)","Coimbatore(South)","Coonoor","Cuddalore","Denkanikottai","Devakottai","Dharapuram","Dharmapuri","Dindigul East","Dindigul West","Edapady","Eral","Erode","Ettayapuram","Gandarvakottai","Gangavalli","Gingee","Gobichettipalayam","Gudalur","Gudiyatham","Guindy","Gujiliamparai","Gummidipoondi","Harur","Harur","Ilayankudi","Illuppur","Jamunamarathoor","K V Kuppam","Kadaladi","Kadavur","Kadayampatti","Kadayanallur","Kalaiyarkoil","Kalasapakkam","Kalkulam","Kallakurichi","Kallakurichi","Kalvarayan hills","Kamuthi","Kancheepuram","Kancheepuram","Kandachipuram","Kangayam","Karaikudi","Karambakudi","Killiyoor","Kilpennathur","Kilvelur","Kinathukadavu","Kodaikanal","Kodumudi","Kolli Hills","Koothanallur","Kotagiri","Kovilpattai","Krishnagiri","Krishnarayapuram","Kudavasal","Kulathur","Kulithalai","Kumarapalayam","Kumbakonam","Kundah","Kundrathur","Kunnam","Kurinjipadi","Utthalam","Lalgudi","Madathukulam","Madhavaram","Madhurantakam","Madukkarai","Madurai East","Madurai North","Madurai(South)","Madurai West","Maduravoyal","Mambalam","Manachanallur","Manamadurai","Manamelkudi","Manapparai","Manmangalam","Mannargudi","Manur","Marakkanam","Mayiladuthurai","Melmalaiyanur","Melur","Mettupalayam","Mettur","Modakkurichi","Mohanur","Mudukulathur","Musiri","Mylapore","Nagapattinam","Nallampalli","Namakkal","Nambiyur","Nanguneri","Kangayam","Nannilam","Natham","Natrampalli","Needamangalam","Nemili","Nilakottai","Oddenchatram","Omalur","Orathanadu","Ottapidaram","Palakcode","Palani","Palayamkottai","Palladam","Pallavaram","Pallipattu","Panruti","Panthalur","Papanasam","Pappireddipatti","Paramakudi","Paramathi Velur","Pattukkottai","Pennagaram","Pennagaram","Perambalur","Perambur","Peravurani","Periyakulam(Theni)","Periyakulam(Thiruvannamalai)","Perundurai","Perur","Pernambut","Pethanaickenpalayam","Pochampalli","Pollachi","Polur","Ponnamaravathi","Ponneri","Poonamallee","Pudukkottai","Pugalur","Purasawalkam","R.K. Pettai","Radhapuram","Rajapalayam","Rajasingamangalam","Ramanathapuram","Manamelkudi","Rameswaram","Rasipuram","Salem","Salem South","Salem West","Salem West","Sankarankovil","Sankarapuram","Sathankulam","Sathur","Sathyamangalam","Sathyamangalam","Sendurai","Shencottai","Sholinganallur","Shoolagiri","Sigampunari","Sirkali","Sivaganga","Sivagiri","Sivakasi","Srimushanam","Sriperumbudur","Srirangam","Srivaikundam","Srivilliputhur","Sulur","Tambaram","Tenkasi","Thalavadi","Thandarampattu","Thanjavur","Tharangambadi","Theni","Thiruchengode","Thiruchirapalli-West","Thirukkalukundram","Thirukkuvalai","Thirumayam","Thirupparankundram","Thirupporur","Thiruppuvanam","Thiruthuraipoondi","Thiruvaiyaru","Thiruvarur","Thiruvattar","Thiruvengadam","Thiruvennainallur","Thiruverumpur","Thiruvidaimarudur","Thiruvidaimarudur","Thiruvottiyur","Thisayanvilai","Thoothukkudi","Thottiyam","Thovalai","Thuraiyur","Tindivanam","Tiruchirappalli-East","Tiruchendur","Tiruchuli","Tirukkoilur","Tirumangalam","Tirunelveli","Tirupathur(Sivagangai)","Tirupattur(dt)","Tiruppur North","Tiruppur South","Tiruttani","Tiruvadanai","Tiruvallur","Tiruvannamalai","Titakudi","Tondiarpet","Udayarpalayam","Udhagamandalam","Udumalpet","Ulundurpet","Usilampatti","Uthamapalayam","Uthangarai","Uthiramerur","Uthukkotai","Uthukuli","V.K.Pudur","Vadipatti","Valangaiman","Valapady","Valparai","Vandalur","Vandavasi","Vaniyambadi","Vanur","Vedaranyam","Vedasandur","Velachery","Vellore","Vembakkam","Vembakkottai","Veppanthattai","Veppur","Vikkiravandi", "Vilathikulam", "Vilavancode","Villupuram","Viralimalai","Virudhunagar","Vridachalam","Walajah", "Watrap", "Yercaud"];
taluks.sort().forEach(taluk_options);
function taluk_options(item) {
    var taluk_sel = document.getElementById('dnr_taluk');
    for(var i=0; i<=1;i++){
        var taluk_opt = document.createElement('option');
        taluk_opt.appendChild( document.createTextNode(item));
        taluk_opt.value = item;
        return taluk_sel.appendChild(taluk_opt);
    }
}
var blood = ["A+", "A-", "A1+", "A1-", "A2+", "A2-", "B+","B-","A1B+","A1B-","A2B+","A2B-","AB+","AB-","O+","O-"]
blood.sort().forEach(blood_group);
function blood_group(item){
    var blood_sel = document.getElementById('dnr_bld_grp');
    for(var i=0; i <=1; i++){
        var blood_opt = document.createElement('option');
        blood_opt.appendChild( document.createTextNode(item));
        blood_opt.value = item;
        return blood_sel.appendChild(blood_opt)
    }
}
