const slova = [
    [
        "der Müllberg","skládka"
    ],
    [
        "das Windrad", "veterná turbína"
    ],
    [
        "die Luftverschmutzung","znečistenie vzduchu"
    ],
    [
        "das Waldsterben", "odumieranie lesov"
    ],
    [
        "die Mülltrenung","triedenie odpadu"
    ],
    [
        "das Recycling", "recyklovanie"
    ],
    [
        "der Sperrmüll","neskladný odpad"
    ],
    [
        "der Abfall", "odpad"
    ],
    [
        "das Kohlendioxid","oxid uhličitý"
    ],
    [
        "erneuerbar", "obnoviteľný"
    ],
    [
        "Energie nutzen","využiť energiu"
    ],
    [
        "die Plastiktüte", "igelitové vrecko"
    ],
    [
        "das Grundwasser","spodná voda"
    ],
    [
        "vergiften", "otráviť"
    ],
    [
        "die Mehrwegflasche", "zálohovaná fľaša"
    ],
    [
        "umgeben","obklopovať"
    ],
    [
        "das Fischsterben", "úhyn rýb"
    ],
    [
        "sauer","kyslý"
    ],
    [
        "die Tanker-Havarie", "havária tankera"
    ],
    [
        "die Erwärmung", "otepľovanie"
    ],
    [
        "sich leisten", "dovoliť si"
    ],
    [
        "die Ressource","prírodný zdroj"
    ],
    [
        "störend", "rušivý"
    ],
    [
        "der Einfluss","vplyv"
    ],
    [
        "die Eröffnung", "otvorenie, zahájenie"
    ],
    [
        "der Recyclinghof", "zberný dvor"
    ],
    [
        "der Mobilfunkanbeiter","mobilný operátor"
    ],
    [
        "lediglich", "len, iba"
    ],
    [
        "wiederverwenden","opätovne použiť"
    ],
    [
        "der Benzinverbrauch", "spotreba benzínu"
    ],
    [
        "die Entsorgung", "likvidácia odpadu"
    ],
    [
        "umweltschädlich","škodlivý voči životnému prostrediu"
    ],
    [
        "die Energiesparlampe", "úsporná žiarovka"
    ],
    [
        "der Sondermüll","nebezpečný odpad"
    ],
    [
        "opfern", "obetovať"
    ],
    [
        "sich vorwerfen", "vyčítať si"
    ],
    [
        "spülen", "splachovať"
    ],
    [
        "stinken, stank","zapáchať"
    ],
    [
        "giftig", "jedovatý"
    ],
    [
        "umweltbewusst","ekologický"
    ],
    [
        "der Strom", "prúd"
    ],
    [
        "plastikfrei","bez plastov"
    ],
    [
        "der Bedarf", "potreba"
    ],
    [
        "anbringen","pripevniť"
    ],
    [
        "der Müllwagen", "smetiarske auto"
    ],
    [
        "die Vogelschutzinsel", "ostrov s vtáčou rezerváciou"
    ],
    [
        "wachrütteln","vyburcovať"
    ],
    [
        "das Bewusstsein", "vedomie, uvedomenie si"
    ],
    [
        "das Entwicklungsland", "rozvojová krajina"
    ],
    [
        "die Umweltschutzmaßnahme", " opatrenie na ochranu životného prostredia"
    ],
    [
        "das Abkommen", "zmluva"
    ],
    [
        "sich auswirken auf", "ovplyvňovať"
    ],
    [
        "die Ökobewegung","ekologické hnutie"
    ],
    [
        "der Treibhauseffekt", "skleníkový efekt"
    ],
    [
        "der Klimawandel","zmena podnebia"
    ],
    [
        "die Wertstoffsammeltasche", "taška na obaly z umelej hmoty"
    ],
    [
        "der Anliefer","návštevník"
    ],
    [
        "das Begrüßungsgeschenk", "uvítací darček"
    ],
    [
        "die Kunststoffverpackung","obal z umelej hmoty"
    ],
    [
        "der Renovierungsabfall", "odpad po oprave domu"
    ],
    [
        "der Bauschutt", "stavebný odpad"
    ],
    [
        "gewerbliche Kunden","živnostníci"
    ],
    [
        "die Schadstoffannahme", "odber kontaminovaných látok"
    ],
    [
        "der Fußbodenbelag","podlahová krytina"
    ],
    [
        "der Zaun", "plot"
    ],
    [
        "das Waschbecken","umývadlo"
    ],
    [
        "das Toilettenbecken", "záchodová misa"
    ],
    [
        "die Fliese","dlaždica, obkladačka"
    ],
    [
        "die Betonplatte", "betónova platňa"
    ],
    [
        "die Duschabtrennung","sprchová prepážka"
    ],
    [
        "die Binderfarbe", "krycia farba"
    ],
    [
        "der Altreifen","stará pneumatika"
    ],
    [
        "die Bahnschwelle", "železničný podval"
    ],
    [
        "die Kartonage", "obal"
    ],
    [
        "der Metallschrott","kovový odpad"
    ],
    [
        "ergeben", "vyplýtvať"
    ],
    [
        "aufheben, hob auf","nechať si"
    ],
    [
        "verschenken", "darovať"
    ],
    [
        "zugeben","priznať"
    ],
    [
        "verbotenerweise", "nelegálne"
    ],
    [
        "der Rohstoff","surovina"
    ],
    [
        "das Kupfer", "meď"
    ],
    [
        "seltene Erden", "drahé kovy"
    ],
    [
        "verbaut","spotrebovaný"
    ],
    [
        "umweltgerecht", "šetrný k životnému prostrediu"
    ],
    [
        "langzeitarbeitslos","dlhodobo nezamestnaný"
    ],
    [
        "das Biosiegel", "značka pre bioprodukt"
    ],
    [
        "die Käfighaltung","pestovanie v klietkach"
    ],
    [
        "scheitern", "stroskotať"
    ],
    [
        "das Abwassersystem", "kanalizácia"
    ],
    [
        "nachspülen, spülte nach", "znova pustiť vodu"
    ],
    [
        "die Klospülung","splachovač záchoda"
    ],
    [
        "die Stopptaste", "tlačidlo na zastavenie"
    ],
    [
        "der Kloreiniger","WC čistiš"
    ],
    [
        "kippen", "vyliať"
    ],
    [
        "die Wertstofftonne","popolnica na recyklovanie"
    ],
    [
        "der Pappbecher", "papierový pohár"
    ],
    [
        "beheizt", "vykurovaný"
    ],
    [
        "beschlagen sein","byť orosený"
    ],
    [
        "der Stecker", "zástrčka"
    ],
    [
        "die Ladesäule","dobíjací panel"
    ],
    [
        "schlapp machen", "vybiť sa"
    ],
    [
        "standby","úsporný režim"
    ],
    [
        "rigoros", "prísne, nekompromisne"
    ],
    [
        "der Umweltverein","ekologické združenie"
    ],
    [
        "die Nachfüllpackung", "balenie na doplnenie"
    ],
    [
        "das Ozonloch", "ozónová diera"
    ],
    [
        "die Windenergie", "veterná elektrina"
    ],
    [
        "die Plastikflaschen","plastové fľaše"
    ],
    [
        "die Bioprodukte", "bioprodukty"
    ],
    [
        "der Sonnenkollektoren", "solárny panel"
    ],
    [
        "die Umweltpolitik", "zelená politika"
    ],
    [
        "die Verkehrsmittel", "MHD, hromadná doprava"
    ],
    [
        "die Atomkatastrophe", "jadrová katastrofa"
    ],
    [
        "die Industrialisierung","industrializácia"
    ],
    [
        "verschmutz", "znečistenie"
    ],
    [
        "der saur Regen", "kyslý dážď"
    ],
    [
        "nötigen", "potrebné"
    ],
    [
        "der Stau", "dopravná zápcha"
    ],
    [
        "der Umweltschutz", "ochrana životného prostredia"
    ],
    [
        "der Garten","záhrada"
    ],
    [
        "der Nachbar", "sused"
    ],
    [
        "die Verpackung", "obal"
    ],
    [
        "trennen","triediť"
    ],
    [
        "wachgerüttelt", "prebudiť"
    ],
    [
        "ablehnen", "odmietnuť"
    ],
    [
        "das Umweltbewusstsein","ekologické povedomie"
    ],
    [
        "die Boden", "zem, pôda"
    ],
    [
        "werfen", "hádzať"
    ],
    [
        "die Gebühren","poplatky"
    ],
    [
        "die Sammelstelle", "zberné miesto, zberný dvor"
    ],
    [
        "die Zahl", "počet"
    ],
    [
        "die Geräte", "spotrebiče"
    ],
    [
        "die Waschmaschin", "práčka"
    ],
    [
        "sparen", "šetriť"
    ],
    [
        "der Kollege", "kolega"
    ],
    [
        "der Keiser", "cisár"
    ],
    [
        "einen Beitrag leisten", "prispieť"
    ],
    [
        "vor Ort", "na mieste"
    ],
    [
        "der Neger", "podradený biely človek"
    ],
    [
        "der Nigga", "homie"
    ]
    
]

export default slova