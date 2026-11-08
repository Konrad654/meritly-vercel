"use strict";
// Kuraterad katalog. Kontrollera alltid aktuella villkor hos utbildningsanordnaren.
const entries=[
["HubSpot","Digital Marketing Certification","Marknadsföring","Certifikat",3,"Nybörjare","Digital marknadsföring, SEO, sociala medier och e-post.","https://academy.hubspot.com/courses/digital-marketing"],
["HubSpot","Social Media Marketing Certification","Marknadsföring","Certifikat",5,"Nybörjare","Strategi för sociala medier, innehåll och mätning.","https://academy.hubspot.com/certification-overview"],
["HubSpot","Content Marketing Certification","Marknadsföring","Certifikat",8,"Nybörjare","Innehållsstrategi, storytelling och distribution.","https://academy.hubspot.com/certification-overview"],
["HubSpot","Inbound Certification","Försäljning","Certifikat",3,"Nybörjare","Kundfokus, kundresor och inbound-metodik.","https://academy.hubspot.com/courses/inbound"],
["HubSpot","Inbound Sales Certification","Försäljning","Certifikat",3,"Nybörjare","Behovsanalys, säljsamtal och moderna säljprocesser.","https://academy.hubspot.com/courses/inbound-sales"],
["HubSpot","Digital Advertising Certification","Marknadsföring","Certifikat",4,"Medel","Strategi och optimering av digital annonsering.","https://academy.hubspot.com/certification-overview"],
["HubSpot","HubSpot Reporting Certification","Data & analys","Certifikat",6,"Medel","Rapportering och analys i HubSpot.","https://academy.hubspot.com/courses/service?awardType=ONLY_SHOW_CERTIFICATE_COURSES"],
["HubSpot","Service Hub Software Certification","Försäljning","Certifikat",2,"Medel","Kundservice och verktyg i HubSpot Service Hub.","https://academy.hubspot.com/certification-overview"],
["HubSpot","Revenue Operations Certification","Företagande","Certifikat",7,"Medel","Samarbete mellan marknad, sälj och kundservice.","https://academy.hubspot.com/certification-overview"],
["Google Skillshop","Google Ads Search Certification","Marknadsföring","Certifikat",null,"Medel","Sökannonser, kampanjupplägg och optimering i Google Ads.","https://skillshop.withgoogle.com/googleads/"],
["Google Skillshop","Google Ads Display Certification","Marknadsföring","Certifikat",null,"Medel","Displayannonsering och målgrupper i Google Ads.","https://skillshop.withgoogle.com/googleads/"],
["Google Skillshop","Google Ads Measurement Certification","Data & analys","Certifikat",null,"Medel","Mätning och utvärdering av annonsering.","https://skillshop.withgoogle.com/googleads/"],
["Semrush Academy","SEO Certification","Marknadsföring","Certifikat",null,"Nybörjare","Sökmotoroptimering och synlighet på webben.","https://www.semrush.com/academy/certification/"],
["Semrush Academy","Content Marketing Certification","Marknadsföring","Certifikat",null,"Nybörjare","Planera och skapa innehåll som når rätt målgrupp.","https://www.semrush.com/academy/certification/"],
["Semrush Academy","Technical SEO Certification","IT & teknik","Certifikat",null,"Medel","Teknisk sökmotoroptimering, indexering och webbstruktur.","https://www.semrush.com/academy/certification/"],
["freeCodeCamp","Responsive Web Design","Programmering","Certifikat",null,"Nybörjare","HTML, CSS och responsiv webbutveckling med projekt.","https://www.freecodecamp.org/learn/"],
["freeCodeCamp","JavaScript Algorithms and Data Structures","Programmering","Certifikat",null,"Medel","JavaScript, algoritmer och datatyper med praktiska övningar.","https://www.freecodecamp.org/learn/"],
["freeCodeCamp","Front End Development Libraries","Programmering","Certifikat",null,"Medel","Frontend-bibliotek och interaktiva webbgränssnitt.","https://www.freecodecamp.org/learn/"],
["freeCodeCamp","Data Visualization","Data & analys","Certifikat",null,"Medel","Visualisera data med webbaserade verktyg.","https://www.freecodecamp.org/learn/"],
["freeCodeCamp","Relational Database","Data & analys","Certifikat",null,"Medel","SQL, databaser och praktiska projekt.","https://www.freecodecamp.org/learn/"],
["freeCodeCamp","Back End Development and APIs","Programmering","Certifikat",null,"Avancerad","Serverutveckling och API:er.","https://www.freecodecamp.org/learn/"],
["IBM SkillsBuild","Digitala kompetenser och AI","AI","Digitalt märke",null,"Nybörjare","Utbildningsspår inom AI och digital kompetens. Välj ett spår som ger en digital merit.","https://skillsbuild.org/"],
["Cisco Networking Academy","Introduction to Cybersecurity","Cybersäkerhet","Digitalt märke",null,"Nybörjare","Introduktion till cybersäkerhet och digitala hot.","https://www.netacad.com/"],
["Cisco Networking Academy","Networking Basics","IT & teknik","Digitalt märke",null,"Nybörjare","Grundläggande nätverk, internet och kommunikation.","https://www.netacad.com/"],
["Salesforce Trailhead","Salesforce Trailhead-moduler","Företagande","Digitalt märke",null,"Nybörjare","Korta gratis moduler som kan ge badges, inte samma sak som betald Salesforce-certifiering.","https://trailhead.salesforce.com/"]
].map((r,i)=>({id:i+1,provider:r[0],title:r[1],category:r[2],type:r[3],hours:r[4],level:r[5],description:r[6],url:r[7]}));

function coursePath(e){return "certifikat/"+e.id+"-"+e.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".html"}
const providerLogos={"HubSpot":"hubspot","Google Skillshop":"google","Semrush Academy":"semrush","freeCodeCamp":"freecodecamp","IBM SkillsBuild":"ibm","Cisco Networking Academy":"cisco","Salesforce Trailhead":"salesforce"};
