import React, { useState, useEffect } from "react";
import '../style/Rec.css';


const locationData = {
        India: {
          "Andhra Pradesh": {
            "Anantapur": ["Anantapur", "Guntakal", "Hindupur"],
            "Chittoor": ["Tirupati", "Madanapalle", "Punganur"],
            "East Godavari": ["Rajahmundry", "Kakinada", "Amalapuram"],
            "Guntur": ["Guntur", "Narasaraopet", "Tenali"],
            "Krishna": ["Vijayawada", "Machilipatnam"],
            "Kurnool": ["Kurnool", "Nandyal"],
            "Nellore": ["Nellore", "Gudur"],
            "Prakasam": ["Ongole", "Markapur"],
            "Srikakulam": ["Srikakulam", "Palasa"],
            "Visakhapatnam": ["Visakhapatnam", "Bheemunipatnam"],
            "Vizianagaram": ["Vizianagaram", "Bobba"],
            "West Godavari": ["Eluru", "Tadepalligudem"]
          },
          ArunachalPradesh: {
            "Tawang": ["Tawang"],
            "West Kameng": ["Bomdila"],
            "East Kameng": ["Seppa"],
            "Papum Pare": ["Itanagar"],
            "Kurung Kumey": ["Koloriang"],
            "Lower Subansiri": ["Ziro"],
            "Upper Subansiri": ["Daporijo"],
            "West Siang": ["Aalo"],
            "East Siang": ["Pasighat"],
            "Siang": ["Boleng"],
            "Lower Siang": ["Likabali"],
            "Upper Siang": ["Yingkiong"],
            "Lower Dibang Valley": ["Roing"],
            "Dibang Valley": ["Anini"],
            "Longding": ["Longding"]
          },
          Assam: {
            "Baksa": ["Mankachar"],
            "Barpeta": ["Barpeta"],
            "Bongaigaon": ["Bongaigaon"],
            "Cachar": ["Silchar"],
            "Darrang": ["Mangaldoi"],
            "Dhemaji": ["Dhemaji"],
            "Dhubri": ["Dhubri"],
            "Dibrugarh": ["Dibrugarh"],
            "Goalpara": ["Goalpara"],
            "Golaghat": ["Golaghat"],
            "Hailakandi": ["Hailakandi"],
            "Jorhat": ["Jorhat"],
            "Kamrup": ["Guwahati"],
            "Karbi Anglong": ["Diphu"],
            "Karimganj": ["Karimganj"],
            "Lakhimpur": ["North Lakhimpur"],
            "Marigaon": ["Marigaon"],
            "Nagaon": ["Nagaon"],
            "Sivasagar": ["Sivasagar"],
            "Sonitpur": ["Tezpur"],
            "Tinsukia": ["Tinsukia"]
          },
          Bihar: {
            "Araria": ["Araria"],
            "Arwal": ["Arwal"],
            "Aurangabad": ["Aurangabad"],
            "Banka": ["Banka"],
            "Begusarai": ["Begusarai"],
            "Bhagalpur": ["Bhagalpur"],
            "Bhojpur": ["Arrah"],
            "Buxar": ["Buxar"],
            "Darbhanga": ["Darbhanga"],
            "East Champaran": ["Motihari"],
            "Gaya": ["Gaya"],
            "Gopalganj": ["Gopalganj"],
            "Jamui": ["Jamui"],
            "Jehanabad": ["Jehanabad"],
            "Kaimur": ["Bhabua"],
            "Katihar": ["Katihar"],
            "Khagaria": ["Khagaria"],
            "Kishanganj": ["Kishanganj"],
            "Lakhisarai": ["Lakhisarai"],
            "Madhepura": ["Madhepura"],
            "Madhubani": ["Madhubani"],
            "Munger": ["Munger"],
            "Muzaffarpur": ["Muzaffarpur"],
            "Nalanda": ["Bihar Sharif"],
            "Nawada": ["Nawada"],
            "Patna": ["Patna"],
            "Purnia": ["Purnia"],
            "Rohtas": ["Sasaram"],
            "Saharsa": ["Saharsa"],
            "Samastipur": ["Samastipur"],
            "Saran": ["Chapra"],
            "Sheikhpura": ["Sheikhpura"],
            "Sheohar": ["Sheohar"],
            "Sitamarhi": ["Sitamarhi"],
            "Siwan": ["Siwan"],
            "Supaul": ["Supaul"],
            "Vaishali": ["Hajipur"],
            "West Champaran": ["Bettiah"]
          },
          Chhattisgarh: {
            "Balod": ["Balod"],
            "Baloda Bazar": ["Baloda Bazar"],
            "Balrampur": ["Balrampur"],
            "Bastar": ["Jagdalpur"],
            "Bemetara": ["Bemetara"],
            "Bijapur": ["Bijapur"],
            "Bilaspur": ["Bilaspur"],
            "Dantewada": ["Dantewada"],
            "Dhamtari": ["Dhamtari"],
            "Durg": ["Durg"],
            "Gariaband": ["Gariaband"],
            "Janjgir-Champa": ["Janjgir"],
            "Jashpur": ["Jashpur Nagar"],
            "Kabirdham": ["Kawardha"],
            "Kanker": ["Kanker"],
            "Kondagaon": ["Kondagaon"],
            "Korba": ["Korba"],
            "Koriya": ["Baikunthpur"],
            "Mahasamund": ["Mahasamund"],
            "Mungeli": ["Mungeli"],
            "Narayanpur": ["Narayanpur"],
            "Raigarh": ["Raigarh"],
            "Raipur": ["Raipur"],
            "Rajnandgaon": ["Rajnandgaon"],
            "Sukma": ["Sukma"],
            "Surajpur": ["Surajpur"],
            "Surguja": ["Ambikapur"]
          },
          Goa: {
            "North Goa": ["Panaji", "Mapusa", "Calangute"],
            "South Goa": ["Margao", "Vasco da Gama", "Canacona"]
          },
          Gujarat: {
            "Ahmedabad": ["Ahmedabad", "Gandhinagar"],
            "Amreli": ["Amreli"],
            "Anand": ["Anand"],
            "Aravalli": ["Modasa"],
            "Banaskantha": ["Palanpur"],
            "Bharuch": ["Bharuch"],
            "Bhavnagar": ["Bhavnagar"],
            "Botad": ["Botad"],
            "Chhota Udaipur": ["Chhota Udaipur"],
            "Dahod": ["Dahod"],
            "Dang": ["Ahwa"],
            "Devbhoomi Dwarka": ["Dwarka"],
            "Gandhinagar": ["Gandhinagar"],
            "Gir Somnath": ["Una"],
            "Jamnagar": ["Jamnagar"],
            "Junagadh": ["Junagadh"],
            "Kheda": ["Kheda"],
            "Mahisagar": ["Lunawada"],
            "Mehsana": ["Mehsana"],
            "Morbi": ["Morbi"],
            "Narmada": ["Rajpipla"],
            "Navsari": ["Navsari"],
            "Panchmahal": ["Godhra"],
            "Patan": ["Patan"],
            "Porbandar": ["Porbandar"],
            "Rajkot": ["Rajkot"],
            "Sabarkantha": ["Himmatnagar"],
            "Surat": ["Surat"],
            "Surendranagar": ["Surendranagar"],
            "Tapi": ["Vyara"],
            "Vadodara": ["Vadodara"],
            "Valsad": ["Valsad"]
          },
          Haryana: {
            "Ambala": ["Ambala"],
            "Bhiwani": ["Bhiwani"],
            "Charkhi Dadri": ["Charkhi Dadri"],
            "Faridabad": ["Faridabad"],
            "Fatehabad": ["Fatehabad"],
            "Gurugram": ["Gurugram"],
            "Hisar": ["Hisar"],
            "Jhajjar": ["Jhajjar"],
            "Jind": ["Jind"],
            "Kaithal": ["Kaithal"],
            "Karnal": ["Karnal"],
            "Kurukshetra": ["Kurukshetra"],
            "Mahendragarh": ["Narnaul"],
            "Nuh": ["Nuh"],
            "Palwal": ["Palwal"],
            "Panchkula": ["Panchkula"],
            "Panipat": ["Panipat"],
            "Rewari": ["Rewari"],
            "Rohtak": ["Rohtak"],
            "Sirsa": ["Sirsa"],
            "Sonipat": ["Sonipat"],
            "Yamunanagar": ["Yamunanagar"]
          },
          HimachalPradesh: {
            "Bilaspur": ["Bilaspur"],
            "Chamba": ["Chamba"],
            "Hamirpur": ["Hamirpur"],
            "Kangra": ["Dharamshala"],
            "Kinnaur": ["Sangla"],
            "Kullu": ["Kullu"],
            "Lahaul and Spiti": ["Keylong"],
            "Mandi": ["Mandi"],
            "Shimla": ["Shimla"],
            "Sirmaur": ["Nahan"],
            "Solan": ["Solan"],
            "Una": ["Una"]
          },
          Jharkhand: {
            "Bokaro": ["Bokaro Steel City"],
            "Chatra": ["Chatra"],
            "Deoghar": ["Deoghar"],
            "Dhanbad": ["Dhanbad"],
            "Dumka": ["Dumka"],
            "Garhwa": ["Garhwa"],
            "Giridih": ["Giridih"],
            "Godda": ["Godda"],
            "Gumla": ["Gumla"],
            "Hazaribagh": ["Hazaribagh"],
            "Jamtara": ["Jamtara"],
            "Khunti": ["Khunti"],
            "Koderma": ["Koderma"],
            "Latehar": ["Latehar"],
            "Lohardaga": ["Lohardaga"],
            "Pakur": ["Pakur"],
            "Palamu": ["Daltonganj"],
            "Ramgarh": ["Ramgarh"],
            "Ranchi": ["Ranchi"],
            "Sahibganj": ["Sahibganj"],
            "Saraikela Kharsawan": ["Saraikela"],
            "Simdega": ["Simdega"]
          },
          Karnataka: {
            "Bagalkot": ["Bagalkot"],
            "Ballari": ["Ballari"],
            "Belagavi": ["Belagavi"],
            "Bengaluru Urban": ["Bengaluru"],
            "Bengaluru Rural": ["Devanahalli"],
            "Bidar": ["Bidar"],
            "Chamarajanagar": ["Chamarajanagar"],
            "Chikballapur": ["Chikballapur"],
            "Chikkamagaluru": ["Chikkamagaluru"],
            "Dakshina Kannada": ["Mangalore"],
            "Davanagere": ["Davanagere"],
            "Dharwad": ["Dharwad"],
            "Gadag": ["Gadag"],
            "Hassan": ["Hassan"],
            "Haveri": ["Haveri"],
            "Kalaburagi": ["Kalaburagi"],
            "Kodagu": ["Madikeri"],
            "Kolar": ["Kolar"],
            "Koppal": ["Koppal"],
            "Mandya": ["Mandya"],
            "Mysuru": ["Mysuru"],
            "Raichur": ["Raichur"],
            "Ramanagara": ["Ramanagara"],
            "Shivamogga": ["Shivamogga"],
            "Tumakuru": ["Tumakuru"],
            "Udupi": ["Udupi"],
            "Uttara Kannada": ["Karwar"],
            "Vijayanagara": ["Hosapete"],
            "Yadgir": ["Yadgir"]
          },
          Kerala: {
            "Alappuzha": ["Alappuzha"],
            "Ernakulam": ["Kochi"],
            "Idukki": ["Devikulam"],
            "Kannur": ["Kannur"],
            "Kasaragod": ["Kasaragod"],
            "Kollam": ["Kollam"],
            "Kottayam": ["Kottayam"],
            "Kozhikode": ["Kozhikode"],
            "Malappuram": ["Malappuram"],
            "Palakkad": ["Palakkad"],
            "Pathanamthitta": ["Pathanamthitta"],
            "Thiruvananthapuram": ["Thiruvananthapuram"],
            "Thrissur": ["Thrissur"],
            "Wayanad": ["Wayanad"]
          },
          MadhyaPradesh: {
            "Agar Malwa": ["Agar Malwa"],
            "Alirajpur": ["Alirajpur"],
            "Anuppur": ["Anuppur"],
            "Ashok Nagar": ["Ashok Nagar"],
            "Balaghat": ["Balaghat"],
            "Barwani": ["Barwani"],
            "Betul": ["Betul"],
            "Bhind": ["Bhind"],
            "Bhopal": ["Bhopal"],
            "Burhanpur": ["Burhanpur"],
            "Chhatarpur": ["Chhatarpur"],
            "Chhindwara": ["Chhindwara"],
            "Damoh": ["Damoh"],
            "Datia": ["Datia"],
            "Dewas": ["Dewas"],
            "Dhar": ["Dhar"],
            "Dindori": ["Dindori"],
            "Guna": ["Guna"],
            "Gwalior": ["Gwalior"],
            "Harda": ["Harda"],
            "Hoshangabad": ["Hoshangabad"],
            "Indore": ["Indore"],
            "Jabalpur": ["Jabalpur"],
            "Jhabua": ["Jhabua"],
            "Katni": ["Katni"],
            "Khandwa": ["Khandwa"],
            "Khargone": ["Khargone"],
            "Mandla": ["Mandla"],
            "Mandsaur": ["Mandsaur"],
            "Morena": ["Morena"],
            "Narsinghpur": ["Narsinghpur"],
            "Neemuch": ["Neemuch"],
            "Panna": ["Panna"],
            "Raisen": ["Raisen"],
            "Rajgarh": ["Rajgarh"],
            "Ratlam": ["Ratlam"],
            "Rewa": ["Rewa"],
            "Sagar": ["Sagar"],
            "Satna": ["Satna"],
            "Sehore": ["Sehore"],
            "Seoni": ["Seoni"],
            "Shahdol": ["Shahdol"],
            "Shajapur": ["Shajapur"],
            "Sheopur": ["Sheopur"],
            " Shivpuri": ["Shivpuri"],
            "Sidhi": ["Sidhi"],
            "Singrauli": ["Singrauli"],
            "Tikamgarh": ["Tikamgarh"],
            "Ujjain": ["Ujjain"],
            "Umaria": ["Umaria"],
            "Vidisha": ["Vidisha"]
          },
          Maharashtra: {
            "Ahmednagar": ["Ahmednagar"],
            "Akola": ["Akola"],
            "Amravati": ["Amravati"],
            "Aurangabad": ["Aurangabad"],
            "Beed": ["Beed"],
            "Bhandara": ["Bhandara"],
            "Buldhana": ["Buldhana"],
            "Chandrapur": ["Chandrapur"],
            "Dhule": ["Dhule"],
            "Gadchiroli": ["Gadchiroli"],
            "Gondia": ["Gondia"],
            "Hingoli": ["Hingoli"],
            "Jalgaon": ["Jalgaon"],
            "Jalna": ["Jalna"],
            "Kolhapur": ["Kolhapur"],
            "Latur": ["Latur"],
            "Mumbai City": ["Mumbai"],
            "Mumbai Suburban": ["Bandra", "Andheri", "Dadar"],
            "Nagpur": ["Nagpur"],
            "Nanded": ["Nanded"],
            "Nandurbar": ["Nandurbar"],
            "Nashik": ["Nashik"],
            "Osmanabad": ["Osmanabad"],
            "Palghar": ["Palghar"],
            "Parbhani": ["Parbhani"],
            "Pune": ["Pune", "Shivajinagar", "Kothrud"],
            "Raigad": ["Alibag"],
            "Ratnagiri": ["Ratnagiri"],
            "Sangli": ["Sangli"],
            "Satara": ["Satara"],
            "Sindhudurg": ["Sindhudurg"],
            "Solapur": ["Solapur"],
            "Thane": ["Thane"],
            "Wardha": ["Wardha"],
            "Washim": ["Washim"],
            "Yavatmal": ["Yavatmal"]
          },
          Manipur: {
            "Bishnupur": ["Bishnupur"],
            "Churachandpur": ["Churachandpur"],
            "Imphal East": ["Porompat"],
            "Imphal West": ["Lamphel"],
            "Senapati": ["Senapati"],
            "Tamenglong": ["Tamenglong"],
            "Thoubal": ["Thoubal"],
            "Ukhrul": ["Ukhrul"]
          },
          Meghalaya: {
            "East Garo Hills": ["Williamnagar"],
            "East Jaintia Hills": ["Khliehriat"],
            "East Khasi Hills": ["Shillong"],
            "North Garo Hills": ["Resubelpara"],
            "Ri Bhoi": ["Nongpoh"],
            "South Garo Hills": ["Baghmara"],
            "South West Garo Hills": ["Ampati"],
            "South West Khasi Hills": ["Mawkyrwat"],
            "West Garo Hills": ["Tura"],
            "West Jaintia Hills": ["Jowai"],
            "West Khasi Hills": ["Nongstoin"]
          },
          Mizoram: {
            "Aizawl": ["Aizawl"],
            "Champhai": ["Champhai"],
            "Kolasib": ["Kolasib"],
            "Lawngtlai": ["Lawngtlai"],
            "Lunglei": ["Lunglei"],
            "Mamit": ["Mamit"],
            "Saiha": ["Saiha"],
            "Serchhip": ["Serchhip"]
          },
          Nagaland: {
            "Dimapur": ["Dimapur"],
            "Kiphire": ["Kiphire"],
            "Kohima": ["Kohima"],
            "Longleng": ["Longleng"],
            "Mokokchung": ["Mokokchung"],
            "Mon": ["Mon"],
            "Peren": ["Peren"],
            "Phek": ["Phek"],
            "Tuensang": ["Tuensang"],
            "Wokha": ["Wokha"],
            "Zunheboto": ["Zunheboto"]
          },
          Odisha: {
            "Angul": ["Angul"],
            "Balangir": ["Balangir"],
            "Balasore": ["Balasore"],
            "Bargarh": ["Bargarh"],
            "Bhadrak": ["Bhadrak"],
            "Cuttack": ["Cuttack"],
            "Deogarh": ["Deogarh"],
            "Dhenkanal": ["Dhenkanal"],
            "Gajapati": ["Paralakhemundi"],
            "Ganjam": ["Berhampur"],
            "Jagatsinghpur": ["Jagatsinghpur"],
            "Jajpur": ["Jajpur"],
            "Jharsuguda": ["Jharsuguda"],
            "Kalahandi": ["Bhawanipatna"],
            "Kandhamal": ["Phulbani"],
            "Kendrapara": ["Kendrapara"],
            "Kendujhar": ["Kendujhar"],
            "Khordha": ["Bhubaneswar"],
            "Koraput": ["Koraput"],
            "Malkangiri": ["Malkangiri"],
            "Mayurbhanj": ["Baripada"],
            "Nabarangpur": ["Nabarangpur"],
            "Nayagarh": ["Nayagarh"],
            "Nuapada": ["Nuapada"],
            "Puri": ["Puri"],
            "Rayagada": ["Rayagada"],
            "Sambalpur": ["Sambalpur"],
            "Sundergarh": ["Sundergarh"]
          },
          Punjab: {
            "Amritsar": ["Amritsar"],
            "Barnala": ["Barnala"],
            "Bathinda": ["Bathinda"],
            "Faridkot": ["Faridkot"],
            "Fatehgarh Sahib": ["Fatehgarh Sahib"],
            "Fazilka": ["Fazilka"],
            "Firozpur": ["Firozpur"],
            "Gurdaspur": ["Gurdaspur"],
            "Hoshiarpur": ["Hoshiarpur"],
            "Jalandhar": ["Jalandhar"],
            "Kapurthala": ["Kapurthala"],
            "Ludhiana": ["Ludhiana"],
            "Malerkotla": ["Malerkotla"],
            "Mansa": ["Mansa"],
            "Moga": ["Moga"],
            "Muktsar": ["Muktsar"],
            "Pathankot": ["Pathankot"],
            "Patiala": ["Patiala"],
            "Rupnagar": ["Rupnagar"],
            "Sahibzada Ajit Singh Nagar": ["Mohali"],
            "Sangrur": ["Sangrur"],
            "Shaheed Bhagat Singh Nagar": ["Nawanshahr"],
            "Tarn Taran": ["Tarn Taran"]
          },
          Rajasthan: {
            "Ajmer": ["Ajmer"],
            "Alwar": ["Alwar"],
            "Banswara": ["Banswara"],
            "Baran": ["Baran"],
            "Barmer": ["Barmer"],
            "Bharatpur": ["Bharatpur"],
            "Bhilwara": ["Bhilwara"],
            "Bikaner": ["Bikaner"],
            "Bundi": ["Bundi"],
            "Chittorgarh": ["Chittorgarh"],
            "Churu": ["Churu"],
            "Dausa": ["Dausa"],
            "Dholpur": ["Dholpur"],
            "Dungarpur": ["Dungarpur"],
            "Hanumangarh": ["Hanumangarh"],
            "Jaipur": ["Jaipur"],
            "Jaisalmer": ["Jaisalmer"],
            "Jalore": ["Jalore"],
            "Jhalawar": ["Jhalawar"],
            "Jhunjhunu": ["Jhunjhunu"],
            "Jodhpur": ["Jodhpur"],
            "Karauli": ["Karauli"],
            "Kota": ["Kota"],
            "Nagaur": ["Nagaur"],
            "Pali": ["Pali"],
            "Pratapgarh": ["Pratapgarh"],
            "Rajsamand": ["Rajsamand"],
            "Sawai Madhopur": ["Sawai Madhopur"],
            "Sikar": ["Sikar"],
            "Sirohi": ["Sirohi"],
            "Sri Ganganagar": ["Sri Ganganagar"],
            "Tonk": ["Tonk"],
            "Udaipur": ["Udaipur"]
          },
          Sikkim: {
            "East Sikkim": ["Gangtok"],
            "North Sikkim": ["Mangan"],
            "South Sikkim": ["Namchi"],
            "West Sikkim": ["Gyalshing"]
          },
          TamilNadu: {
            "Ariyalur": ["Ariyalur"],
            "Chengalpattu": ["Chengalpattu"],
            "Chennai": ["Chennai"],
            "Coimbatore": ["Coimbatore"],
            "Cuddalore": ["Cuddalore"],
            "Dharmapuri": ["Dharmapuri"],
            "Dindigul": ["Dindigul"],
            "Erode": ["Erode"],
            "Kanchipuram": ["Kanchipuram"],
            "Kanyakumari": ["Nagercoil"],
            "Karur": ["Karur"],
            "Krishnagiri": ["Krishnagiri"],
            "Madurai": ["Madurai"],
            "Nagapattinam": ["Nagapattinam"],
            "Namakkal": ["Namakkal"],
            "Nilgiris": ["Udhagamandalam"],
            "Perambalur": ["Perambalur"],
            "Pudukkottai": ["Pudukkottai"],
            "Ramanathapuram": ["Ramanathapuram"],
            "Salem": ["Salem"],
            "Sivaganga": ["Sivaganga"],
            "Tenkasi": ["Tenkasi"],
            "Thanjavur": ["Thanjavur"],
            "The Nilgiris": ["Ooty"],
            "Theni": ["Theni"],
            "Thiruvallur": ["Thiruvallur"],
            "Thiruvarur": ["Thiruvarur"],
            "Thoothukudi": ["Thoothukudi"],
            "Tiruchirappalli": ["Tiruchirappalli"],
            "Tirunelveli": ["Tirunelveli"],
            "Tiruppur": ["Tiruppur"],
            "Tiruvannamalai": ["Tiruvannamalai"],
            "Vellore": ["Vellore"],
            "Viluppuram": ["Viluppuram"],
            "Virudhunagar": ["Virudhunagar"]
          },
          Telangana: {
            "Adilabad": ["Adilabad"],
            "Bhadradri Kothagudem": ["Kothagudem"],
            "Hyderabad": ["Hyderabad"],
            "Jagitial": ["Jagitial"],
            "Jangaon": ["Jangaon"],
            "Jayashankar Bhupalpally": ["Bhupalpally"],
            "Jogulamba Gadwal": ["Gadwal"],
            "Kamareddy": ["Kamareddy"],
            "Karimnagar": ["Karimnagar"],
            "Khammam": ["Khammam"],
            "Komaram Bheem": ["Asifabad"],
            "Mahabubabad": ["Mahabubabad"],
            "Mahbubnagar": ["Mahbubnagar"],
            "Mancherial": ["Mancherial"],
            "Medak": ["Medak"],
            "Medchal Malkajgiri": ["Medchal"],
            "Mulugu": ["Mulugu"],
            "Nagarkurnool": ["Nagarkurnool"],
            "Nalgonda": ["Nalgonda"],
            "Narayanpet": ["Narayanpet"],
            "Nirmal": ["Nirmal"],
            "Nizamabad": ["Nizamabad"],
            "Peddapalli": ["Peddapalli"],
            "Rajanna Sircilla": ["Sircilla"],
            "Rangareddy": ["Rangareddy"],
            "Sangareddy": ["Sangareddy"],
            "Siddipet": ["Siddipet"],
            "Suryapet": ["Suryapet"],
            "Vikarabad": ["Vikarabad"],
            "Wanaparthy": ["Wanaparthy"],
            "Warangal Rural": ["Warangal"],
            "Warangal Urban": ["Warangal"],
            "Yadadri Bhuvanagiri": ["Bhuvanagiri"]
          },
          Tripura: {
            "Dhalai": ["Dhalai"],
            "Gomati": ["Gomati"],
            "Khowai": ["Khowai"],
            "North Tripura": ["Dharmanagar"],
            "Sepahijala": ["Sonamura"],
            "South Tripura": ["Udaipur"],
            "Unakoti": ["Kailashahar"],
            "West Tripura": ["Agartala"]
          },
          UttarPradesh: {
            "Agra": ["Agra"],
            "Aligarh": ["Aligarh"],
            "Ambedkar Nagar": ["Akbarpur"],
            "Amethi": ["Amethi"],
            "Amroha": ["Amroha"],
            "Auraiya": ["Auraiya"],
            "Azamgarh": ["Azamgarh"],
            "Baghpat": ["Baghpat"],
            "Bahraich": ["Bahraich"],
            "Ballia": ["Ballia"],
            "Balrampur": ["Balrampur"],
            "Banda": ["Banda"],
            "Barabanki": ["Barabanki"],
            "Bareilly": ["Bareilly"],
            "Basti": ["Basti"],
            "Bhadohi": ["Bhadohi"],
            "Bijnor": ["Bijnor"],
            "Bulandshahr": ["Bulandshahr"],
            "Chandauli": ["Chandauli"],
            "Chitrakoot": ["Chitrakoot"],
            "Deoria": ["Deoria"],
            "Etah": ["Etah"],
            "Etawah": ["Etawah"],
            "Farrukhabad": ["Farrukhabad"],
            "Fatehpur": ["Fatehpur"],
            "Firozabad": ["Firozabad"],
            "Gautam Buddha Nagar": ["Noida"],
            "Ghaziabad": ["Ghaziabad"],
            "Ghazipur": ["Ghazipur"],
            "Gonda": ["Gonda"],
            "Gorakhpur": ["Gorakhpur"],
            "Hamirpur": ["Hamirpur"],
            "Hapur": ["Hapur"],
            "Hardoi": ["Hardoi"],
            "Hathras": ["Hathras"],
            "Jalaun": ["Jalaun"],
            "Jaunpur": ["Jaunpur"],
            "Jhansi": ["Jhansi"],
            "Kannauj": ["Kannauj"],
            "Kanpur Dehat": ["Kanpur Dehat"],
            "Kanpur Nagar": ["Kanpur"],
            "Kasganj": ["Kasganj"],
            "Kaushambi": ["Kaushambi"],
            "Kushinagar": ["Kushinagar"],
            "Lakhimpur Kheri": ["Lakhimpur"],
            "Lalitpur": ["Lalitpur"],
            "Lucknow": ["Lucknow"],
            "Maharajganj": ["Maharajganj"],
            "Mahoba": ["Mahoba"],
            "Mainpuri": ["Mainpuri"],
            "Mathura": ["Mathura"],
            "Mau": ["Mau"],
            "Meerut": ["Meerut"],
            "Mirzapur": ["Mirzapur"],
            "Moradabad": ["Moradabad"],
            "Muzaffarnagar": ["Muzaffarnagar"],
            "Pilibhit": ["Pilibhit"],
            "Pratapgarh": ["Pratapgarh","Kunda"],
            "Raebareli": ["Raebareli"],
            "Rampur": ["Rampur"],
            "Saharanpur": ["Saharanpur"],
            "Sambhal": ["Sambhal"],
            "Sant Kabir Nagar": ["Sant Kabir Nagar"],
            "Shahjahanpur": ["Shahjahanpur"],
            "Shamli": ["Shamli"],
            "Shravasti": ["Shravasti"],
            "Siddharthnagar": ["Siddharthnagar"],
            "Sitapur": ["Sitapur"],
            "Sonbhadra": ["Sonbhadra"],
            "Sultanpur": ["Sultanpur"],
            "Unnao": ["Unnao"],
            "Varanasi": ["Varanasi"]
          },
          Uttarakhand: {
            "Almora": ["Almora"],
            "Bageshwar": ["Bageshwar"],
            "Chamoli": ["Chamoli"],
            "Champawat": ["Champawat"],
            "Dehradun": ["Dehradun"],
            "Haridwar": ["Haridwar"],
            "Nainital": ["Nainital"],
            "Pauri Garhwal": ["Pauri"],
            "Pithoragarh": ["Pithoragarh"],
            "Rudraprayag": ["Rudraprayag"],
            "Tehri Garhwal": ["Tehri"],
            "Udham Singh Nagar": ["Rudrapur"],
            "Uttarkashi": ["Uttarkashi"]
          },
          WestBengal: {
            "Alipurduar": ["Alipurduar"],
            "Bankura": ["Bankura"],
            "Birbhum": ["Suri"],
            "Cooch Behar": ["Cooch Behar"],
            "Dakshin Dinajpur": ["Balurghat"],
            "Darjeeling": ["Darjeeling"],
            "Hooghly": ["Chinsurah"],
            "Howrah": ["Howrah"],
            "Jalpaiguri": ["Jalpaiguri"],
            "Jhargram": ["Jhargram"],
            "Kalimpong": ["Kalimpong"],
            "Kolkata": ["Kolkata"],
            "Malda": ["Malda"],
            "Murshidabad": ["Murshidabad"],
            "Nadia": ["Krishnanagar"],
            "North 24 Parganas": ["Barasat"],
            "Paschim Bardhaman": ["Asansol"],
            "Paschim Medinipur": ["Midnapore"],
            "Purba Bardhaman": ["Bardhaman"],
            "Purba Medinipur": ["Tamluk"],
            "Purulia": ["Purulia"],
            "South 24 Parganas": ["Alipore"],
            "Uttar Dinajpur": ["Raiganj"]
          }
        },  
  };
