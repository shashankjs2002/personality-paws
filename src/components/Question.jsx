import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Question = () => {
 
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)
  const [quesNo, setQuesNo] = useState(1)
  const [submit, setSubmit] = useState(false)
  const [btndisable, setBtndisable] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('stage')!=`q`) {
      navigate('/personality-paws/')
    }
  }, [])
  
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
        [["Strength and determination"], ['lion']],
        [["Energy and enthusiasm"], ['lion']],
        [["Pride and majesty"], ['lion']],
        [["Loyalty and protectiveness"], ['lion']],
        [["Intelligence and strategic thinking"], ['lion']],
        [["Passionate and intense"], ['lion', 'gorilla']],
        [["Charismatic and charming"], ['lion', 'gorilla']],
        [["Leadership and ambition"], ['lion', 'gorilla', 'eagle']],
        [["Boldness and courage"], ['lion', 'gorilla', 'eagle']],
        [["Responsible and serious"], ['gorilla']],
        [["Protective and defensive"], ['gorilla']],
        [["Strength and power"], ['gorilla', 'wolf', 'snake']],
        [["A keen eye for detail and perception"], ['eagle']],
        [["Strategic and calculating"], ['eagle', 'owl']],
        [["Independence and self-reliance"], ['horse', 'eagle']],
        // [["Independence and self-reliance"], ['horse', 'eagle']]
      ],

      [
        [["Energy and vitality"], ['horse']],
        [["Freedom-loving and adventurous"], ['horse']],
        [["Intelligent and resourceful"], ['horse']],
        [["Quick thinking and adaptability"], ['horse']],
        [["Strength and endurance"], ['horse']],
        [["Gentle and kind-hearted"], ['horse']],
        [["Reliability and trustworthiness"], ['horse']],
        [["Elegance and gracefulness"], ['horse', 'snake']],
        [["Wisdom and knowledge"], ['owl']],
        [["Strong sense of focus and determination"], ['owl']],
        [["Thoughtful and contemplative"], ['owl']],
        [["Independent and self-reliant"], ['owl', 'weasel']],
        [["Energetic and enthusiastic"], ['owl']],
        [["Sense of humor and playfulness"], ['owl']],
        [["Good observation and analytical abilities"], ['owl']],
        // [["Good observation and analytical abilities"], ['owl']]


      ],

      [
        [["Wisdom and understanding"], ['elephant']],
        [["Patience and perseverance"], ['elephant', 'owl']],
        [["Intelligence and resourcefulness"], ['elephant']],
        [["Gentle and nurturing"], ['elephant']],
        [["Courageous and self-assured"], ['elephant']],
        [["Dignity and grace"], ['elephant']],
        [["Loyalty and trustworthiness"], ['elephant']],
        [["Strong and powerful"], ['elephant', 'eagle']],
        [["Loyalty and commitment to family and community"], ['elephant', 'wolf', 'gorilla']],
        [["Resourcefulness and resourcefulness"], ['weasel']],
        [["Good observer and pay attention to details"], ['weasel']],
        [["Persistence and determination"], ['weasel', 'eagle']],
        [["Independent and solitary"], ['wolf']],
        [["Sleek and stylish"], ['weasel']],
        [["Adventurous and spontaneous"], ['wolf']],
        // [["Adventurous and spontaneous"], ['wolf']]
      ],

      [
        [["Playfulness and fun-loving"], ['dolphin']],
        [["Social and outgoing"], ['dolphin', 'fox']],
        [["Curiosity and a desire to explore"], ['dolphin', 'fox']],
        [["Charm and charisma"], ['dolphin', 'fox']],
        [["Energetic and active"], ['dolphin']],
        [["Quick-witted and quick-thinking"], ['dolphin']],
        [["Playfulness and a sense of humor"], ['dolphin', 'fox', 'weasel']],
        [["Elegance and style"], ['fox', 'weasel']],
        [["Boldness and daring"], ['weasel', 'snake', 'wolf']],
        [["Stealth and secrecy"], ['weasel', 'snake']],
        [["Sensitivity and emotionality"], ['weasel', 'snake', 'wolf']],
        [["Quick and agile"], ['weasel', 'snake', 'fox']],
        [["Strategic and cunning"], ['weasel', 'snake', 'fox', 'wolf']],
        [["Independence and self-sufficiency"], ['wolf']],
        [["A strong sense of purpose and drive"], ['wolf']],
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
      var pl1 = opt[n % 4][(m +  quesNo) % 15][0];
      res = pl1;
      for (let i = 0; i < opt[n % 4][(m +  quesNo) % 15][1].length; i++) {
        result[opt[n % 4][(m +  quesNo) % 15][1][i]]++
      }
      l1.checked = false
    }
    else if (l2.checked === true) {
      var pl2 = opt[(n + 1) % 4][(m + o +  quesNo) % 15][0];
      res = pl2;
      for (let i = 0; i < opt[(n + 1) % 4][(m + o +  quesNo) % 15][1].length; i++) {
        result[opt[(n + 1) % 4][(m + o +  quesNo) % 15][1][i]]++
      }
      l2.checked = false
    }
    else if (l3.checked === true) {
      var pl3 = opt[(n + 2) % 4][(m + 2 * o +  quesNo) % 15][0];
      res = pl3;
      for (let i = 0; i < opt[(n + 2) % 4][(m + 2 * o +  quesNo) % 15][1].length; i++) {
        result[opt[(n + 2) % 4][(m + 2 * o +  quesNo) % 15][1][i]]++
      }
      l3.checked = false
    }
    else if (l4.checked === true) {
      var pl4 = opt[(n + 3) % 4][(m + 3 * o +  quesNo) % 15][0];
      res = pl4;
      for (let i = 0; i < opt[(n + 3) % 4][(m + 3 * o +  quesNo) % 15][1].length; i++) {
        result[opt[(n + 3) % 4][(m + 3 * o +  quesNo) % 15][1][i]]++
      }
      l4.checked = false
    }
   

    navigate(`/personality-paws/q/${quesNo + 1}`)
    setProgress(progress + 10)
    if (quesNo == 9) {
      setSubmit(true)
    }
    setQuesNo(quesNo + 1)
    setBtndisable(true)

  }

  const submitBtn = () => {
    let score = Object.keys(result).sort(function (a, b) { return result[b] - result[a] })
    localStorage.setItem('stage', 'result')
    localStorage.setItem('animal',score[0])

    navigate('/personality-paws/result')
  }
  const [n, setN] = useState(Math.floor(Math.random() * 4)) // First shuffle
  const [m, setM] = useState(Math.floor(Math.random() * 7))
  const [o, setO] = useState(Math.floor(Math.random() * 7))

  return (
    <div className="mid">
    <div className="content">
    <div>
      <div>
        <h2>Question {quesNo}: </h2>
      </div>
      {/* <!-- Progress bar --> */}
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
      </div>
      {/* <!-- Quiz question and answer choices --> */}
      <div className="quiz-question">
        <h2>Which characteristic you have the most?</h2>
        <form >
          <label >
            <input onClick={btnAbled} type="radio" id='check1' name="color" value={opt[n % 4][(m +  quesNo) % 15][0]} /> {opt[n % 4][(m +  quesNo) % 15][0]}
          </label>
          <br />
          <label>
            <input onClick={btnAbled} type="radio" id='check2' name="color" value={opt[(n + 1) % 4][(m + o +  quesNo) % 15][0]} /> {opt[(n + 1) % 4][(m + o +  quesNo) % 15][0]}
          </label>
          <br />
          <label>
            <input onClick={btnAbled} type="radio" id='check3' name="color" value={opt[(n + 2) % 4][(m + 2 * o +  quesNo) % 15][0]} /> {opt[(n + 2) % 4][(m + 2 * o +  quesNo) % 15][0]}
          </label>
          <br />
          <label>
            <input onClick={btnAbled} type="radio" id='check4' name="color" value={opt[(n + 3) % 4][(m + 3 * o +  quesNo) % 15][0]} /> {opt[(n + 3) % 4][(m + 3 * o +  quesNo) % 15][0]}
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
    </div>
    </div>
  )
}

export default Question