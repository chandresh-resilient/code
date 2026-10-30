export interface Expert {
  id: string;
  name: string;
  title: string;
  location: string;
  experience: string;
  qualification: string[];
  credentials: string[];
  expertise: string[];
  summary: string;
  coreCompetencies: string[];
  imagePlaceholder?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  category: 'audit' | 'training' | 'maintenance' | 'installation' | 'statutory' | 'manpower';
  deliverables: string[];
  complianceStandards?: string[];
  idealFor: string[];
}

export interface ClientItem {
  name: string;
  category: string;
  location: string;
  type: string;
  highlight: string;
}

export const COMPANY_INFO = {
  name: "G-Next Fire Safety Solution Services",
  shortName: "G-Next",
  tagline: "WE SERVE TO SAVE",
  yearEstablished: 2024,
  motto: "A Complete Fire Safety Solution Services under One Single Roof",
  gstin: "27AJJPC4409R1ZT",
  email: "gnextfiresafety@gmail.com",
  phones: ["+91 8779513748", "+91 8272035800"],
  domain: "www.gnextfiresafety.com",
  proprietor: "Anil Kumar Chaubey",
  puneAddress: {
    title: "Registered Head Office (Pune)",
    address: "Flat No. 1403, B1 Building, Avon Vista, Patil Nagar, Balewadi, Pune - 411045, Maharashtra, India",
    area: "Balewadi, Pune",
  },
  mumbaiAddress: {
    title: "Branch Office (Mumbai)",
    address: "L&T Emerald Isle, Powai, Mumbai - 400076, Maharashtra, India",
    area: "Powai, Mumbai",
  },
  jvPartner: {
    name: "Vijay Laxmi Fire Services",
    licenseDetails: "Registered licensed agency under Maharashtra Fire Services for Form B certification & statutory fire audits.",
  },
  documents: [
    { title: "Maharashtra Fire Services Licensed Agency JV", desc: "Form B certification authorized partnership" },
    { title: "Shop & Establishment Act", desc: "Registered commercial entity" },
    { title: "GST Registration Certificate", desc: "GSTIN: 27AJJPC4409R1ZT" },
    { title: "MSME Registered Enterprise", desc: "Government of India Udyam certification" },
    { title: "Professional Tax Registration", desc: "Government of Maharashtra PT compliant" },
    { title: "Current Business Account", desc: "Verified corporate banking" },
  ],
};

