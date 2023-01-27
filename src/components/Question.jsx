import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Question = () => {

  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)
  // const [quesNo, setQuesNo] = useState(1)
  let quesNo = parseInt(localStorage.getItem('qNo'))
  const [submit, setSubmit] = useState(false)
  const [btndisable, setBtndisable] = useState(true)
  const [adHide, setAdHide] = useState(false)
  const [lang, setLang] = useState(localStorage.getItem('lang'))
  const [toggle, setToggle] = useState(localStorage.getItem('toggle'))
  const [switchbtn, setSwitchbtn] = useState(localStorage.getItem('switch'))

  const translate = () => {
    // document.querySelector("#flexSwitchCheckChecked").style.backgroundPosition = `${toggle} center`

    // localStorage.setItem('toggle', 'left')
    // localStorage.setItem('lang', 1)

    // setToggle(localStorage.getItem('toggle'))
    // setLang(localStorage.getItem('lang'))
    // toggle === 'left' ? setToggle('right') : setToggle('left')
    // lang === 0 ? setLang(1) : setLang(0)

    if(toggle === 'left'){
      setToggle('right')
      localStorage.setItem('toggle','right')
      // setSwitchbtn('checked')
      // localStorage.setItem('switch','checked')
      setLang(0)
      localStorage.setItem('lang',0)
    } else {
      setToggle('left')
      localStorage.setItem('toggle','left')
      // setSwitchbtn('')
      // localStorage.setItem('switch','')
      setLang(1)
      localStorage.setItem('lang',1)

    }

  }

  useEffect(() => {
    setLang(localStorage.getItem('lang'))
    if (localStorage.getItem('stage') != `q`) {
      navigate('/')
    }
    navigate(`/q/${quesNo}`)
    if (quesNo === 10) {
      setSubmit(true)
    }
  }, [])

  // useEffect(() => {

  //   if (document.querySelector("html > iframe:nth-child(6)")) {   
  //     // document.getElementsByTagName('iframe')[5].style.display = "none"
  //     console.log("first")
  //     document.querySelector("html > iframe:nth-child(6)").style.display = "none"
  //   }
  // }, [document.querySelector("html > iframe:nth-child(6)")])

  // if(!adHide){
  //   try {
  //     setTimeout(() => {
  //     console.log("second")
  //     document.querySelector("html > iframe:nth-child(6)").style.display = "none"
  //     // document.querySelector("body > div > div").style.display = "none"
  //     setAdHide(true)

  //   },500)
  //   } catch (error) {
  //    console.log(error) 
  //   }

  // }


  const btnAbled = () => {
    setBtndisable(false)
  }

  const [result, setResult] = useState(
    {
      "lion": 0,
      "horse": 0,
      "elephant": 0,
      "dolphin": 0,
      "wolf": 0,
      "snake": 0,
      "eagle": 0,
      "gorilla": 0,
      "weasel": 0,
      "fox": 0,
      "owl": 0
    }
  )



  const [opt, setOpt] = useState(
    [
      [
        [["Strength and determination", "शक्ति और दृढ़ संकल्प"], ['lion']],
        [["Energy and enthusiasm", "ऊर्जा और उत्साह"], ['lion']],
        [["Pride and majesty", "गौरव और महिमा"], ['lion']],
        [["Loyalty and protectiveness", "वफादारी और सुरक्षा"], ['lion']],
        [["Intelligence and strategic thinking", "खुफिया और रणनीतिक सोच"], ['lion']],
        [["Passionate and intense", "भावुक और तीव्र"], ['lion', 'gorilla']],
        [["Charismatic and charming", "करिश्माई और आकर्षक"], ['lion', 'gorilla']],
        [["Leadership and ambition", "नेतृत्व और महत्वाकांक्षा"], ['lion', 'gorilla', 'eagle']],
        [["Boldness and courage", "साहस और बहादुरी "], ['lion', 'gorilla', 'eagle']],
        [["Responsible and serious", "जिम्मेदार और गंभीर"], ['gorilla']],
        [["Protective and defensive", "सुरक्षात्मक और रक्षात्मक"], ['gorilla']],
        [["Strength and power", "शक्ति और शक्ति"], ['gorilla', 'wolf', 'snake']],
        [["A keen eye for detail and perception", "विस्तार और धारणा के लिए गहरी नजर"], ['eagle']],
        [["Strategic and calculating", "रणनीतिक और चौकस "], ['eagle', 'owl']],
        [["Independence and self-reliance", "स्वतंत्रता और आत्मनिर्भरता"], ['horse', 'eagle']],
        // [["Independence and self-reliance"], ['horse', 'eagle']]
      ],

      [
        [["Energy and vitality", "ऊर्जा और जीवन शक्ति"], ['horse']],
        [["Freedom-loving and adventurous", "स्वतंत्रता-प्रेमी और साहसी"], ['horse']],
        [["Intelligent and resourceful", "बुद्धिमान और साधन संपन्न"], ['horse']],
        [["Quick thinking and adaptability", "त्वरित सोच और अनुकूलता"], ['horse']],
        [["Strength and endurance", "ताकत और धीरज"], ['horse']],
        [["Gentle and kind-hearted", "कोमल और दयालु"], ['horse']],
        [["Reliability and trustworthiness", "विश्वसनीयता और भरोसेमंदता"], ['horse']],
        [["Elegance and gracefulness", "लालित्य और अनुग्रह"], ['horse', 'snake']],
        [["Wisdom and knowledge", "बुद्धि और ज्ञान"], ['owl']],
        [["Strong sense of focus and determination", "ध्यान और दृढ़ संकल्प की प्रबल भावना"], ['owl']],
        [["Thoughtful and contemplative", "विचारशील और चिंतनशील"], ['owl']],
        [["Independent and self-reliant", "स्वतंत्र और आत्मनिर्भर"], ['owl', 'weasel']],
        [["Energetic and enthusiastic", "ऊर्जावान और उत्साही"], ['owl']],
        [["Sense of humor and playfulness", "हास्य और चंचलता की भावना"], ['owl']],
        [["Good observation and analytical abilities", "अच्छा अवलोकन और विश्लेषणात्मक क्षमता"], ['owl']],
        // [["Good observation and analytical abilities"], ['owl']]


      ],

      [
        [["Wisdom and understanding", "बुद्धि और समझ"], ['elephant']],
        [["Patience and perseverance", "धैर्य और दृढ़ता"], ['elephant', 'owl']],
        [["Intelligence and resourcefulness", "बुद्धिमत्ता और संसाधनशीलता"], ['elephant']],
        [["Gentle and nurturing", "कोमल और पालन-पोषण करने वाला"], ['elephant']],
        [["Courageous and self-assured", "निडर और आत्मविश्वासी"], ['elephant']],
        [["Dignity and grace", "गरिमा और अनुग्रह"], ['elephant']],
        [["Loyalty and trustworthiness", "वफादारी और भरोसेमंदता"], ['elephant']],
        [["Strong and powerful", "मजबूत और शक्तिशाली"], ['elephant', 'eagle']],
        [["Loyalty and commitment to family and community", "परिवार और समुदाय के प्रति वफादारी और प्रतिबद्धता"], ['elephant', 'wolf', 'gorilla']],
        [["Resourcefulness", "उपाय कुशलता"], ['weasel']],
        [["Good observer and pay attention to details", "अच्छा पर्यवेक्षक और विवरण पर ध्यान दें"], ['weasel']],
        [["Persistence and determination", "दृढ़ता और दृढ़ संकल्प"], ['weasel', 'eagle']],
        [["Independent and solitary", "स्वतंत्र और एकान्त"], ['wolf']],
        [["Sleek and stylish", "सुशोभन "], ['weasel']],
        [["Adventurous and spontaneous", "साहसी और सहज"], ['wolf']],
        // [["Adventurous and spontaneous"], ['wolf']]
      ],

      [
        [["Playfulness and fun-loving", "चंचलता और मनोरंजन प्रेमी"], ['dolphin']],
        [["Social and outgoing", "सामाजिक और निवर्तमान"], ['dolphin', 'fox']],
        [["Curiosity and a desire to explore", "जिज्ञासा और समन्वेषण की लालसा "], ['dolphin', 'fox']],
        [["Charm and charisma", "आकर्षण और करिश्मा"], ['dolphin', 'fox']],
        [["Energetic and active", "ऊर्जावान और सक्रिय"], ['dolphin']],
        [["Quick-witted and quick-thinking", "तेज-तर्रार और तेज दिमाग वाला"], ['dolphin']],
        [["Playfulness and a sense of humor", "चंचलता और हास्य की भावना"], ['dolphin', 'fox', 'weasel']],
        [["Elegance and style", "लालित्य और शैली"], ['fox', 'weasel']],
        [["Boldness and daring", "निडरता और हिम्मत"], ['weasel', 'snake', 'wolf']],
        [["Stealth and secrecy", "चुपके और गोपनीयता"], ['weasel', 'snake']],
        [["Sensitivity and emotionality", "संवेदनशीलता और भावुकता"], ['weasel', 'snake', 'wolf']],
        [["Quick and agile", "तेज और फुर्तीला"], ['weasel', 'snake', 'fox']],
        [["Strategic and cunning", "सामरिक और चालाक"], ['weasel', 'snake', 'fox', 'wolf']],
        [["Independence and self-sufficiency", "स्वतंत्रता और आत्मनिर्भरता"], ['wolf']],
        [["A strong sense of purpose and drive", "उद्देश्य और अभियान की एक मजबूत भावना"], ['wolf']],
        // [["A strong sense of purpose and drive"], ['wolf']]

      ]

    ])

  const nextBtn = (e) => {
    e.preventDefault()

    var l1 = document.getElementById("check1");
    var l2 = document.getElementById("check2");
    var l3 = document.getElementById("check3");
    var l4 = document.getElementById("check4");

    var res = " ";

    if (l1.checked === true) {
      var pl1 = opt[n % 4][(m + quesNo) % 15][0];
      res = pl1;
      for (let i = 0; i < opt[n % 4][(m + quesNo) % 15][1].length; i++) {
        result[opt[n % 4][(m + quesNo) % 15][1][i]]++
      }
      l1.checked = false
    }
    else if (l2.checked === true) {
      var pl2 = opt[(n + 1) % 4][(m + o + quesNo) % 15][0];
      res = pl2;
      for (let i = 0; i < opt[(n + 1) % 4][(m + o + quesNo) % 15][1].length; i++) {
        result[opt[(n + 1) % 4][(m + o + quesNo) % 15][1][i]]++
      }
      l2.checked = false
    }
    else if (l3.checked === true) {
      var pl3 = opt[(n + 2) % 4][(m + 2 * o + quesNo) % 15][0];
      res = pl3;
      for (let i = 0; i < opt[(n + 2) % 4][(m + 2 * o + quesNo) % 15][1].length; i++) {
        result[opt[(n + 2) % 4][(m + 2 * o + quesNo) % 15][1][i]]++
      }
      l3.checked = false
    }
    else if (l4.checked === true) {
      var pl4 = opt[(n + 3) % 4][(m + 3 * o + quesNo) % 15][0];
      res = pl4;
      for (let i = 0; i < opt[(n + 3) % 4][(m + 3 * o + quesNo) % 15][1].length; i++) {
        result[opt[(n + 3) % 4][(m + 3 * o + quesNo) % 15][1][i]]++
      }
      l4.checked = false
    }


    navigate(`/q/${quesNo + 1}`)
    setProgress(progress + 10)
    if (quesNo == 9) {
      setSubmit(true)
    }
    // setQuesNo(quesNo + 1)
    quesNo = quesNo + 1
    localStorage.setItem('qNo', quesNo)
    setBtndisable(true)

    // const scriptElem = document.getElementById('ad-2'); 
    // scriptElem.remove()

    // let script = document.createElement("script");

    // script.src = "./ad2.js";
    // script.async = true;
    // script.id = "ad-2"

    // document.body.appendChild(script);
    // window.location.reload()

  }

  const submitBtn = () => {
    let score = Object.keys(result).sort(function (a, b) { return result[b] - result[a] })
    localStorage.setItem('stage', 'result')
    localStorage.setItem('animal', score[0])

    navigate('/result')
    window.location.reload()

  }
  // const [n, setN] = useState(Math.floor(Math.random() * 4)) // First shuffle
  // const [m, setM] = useState(Math.floor(Math.random() * 7))
  // const [o, setO] = useState(Math.floor(Math.random() * 7))

  const n = localStorage.getItem('n')
  const m = localStorage.getItem('m')
  const o = localStorage.getItem('o')

  return (
    <div className="mid">

      <div className="content">
        {/* <ins className="adsbygoogle"
        style={{display:"block"}}
        data-ad-client="ca-pub-6847172398832884"
        data-ad-slot="4979889589"
        data-ad-format="auto"
        data-full-width-responsive="true">
      </ins>
     <script>
     (adsbygoogle = window.adsbygoogle || []).push({});
    </script> */}
        <div>
          <div style={{display: "flex",
            justifyContent: "space-between",
            width: "145px"}}>

            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">हिंदी</label>
            <span className="form-check form-switch">
              <input className="form-check-input" style={{backgroundPosition : `${toggle} center`, backgroundColor: '#12a218', borderColor: '#12a218' }} onChange={translate} type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
            </span>
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">English</label>
          </div>

          <div>
            <h2>
              {
                lang == 0
                ?
                <span> Question </span>
                :
                <span> प्रश्न </span>
              }
              
              {quesNo}: </h2>
          </div>
          {/* <!-- Progress bar --> */}
          <div className="progress-bar">
            {/* <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div> */}
            <div className="progress-bar-fill" style={{ width: `${quesNo * 10 - 10}%` }}></div>
          </div>
          {/* <!-- Quiz question and answer choices --> */}
          <div className="quiz-question">
            {
              lang == 0
              ?
              <h2>Which characteristic you have the most?</h2>
              :
              <h2>आप में सबसे जादा कौनसा गुण है ?</h2>

            }
            <form >
              <label >
                <input onClick={btnAbled} type="radio" id='check1' name="color" value={opt[n % 4][(m + quesNo) % 15][0]} /> {opt[n % 4][(m + quesNo) % 15][0][lang]}
              </label>
              <br />
              <label>
                <input onClick={btnAbled} type="radio" id='check2' name="color" value={opt[(n + 1) % 4][(m + o + quesNo) % 15][0]} /> {opt[(n + 1) % 4][(m + o + quesNo) % 15][0][lang]}
              </label>
              <br />
              <label>
                <input onClick={btnAbled} type="radio" id='check3' name="color" value={opt[(n + 2) % 4][(m + 2 * o + quesNo) % 15][0]} /> {opt[(n + 2) % 4][(m + 2 * o + quesNo) % 15][0][lang]}
              </label>
              <br />
              <label>
                <input onClick={btnAbled} type="radio" id='check4' name="color" value={opt[(n + 3) % 4][(m + 3 * o + quesNo) % 15][0]} /> {opt[(n + 3) % 4][(m + 3 * o + quesNo) % 15][0][lang]}
              </label>
            </form>
          </div>
          { /* <!-- Call-to-action button --> */}
          <div className="cta-button">
            {
              submit ?
                <button disabled={btndisable} onClick={submitBtn}>Submit</button>
                :
                <button disabled={btndisable} onClick={nextBtn}>Next Question</button>
            }
          </div>
        </div>
        {/* 
    <ins className="adsbygoogle"
        style={{display:"block"}}
        data-ad-client="ca-pub-6847172398832884"
        data-ad-slot="4979889589"
        data-ad-format="auto"
        data-full-width-responsive="true">
      </ins>
     <script>
     (adsbygoogle = window.adsbygoogle || []).push({});
    </script> */}
      </div>
    </div>
  )
}

export default Question