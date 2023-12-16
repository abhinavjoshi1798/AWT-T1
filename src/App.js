import AlertTop from "./Components/AlertTop";
import "./App.css";
import TagSearch from "./Components/TagSearch";

function App() {
  return (
    <>
      <AlertTop />
      <TagSearch
        data={[
          {
            name: "ALLEN GLOBAL STUDIES DIVISION",
            id: "25",
            classes: [
              {
                name: "Riser & Challenger",
                id: "18",
                classCode: "RC",
                subjects: [
                  {
                    name: "QUANTS",
                    id: "26",
                    subjectCode: "QT",
                    topics: [
                      {
                        name: "Algebra",
                        id: "1855",
                        topicCode: "AA",
                        subtopics: [
                          {
                            id: "15803",
                            name: "Linear equations",
                          },
                          {
                            id: "15804",
                            name: "Inequalities and absolute value",
                          },
                          {
                            id: "15805",
                            name: "Coordinate Geometry",
                          },
                        ],
                      },
                      {
                        name: "Advanced Maths",
                        id: "1857",
                        topicCode: "AM",
                        subtopics: [
                          {
                            id: "15812",
                            name: "Functions & Polynomials",
                          },
                          {
                            id: "15813",
                            name: "Exponents & Radicals",
                          },
                          {
                            id: "15814",
                            name: "Progressions",
                          },
                        ],
                      },
                      {
                        name: "Additional Topics",
                        id: "1858",
                        topicCode: "AT",
                        subtopics: [
                          {
                            name: "Geometry",
                            id: "15815",
                          },
                        ],
                      },
                      {
                        name: "Problem Solving & Data Analysis",
                        id: "1856",
                        topicCode: "PD",
                        subtopics: [
                          {
                            id: "15806",
                            name: "Ratio & Proportion",
                          },
                          {
                            id: "15807",
                            name: "Percentages",
                          },
                          {
                            id: "15808",
                            name: "Data Analysis",
                          },
                          {
                            id: "15809",
                            name: "Statistics",
                          },
                          {
                            id: "15810",
                            name: "Random Sampling",
                          },
                          {
                            id: "15811",
                            name: "Simple Coumpound Interest",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "VERBAL",
                    id: "25",
                    subjectCode: "VB",
                    topics: [
                      {
                        name: "Analysis in Science",
                        id: "1851",
                        topicCode: "AS",
                        subtopics: [
                          {
                            id: "15781",
                            name: "Science (AS)",
                          },
                        ],
                      },
                      {
                        name: "Command of Evidence",
                        id: "1854",
                        topicCode: "CE",
                        subtopics: [
                          {
                            id: "15802",
                            name: "Command of Evidence (E)",
                          },
                        ],
                      },
                      {
                        name: "Craft & Structure",
                        id: "2714",
                        topicCode: "CS",
                        subtopics: [
                          {
                            id: "20705",
                            name: "Word in Context",
                          },
                          {
                            id: "20706",
                            name: "Text Structure & Purpose",
                          },
                          {
                            id: "20707",
                            name: "Cross Text Connections",
                          },
                        ],
                      },
                      {
                        name: "Expression of Ideas",
                        id: "1852",
                        topicCode: "EI",
                        subtopics: [
                          {
                            id: "20724",
                            name: "Transitions",
                          },
                          {
                            id: "20725",
                            name: "Rhethroical Synthesis",
                          },
                          {
                            id: "15782",
                            name: "Transitional Words and Sentences (OT)",
                          },
                          {
                            id: "15783",
                            name: "Precise Word Choices (EP)",
                          },
                          {
                            id: "15784",
                            name: "Concise Sentences (EC)",
                          },
                          {
                            id: "15785",
                            name: "Style and Tone (ET)",
                          },
                          {
                            id: "15786",
                            name: "Logical Sentence Order (OL)",
                          },
                          {
                            id: "15787",
                            name: "Clear Sentences (ES)",
                          },
                          {
                            id: "15788",
                            name: "Main Idea (DP)",
                          },
                          {
                            id: "15789",
                            name: "Supporting Evidence (DS)",
                          },
                          {
                            id: "15790",
                            name: "Addition/Deletion (AD)",
                          },
                        ],
                      },
                      {
                        name: "Analysis in History/SocialStudies",
                        id: "1850",
                        topicCode: "HS",
                        subtopics: [
                          {
                            id: "15780",
                            name: "History and Social Studies (AH )",
                          },
                        ],
                      },
                      {
                        name: "Information and Ideas",
                        id: "1847",
                        topicCode: "II",
                        subtopics: [
                          {
                            id: "15767",
                            name: "Direct Information (IE)",
                          },
                          {
                            id: "15768",
                            name: "Vocabulary in Context (IW )",
                          },
                          {
                            id: "15769",
                            name: "Describing Relationships (IR)",
                          },
                          {
                            id: "15770",
                            name: "Implied Information (II)",
                          },
                          {
                            id: "15771",
                            name: "Main Ideas (IT)",
                          },
                          {
                            id: "15772",
                            name: "Finding Evidence (IC)",
                          },
                          {
                            id: "15773",
                            name: "Similar Situation (IA)",
                          },
                        ],
                      },
                      {
                        name: "Information & Idea's",
                        id: "2715",
                        topicCode: "LL",
                        subtopics: [
                          {
                            id: "20710",
                            name: "Interences",
                          },
                          {
                            id: "20711",
                            name: "Central Ideas & Details",
                          },
                          {
                            id: "20708",
                            name: "Command of Evidence (Textual)",
                          },
                          {
                            id: "20709",
                            name: "Command of Evidence (Quantitative)",
                          },
                        ],
                      },
                      {
                        name: "Passage",
                        id: "1846",
                        topicCode: "PA",
                        subtopics: [
                          {
                            id: "15763",
                            name: "Literature",
                          },
                          {
                            id: "15764",
                            name: "History",
                          },
                          {
                            id: "15765",
                            name: "Science",
                          },
                          {
                            id: "15766",
                            name: "Social Science",
                          },
                        ],
                      },
                      {
                        name: "Rhetoric",
                        id: "1848",
                        topicCode: "RH",
                        subtopics: [
                          {
                            id: "15774",
                            name: "Author's Evidence (RE)",
                          },
                          {
                            id: "15775",
                            name: "Purpose (RP)",
                          },
                          {
                            id: "15776",
                            name: "Word Choice (RW)",
                          },
                          {
                            id: "15777",
                            name: "Point of View (RV)",
                          },
                        ],
                      },
                      {
                        name: "Standard English Conventions",
                        id: "1853",
                        topicCode: "SC",
                        subtopics: [
                          {
                            id: "15800",
                            name: "Matching Verbs (SV)",
                          },
                          {
                            id: "15801",
                            name: "Comparing Correctly (UL)",
                          },
                          {
                            id: "20712",
                            name: "Form, Structure & Senses (Determiners)",
                          },
                          {
                            id: "20713",
                            name: "Form, Structure & Senses (SVA)",
                          },
                          {
                            id: "20714",
                            name: "Form, Structure & Senses (Clasuses)",
                          },
                          {
                            id: "20715",
                            name: "Form, Structure & Senses (Finite & Non-Finite V)",
                          },
                          {
                            id: "20716",
                            name: "Form, Structure & Senses (Tense)",
                          },
                          {
                            id: "20717",
                            name: "Form, Structure & Senses (Modifiers)",
                          },
                          {
                            id: "20718",
                            name: "Boundaries (Punctuation)",
                          },
                          {
                            id: "20719",
                            name: "Form, Structure & Senses (Pronouns)",
                          },
                          {
                            id: "20720",
                            name: "Boundaries (Pronoun)",
                          },
                          {
                            id: "20721",
                            name: "SVA",
                          },
                          {
                            id: "20722",
                            name: "Boundaries (Punctuation)",
                          },
                          {
                            id: "20723",
                            name: "Form, Structure & Senses Subject Modifier placment)",
                          },
                          {
                            id: "15791",
                            name: "Clear Pronouns (UPC)",
                          },
                          {
                            id: "15792",
                            name: "Matching Sentence Structures (SP)",
                          },
                          {
                            id: "15793",
                            name: "Appropriate Prepositions (UC)",
                          },
                          {
                            id: "15794",
                            name: "Matching Nouns (SN )",
                          },
                          {
                            id: "15795",
                            name: "Punctuating (PL)",
                          },
                          {
                            id: "15796",
                            name: "Verb Agreement (USV)",
                          },
                          {
                            id: "15797",
                            name: "Confusing Words (UF)",
                          },
                          {
                            id: "15798",
                            name: "Extra Clauses (PC)",
                          },
                          {
                            id: "15799",
                            name: "Making Whole Sentences and Avoiding Run-ons (SB)",
                          },
                        ],
                      },
                      {
                        name: "Synthesis",
                        id: "1849",
                        topicCode: "SY",
                        subtopics: [
                          {
                            id: "15778",
                            name: "Comparing Passages (M )",
                          },
                          {
                            id: "15779",
                            name: "Graphics (Q)",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "ALLEN SHARP",
            id: "21",
            classes: [
              {
                value: "10th",
                name: "X",
                id: "10",
                subjects: [
                  {
                    value: "BG",
                    name: "BIOLOGY",
                    id: "12",
                    topics: [
                      {
                        value: "BG",
                        name: "BIOLOGY",
                        id: "805",
                        subtopics: [
                          {
                            name: "BIOLOGY",
                            id: "7853",
                          },
                        ],
                      },
                      {
                        value: "CC",
                        name: "Control and Co-ordination (10)",
                        id: "969",
                        subtopics: [
                          {
                            name: "Control and Co-ordination (10)",
                            id: "8047",
                          },
                        ],
                      },
                      {
                        value: "DL",
                        name: "Diversity in living organism (9)",
                        id: "974",
                        subtopics: [
                          {
                            name: "Diversity in living organism (9)",
                            id: "8052",
                          },
                        ],
                      },
                      {
                        value: "EX",
                        name: "Excretion (10)",
                        id: "971",
                        subtopics: [
                          {
                            name: "Excretion (10)",
                            id: "8049",
                          },
                        ],
                      },
                      {
                        value: "MIS",
                        name: "Miscellaneous",
                        id: "773",
                        subtopics: [
                          {
                            name: "Miscellaneous",
                            id: "7820",
                          },
                        ],
                      },
                      {
                        value: "NR",
                        name: "Natural Resources (9)",
                        id: "973",
                        subtopics: [
                          {
                            name: "Natural Resources (9)",
                            id: "8051",
                          },
                        ],
                      },
                      {
                        value: "NT",
                        name: "Nutrition (10)",
                        id: "977",
                        subtopics: {
                          name: "Nutrition (10)",
                          id: "8055",
                        },
                      },
                      {
                        value: "RP",
                        name: "Respiration (10)",
                        id: "976",
                        subtopics: [
                          {
                            name: "Respiration (10)",
                            id: "8054",
                          },
                        ],
                      },
                      {
                        value: "TA",
                        name: "Transportation in Animal (10)",
                        id: "975",
                        subtopics: [
                          {
                            name: "Transportation in Animal (10)",
                            id: "8053",
                          },
                        ],
                      },
                      {
                        value: "TP",
                        name: "Transportation in Plants (10)",
                        id: "972",
                        subtopics: [
                          {
                            name: "Transportation in Plants (10)",
                            id: "8050",
                          },
                        ],
                      },
                      {
                        value: "WD",
                        name: "Why do we fall ill (9)",
                        id: "970",
                        subtopics: [
                          {
                            name: "Why do we fall ill (9)",
                            id: "8048",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    value: "CH",
                    name: "CHEMISTRY",
                    id: "13",
                    topics: [
                      {
                        value: "AB",
                        name: "Acid Bases, Salts (10)",
                        id: "966",
                        subtopics: [
                          {
                            name: "Acid Bases, Salts (10)",
                            id: "8044",
                          },
                        ],
                      },
                      {
                        value: "AM",
                        name: "Atom and molecules (9)",
                        id: "964",
                        subtopics: [
                          {
                            name: "Atom and molecules (9)",
                            id: "8042",
                          },
                        ],
                      },
                      {
                        value: "AS",
                        name: "Atomic Structure (9)",
                        id: "965",
                        subtopics: [
                          {
                            name: "Atomic Structure (9)",
                            id: "8043",
                          },
                        ],
                      },
                      {
                        value: "CH",
                        name: "CHEMISTRY",
                        id: "804",
                        subtopics: [
                          {
                            name: "CHEMISTRY",
                            id: "7852",
                          },
                        ],
                      },
                      {
                        value: "CR",
                        name: "Chemical Reaction (10)",
                        id: "968",
                        subtopics: [
                          {
                            name: "Chemical Reaction (10)",
                            id: "8046",
                          },
                        ],
                      },
                      {
                        value: "MIS",
                        name: "Miscellaneous",
                        id: "772",
                        subtopics: [
                          {
                            name: "Miscellaneous",
                            id: "7819",
                          },
                        ],
                      },
                      {
                        value: "MN",
                        name: "Metal and Non-metal (10)",
                        id: "967",
                        subtopics: [
                          {
                            name: "Metal and Non-metal (10)",
                            id: "8045",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    value: "EN",
                    name: "ENGLISH",
                    id: "15",
                    topics: [
                      {
                        value: "MIS",
                        name: "Miscellaneous",
                        id: "769",
                        subtopics: [
                          {
                            name: "Miscellaneous",
                            id: "7816",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    value: "MA",
                    name: "MENTAL ABILITY",
                    id: "14",
                    topics: [
                      {
                        value: "BR",
                        name: "Blood Relation",
                        id: "300",
                        subtopics: [
                          {
                            name: "Blood Relation",
                            id: "8005",
                          },
                        ],
                      },
                      {
                        value: "CD",
                        name: "Cubes and Dice",
                        id: "994",
                        subtopics: [
                          {
                            name: "Cubes and Dice",
                            id: "8072",
                          },
                        ],
                      },
                      {
                        value: "CF",
                        name: "Counting Figure",
                        id: "996",
                        subtopics: [
                          {
                            name: "Counting Figure",
                            id: "8074",
                          },
                        ],
                      },
                      {
                        value: "CK",
                        name: "Clock",
                        id: "992",
                        subtopics: [
                          {
                            name: "Clock",
                            id: "8070",
                          },
                        ],
                      },
                      {
                        value: "CR",
                        name: "Calendar",
                        id: "322",
                        subtopics: [
                          {
                            name: "Calendar",
                            id: "8075",
                          },
                        ],
                      },
                      {
                        value: "DS",
                        name: "Direction sense",
                        id: "834",
                        subtopics: [
                          {
                            name: "Direction sense",
                            id: "7907",
                          },
                        ],
                      },
                      {
                        value: "EF",
                        name: "Embedded Figure",
                        id: "896",
                        subtopics: [
                          {
                            name: "Embedded Figure",
                            id: "7972",
                          },
                        ],
                      },
                      {
                        value: "MA",
                        name: "MENTAL ABILITY",
                        id: "806",
                        subtopics: [
                          {
                            name: "MENTAL ABILITY",
                            id: "7854",
                          },
                        ],
                      },
                      {
                        value: "MC",
                        name: "Missing Character",
                        id: "998",
                        subtopics: [
                          {
                            name: "Missing Character",
                            id: "8077",
                          },
                        ],
                      },
                      {
                        value: "MIS",
                        name: "Miscellaneous",
                        id: "774",
                        subtopics: [
                          {
                            name: "Miscellaneous",
                            id: "7821",
                          },
                        ],
                      },
                      {
                        value: "MO",
                        name: "Mathematical Operation",
                        id: "293",
                        subtopics: [
                          {
                            name: "Mathematical Operation",
                            id: "7973",
                          },
                        ],
                      },
                      {
                        value: "NA",
                        name: "Non-verbal Analogy",
                        id: "993",
                        subtopics: [
                          {
                            name: "Non-verbal Analogy",
                            id: "8071",
                          },
                        ],
                      },
                      {
                        value: "NR",
                        name: "Number Ranking",
                        id: "830",
                        subtopics: [
                          {
                            name: "Number Ranking",
                            id: "7903",
                          },
                        ],
                      },
                      {
                        value: "NV",
                        name: "Non-verbal Series",
                        id: "928",
                        subtopics: [
                          {
                            name: "Non-verbal Series",
                            id: "8006",
                          },
                        ],
                      },
                      {
                        value: "PT",
                        name: "Puzzle Test",
                        id: "999",
                        subtopics: [
                          {
                            name: "Puzzle Test",
                            id: "8078",
                          },
                        ],
                      },
                      {
                        value: "SA",
                        name: "Sitting Arrangement",
                        id: "997",
                        subtopics: [
                          {
                            name: "Sitting Arrangement",
                            id: "8076",
                          },
                        ],
                      },
                      {
                        value: "SY",
                        name: "Syllogism",
                        id: "995",
                        subtopics: [
                          {
                            name: "Syllogism",
                            id: "8073",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    value: "MT",
                    name: "MATHS",
                    id: 3,
                    topics: [
                      {
                        value: "AP",
                        name: "Areas of Parallelograms and Triangles (9)",
                        id: 982,
                        subtopics: [
                          {
                            name: "Areas of Parallelograms and Triangles (9)",
                            id: 8060,
                          },
                        ],
                      },
                      {
                        value: "CS",
                        name: "Circles (9)",
                        id: 985,
                        subtopics: [
                          {
                            name: "Circles (9)",
                            id: 8063,
                          },
                        ],
                      },
                      {
                        value: "HF",
                        name: "Heron's Formula (9)",
                        id: 987,
                        subtopics: [
                          {
                            name: "Heron's Formula (9)",
                            id: 8065,
                          },
                        ],
                      },
                      {
                        value: "IE",
                        name: "Introduction Euclid's Geometry (9)",
                        id: 980,
                        subtopics: [
                          {
                            name: "Introduction Euclid's Geometry (9)",
                            id: 8058,
                          },
                        ],
                      },
                      {
                        value: "LA",
                        name: "Lines, Angles, Triangles - Congruency & similarity of triangles and Quadrilaterals (9)",
                        id: 981,
                        subtopics: [
                          {
                            name: "Lines, Angles, Triangles - Congruency & similarity of triangles and Quadrilaterals (9)",
                            id: 8059,
                          },
                        ],
                      },
                      {
                        value: "LE",
                        name: "Linear Equation in Two Variables (10)",
                        id: 978,
                        subtopics: [
                          {
                            name: "Linear Equation in Two Variables (10)",
                            id: 8056,
                          },
                        ],
                      },
                      {
                        value: "MIS",
                        name: "Miscellaneous",
                        id: 771,
                        subtopics: [
                          {
                            name: "Miscellaneous",
                            id: 7818,
                          },
                        ],
                      },
                      {
                        value: "MT",
                        name: "MATHS",
                        id: 803,
                        subtopics: [
                          {
                            name: "MATHS",
                            id: 7851,
                          },
                        ],
                      },
                      {
                        value: "NS",
                        name: "Number System (10)",
                        id: 979,
                        subtopics: [
                          {
                            name: "Number System (10)",
                            id: 8057,
                          },
                        ],
                      },
                      {
                        value: "PB",
                        name: "Probability (10)",
                        id: 986,
                        subtopics: [
                          {
                            name: "Probability (10)",
                            id: 8064,
                          },
                        ],
                      },
                      {
                        value: "PY",
                        name: "Polynomial (10)",
                        id: 983,
                        subtopics: [
                          {
                            name: "Polynomial (10)",
                            id: 8061,
                          },
                        ],
                      },
                      {
                        value: "SA",
                        name: "Surface area and Volumes (9)",
                        id: 988,
                        subtopics: [
                          {
                            name: "Surface area and Volumes (9)",
                            id: 8066,
                          },
                        ],
                      },
                      {
                        value: "SC",
                        name: "Circles (10)",
                        id: 991,
                        subtopics: [
                          {
                            name: "Circles (10)",
                            id: 8069,
                          },
                        ],
                      },
                      {
                        value: "ST",
                        name: "Statistics (9)",
                        id: 990,
                        subtopics: [
                          {
                            name: "Statistics (9)",
                            id: 8068,
                          },
                        ],
                      },
                      {
                        value: "TG",
                        name: "Introduction to Trigonometry (10)",
                        id: 984,
                        subtopics: [
                          {
                            name: "Introduction to Trigonometry (10)",
                            id: 8062,
                          },
                        ],
                      },
                      {
                        value: "YP",
                        name: "Polynomial (9)",
                        id: 989,
                        subtopics: [
                          {
                            name: "Polynomial (9)",
                            id: 8067,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    value: "PH",
                    name: "PHYSICS",
                    id: 2,
                    topics: [
                      {
                        value: "EC",
                        name: "Electricity (10)",
                        id: 960,
                        subtopics: [
                          {
                            name: "Electricity (10)",
                            id: 8038,
                          },
                        ],
                      },
                      {
                        value: "FC",
                        name: "Force (9)",
                        id: 961,
                        subtopics: [
                          {
                            name: "Force (9)",
                            id: 8039,
                          },
                        ],
                      },
                      {
                        value: "GT",
                        name: "Gravitation (9)",
                        id: 936,
                        subtopics: [
                          {
                            name: "Gravitation (9)",
                            id: 8014,
                          },
                        ],
                      },
                      {
                        value: "ME",
                        name: "Magnetic Effect of current (10)",
                        id: 962,
                        subtopics: [
                          {
                            name: "Magnetic Effect of current (10)",
                            id: 8040,
                          },
                        ],
                      },
                      {
                        value: "MIS",
                        name: "Miscellaneous",
                        id: 770,
                        subtopics: [
                          {
                            name: "Miscellaneous",
                            id: 7817,
                          },
                        ],
                      },
                      {
                        value: "MT",
                        name: "Motion (9)",
                        id: 933,
                        subtopics: [
                          {
                            name: "Motion (9)",
                            id: 8011,
                          },
                        ],
                      },
                      {
                        value: "PH",
                        name: "PHYSICS",
                        id: 802,
                        subtopics: [
                          {
                            name: "PHYSICS",
                            id: 7850,
                          },
                        ],
                      },
                      {
                        value: "SD",
                        name: "Sound (9)",
                        id: 959,
                        subtopics: [
                          {
                            name: "Sound (9)",
                            id: 8037,
                          },
                        ],
                      },
                      {
                        value: "WE",
                        name: "Work Power and Energy (9)",
                        id: 963,
                        subtopics: [
                          {
                            name: "Work Power and Energy (9)",
                            id: 8041,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    value: "SS",
                    name: "SOCIAL SCIENCE",
                    id: 16,
                    topics: [
                      {
                        value: "MIS",
                        name: "Miscellaneous",
                        id: 775,
                        subtopics: [
                          {
                            name: "Miscellaneous",
                            id: 7822,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
}

export default App;
