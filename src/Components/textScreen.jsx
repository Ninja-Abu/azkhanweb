import React from 'react'
import './textScreen.css'

function textScreen({ content }) {

    const linkLines = content.links.map((link, index) => (
        `const link${index + 1} = <a href="${link}" target="_blank">"${link}"</a>;`
      ));

    const lines = [
        `&nbsp;`,
        `&nbsp;`,
        `var name = "Abu Zaid Khan";`,
        `var jobName = "${content.jobName}";`,
        `&nbsp;`,
        `&nbsp;`,
        `const jobDesc = "${content.description}";`,
        `&nbsp;`,
        `&nbsp;`,
        `let startDate = "${content.startDate}";`,
        `let endDate = "${content.endDate}";`,
        `&nbsp;`,
        ...linkLines,
        `&nbsp;`,
        `const jobURL = <a href="${content.URL}" target="_blank">"${content.URL}"</a>;`,
        `&nbsp;`
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