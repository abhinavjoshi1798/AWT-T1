import AlertTop from './Components/AlertTop';
import './App.css';
import TagSearch from './Components/TagSearch';
import CascadingDropDown from './Components/CascadingDropDown';
import Dropdowns from './Components/DependableDropdowns';
import DependentDropdowns from './Components/DependableDropdowns';


function App() {
  return (
    <>
      {/* <AlertTop /> */}
      {/* <TagSearch />  */}
    {/* <CascadingDropDown /> */}

    <DependentDropdowns data={[
  {
    "name": "ALLEN GLOBAL STUDIES DIVISION",
    "id": "25",
    "classes": [
      {
        "name": "Riser & Challenger",
        "id": "18",
        "classCode": "RC",
        "subjects": [
          {
            "name": "QUANTS",
            "id": "26",
            "subjectCode": "QT",
            "topics": [
              {
                "name": "Algebra",
                "id": "1855",
                "topicCode": "AA",
                "subtopics": [
                  {
                    "id": "15803",
                    "name": "Linear equations"
                  },
                  {
                    "id": "15804",
                    "name": "Inequalities and absolute value"
                  },
                  {
                    "id": "15805",
                    "name": "Coordinate Geometry"
                  }
                ]
              },
              {
                "name": "Advanced Maths",
                "id": "1857",
                "topicCode": "AM",
                "subtopics": [
                  {
                    "id": "15812",
                    "name": "Functions & Polynomials"
                  },
                  {
                    "id": "15813",
                    "name": "Exponents & Radicals"
                  },
                  {
                    "id": "15814",
                    "name": "Progressions"
                  }
                ]
              },
              {
                "name": "Additional Topics",
                "id": "1858",
                "topicCode": "AT",
                "subtopics": [
                  {
                    "name": "Geometry",
                    "id": "15815"
                  }
                ]
              },
              {
                "name": "Problem Solving & Data Analysis",
                "id": "1856",
                "topicCode": "PD",
                "subtopics": [
                  {
                    "id": "15806",
                    "name": "Ratio & Proportion"
                  },
                  {
                    "id": "15807",
                    "name": "Percentages"
                  },
                  {
                    "id": "15808",
                    "name": "Data Analysis"
                  },
                  {
                    "id": "15809",
                    "name": "Statistics"
                  },
                  {
                    "id": "15810",
                    "name": "Random Sampling"
                  },
                  {
                    "id": "15811",
                    "name": "Simple Coumpound Interest"
                  }
                ]
              }
            ]
          },
          {
            "name": "VERBAL",
            "id": "25",
            "subjectCode": "VB",
            "topics": [
              {
                "name": "Analysis in Science",
                "id": "1851",
                "topicCode": "AS",
                "subtopics": [
                  {
                    "id": "15781",
                    "name": "Science (AS)"
                  }
                ]
              },
              {
                "name": "Command of Evidence",
                "id": "1854",
                "topicCode": "CE",
                "subtopics": [
                  {
                    "id": "15802",
                    "name": "Command of Evidence (E)"
                  }
                ]
              },
              {
                "name": "Craft & Structure",
                "id": "2714",
                "topicCode": "CS",
                "subtopics": [
                  {
                    "id": "20705",
                    "name": "Word in Context"
                  },
                  {
                    "id": "20706",
                    "name": "Text Structure & Purpose"
                  },
                  {
                    "id": "20707",
                    "name": "Cross Text Connections"
                  }
                ]
              },
              {
                "name": "Expression of Ideas",
                "id": "1852",
                "topicCode": "EI",
                "subtopics": [
                  {
                    "id": "20724",
                    "name": "Transitions"
                  },
                  {
                    "id": "20725",
                    "name": "Rhethroical Synthesis"
                  },
                  {
                    "id": "15782",
                    "name": "Transitional Words and Sentences (OT)"
                  },
                  {
                    "id": "15783",
                    "name": "Precise Word Choices (EP)"
                  },
                  {
                    "id": "15784",
                    "name": "Concise Sentences (EC)"
                  },
                  {
                    "id": "15785",
                    "name": "Style and Tone (ET)"
                  },
                  {
                    "id": "15786",
                    "name": "Logical Sentence Order (OL)"
                  },
                  {
                    "id": "15787",
                    "name": "Clear Sentences (ES)"
                  },
                  {
                    "id": "15788",
                    "name": "Main Idea (DP)"
                  },
                  {
                    "id": "15789",
                    "name": "Supporting Evidence (DS)"
                  },
                  {
                    "id": "15790",
                    "name": "Addition/Deletion (AD)"
                  }
                ]
              },
              {
                "name": "Analysis in History/SocialStudies",
                "id": "1850",
                "topicCode": "HS",
                "subtopics": [
                  {
                    "id": "15780",
                    "name": "History and Social Studies (AH )"
                  }
                ]
              },
              {
                "name": "Information and Ideas",
                "id": "1847",
                "topicCode": "II",
                "subtopics": [
                  {
                    "id": "15767",
                    "name": "Direct Information (IE)"
                  },
                  {
                    "id": "15768",
                    "name": "Vocabulary in Context (IW )"
                  },
                  {
                    "id": "15769",
                    "name": "Describing Relationships (IR)"
                  },
                  {
                    "id": "15770",
                    "name": "Implied Information (II)"
                  },
                  {
                    "id": "15771",
                    "name": "Main Ideas (IT)"
                  },
                  {
                    "id": "15772",
                    "name": "Finding Evidence (IC)"
                  },
                  {
                    "id": "15773",
                    "name": "Similar Situation (IA)"
                  }
                ]
              },
              {
                "name": "Information & Idea's",
                "id": "2715",
                "topicCode": "LL",
                "subtopics": [
                  {
                    "id": "20710",
                    "name": "Interences"
                  },
                  {
                    "id": "20711",
                    "name": "Central Ideas & Details"
                  },
                  {
                    "id": "20708",
                    "name": "Command of Evidence (Textual)"
                  },
                  {
                    "id": "20709",
                    "name": "Command of Evidence (Quantitative)"
                  }
                ]
              },
              {
                "name": "Passage",
                "id": "1846",
                "topicCode": "PA",
                "subtopics": [
                  {
                    "id": "15763",
                    "name": "Literature"
                  },
                  {
                    "id": "15764",
                    "name": "History"
                  },
                  {
                    "id": "15765",
                    "name": "Science"
                  },
                  {
                    "id": "15766",
                    "name": "Social Science"
                  }
                ]
              },
              {
                "name": "Rhetoric",
                "id": "1848",
                "topicCode": "RH",
                "subtopics": [
                  {
                    "id": "15774",
                    "name": "Author's Evidence (RE)"
                  },
                  {
                    "id": "15775",
                    "name": "Purpose (RP)"
                  },
                  {
                    "id": "15776",
                    "name": "Word Choice (RW)"
                  },
                  {
                    "id": "15777",
                    "name": "Point of View (RV)"
                  }
                ]
              },
              {
                "name": "Standard English Conventions",
                "id": "1853",
                "topicCode": "SC",
                "subtopics": [
                  {
                    "id": "15800",
                    "name": "Matching Verbs (SV)"
                  },
                  {
                    "id": "15801",
                    "name": "Comparing Correctly (UL)"
                  },
                  {
                    "id": "20712",
                    "name": "Form, Structure & Senses (Determiners)"
                  },
                  {
                    "id": "20713",
                    "name": "Form, Structure & Senses (SVA)"
                  },
                  {
                    "id": "20714",
                    "name": "Form, Structure & Senses (Clasuses)"
                  },
                  {
                    "id": "20715",
                    "name": "Form, Structure & Senses (Finite & Non-Finite V)"
                  },
                  {
                    "id": "20716",
                    "name": "Form, Structure & Senses (Tense)"
                  },
                  {
                    "id": "20717",
                    "name": "Form, Structure & Senses (Modifiers)"
                  },
                  {
                    "id": "20718",
                    "name": "Boundaries (Punctuation)"
                  },
                  {
                    "id": "20719",
                    "name": "Form, Structure & Senses (Pronouns)"
                  },
                  {
                    "id": "20720",
                    "name": "Boundaries (Pronoun)"
                  },
                  {
                    "id": "20721",
                    "name": "SVA"
                  },
                  {
                    "id": "20722",
                    "name": "Boundaries (Punctuation)"
                  },
                  {
                    "id": "20723",
                    "name": "Form, Structure & Senses Subject Modifier placment)"
                  },
                  {
                    "id": "15791",
                    "name": "Clear Pronouns (UPC)"
                  },
                  {
                    "id": "15792",
                    "name": "Matching Sentence Structures (SP)"
                  },
                  {
                    "id": "15793",
                    "name": "Appropriate Prepositions (UC)"
                  },
                  {
                    "id": "15794",
                    "name": "Matching Nouns (SN )"
                  },
                  {
                    "id": "15795",
                    "name": "Punctuating (PL)"
                  },
                  {
                    "id": "15796",
                    "name": "Verb Agreement (USV)"
                  },
                  {
                    "id": "15797",
                    "name": "Confusing Words (UF)"
                  },
                  {
                    "id": "15798",
                    "name": "Extra Clauses (PC)"
                  },
                  {
                    "id": "15799",
                    "name": "Making Whole Sentences and Avoiding Run-ons (SB)"
                  }
                ]
              },
              {
                "name": "Synthesis",
                "id": "1849",
                "topicCode": "SY",
                "subtopics": [
                  {
                    "id": "15778",
                    "name": "Comparing Passages (M )"
                  },
                  {
                    "id": "15779",
                    "name": "Graphics (Q)"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
} />


    </>
  );
}

export default App;
