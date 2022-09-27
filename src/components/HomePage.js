import React from 'react'
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import htmlcssImage from "../Images/htmlcss.png";
import profileImage from "../Images/kurochan_icon.jpg";

const HomePage = () => {
  return (

    <div className="home">
      <h1>Gaku's TECH BLOG</h1>
      <img src={profileImage} className="profileImage" alt="" />

      <p>
        Gakuです。現在、フロントエンドエンジニアを目指し学習をしています。
      </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas bi bi-pencil-square fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">ブログ発信</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">レスポンシブ</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">ウェブセキュリティ</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={htmlcssImage} alt="" />
              <h4>HTML/CSS</h4>
              <p>HTML/CSSが使えます</p>
            </div>
            <div class="col-md-4 services">
              <img src={jsImage} alt="" />
              <h4>JavaScript</h4>
              <p>JavaScriptが使えます</p>
            </div>
            <div class="col-md-4 services">
              <img src={reactImage} alt="" />
              <h4>React</h4>
              <p>Reactを学習中</p>
            </div>
          </div>
          <div class="border-radius" >
            <ul>
              <li>
                Git（GitHub/GitBash/Soucetree）
              </li>
              <li>
                AWS（Amazon Web Service...S3/CloudFront/Route53）
              </li>
              <li>
                TypeScript（今後学習）
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage;