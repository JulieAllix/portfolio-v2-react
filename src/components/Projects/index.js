import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import skillsData from 'assets/data/skillsData';
import skillsDataWithoutLogo from 'assets/data/skillsDataWithoutLogo';
import projectsData from 'assets/data/projectsData';

import ProjectsStyled from './ProjectsStyled';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.highlight = this.highlight.bind(this);
    this.state = {
      studyCardsIsHighlighted: false,
      breakFreeIsHighlighted: false,
      grocereazIsHighlighted: false,
      portfolioV1IsHighlighted: false,
      portfolioV2IsHighlighted: false,
      recipeManagerIsHighlighted: false,
      plantShopIsHighlighted: false,
    };
  }
  
  // Changes the state to highlight the projects linked to a skill
  highlight(project, bool) {

    switch (project) {

      case 'studyCards':
        this.setState({
          studyCardsIsHighlighted: bool,
        });
        break;

      case 'breakFree':
        this.setState({
          breakFreeIsHighlighted: bool,
        });
        break;

      case 'grocereaz':
        this.setState({
          grocereazIsHighlighted: bool,
        });
        break;

      case 'portfolioV1':
        this.setState({
          portfolioV1IsHighlighted: bool,
        });
        break;

      case 'portfolioV2':
        this.setState({
          portfolioV2IsHighlighted: bool,
        });
        break;
      
      case 'recipeManager':
        this.setState({
          recipeManagerIsHighlighted: bool,
        });
        break;

      case 'recipeManager + plantShop':
        this.setState({
          recipeManagerIsHighlighted: bool,
          plantShopIsHighlighted: bool,
        });
        break;

      case 'grocereaz + portfolioV1':
      this.setState({
        grocereazIsHighlighted: bool,
        portfolioV1IsHighlighted: bool,
      });
      break;

      case 'grocereaz + portfolioV1 + recipeManager':
      this.setState({
        grocereazIsHighlighted: bool,
        portfolioV1IsHighlighted: bool,
        recipeManagerIsHighlighted: bool,
      });
      break;

      case 'grocereaz + portfolioV1 + portfolioV2':
        this.setState({
          grocereazIsHighlighted: bool,
          portfolioV1IsHighlighted: bool,
          portfolioV2IsHighlighted: bool,
        });
        break;

      case 'grocereaz + portfolioV1 + portfolioV2 + plantShop':
          this.setState({
            grocereazIsHighlighted: bool,
            portfolioV1IsHighlighted: bool,
            portfolioV2IsHighlighted: bool,
            plantShopIsHighlighted: bool,
          });
          break;
          
      case 'breakFree + portfolioV2':
        this.setState({
          breakFreeIsHighlighted: bool,
          portfolioV2IsHighlighted: bool,
        });
        break;

      case 'studyCards + grocereaz + portfolioV1 + portfolioV2':
        this.setState({
          studyCardsIsHighlighted: bool,
          grocereazIsHighlighted: bool,
          portfolioV1IsHighlighted: bool,
          portfolioV2IsHighlighted: bool,
        });
        break;

      case 'grocereaz + portfolioV1 + recipeManager + plantShop':
        this.setState({
          grocereazIsHighlighted: bool,
          portfolioV1IsHighlighted: bool,
          recipeManagerIsHighlighted: bool,
          plantShopIsHighlighted: bool,
        });
        break;

      case 'all':
        this.setState({
          studyCardsIsHighlighted: bool,
          breakFreeIsHighlighted: bool,
          grocereazIsHighlighted: bool,
          portfolioV1IsHighlighted: bool,
          portfolioV2IsHighlighted: bool,
          recipeManagerIsHighlighted: bool,
          plantShopIsHighlighted: bool,
        });
        break;
        
      default:
        break;
    }
  }

  render() {
    return (
      <ProjectsStyled>
        <section className="page-projects page">
            <div className="details-txt detail">
                <h1>My personal projects</h1>
                <div className="details-projects">
                    <div className="p-skills"><p>Hover the below skills to highlight the projects on which I’ve put them into practice:</p></div>
                    <p className="p-skills-tactile">Some of the skills I've put into practice in my personal projects</p>
                    <ul className="skills">
                      {skillsData.map((skill) => (
                        <li className={skill.liClass} key={skill.id}>
                            <img
                              className={skill.class}
                              src={skill.logo}
                              alt={skill.skill}
                              onMouseOver={this.highlight.bind(this, skill.project, true)}
                              onMouseOut={this.highlight.bind(this, skill.project, false)}
                            />
                            <span
                              className="skill-name"
                              onMouseOver={this.highlight.bind(this, skill.project, true)}
                              onMouseOut={this.highlight.bind(this, skill.project, false)}
                            >
                              {skill.skill}
                            </span>
                        </li>
                      ))}
                    </ul>
                    <p className="p-skills">And also:</p>
                    <ul className="skills">
                      {skillsDataWithoutLogo.map((skill) => (
                        <li className="skill" key={skill.id}>
                            <span
                              className="skill-name"
                              onMouseOver={this.highlight.bind(this, skill.project, true)}
                              onMouseOut={this.highlight.bind(this, skill.project, false)}
                            >{skill.skill}</span>
                        </li>
                      ))}
                    </ul>
                </div>
                <p className="p-click animate__animated animate__headShake">Click on the pictures to see the projects!</p>
            </div>
            <div className="hero-projects projects">
                {projectsData.map((project) => (
                  <Link to={project.slug} key={project.id}>
                    <div className="project-img-container">
                      <div className={classNames({
                            [project.iconClass]: true,
                            'highlighted--project': this.state[project.highlightedProject]
                          })}>
                        <picture>
                          <source
                            className="src"
                            media="(min-width: 1425px)"
                            srcSet={project.iconSourceLg}   
                            type="image/webp"
                          /> 
                          <source 
                            className="src" 
                            media="(min-width: 760px)"   
                            srcSet={project.iconSourceMd}   
                            type="image/webp"
                          />
                          <source 
                            className="src"  
                            srcSet={project.iconSourceSm}  
                            type="image/webp"
                          />
                          <img   
                            srcSet={project.iconImageAll}   
                            src={project.iconImagelg_1xjpg}   
                            type="image/jpeg"   
                            alt={project.projectName}
                          />
                        </picture>
                      </div>
                      <div className={project.summaryClass}>
                        {project.summary}
                      </div>
                    </div>
                  </Link>
                  ))}
            </div>
        </section>
      </ProjectsStyled>
    );
  }
}

export default Projects;