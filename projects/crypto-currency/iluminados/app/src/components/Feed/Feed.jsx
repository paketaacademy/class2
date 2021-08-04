export const Feed = (props) => {
  const {
    symbol,
    name,
    time,
    body,
    socialScore,
    favorites,
    retweets
  } = props

  return (
    <>
      <div className="feed-container--div">
        <div className="feed-container--title">
          <div>
            <div className="feed-container--symbol">{symbol}</div>
          </div>
          <div className="feed-container--name">{name}</div>
          <div className="feed-container--time">{time}</div>
        </div>
        <div className="feed-container--body">
          <div className="feed-container--render">{body}</div>
        </div>
        <div className="feed-container--footer">
          <div className="feed-container--social_score">
            <p>Social Score:</p>
            {socialScore}
          </div>
          <div className="feed-container--favorites">
            <p>Favorites:</p>
            {favorites}
          </div>
          <div className="feed-container--retweets">
            <p>Retweets:</p>
            {retweets}
          </div>
        </div>
      </div>
    </>
  )
}