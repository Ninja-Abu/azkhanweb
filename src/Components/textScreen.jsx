import React from 'react'
import './textScreen.css'

function textScreen({ content }) {

    const linkLines = content.links.map((link, index) => (
        `<p style="color: #86D8F9;">const</p> <p style="color: #C28FE4; margin-left: 10px;">link${index + 1} </p> = <a href="${link}" target="_blank">"${link}";</a>`
      ));

    const bulletLines = content.bullets.map((bullet, index) => (
        `<p style="color: #C3E88D;"> &nbsp "${bullet.bullet} ,"</p>`
    ));

    const lines = [
        `&nbsp;`,
        `<p style="color: #86D8F9;">const </p> <p style="color: #C28FE4;"> Name </p> = <p style="color: #C3E88D;">"${content.jobName}";</p>`,
        `&nbsp;`,
        `<p style="color: #86D8F9;">let</p> <p style="color: #C28FE4;"> startDate </p> = <p style="color: #C3E88D;">"${content.startDate}";</p>`,
        `<p style="color: #86D8F9;">let</p> <p style="color: #C28FE4;"> endDate </p> = <p style="color: #C3E88D;">"${content.endDate}";</p>`,
        `&nbsp;`,
        `<p style="color: #86D8F9;">const</p> <p style="color: #C28FE4; margin-left: 10px;">URL </p> = <a href="${content.URL}" target="_blank">"${content.URL}"</a>;`,
        `&nbsp;`,
        `&nbsp;`,
        `<p style="color: #86D8F9;">let</p> <p style="color: #C28FE4; margin-left: 10px;">jobDesc</p> <p>=</p> <p style="color: #C3E88D;"> "${content.description}" ;</p>`,
        `&nbsp;`,
        `<p style="color: #86D8F9;">let</p> <p style="color: #C28FE4; margin-left: 10px;">bulletPoints</p> = <p style="color: #ffff00;">{</p>`,
        ...bulletLines,
        `<p style="color: #ffff00;">\};</p>`,
        `&nbsp;`,
        `&nbsp;`,
        ...linkLines,
        `&nbsp;`,
      ];

    return (
        <div className="code-editor">
          <div className="code-content">
            {lines.map((line, index) => (
              <div key={index} className="line">
                <div className="line-number">{index + 1}</div>
                <span className="line-content" dangerouslySetInnerHTML={{ __html: line }} />
              </div>
            ))}
          </div>
        </div>
      );
    }

export default textScreen