const Receiver = () => {
  const [formData, setFormData] = useState({
    bloodGroup: "",
    country: "",
    state: "",
    district: "",
    city: "",
  });
  
  const [results, setResults] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);

  // Handle changes in dropdowns
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = { ...prev, [name]: value };

      if (name === "country") {
        updated.state = "";
        updated.district = "";
        updated.city = "";
      } else if (name === "state") {
        updated.district = "";
        updated.city = "";
      } else if (name === "district") {
        updated.city = "";
      }

      return updated;
    });
  };

  // Update states based on country
  useEffect(() => {
    const selectedStates = formData.country ? Object.keys(locationData[formData.country] || {}) : [];
    setStates(selectedStates);
    setDistricts([]);
    setCities([]);
  }, [formData.country]);

  // Update districts based on state
  useEffect(() => {
    const selectedDistricts = formData.state && formData.country
      ? Object.keys(locationData[formData.country]?.[formData.state] || {})
      : [];
    setDistricts(selectedDistricts);
    setCities([]);
  }, [formData.state]);

  // Update cities based on district
  useEffect(() => {
    const selectedCities = formData.district && formData.state && formData.country
      ? locationData[formData.country]?.[formData.state]?.[formData.district] || []
      : [];
    setCities(selectedCities);
  }, [formData.district]);


  const handleSubmit = async (e) => {
  e.preventDefault();

   try {
    const response = await fetch("http://localhost:5000/api/donors/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.length > 0) {
      alert("Search successful: Donor(s) found!");
    } else {
      alert("No donors found matching the search criteria.");
    }

    setResults(data); // assuming you're storing search results in state
  } catch (error) {
    console.error("Search failed:", error);
    alert("An error occurred while searching.");
  }

    // console.log("Search response from backend:", data); // ✅ log to frontend console
};

  return (
    <div style={{ maxWidth: 500, margin: "auto", fontFamily: "Arial" }}>
      <h2>Search Blood Donors</h2>
    <form onSubmit={handleSubmit} className="search-form">
  <label className="search-label">Blood Group</label>
  <select
    name="bloodGroup"
    value={formData.bloodGroup}
    onChange={handleChange}
    required
    className="search-select"
  >
    <option value="">--Select--</option>
    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(bg => (
      <option key={bg} value={bg}>{bg}</option>
    ))}
  </select>

  <label className="search-label">Country</label>
  <select
    name="country"
    value={formData.country}
    onChange={handleChange}
    required
    className="search-select"
  >
    <option value="">--Select--</option>
    {Object.keys(locationData).map(country => (
      <option key={country} value={country}>{country}</option>
    ))}
  </select>

  <label className="search-label">State</label>
  <select
    name="state"
    value={formData.state}
    onChange={handleChange}
    className="search-select"
  >
    <option value="">--Select--</option>
    {states.map(state => (
      <option key={state} value={state}>{state}</option>
    ))}
  </select>

  <label className="search-label">District</label>
  <select
    name="district"
    value={formData.district}
    onChange={handleChange}
    className="search-select"
  >
    <option value="">--Select--</option>
    {districts.map(district => (
      <option key={district} value={district}>{district}</option>
    ))}
  </select>

  <label className="search-label">City</label>
  <select
    name="city"
    value={formData.city}
    onChange={handleChange}
    className="search-select"
  >
    <option value="">--Select--</option>
    {cities.map(city => (
      <option key={city} value={city}>{city}</option>
    ))}
  </select>

  <button type="submit" className="search-button">Search</button>
</form>

    
       {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
    </div>  
  );
};

export default Receiver;