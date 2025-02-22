import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const cards = [
    {
      title: "Suggestions",
      icon: assets.compass_icon,
      content: [
        "Try a new hobby: How about learning the guitar or trying yoga?",
        "Book Recommendation: “Atomic Habits” by James Clear",
      ],
    },
    {
      title: "Coding",
      icon: assets.code_icon,
      content: [
        "Workout of the Day: 3 sets of squats, pushups, and planks",
        "Tip: Stay hydrated — drink a glass of water before and after your workout.",
      ],
    },
    {
      title: "Places",
      icon: assets.bulb_icon,
      content: [
        "Weekend Getaway: Check out XYZ Hill Station!",
        "Café to Try: The Coffee Brew — Great vibes and amazing lattes.",
      ],
    },
    {
      title: "Food/Recipes",
      icon: assets.message_icon,
      content: [
        "Recipe Idea: Try a quick and healthy avocado toast!",
        "Snack Hack: Greek yogurt + honey + mixed nuts = yum!",
      ],
    },
  ];

  const getRandomCards = (num) => {
    const shuffled = [...cards].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomCards = getRandomCards(4);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello,</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              {randomCards.map((card, index) => (
                <div key={index} className="card">
                  <h2>{card.title}</h2>
                  <img src={card.icon} />
                  <ul>
                    {card.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {!loading ? (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              ) : (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here..."
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
