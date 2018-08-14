import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import './index.css';


const Resume = () => {
  return (
    <main>
      <section>
        <Typography variant="display1" gutterBottom style={{ color: '#000000'}}>
          Head of Mobile Development
        </Typography>

        <p>
          <Typography variant="body1" gutterBottom>
            I have a passion for software. I enjoy creating tools that make life easier for people. I take pride in what I create and I strive to exceed expectations.
          </Typography>
        </p>

        <p>
          <Typography variant="body1" gutterBottom style={{ paddingBottom: '1em' }}>
            I most commonly work with mobile applications although I am comfortable with backend technologies as well. The languages and technologies I most frequently use include JavaScript ith Node.js. I am also very comfortable with version control systems such as GIT as well as project tracking tools such as Jira.
          </Typography>
        </p>
    </section>

    <section>
      <table class="skills">
        <tbody>
          <tr>
            <td style={{ marginTop: 0, verticalAlign: 'text-top', paddingRight: 100 }}>
              <Typography variant="title" gutterBottom>
                Skills
              </Typography>
            </td>
            <td>
              <header>
                <Typography variant="subheading" gutterBottom style={{ fontWeight: 'bold'  }}>
                  Leadership
                </Typography>
              </header>
              <p>
                <Typography variant="body1" gutterBottom>
                  Strong leadership skills; several years experience leading teams of 5-15 people.
                </Typography>
              </p>
            </td>
            <td style={{ paddingBottom: '1em' }}>
              <header>
                <Typography variant="subheading" gutterBottom style={{ fontWeight: 'bold'  }}>
                  Software
                </Typography>
              </header>
              <p>
                <Typography variant="body1" gutterBottom>
                  15 years software experience developing web, mobile, and desktop applications.
                </Typography>
              </p>
            </td>
          </tr>
          <tr>
            <td style={{ marginTop: 0, verticalAlign: 'text-top', paddingRight: 100 }}>
              <Typography variant="title" gutterBottom>
                Technologies
              </Typography>
            </td>
            <td style={{ paddingBottom: '1em' }}>
              <header>
                <Typography variant="subheading" gutterBottom style={{ fontWeight: 'bold'  }}>
                  Languages
                </Typography>
              </header>
              <p>
                <Typography variant="body1" gutterBottom>
                  JavaScript, Java, HTML, CSS
                </Typography>
              </p>
            </td>
            <td>
              <header>
                <Typography variant="subheading" gutterBottom style={{ fontWeight: 'bold'  }}>
                  Tools
                </Typography>
              </header>
              <p>
                <Typography variant="body1" gutterBottom>
                  GIT, Jira
                </Typography>
              </p>
            </td>
          </tr>

          <tr>
            <td style={{ marginTop: 0, verticalAlign: 'text-top', paddingRight: 100 }}>
              <Typography variant="title" gutterBottom>
                Education
              </Typography>
            </td>
            <td colspan="2" style={{ paddingBottom: '1em' }}>
              <header>
                <Typography variant="subheading" gutterBottom style={{ fontWeight: 'bold'  }}>
                  Fiap, MBA of Java with SOA and IOT
                </Typography>
              </header>
              <p>
                <Typography variant="body1" gutterBottom>
                  I was awarded by my residential automation startup created for the completion of the MBA course
                </Typography>
              </p>
            </td>
          </tr>
          <tr>
            <td style={{ marginTop: 0, fontWeight: 'bold', verticalAlign: 'text-top' }}>
            </td>
            <td colspan="2" style={{ paddingBottom: '1em' }}>
              <header>
                <Typography variant="subheading" gutterBottom style={{ fontWeight: 'bold'  }}>
                  Udacity, Nanodegree of React and React Native
                </Typography>
              </header>
              <p>
                <Typography variant="body1" gutterBottom>
                  I graduated on the course, taking advantage of all the knowledge I could take in the nanodegree
                </Typography>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Work History</h2>

      <table>
        <tbody>
          <tr>
            <td>Facebook</td>
            <td>2016+</td>
            <td>Senior software engineer</td>
          </tr>
          <tr>
            <td>Treasure Data</td>
            <td>2015 - 2016</td>
            <td>Lead software engineer</td>
          </tr>
          <tr>
            <td>Google</td>
            <td>2014 - 2015</td>
            <td>Software engineer</td>
          </tr>
          <tr>
            <td>Recurly</td>
            <td>2014 - 2014</td>
            <td>Technical lead, Software engineer</td>
          </tr>
          <tr>
            <td>Pickarious</td>
            <td>2013 - 2014</td>
            <td>Lead software engineer, UI/UX designer</td>
          </tr>
          <tr>
            <td>Rosetta Stone Inc</td>
            <td>2005 - 2014</td>
            <td>Director of engineering, technical lead, software engineer, scrum master</td>
          </tr>
          <tr>
            <td>Vital Assets Inc</td>
            <td>2004 - 2005</td>
            <td>Web developer, UI/UX designer (print &amp; web)</td>
          </tr>
          <tr>
            <td>Peridev Solutions</td>
            <td>2004 - 2004</td>
            <td>Web developer, project manager, graphic designer (web &amp; marketing)</td>
          </tr>
          <tr>
            <td>Nexpoint Technologies</td>
            <td>2003 - 2004</td>
            <td>Web hosting sales, graphic designer</td>
          </tr>
          <tr>
            <td>Alternative Graphics</td>
            <td>2002 - 2003</td>
            <td>Graphic designer, sales</td>
          </tr>
          <tr>
            <td>Virtual Resort Solutions</td>
            <td>2001 - 2002</td>
            <td>Graphic designer, content editor</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Facebook
        <small>2016+</small>
      </h2>
      <h3>Senior Software Engineer</h3>

      <p>
        I work with open source software on the
        <a href="https://facebook.github.io/react/">React JS</a>
        core team.
      </p>
    </section>

    <section>
      <h2>Treasure Data
        <small>2015 - 2016</small>
      </h2>
      <h3>Lead Software Engineer</h3>

      <p>
        I was a lead front-end software engineer at Treasure Data. Our tech stack included React, Redux, and Immutable JS.
      </p>
    </section>

    <section>
      <h2>Google
        <small>2014 - 2015</small>
      </h2>
      <h3>Software Engineer</h3>

      <p>
        During my time at Google I worked on both
        <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.maps&hl=en">Maps for Android</a>
        and
        <a href="https://cloud.google.com/">Google Cloud Platform</a>.
      </p>
    </section>

    <section>
      <h2>Recurly
        <small>2014 - 2014</small>
      </h2>
      <h3>Technical Lead</h3>

      <p>
        While at Recurly I lead a small team tasked with rewriting the Recurly front-end (previously in Rails) as a single-page Angular JS application. I created the
        <a href="http://bvaughn.github.io/angular-form-for/">Angular formFor library</a>
        while working on this rewrite.
      </p>
    </section>

    <section>
      <h2>Pickarious
        <small>2013 - present</small>
      </h2>
      <h3>CTO</h3>

      <p>
        I am a founder and the chief technology officer for Pickarious, a video-based online community focused on helping people buy and sell second hand goods locally. I am also the primary user interface designer, responsible for creating and maintaining UI for Pickarious on both the web and mobile devices.
      </p>
    </section>

    <section>
      <h2>Rosetta Stone Inc
        <small>2005 - 2014</small>
      </h2>
      <h3>Senior Software Developer, Technical lead</h3>

      <p>During my time at Rosetta Stone I have worked in both the production Software Development department and the research and development department referred to as "Labs".</p>

      <p>While in Labs I was responsible for generating ideas for new Rosetta Stone learning tools. Working in small groups with other Labs employees, I built prototypes of our ideas and participated in user testing them to determine their efficacy. Creating prototypes involved both software development and user interface design. Several of our prototypes later went on to be included in Rosetta Stone's suite of language learning products.</p>

      <p>In my role as a software developer I helped create several desktop, web, and mobile applications currently in the marketplace. Some of the software I have worked on includes:</p>

      <dl>
        <dt>Rosetta Stone Advanced English for Business</dt>
        <dd>Interactive, HTML5 intermediate to advanced English solution for enterprise customers</dd>
        <dt>Rosetta Stone mobile Course</dt>
        <dd>
          Blank slate language learning product for iOS and Android tablets; sold in the US and internationally. (Current Google Play rating of
          <strong>4.7 / 5</strong>
          stars with nearly 6,000 reviews; current iTunes App Store rating of
          <strong>4.5 / 5</strong>
          stars.)
        </dd>
        <dt>Rosetta Stone Course</dt>
        <dd>Blank slate language learning product for desktops and the web; sold in the US and internationally</dd>
        <dt>Rosetta Stone Reflex</dt>
        <dd>Advanced English learning solution sold in Japan and Korea</dd>
        <dt>Rosetta Stone Manager</dt>
        <dd>Classroom management system used by teachers and large businesses to track learner progress and assign custom language learning curricula</dd>
        <dt>Rosetta Stone TOTALe</dt>
        <dd>Online suite of games available to an international community of language learners with a primary focus on practicing and re- enforcing newly acquired language skills</dd>
        <dt>Rosetta Stone version 3</dt>
        <dd>Blank slate language learning product; delivered via CD for installation on Windows and Mac systems.</dd>
      </dl>

      <p>In addition to software development I have also acted as team lead, or "scrum master", for teams of 10-15 software developers and quality assurance analysts. The duties of this role included requirements gathering, short/mid-range project planning and estimation, and daily prioritization of work tasks for team members.</p>

      <p>I was promoted to Director of Engineering during my last year at Rosetta Stone. At this time I was responsible for Rosetta Stone's Advanced English product for Asia, a project consisting of a JavaScript frontend (Angular) and a Java/CouchDB backend.</p>

      <div class="page-break"></div>
    </section>

    <section>
      <h2>Vital Assets Inc
        <small>2004 - 2005</small>
      </h2>
      <h3>Web Developer, Graphic Designer</h3>

      <p>While at Vital Assets I worked on web applications written in PHP and Java. I also created a PHP framework for rapid development and deployment of CRUD apps which was released on Source Forge as an open source library that I maintained for several years after its release.</p>

      <p>I also designed graphics and created marketing material for the company, ranging from our public website to business cards and brochures. My responsibilities at Vital Assets included:</p>
      <ul>
        <li>Object-Oriented programming for the web (generally Java or PHP).</li>
        <li>Database design and maintenance</li>
        <li>Graphics design</li>
        <li>User documentation</li>
        <li>HTML/CSS creation and maintenance</li>
      </ul>
    </section>

    <section>
      <h2>Peridev Solutions
        <small>2004 - 2004</small>
      </h2>
      <h3>Founder, Web Developer, Project Manager</h3>

      <p>Myself and a business partner formed a web design consultancy known as Peridev Solution in early 2004. We were later acquired/absorbed by Nexpoint Technologies and became the for-hire web development branch of that larger hosting company.</p>

      <p>My responsibilities while with Peridev Solutions included:</p>
      <ul>
        <li>Programming (primarily PHP &amp; JavaScript)</li>
        <li>Designing web and banner graphics</li>
        <li>Building HTML &amp; CSS templates</li>
        <li>Marketing services</li>
        <li>Contract acquisition / negotiation</li>
      </ul>
    </section>

    <section>
      <h2>Nexpoint Technologies
        <small>2003 - 2004</small>
      </h2>
      <h3>Sales Representative, Graphic Designer</h3>

      <p>My primary role at Nexpoint was a web hosting salesman. I also created banner advertisements and offered first tier customer support.</p>
    </section>

    <section>
      <h2>Alternative Graphics
        <small>2002 - 2003</small>
      </h2>
      <h3>Founder, Web Developer, Graphic Designer</h3>

      <p>While in college I worked as a web design consultant for local businesses. My clients included bowling alleys, golf courses, and several student apartment complexes. I managed all marketing/promotional materials as well as contract acquisitions.</p>
    </section>

    <section>
      <h2>Virtual Resort Solutions
        <small>2001 - 2002</small>
      </h2>
      <h3>Web Designer, Content Creator</h3>

      <p>Responsibilities included graphic creation for banner and hard-copy advertisements, content for web site and brochures, and HTML programming for website.</p>
    </section>
  </main>
);
}

export default Resume;
