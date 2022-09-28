/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import pc01Image from "../Images/pc01.jpg";
import pc02Image from "../Images/pc02.jpg";
import pc03Image from "../Images/pc03.jpg";
import reactImage from "../Images/react.png";
import kurochanImage from "../Images/kurochan_icon.jpg";


const BlogPage = () => {
  return (
    <body>
    <div className="blog">
      <h1>ブログ</h1>

      <div className="new-article">
      <article>
        <img src={pc01Image} className="pc01Image" alt="" />
          <p>最新のフロントエンド技術について思うこと</p>
          <div>
            <a href="#">記事を読む</a>
          </div>
      </article>
      <article>
        <img src={pc02Image} className="pc02Image" alt="" />
        <p>プログラミングの学習法について思うこと</p>
        <div>
          <a href="#">記事を読む</a>
        </div>
      </article>
      <article>
        <img src={pc03Image} className="pc03Image" alt="" />
        <p>SNSの利用について思うこと</p>
        <div>
          <a href="#">記事を読む</a>
        </div>
      </article>
    </div>

      <div className="main-aside">
        <main>
          <article>
            <h1>WEBアプリをGitHub Actionsで、AWSのS3にビルド・デプロイ</h1>
            <ul>
              <li>2022/09/26</li>
              <li>カテゴリー</li>
            </ul>
            <img src={reactImage} className="reactImage" alt="" />
            <div className="article-intro">
              <p>GitHub Actionsでビルド・デプロイを自動化し、開発の生産を上げたいと思い作業していましたが、エラーが「Process completed with exit code 1.」と表示されたときのこと。</p>
              <div>
                <a href="#">記事を読む</a>
              </div>
            </div>
          </article>
          <article>
            <h1>サンプル記事②</h1>
            <ul>
              <li>2022/09/28</li>
              <li>カテゴリー</li>
            </ul>
            <img src={reactImage} className="reactImage" alt="" />
            <div className="article-intro">
              <p>これはサンプル記事の②になります。更新をお待ちください。</p>
              <div>
                <a href="#">記事を読む</a>
              </div>
            </div>
          </article>
          <article>
            <h1>サンプル記事③</h1>
            <ul>
              <li>2022/10/01</li>
              <li>カテゴリー</li>
            </ul>
            <img src={reactImage} className="reactImage" alt="" />
            <div className="article-intro">
              <p>これはサンプル記事の③になります。更新をお待ちください。</p>
              <div>
                <a href="#">記事を読む</a>
              </div>
            </div>
          </article>
        </main>
        <aside>
          <section className="aside">
            <img src={kurochanImage} className="kurochanImage" alt="" />
            <h4>Gaku Code</h4>
            <p>
              現在、フロントエンドエンジニアを目指してプログラミングを学習中です。日々、開発からビルド/デプロイまで実践的な取り組みをしながら、基礎知識や必須知識を蓄えております。
            </p>
          </section>
          <section className="ranking">
            <h4>ランキング</h4>
            <div className="ranking-article">
              <a href="#">
                <img src={pc01Image} className="pc01Image" alt="" />
                <p>HTML/CSS入門</p>
              </a>
            </div>
            <div className="ranking-article">
              <a href="#">
                <img src={pc02Image} className="pc02Image" alt="" />
                <p>JavaScript入門</p>
              </a>
            </div>
            <div className="ranking-article">
              <a href="#">
                <img src={pc03Image} className="pc03Image" alt="" />
                <p>React入門</p>
              </a>
            </div>
          </section>
          <section className="archive">
            <h4>アーカイブ</h4>
            <ul>
              <li><a href="#">2022/09/26（月）</a></li>
              <li><a href="#">2022/09/27（火）</a></li>
              <li><a href="#">2022/09/28（水）</a></li>
              <li><a href="#">2022/09/29（木）</a></li>
              <li><a href="#">2022/09/30（金）</a></li>
              <li><a href="#">2022/10/01（土）</a></li>
              <li><a href="#">2022/10/02（日）</a></li>
              <li><a href="#">2022/10/03（月）</a></li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
    </body>
  )
}

export default BlogPage;