export const EXPERTS: Expert[] = [
  {
    id: "sandeep-chaubey",
    name: "Sandeep Chaubey",
    title: "Chief Fire Safety Consultant & Auditor",
    location: "India / Maharashtra",
    experience: "20+ Years Experience",
    summary: "Experienced senior safety & engineering leader with overall 20+ years hands-on work experience in Real Estate, FMCG, and Automobile in Fire Safety, Security Management, Plant Safety, and Corporate Facility Administration. Heading fire safety organizations of commercial as well as manufacturing setups.",
    qualification: [
      "Sub-Officer Course from National Fire Service College (NFSC), Nagpur (16th Batch) — Premier Government Fire Institution of India",
      "Advance Diploma in Industrial Safety (ADIS), MSBTE, Mumbai",
      "2-Year Diploma in Fire Safety Engineering, MSBTE, Mumbai",
      "Advance Security Course & Risk Mitigation",
    ],
    credentials: [
      "Emerging Leader Award from CE Worldwide, Mumbai",
      "ISO 45001:2018 Certified Lead Auditor",
      "TATA Motors Multiple Safety Awards recipient",
      "Emergency Management Plan standard architect for Tata Motors Limited",
      "Technical Fire Expert in Audit, Installation & Maintenance",
      "Former Regional Head of Tata Motors, Admin & Security Head in ITC Ltd, Fire Safety in DLF Ltd",
      "Successfully managed multi-location operations, ₹16+ Cr operational budgets, and large contract workforce",
    ],
    expertise: [
      "Fire Safety Audit & Risk Assessment",
      "Fire Protection & Loss Prevention",
      "Workplace & Plant Safety Management",
      "Emergency Response & Evacuation Planning",
      "High-Risk Construction Safety Audits",
      "Behavioral & Safety Culture Change",
      "Trained Firemen Deployment & Drills",
      "Commercial, High-Rise Residential & Industrial Systems",
    ],
    coreCompetencies: [
      "Administration & Facility Management",
      "Fire & Safety Operations",
      "Security Management",
      "Vendor & Cost Management",
      "Statutory Compliance & Form B",
      "ISO 45001 Safety Systems",
      "Emergency Response Planning",
    ],
  },
  {
    id: "ashok-pote",
    name: "Ashok Pote",
    title: "Senior Fire Safety Consultant | NFP&SE",
    location: "India / Maharashtra",
    experience: "32+ Years Experience",
    summary: "Distinguished veteran with 32+ years of hands-on work experience across Chemical, Pharmaceuticals, Automobiles, and Power Plants in Corporate HSE policies, strategies, and performance monitoring.",
    qualification: [
      "B.E. (Fire Engineering) — 6th Batch",
      "Advance Diploma in Industrial Safety (ADIS)",
      "PG Diploma in Environmental Science",
      "Radiation Safety Certified",
    ],
    credentials: [
      "Technical Fire Expert in Disaster Management Plan formulation for Gujarat State",
      "Excellence Award from National Safety Organization, Pune",
      "ISO 45001:2018 Lead Auditor & NSCI Certified Internal OHS Auditor (IS 14489:2018)",
      "TATA Motors Safety Excellence Award",
      "Lead role in establishing & implementing DuPont safety methodology at major plants",
    ],
    expertise: [
      "HSE Systems & Regulations",
      "HAZOP, QRA & Process Hazard Analysis",
      "Fire Protection & Loss Prevention",
      "Fire Safety Management & Construction Safety",
      "High-Risk Industrial Audits & Auditing for Fire Safety Compliances",
    ],
    coreCompetencies: [
      "Industrial Plant Fire Systems",
      "DuPont Safety Methodologies",
      "Chemical & Pharma Fire Audits",
      "Environmental Compliance Consents",
    ],
  },
  {
    id: "deepak-gangal",
    name: "Deepak Gangal",
    title: "Senior Electrical Safety Consultant | D.E.E., AMIE",
    location: "India / Maharashtra",
    experience: "35+ Years Experience",
    summary: "Senior electrical safety & legal expert with 35+ years of industry experience across major multinational manufacturing and engineering hubs, ensuring absolute safety against electrical fires, earth faults, and static hazards.",
    qualification: [
      "D.E.E. (Diploma in Electrical Engineering)",
      "AMIE (Electrical Engineering)",
      "ADIS (Safety)",
      "DuPont Certified Master Trainer",
    ],
    credentials: [
      "Technical Electrical Expert & Legal Expert under Indian Electricity Act & Rules",
      "Former Safety Head & Senior Engineering Specialist with Hindustan Antibiotics Ltd, Altus Copco, and Tata Motors Ltd",
      "Extensive background in electrical forensic audits, arc flash safety, and earth resistance evaluations as per IS 3043",
    ],
    expertise: [
      "Physical Inspection of Electrical Systems & Switchgears",
      "Evaluation of Earthing Systems (IS 3043 & IS 14489 standards)",
      "Lightning Protection System Health Audits",
      "Earth Resistance Testing & Transformer Oil Dielectric Tests",
      "Electrical Fire Cause Investigation & Static Hazard Prevention",
      "Lock-Out / Tag-Out (LOTO) Implementation",
    ],
    coreCompetencies: [
      "Electrical Safety Legal Compliance",
      "Transformer & Substation Inspections",
      "Thermography & Static Hazard Control",
      "Electrical Safety Training for Engineers",
    ],
  },
  {
    id: "anil-kumar-chaubey",
    name: "Anil Kumar Chaubey",
    title: "Proprietor & Managing Director",
    location: "Pune, Maharashtra",
    experience: "15+ Years Management",
    summary: "Guiding the vision and operations of G-Next with an uncompromising commitment to customer satisfaction, ethical business norms, and life-saving safety infrastructure across Maharashtra.",
    qualification: [
      "Senior Business Management",
      "Client Relationship & Project Operations Lead",
    ],
    credentials: [
      "Spearheading G-Next's rapid expansion across Pune, PCMC, and Mumbai",
      "Championing the 'One-Roof Fire Safety Solution' paradigm for residential societies and corporate campuses",
    ],
    expertise: [
      "Client Relationship & Satisfaction",
      "Statutory Liaisoning & Operations",
      "Project Execution & Turnkey Delivery",
      "AMC Contract Governance",
    ],
    coreCompetencies: [
      "Strategic Governance",
      "Customer Satisfaction",
      "Quality Assurance",
      "Emergency Resource Deployment",
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "amc-maintenance",
    title: "Annual Maintenance Contract (AMC) & Equipment Servicing",
    shortDesc: "End-to-end periodic maintenance, pressure testing, oiling, cleaning, and performance checks to guarantee zero failure in emergencies.",
    fullDesc: "Human life is priceless. G-Next provides comprehensive Fire AMC contracts with scheduled periodic maintenance, oiling, cleaning, servicing, and testing of wet risers, down comers, hydrants, sprinkler systems, and fire pumps. We maintain complete historical logs so your safety systems never fail when seconds count.",
    icon: "Wrench",
    category: "maintenance",
    deliverables: [
      "Quarterly / monthly periodic health inspections",
      "Pumps, valves, diesel engines, and pressure gauge calibration",
      "Courtyard hydrants & landing valve servicing & lubrication",
      "Sprinkler alarm valve & jockey pump automation checks",
      "Detailed maintenance logbook & Form B compliance support",
    ],
    complianceStandards: ["NBC 2016 Part 4", "IS 15105", "Maharashtra Fire Safety Act"],
    idealFor: ["Housing Societies", "Commercial Buildings", "Manufacturing Plants", "Hospitals", "Malls"],
  },
  {
    id: "form-b-certification",
    title: "Form B Statutory Certification & Fire NOC Support",
    shortDesc: "Mandatory bi-annual Form B certification through authorized Joint Venture with licensed agency Vijay Laxmi Fire Services.",
    fullDesc: "Under the Maharashtra Fire Prevention & Life Safety Measures Act 2006, all residential, commercial, and industrial facilities must submit 'Form B' twice a year (January and July) certifying that their fire protection systems are fully functional. Through our licensed joint venture with Vijay Laxmi Fire Services, G-Next performs comprehensive technical audits and issues official Form B certificates.",
    icon: "FileCheck",
    category: "statutory",
    deliverables: [
      "Comprehensive pre-inspection of existing fire fighting setup",
      "Rectification of deficiencies before formal certification",
      "Issuance of Form B Certificate by licensed agency",
      "Filing and liaison with local Fire Brigade (PMC, PCMC, PMRDA, MIDC, MCGM)",
      "Timely bi-annual renewal reminders & automated alerts",
    ],
    complianceStandards: ["Maharashtra Fire Prevention & Life Safety Act 2006", "Section 3(1) Form B"],
    idealFor: ["High-rise Housing Societies", "IT Parks", "Commercial Malls", "Hotels", "Chemical Industries"],
  },
  {
    id: "fire-risk-assessment-audits",
    title: "Fire Safety Audits & Risk Assessment",
    shortDesc: "Rigorous technical audits led by NFSC Nagpur alumni to identify hazards, assess escape routes, and ensure Indian Factory Act & NFPA compliance.",
    fullDesc: "Our expert auditors carefully inspect your premises to map fire hazards, egress routes, detection coverage, smoke ventilation, and structural containment. We deliver comprehensive audit reports with actionable risk mitigation blueprints conforming to Indian Factory Act, NFPA codes, and National Building Code standards.",
    icon: "ShieldAlert",
    category: "audit",
    deliverables: [
      "Hazard identification & quantitative risk scoring",
      "Emergency exit, staircase pressurization & evacuation route audits",
      "Fire load calculations & passive protection analysis",
      "Full compliance roadmap as per Indian Factory Act & NBC",
      "Executive summary & board presentation reports",
    ],
    complianceStandards: ["NFPA Standards", "Indian Factory Act 1948", "IS 14489:2018", "NBC 2016"],
    idealFor: ["Manufacturing Plants", "Warehouses", "High-Rise Towers", "Schools & Colleges", "Hospitals"],
  },
  {
    id: "fire-training-drills",
    title: "Fire Training, Mock Drills & Evacuation Services",
    shortDesc: "Hands-on, realistic fire drill packages, evacuation simulations, and setup of on-site Quick Reaction Teams (QRT).",
    fullDesc: "Lack of trained personnel on site leads to catastrophic panic during emergencies. G-Next provides industry-best fire drill packages including live fire extinguisher handling, simulated smoke evacuation, alarm response training, and the establishment of an internal emergency structure (Incident Controllers, Fire Wardens, QRT, and Rescuers).",
    icon: "GraduationCap",
    category: "training",
    deliverables: [
      "Live extinguisher operation drills on controlled demonstration fires",
      "Full building evacuation drills & assembly point simulations",
      "Role-based handouts for Fire Coordinators & Wardens",
      "Establishment of Quick Reaction Teams (QRT) & Emergency Response Teams (ERT)",
      "Training completion certificates & video documentation",
    ],
    complianceStandards: ["ISO 45001", "Disaster Management Act", "Factories Act Schedule"],
    idealFor: ["Corporate IT Parks", "Residential Societies", "Industrial Factories", "Hotels", "Hospitals"],
  },
  {
    id: "fire-fighting-systems-installation",
    title: "Installation of Fire Detection & Fighting Systems",
    shortDesc: "Turnkey design, supply, fabrication, hydrostatic testing, and commissioning of hydrants, sprinklers, and addressable alarms.",
    fullDesc: "We provide complete end-to-end turnkey installations of Wet Risers, Down Comers, Courtyard Fire Hydrants, Automatic Sprinkler Systems, Addressable & Conventional Fire Alarm Panels, Beam Detectors, and Gas Suppression Systems. All installations strictly follow NBC and NFPA guidelines.",
    icon: "Flame",
    category: "installation",
    deliverables: [
      "Engineering system design, hydraulic calculations & BOQ preparation",
      "High-pressure hydrostatic testing & certified commissioning",
      "Courtyard hydrants, landing valves & hose reel drums",
      "Addressable smoke/heat detectors & multi-loop central control panels",
      "Clean agent (FM-200 / Novec) server room fire suppression setups",
    ],
    complianceStandards: ["NBC 2016", "IS 3844", "IS 15105", "NFPA 13, 14, 72"],
    idealFor: ["New Construction Projects", "Industrial Retrofits", "Commercial Towers", "Warehouses"],
  },
  {
    id: "fire-extinguisher-refilling",
    title: "Fire Extinguisher Supply, Refilling & Health Checks",
    shortDesc: "ISI-marked fire extinguishers (ABC, CO2, Foam, Clean Agent) with certified hydraulic testing, refilling, and periodic tagging.",
    fullDesc: "Fire extinguishers are your first line of defense. We supply, refill, and inspect all types of fire extinguishers including ABC Dry Powder, CO2, Mechanical Foam, Water Type, and Clean Agent extinguishers. Every cylinder is hydrostatically pressure tested, freshly charged with premium grade agents, and tagged with digital inspection QR codes.",
    icon: "ShieldCheck",
    category: "maintenance",
    deliverables: [
      "Refilling of ABC Powder, CO2, Foam, and Clean Agent cylinders",
      "Mandatory hydraulic pressure testing (H.P. Test)",
      "O-ring, safety pin, nozzle, and pressure gauge replacements",
      "Periodic on-site health inspection & inspection tag updates",
      "Backup standby extinguishers provided during refilling turnaround",
    ],
    complianceStandards: ["IS 2190:2010", "IS 15683", "PESO Guidelines"],
    idealFor: ["Societies", "Offices", "Retail Stores", "Chemical Plants", "Transport Fleets"],
  },
  {
    id: "trained-firemen-deployment",
    title: "Trained Firemen & Fire Officer Deployment",
    shortDesc: "Vetted, disciplined, physically fit fire personnel and site fire marshals ready for immediate deployment.",
    fullDesc: "Need certified manpower to oversee 24/7 fire safety at your facility? G-Next deploys trained fire fighters, pump operators, and safety marshals equipped with emergency response protocol knowledge to manage pump rooms, watch for hot-work hazards, and respond immediately to any alarm.",
    icon: "Users",
    category: "manpower",
    deliverables: [
      "24/7 on-site firemen shift deployment",
      "Daily pump room & fire line pressure monitoring",
      "Hot-work permit surveillance & fire watch duties",
      "Routine log maintenance and immediate initial response during emergencies",
      "Continuous refresher drills supervised by NFSC alumnus",
    ],
    complianceStandards: ["State Fire Services Standards", "Private Security Agencies Guidelines"],
    idealFor: ["Large Residential Townships", "Refineries & Chemical Plants", "IT Campuses", "Malls"],
  },
  {
    id: "electrical-safety-audit",
    title: "Electrical Safety Audits & Thermography",
    shortDesc: "Led by 35+ year senior electrical engineers (D.E.E., AMIE) to prevent short circuits, electrical fires, and insulation breakdowns.",
    fullDesc: "More than 70% of commercial fires originate from electrical faults. Our electrical audits cover physical inspection of electrical panels, switchgears, transformers, cable trays, infrared thermography for hotspot detection, earth resistance testing as per IS 3043, and review of electrical preventive maintenance logs.",
    icon: "Zap",
    category: "audit",
    deliverables: [
      "Infrared thermography scan for electrical hotspots & loose connections",
      "Earth pit resistance testing & continuity evaluation (IS 3043)",
      "Transformer oil dielectric testing & breaker coordination review",
      "Static electricity hazard identification & lightning protection audit",
      "Actionable recommendations to prevent short-circuit fires",
    ],
    complianceStandards: ["IS 3043", "IS 14489", "Central Electricity Authority Regulations 2010"],
    idealFor: ["Manufacturing Hubs", "Substations", "Data Centers", "Pharmaceutical Plants", "Societies"],
  },
  {
    id: "first-aid-assistance-training",
    title: "First Aid Assistance, Training & Certification",
    shortDesc: "Accredited CPR, trauma response, burn management, and emergency medical response training for building occupants.",
    fullDesc: "In any fire emergency, prompt first aid saves lives before ambulances arrive. We conduct certified first aid training workshops teaching cardiopulmonary resuscitation (CPR), triage, smoke inhalation treatment, chemical burn handling, and automated external defibrillator (AED) operation.",
    icon: "HeartPulse",
    category: "training",
    deliverables: [
      "CPR and Choking relief practical training with mannequins",
      "Burn classification and emergency wound dressings",
      "Stretcher evacuation and trauma handling techniques",
      "First aid box audits and replenishment guidelines",
      "Participant certification valid across corporate standards",
    ],
    complianceStandards: ["Red Cross / St. John Guidelines", "Factory Act Rules", "OSHA"],
    idealFor: ["Corporate Offices", "Residential Committees", "Schools", "Factories", "Hotels"],
  },
  {
    id: "residential-highrise-safety",
    title: "Residential Society & High-Rise Fire Safety",
    shortDesc: "Custom safety packages tailored for housing societies like Lodha Siena, Lodha Savanna, and Newa Garden.",
    fullDesc: "High-rise apartments present unique evacuation and firefighting challenges. G-Next provides tailored packages for housing societies combining bi-annual Form B certification, regular pump room maintenance, resident awareness workshops, child fire safety, and staircase clearance audits.",
    icon: "Building2",
    category: "maintenance",
    deliverables: [
      "Bi-annual Form B issuance & society AGM fire presentation",
      "Lift lobby, refuge area, and fire staircase accessibility audit",
      "Society security guard specialized fire pump operation training",
      "Fire extinguisher health tagging and doorstep refill service",
      "Resident emergency WhatsApp helpline & mock evacuation drills",
    ],
    complianceStandards: ["Maharashtra Apartment Ownership Act", "Maharashtra Fire Safety Act 2006"],
    idealFor: ["Gated Townships", "High-Rise Towers", "Cooperative Housing Societies", "Condominiums"],
  },
  {
    id: "road-safety-audit",
    title: "Road Safety Audits & Defensive Driver Training",
    shortDesc: "Comprehensive road safety audits for corporate campuses, industrial transit routes, and commercial campuses.",
    fullDesc: "We assess campus traffic circulation, emergency fire engine turning radius, signage, speed controls, pedestrian walkways, and provide defensive driving training programs for company drivers and logistics operators.",
    icon: "Compass",
    category: "audit",
    deliverables: [
      "Campus internal road safety audit & pedestrian safety zoning",
      "Fire tender turning radius & pathway obstruction checks",
      "Signage, road marking, and speed breaker compliance",
      "Defensive driving training modules for commercial drivers",
    ],
    complianceStandards: ["IRC Standards", "Motor Vehicles Act Regulations"],
    idealFor: ["Industrial Parks", "SEZ Zones", "Large Warehouses", "University Campuses"],
  },
  {
    id: "fire-consultation-advisory",
    title: "Fire Engineering Consultation & Liaisoning",
    shortDesc: "Architectural fire safety design consultation, Provisional & Final Fire NOC liaisoning, and techno-legal advice.",
    fullDesc: "From pre-construction blue-print approvals to Final Fire NOC clearances, our expert consultants guide developers, architects, and business owners through complex fire regulations, reducing delays and ensuring compliance right from the planning stage.",
    icon: "CheckSquare",
    category: "statutory",
    deliverables: [
      "Architectural drawings review as per NBC 2016 Part 4",
      "Liaison for Provisional Fire NOC & Final Fire NOC",
      "Techno-legal advice on fire compliance notices and audits",
      "Preparation of BOQs, technical specifications & tender vetting",
    ],
    complianceStandards: ["National Building Code", "Local Municipal Fire By-Laws"],
    idealFor: ["Architects", "Builders & Developers", "Industrial Project Teams", "Turnkey Contractors"],
  },
];

export const CLIENTS: ClientItem[] = [
  {
    name: "Lodha Siena Housing Society",
    category: "Premium Residential Township",
    location: "Pune, Maharashtra",
    type: "High-Rise Residential",
    highlight: "Comprehensive Fire AMC, periodic hydrant testing, bi-annual Form B certification, and resident fire drills.",
  },
  {
    name: "Lodha Savanna Housing Society",
    category: "Luxury Residential Complex",
    location: "Pune, Maharashtra",
    type: "High-Rise Residential",
    highlight: "Sprinkler system calibration, fire extinguisher maintenance, and emergency response team formation.",
  },
  {
    name: "Newa Garden Housing Society",
    category: "Gated Residential Community",
    location: "Pune, Maharashtra",
    type: "Cooperative Housing Society",
    highlight: "Complete fire fighting system overhaul, pump room automation, and security guard fire training.",
  },
  {
    name: "Industrial & Manufacturing Setups",
    category: "Automotive & Heavy Manufacturing",
    location: "Pune & PCMC Industrial Belt",
    type: "Manufacturing Plants",
    highlight: "Factory Act fire risk assessments, electrical safety audits, and fire warden empowerment.",
  },
  {
    name: "Corporate & Commercial Complexes",
    category: "IT Parks & Commercial Offices",
    location: "Pune & Mumbai",
    type: "Corporate Real Estate",
    highlight: "Addressable fire alarm testing, server room gas suppression maintenance, and workplace mock drills.",
  },
];

export const CORE_PILLARS = [
  {
    title: "Training Services",
    subtitle: "Empowering Personnel to Act",
    desc: "Cost-effective, realistic fire drill packages, evacuation drills, first aid certification, and internal fire organization setup (QRT, Incident Controllers, Fire Wardens).",
    icon: "GraduationCap",
    color: "from-amber-500 to-orange-600",
    stats: "500+ Trained",
  },
  {
    title: "Audit Services",
    subtitle: "Zero Risk & Total Compliance",
    desc: "Rigorous fire risk assessments, electrical thermography, and statutory audits meeting Indian Factory Act, NFPA, and IS 14489 standards led by seasoned experts.",
    icon: "ShieldAlert",
    color: "from-orange-500 to-red-600",
    stats: "100% Compliant",
  },
  {
    title: "Maintenance Services",
    subtitle: "Flawless Readiness 24/7",
    desc: "Keeping detailed track records of equipment, systematic oiling, cleaning, hydrostatic testing, and AMC maintenance so equipment never betrays you in need.",
    icon: "Wrench",
    color: "from-red-600 to-rose-700",
    stats: "Zero Failure",
  },
  {
    title: "Residential Fire Safety",
    subtitle: "Protecting Homes & Families",
    desc: "Specialized society packages for high-rises (Lodha, Newa Garden) covering Form B certification, lift lobby audits, fire hydrants, and family safety seminars.",
    icon: "Building2",
    color: "from-blue-600 to-indigo-700",
    stats: "30+ Societies",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "One-Roof Fire Safety Solution",
    desc: "Unlike other firms that operate in isolation providing fragmented pieces, G-Next delivers everything under a single roof. Design, audit, maintenance, refilling, drills, and Form B — all in one click.",
    icon: "Layers",
  },
  {
    title: "Headed by NFSC Nagpur Alumnus",
    desc: "Led by alumni from National Fire Services College (NFSC) Nagpur — India's premier government fire safety institution — bringing 20 to 35+ years of real-world leadership at Tata Motors, ITC, and DLF.",
    icon: "Award",
  },
  {
    title: "Licensed Agency Joint Venture",
    desc: "Formal joint venture with Vijay Laxmi Fire Services (Registered licensed agency under Maharashtra Fire Services) for official Form B certification and statutory clearances.",
    icon: "ShieldCheck",
  },
  {
    title: "Noble Cause with Transparent Pricing",
    desc: "Serving in the interest of the public at large with a noble cause: 'We Serve To Save'. Lowest industry training cost and market-leading fair AMC pricing without hidden fees.",
    icon: "HeartHandshake",
  },
  {
    title: "Proactive Equipment Health Tracking",
    desc: "We maintain digital service histories for every pump, extinguisher, and hose reel, conducting scheduled periodic oiling, cleaning, and pressure checks before defects can occur.",
    icon: "Activity",
  },
  {
    title: "Ready-to-Deploy Trained Firemen",
    desc: "Quick and easy deployment of vetted, disciplined, and physically fit fire fighters ready for industrial sites, corporate parks, and residential societies.",
    icon: "UsersCheck",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Book a Free Site Survey",
    desc: "Contact us via WhatsApp, phone, or our online form. Our senior engineers visit your facility to inspect existing systems and identify compliance gaps.",
  },
  {
    step: "02",
    title: "Custom Safety Plan & BOQ",
    desc: "We provide an unvarnished audit report, tailored Form B roadmap, and clear, transparent pricing with no hidden costs.",
  },
  {
    step: "03",
    title: "Execute & Stay 100% Protected",
    desc: "From repairs and extinguisher tagging to regular AMC servicing, live drills, and bi-annual Form B certification — you get total peace of mind.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "G-Next completely streamlined our housing society's fire fighting infrastructure. Their bi-annual Form B certification process is smooth and their mock drill trained over 150 residents and our security staff effectively.",
    author: "Managing Committee",
    designation: "Lodha Siena Housing Society, Pune",
  },
  {
    quote: "Having an NFSC Nagpur alumnus oversee our factory's safety audits gave us immense confidence. Their electrical safety audit pinpointed loose busbar connections that could have caused major downtime.",
    author: "EHS Manager",
    designation: "Automotive Component Manufacturer, Chakan MIDC",
  },
  {
    quote: "G-Next lives up to their motto 'We Serve To Save'. Their prompt response, regular oiling and cleaning of fire pumps, and transparent AMC pricing sets them apart from every other contractor in Pune.",
    author: "Facility Director",
    designation: "Commercial IT Park, Balewadi Pune",
  },
];
