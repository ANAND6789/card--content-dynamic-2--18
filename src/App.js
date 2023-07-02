import React from 'react';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCardHovered: false
    };
  }

  handleCardMouseEnter = () => {
    this.setState({ isCardHovered: true });
  };

  handleCardMouseLeave = () => {
    this.setState({ isCardHovered: false });
  };

  render() {
    const { isCardHovered } = this.state;
    const cardClassName = `card ${isCardHovered ? 'bg-danger' : ''}`;
    return (
      <div className="card-body row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div className="col d-flex flex-column align-items-start gap-2 fade-bottom">
          <p className="text-body-para">WELCOME TO STUDYLAB</p>
          <h1 className="fw-bold text-body-emphasis">We Are StudyLab An Online Learning Center</h1>
          <p className="text-body-secondary">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          <p className="text-body-secondary">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <div className="col">
            <div className="video-container fade-bottom">
              <video controls height="100">
                <source src="https://player.vimeo.com/external/387979926.sd.mp4?s=c3947fbe18c0338f408030b80cdebfc028d4fc34&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div>
                <h5 className="video-title">Learn anything from StudyLab, Watch video.</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            <div className="col d-flex flex-column gap-2 fade-bottom">
              <div className="card">
                <div className="card-body">
                  <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="card-svg" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5Zm0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm9 0a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 2A.5.5 0 0 1 10.5 4h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM0 4.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 4.5Zm9 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM0 6a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 6Zm9 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM0 8.5A.5.5 0 0 1 .5 8h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 8.5Zm9 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM0 11a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 11Zm9 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM0 13.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 13.5ZM9 13a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z"></path>
                    </svg>
                  </div>
                  <h5 className="card-title">Top Quality Content</h5>
                  <p className="card-text">A small river named Duden flows by their place and supplies.</p>
                </div>
              </div>
            </div>

            <div className="col d-flex flex-column gap-2 fade-bottom">
              <div className="card">
                <div className="card-body">
                  <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="card-svg" viewBox="0 0 16 16">
                      <path d="M8.5 0A8.5 8.5 0 1 0 17 8.5 8.509 8.509 0 0 0 8.5 0zm0 13A4.5 4.5 0 1 1 8.5 4 4.5 4.5 0 0 1 8.5 13z"></path>
                      <path d="M7.354 10.354a.5.5 0 0 1-.708 0L5.5 9.207l-1.146 1.147a.5.5 0 0 1-.708-.708l1.147-1.146-1.147-1.146a.5.5 0 0 1 .708-.708L5.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L6.207 7.5l1.147 1.146a.5.5 0 0 1 0 .708z"></path>
                    </svg>
                  </div>
                  <h5 className="card-title">Highly Skilled Instructor</h5>
                  <p className="card-text">A small river named Duden flows by their place and supplies.</p>
                </div>
              </div>
            </div>

            <div className="col d-flex flex-column gap-2 fade-bottom">
              <div className="card">
                <div className="card-body">
                  <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  className="card-svg" viewBox="0 0 16 16">
                      <path d="M0 11c0-.368.238-.694.594-.806C2.74 9.89 4.767 9 7.5 9c2.734 0 4.76.89 6.906 1.194.356.112.594.438.594.806v1.21c0 .368-.238.694-.594.806C12.26 13.11 10.233 14 7.5 14c-2.733 0-4.76-.89-6.906-1.194A1.07 1.07 0 0 1 0 12.6v-1.21zM2 11c0 .245.11.45.28.576C3.002 12.32 4.646 13 7.5 13c2.853 0 4.498-.68 5.22-1.424.17-.126.28-.33.28-.576v-1.21a.797.797 0 0 0-.28-.575C11.998 9.68 10.354 9 7.5 9c-2.853 0-4.498.68-5.22 1.424A.797.797 0 0 0 2 10.79V11zm5-8C4.486 3 2.5 4.34 2.5 6c0 1.66 1.986 3 4.5 3s4.5-1.34 4.5-3c0-1.66-1.986-3-4.5-3zm0 1c1.192 0 2.157.464 2.532 1.086a4.322 4.322 0 0 1-.557.026C7.628 5.43 6.99 5 6 5c-1.192 0-2.157.464-2.532 1.086A4.322 4.322 0 0 1 3.91 7H6c1.992 0 3.672-.857 4.477-2.012A3.552 3.552 0 0 0 10 5c-.99 0-1.628.43-1.978.086C8.157 4.464 9.022 4 10 4z"></path>
                    </svg>
                  </div>
                  <h5 className="card-title">World Class & Quiz</h5>
                  <p className="card-text">A small river named Duden flows by their place and supplies.</p>
                </div>
              </div>
            </div>

            <div className="col d-flex flex-column gap-2 fade-bottom">
              <div className="card">
                <div className="card-body">
                  <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="card-svg" viewBox="0 0 16 16">
                      <path d="M7.5 0v7h1V0h-1Zm.297 8.964l.637 5.146.583-1.056a.5.5 0 0 1 .88.416l-1 1.732L10.8 9H8.5v1h4V7l-2.553 1.527.84-1.47a.5.5 0 0 1 .877.478L10.5 9H13V8H9.5l1.292-2.24a.5.5 0 0 1 .876.416L10.5 7H8.5V1h-1v6H5.2L6.5 4.54a.5.5 0 0 1 .877.417L6.5 7H4V6h3.5L7.708 3.76A.5.5 0 0 1 7.13 3L6 5H4V4l3.336-.001L7.5 2l.042-.146a.5.5 0 0 1 .958 0L8.5 2l.499.853L10.5 4v1h-2l-.218 1.763a.5.5 0 0 1 .877.416L9.5 6H12v1H8.5l1.293 2.24a.5.5 0 0 1 .876-.417L10.5 7H13v1h-3.5l.208 2.24a.5.5 0 0 1-.877.417L9.5 9H7.5V0h-1v9Z"></path>
                    </svg>
                  </div>
                  <h5 className="card-title">Get Certified</h5>
                  <p className="card-text">A small river named Duden flows by their place and supplies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
