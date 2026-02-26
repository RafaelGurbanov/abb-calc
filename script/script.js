    function tabi_ac(id, dusme) {

        document.getElementById('kredit').classList.add('hidden');
        document.getElementById('depozit').classList.add('hidden');
        document.getElementById('avto').classList.add('hidden');
        document.getElementById('ipoteka').classList.add('hidden');

        document.getElementById(id).classList.remove('hidden');

        var tab_dusmeleri = document.querySelectorAll('.tab');
        for (var i = 0; i < tab_dusmeleri.length; i++) {
            tab_dusmeleri[i].classList.remove('bg-black', 'text-white', 'font-bold');
            tab_dusmeleri[i].classList.add('text-gray-500');
        }

        dusme.classList.add('bg-black', 'text-white', 'font-bold');
        dusme.classList.remove('text-gray-500');
    }


    function kredit_hesabla() {

        var mebleg = document.getElementById('k_mebleg').value;
        mebleg = Number(mebleg);

        var muddet = document.getElementById('k_muddet').value;
        muddet = Number(muddet);

        var faiz = document.getElementById('k_faiz').value;
        faiz = Number(faiz);

        var mebleg_yazisi = mebleg.toLocaleString('az-AZ') + ' ₼';
        document.getElementById('k_mebleg_goster').textContent = mebleg_yazisi;

        var muddet_yazisi = muddet + ' ay';
        document.getElementById('k_muddet_goster').textContent = muddet_yazisi;

        var faiz_yazisi = faiz.toFixed(1) + ' %';
        document.getElementById('k_faiz_goster').textContent = faiz_yazisi;

        var aylik_faiz_nisbeti = faiz / 100;
        aylik_faiz_nisbeti = aylik_faiz_nisbeti / 12;

        var ayliq_odenis;

        if (aylik_faiz_nisbeti == 0) {
            ayliq_odenis = mebleg / muddet;
        } else {
            var ust = mebleg * aylik_faiz_nisbeti * Math.pow(1 + aylik_faiz_nisbeti, muddet);
            var alt = Math.pow(1 + aylik_faiz_nisbeti, muddet) - 1;
            ayliq_odenis = ust / alt;
        }

        var umumi_odenis = ayliq_odenis * muddet;

        var ayliq_yazisi = ayliq_odenis.toLocaleString('az-AZ', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' ₼';
        document.getElementById('k_ayliq').textContent = ayliq_yazisi;

        var mebleg_info_yazisi = mebleg.toLocaleString('az-AZ') + ' ₼';
        document.getElementById('k_mebleg_info').textContent = mebleg_info_yazisi;

        var faiz_info_yazisi = faiz.toFixed(1) + ' %';
        document.getElementById('k_faiz_info').textContent = faiz_info_yazisi;

        var umumi_yazisi = umumi_odenis.toLocaleString('az-AZ', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' ₼';
        document.getElementById('k_umumi').textContent = umumi_yazisi;
    }


    var dep_tip = 'ay';
    var dep_simvol = '₼';
    var dep_faiz = 0.08;
    var dep_muddet = 3;

    function dep_tip_sec(dusme, tip) {

        var butun = document.querySelectorAll('.dep-tip');
        for (var i = 0; i < butun.length; i++) {
            butun[i].classList.remove('bg-white', 'text-black', 'font-semibold', 'border', 'border-gray-200');
            butun[i].classList.add('text-gray-500');
        }

        dusme.classList.add('bg-white', 'text-black', 'font-semibold', 'border', 'border-gray-200');
        dusme.classList.remove('text-gray-500');

        dep_tip = tip;

        depozit_hesabla();
    }

    function dep_val_sec(dusme, val) {

        var butun = document.querySelectorAll('.dep-val');
        for (var i = 0; i < butun.length; i++) {
            butun[i].classList.remove('bg-white', 'text-black', 'font-semibold', 'border', 'border-gray-200');
            butun[i].classList.add('text-gray-500');
        }

        dusme.classList.add('bg-white', 'text-black', 'font-semibold', 'border', 'border-gray-200');
        dusme.classList.remove('text-gray-500');

        if (val == 'AZN') {
            dep_simvol = '₼';
            dep_faiz = 0.08;
        }

        if (val == 'USD') {
            dep_simvol = '$';
            dep_faiz = 0.05;
        }

        depozit_hesabla();
    }

    function dep_muddet_sec(dusme, ay) {

        var butun = document.querySelectorAll('.dep-muddet');
        for (var i = 0; i < butun.length; i++) {
            butun[i].classList.remove('border-2', 'border-black', 'font-bold');
            butun[i].classList.add('border', 'border-gray-300');
        }

        dusme.classList.add('border-2', 'border-black', 'font-bold');
        dusme.classList.remove('border', 'border-gray-300');

        dep_muddet = ay;

        depozit_hesabla();
    }

    function depozit_hesabla() {

        var mebleg = document.getElementById('d_mebleg').value;
        mebleg = Number(mebleg);

        var mebleg_yazisi = mebleg.toLocaleString('az-AZ') + ' ' + dep_simvol;
        document.getElementById('d_mebleg_goster').textContent = mebleg_yazisi;

        var aylik_faiz = mebleg * dep_faiz;
        aylik_faiz = aylik_faiz / 12;

        var umumi_qazanc = aylik_faiz * dep_muddet;

        var qazanc_yazisi = umumi_qazanc.toLocaleString('az-AZ', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' ' + dep_simvol;
        document.getElementById('d_qazanc').textContent = qazanc_yazisi;

        var aylik_yazisi = aylik_faiz.toLocaleString('az-AZ', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' ' + dep_simvol;
        document.getElementById('d_aylik_faiz').textContent = aylik_yazisi;

        var faiz_prosent = dep_faiz * 100;
        document.getElementById('d_faiz_dere').textContent = faiz_prosent + ' %';
    }


    var avto_faiz = 14;

    function avto_nov_sec(dusme, nov) {

        var butun = document.querySelectorAll('.avto-nov');
        for (var i = 0; i < butun.length; i++) {
            butun[i].classList.remove('bg-white', 'text-black', 'font-semibold', 'border', 'border-gray-200');
            butun[i].classList.add('text-gray-500');
        }

        dusme.classList.add('bg-white', 'text-black', 'font-semibold', 'border', 'border-gray-200');
        dusme.classList.remove('text-gray-500');

        if (nov == 'elektrik') {
            avto_faiz = 12;
        }

        if (nov == 'hibrid') {
            avto_faiz = 14;
        }

        if (nov == 'diger') {
            avto_faiz = 16;
        }

        avto_hesabla();
    }

    function avto_hesabla() {

        var qiymet = document.getElementById('a_qiymet').value;
        qiymet = Number(qiymet);

        var ilkin = document.getElementById('a_ilkin').value;
        ilkin = Number(ilkin);

        var muddet = document.getElementById('a_muddet').value;
        muddet = Number(muddet);

        var qiymet_yazisi = qiymet.toLocaleString('az-AZ') + ' ₼';
        document.getElementById('a_qiymet_goster').textContent = qiymet_yazisi;

        var ilkin_yazisi = ilkin + ' %';
        document.getElementById('a_ilkin_goster').textContent = ilkin_yazisi;

        var muddet_yazisi = muddet + ' ay';
        document.getElementById('a_muddet_goster').textContent = muddet_yazisi;

        var ilkin_odenis = qiymet * ilkin / 100;
        var kredit = qiymet - ilkin_odenis;

        var r = avto_faiz / 100;
        r = r / 12;

        var ust = kredit * r * Math.pow(1 + r, muddet);
        var alt = Math.pow(1 + r, muddet) - 1;
        var ayliq = ust / alt;

        var komissiya = kredit * 0.005;
        if (komissiya < 20) {
            komissiya = 20;
        }

        var umumi = ayliq * muddet;

        var ayliq_yazisi = ayliq.toLocaleString('az-AZ', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' ₼';
        document.getElementById('a_ayliq').textContent = ayliq_yazisi;

        var kredit_yazisi = Math.round(kredit).toLocaleString('az-AZ') + ' ₼';
        document.getElementById('a_kredit_mebleg').textContent = kredit_yazisi;

        var faiz_yazisi = avto_faiz + ' %';
        document.getElementById('a_faiz_info').textContent = faiz_yazisi;

        var komissiya_yazisi = Math.round(komissiya).toLocaleString('az-AZ') + ' ₼';
        document.getElementById('a_komissiya').textContent = komissiya_yazisi;

        var umumi_yazisi = umumi.toLocaleString('az-AZ', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' ₼';
        document.getElementById('a_umumi').textContent = umumi_yazisi;
    }


    var ip_faiz = 4;

    function ip_faiz_sec(dusme, faiz) {

        var butun = document.querySelectorAll('.ip-faiz');
        for (var i = 0; i < butun.length; i++) {
            butun[i].classList.remove('border-2', 'border-black', 'font-bold');
            butun[i].classList.add('border', 'border-gray-300');
        }

        dusme.classList.add('border-2', 'border-black', 'font-bold');
        dusme.classList.remove('border', 'border-gray-300');

        ip_faiz = faiz;

        ipoteka_hesabla();
    }

    function ipoteka_hesabla() {

        var mebleg = document.getElementById('ip_mebleg').value;
        mebleg = Number(mebleg);

        var il = document.getElementById('ip_muddet').value;
        il = Number(il);

        var ay_sayi = il * 12;

        var mebleg_yazisi = mebleg.toLocaleString('az-AZ') + ' ₼';
        document.getElementById('ip_mebleg_goster').textContent = mebleg_yazisi;

        var muddet_yazisi = il + ' il';
        document.getElementById('ip_muddet_goster').textContent = muddet_yazisi;

        var r = ip_faiz / 100;
        r = r / 12;

        var ust = mebleg * r * Math.pow(1 + r, ay_sayi);
        var alt = Math.pow(1 + r, ay_sayi) - 1;
        var ayliq = ust / alt;

        var ayliq_yazisi = ayliq.toLocaleString('az-AZ', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' ₼';
        document.getElementById('ip_ayliq').textContent = ayliq_yazisi;

        var mebleg_info_yazisi = mebleg.toLocaleString('az-AZ') + ' ₼';
        document.getElementById('ip_mebleg_info').textContent = mebleg_info_yazisi;

        var faiz_yazisi = ip_faiz + ' %';
        document.getElementById('ip_faiz_info').textContent = faiz_yazisi;
    }


    kredit_hesabla();
    depozit_hesabla();
    avto_hesabla();
    ipoteka_hesabla();