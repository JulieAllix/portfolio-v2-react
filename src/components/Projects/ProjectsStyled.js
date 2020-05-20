import styled from 'styled-components';
import theme from '../../styles/theme';

const ProjectsStyled = styled.div`

    .details-projects {
        border: 2px solid white;
        padding: 1rem;
    }

    .p-skills {
        display: none;
    }

    .p-skills-tactile {
        display: block;
        text-align: center;
        font-size: ${theme.contentSizeMobile};
        margin-top: 1rem;
    }

    .p-click {
        display: block;
        text-align: center;
        padding: 1.3rem;
        font-size: ${theme.contentSizeMobile};
        animation: shake-bottom 4s;
        animation-delay: 2s;
        animation-iteration-count: 5;
    }

    @keyframes shake-bottom {

        0% {
            transform: translateY(0%);
        }
        3% {
            transform: translateY(50%);
        }
        6% {
            transform: translateY(20%);
        }
        9% {
            transform: translateY(50%);
        }
        12% {
            transform: translateY(0%);
        }
        100% {
            transform: translateY(0%);
        }

    }

    .skills {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        list-style: none;
        padding-top: 2rem;
    }

    .skill {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-bottom: .5em;
    }

    .skill-lg {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .logo-skill {
        height: 50px;
    }

    .logo-skill-lg {
        width: 50px;
        align-self: center;
    }

    .skill-name {
        padding: 5px 0;
        font-size: ${theme.contentSizeMobile};
        cursor: context-menu;
    }

    .hero-projects {
        grid-column: 2/3;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .hero-projects .hero {
        height: 0;
    }

    .hero-projects img {
        max-width: 280px;
    }

    .project-img-container {
        position: relative;
        z-index: 3;
    }

    .project-ico {
        width: 280px;
        height: 300px;
        margin: 5px;
    }

    .project-ico-lg {
        width: 280px;
        margin: 5px;
    }

    .summary, .summary-lg {
        position: absolute;
        z-index: 2;
        bottom: 30%;
        background-color: rgba(0, 0, 0, 0.25);
        color: white;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
        font-size: ${theme.textSize};
        text-align: center;
        width: 280px;
        height: 30%;
        padding: .8rem;
        margin: 5px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .6s;
    }

    .hero-projects a {
        text-decoration: none;
    }

    .project-ico:hover, .project-ico-lg:hover {
        filter: none;
        transform: scale(1.08);
        transition: .6s;
    }
    
    @media screen and (max-height: 415px){

        .project-ico {
            margin-bottom: 5px;
        }

    }

    @media screen and (min-width: 760px) and (min-height: 550px){

        .p-skills-tactile, .p-click {
            font-size: ${theme.contentSizeTablet};
            margin-top: .8em;
        }

        .logo-skill {
            height: 70px;
        }

        .logo-skill-lg {
            width: 70px;
            align-self: center;
        }

        .skill-name {
            font-size: ${theme.contentSizeTablet};
            padding-top: 1rem;
        }

        .hero-projects {
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
            height: 100%;
            align-items: flex-end;
        }

        .hero-projects img {
            max-width: 510px;
        }

        .project-ico {
            width: 250px;
            height: 250px;
            border: 1px solid white;
        }

        .project-ico-lg {
            width: 510px;
            height: 250px;
            border: 5px solid green;
            border: 1px solid white;
        }

        .summary, .summary-lg {
            bottom: 30%;
            width: 250px;
            height: 30%;
        }

        .summary-lg {
            width: 510px;
        }

    }

    @media screen and (min-width: 1425px){

        .p-skills-tactile {
            line-height: 1.5rem;
        }

        .logo-skill {
            height: 40px;
        }

        .logo-skill-lg {
            width: 40px;
        }

        .skill-name {
            font-size: ${theme.textSizeMobile}
        }

        .hero-projects {
            grid-column: 3/4;
            align-self: center;
            justify-self: center;
            margin-left: 10em;
            margin: 10rem auto auto 8rem;
            height: 70%;
        }

        .p-click {
            font-size: ${theme.contentSizeTablet};
            animation: shake-right 4s;
            animation-delay: 2s;
            animation-iteration-count: 5;
        }

        @keyframes shake-right {

            0% {
                transform: translateX(0%);
            }
            3% {
                transform: translateX(5%);
            }
            6% {
                transform: translateX(2%);
            }
            9% {
                transform: translateX(5%);
            }
            12% {
                transform: translateX(0%);
            }
            100% {
                transform: translateX(0%);
            }

        }

        .summary, .summary-lg {
            opacity: 0;
            bottom: 30%;
        }


        .project-img-container:hover .summary, 
        .project-img-container:hover .summary-lg {
            opacity: 1; 
            transform: scale(1.08);
            transition: .6s;
            pointer-events: none;
        }

    }

    @media screen and (min-width: 1780px){
        
        .details-projects {
            padding: 1.5rem;
            width: 32vw;
        }

        .p-skills {
            display: block;
            text-align: center;
            font-size: ${theme.contentSizeTablet};
            margin-top: 1.5rem;
            line-height: 2rem;
        }

        .p-skills-tactile {
            display: none;
        }

        .skills {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }

        .skill {
            margin: .7rem;
        }
        
        .skill-name {
            font-size: ${theme.contentSize}
        }

        .logo-skill {
            height: 80px;
        }

        .logo-skill-lg {
            width: 80px;
        }

        .hero-projects {
            margin: 10rem auto auto 10rem;
        }
        
        .project-ico {
            filter: grayscale(1);
            transition: .6s;
        }

        .projects img {
            z-index: 1;
        }

        .project-ico-lg {
            filter: grayscale(1);
            transition: .6s;
        }

        .highlighted--project {
            filter: none;
            animation: highlight 0.5s infinite alternate;
        }

        @keyframes highlight {

            0% {
                transform: scale(1);
            }
            100% {
                transform: scale(1.1);
            }

        }
    }

`

export default ProjectsStyled;