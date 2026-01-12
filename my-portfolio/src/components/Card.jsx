    import React from 'react'
    import styled from 'styled-components'

    const Card = ({ data }) => {
        return (
            <StyledWrapper>
                <div className="card" id="card">
                    <div className="content">
                        <div className="text-section">
                            <div className="text-section-title">
                                <h3>{data.title}</h3>
                            </div>
                            <div className="text-section-description">
                                <p className="description">{data.description}</p>
                            </div>
                        </div>
                        <div className="tech-stack">
                            <div>
                                <p>Tech Stack:</p>
                            </div>
                            <div>
                                {data.tech.map((tech, index) => {
                                    return (
                                        <span key={index} className="tech-badge">{tech}</span>
                                    )
                                })}
                            </div>
                        </div>
                        <a href={data.link} className="action-btn" target="_blank">
                            <button>
                                <div>Learn more</div>
                            </button>
                        </a>
                    </div>
                </div>
            </StyledWrapper>
        )
    }

    const StyledWrapper = styled.div`
        .card {
            width: 320px;
            height: 474px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            position: relative;
            box-shadow: 0px 0px 3px 1px #00000088;
            border-radius: 16px;
            cursor: pointer;
            z-index: 0;
            background: linear-gradient(to bottom left, #111827, #030712);
        }

        .card .content {
            position: absolute;
            inset: 4px;
            border-radius: 16px;
            z-index: 1;
            padding: 16px;
            color: white;
            display: flex;
            flex-direction: column;
            // align-items: center;
            background: linear-gradient(to bottom left, #111827, #030712);
        }

        // text style
        .text-section {
            height: 60%;
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid rgb(59 130 246);
        }
        .text-section-title {
            height: 40%;
            display: flex;
            text-align: left;
            align-items: center;
        }
        .text-section-description {
            height: 60%;
            display: flex;
            align-items: center;
            text-align: justify;
        }
        .text-section h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
            color: rgb(59 130 246);
        }
        .description {
            font-size: 0.9rem;
            color: #ccc;
            line-height: 1.4;
        }

        // tech badge
        .tech-stack {
            display: flex;
            flex-direction: column;
            text-align: left;
            gap: 8px;
            margin: 15px 0;
            height: 30%;
        }

        .tech-badge {
            background: #333;
            padding: 4px 10px;
            border-radius: 15px;
            font-size: 0.75rem;
            color: #88ccff;
            border: 1px solid #88ccff;
        }

        .tech-stack div:nth-child(1) {
            color: #ccc;
        }
        .tech-stack div:nth-child(2) {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
        }

        // Button
        .action-btn {
            max-width: 128px;
            background-color: rgba(59, 130, 246, 0.10);
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px rgb(59 130 246) solid; 
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: all 0.3s ease;
            border-radius: 6px;
        }
        .action-btn:hover {
            background-color: rgba(59, 130, 246, 0.5);
            cursor: pointer;
        }
        .action-btn:active {
            transform: scale(0.98);
        }
        .action-btn button {
            background: none;
            border: none;
            padding: 8px 20px;
            width: 100%;
        }
        .action-btn div {
            text-decoration: none;
            color: rgb(59 130 246);
            font-weight: 500;
            transition: color 0.3s ease;
        }
        .action-btn:hover div {
            color: white;
            cursor: pointer;
        }

        .content::before {
            opacity: 0;
            transition: opacity 300ms;
            content: " ";
            display: block;
            background: white;
            width: 5px;
            height: 50px;
            position: absolute;
            filter: blur(50px);
            overflow: hidden;
            z-index: 2;
        }

        .card:hover .content::before {
            opacity: 1;
        }

        .card::before {
            content: " ";
            position: absolute;
            display: block;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100px;
            height: 180%;
            background: linear-gradient(135deg, #FF4D00 0%, #FFD700 100%);
            opacity: 0;
            z-index: -2;
            transition: opacity 300ms;
            animation: rotation-9018 6000ms infinite linear;
            animation-play-state: paused;
            filter: blur(20px);
        }

        .card:hover::before {
            opacity: 1;
            animation-play-state: running;
        }

        .card::after {
            position: absolute;
            content: " ";
            inset: 4px;
            display: block;
            background: #17171733;
            // box-shadow: 0 0 20px rgba(0, 0, 0, 3.8);
            border-radius: 16px;
        }

        @media (max-width: 320px) {
            .card {
                width: 290px;
                height: 530px;
            }
        }

        @keyframes rotation-9018 {
            0% {
                transform: translate(-50%, -50%) rotate(0deg);
            }

            100% {
                transform: translate(-50%, -50%) rotate(360deg);
            }
        }`;

    export default Card;