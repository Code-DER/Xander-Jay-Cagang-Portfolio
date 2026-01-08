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
                            {data.tech.map((tech, index) => {
                                return (
                                    <span key={index} className="tech-badge">{tech}</span>
                                )
                            })}
                        </div>
                        <a href={data.link} className="action-btn">
                            <div>link</div>
                        </a>
                    </div>
                </div>
            </StyledWrapper>
        )
    }

    const StyledWrapper = styled.div`
        .card {
            width: 320px;
            height: 454px;
            background: #171717;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            position: relative;
            box-shadow: 0px 0px 3px 1px #00000088;
            border-radius: 10px;
            cursor: pointer;
            z-index: 0;
        }

        .card .content {
            position: absolute;
            inset: 4px;
            border-radius: 16px;
            background: #171717;
            z-index: 1;
            padding: 16px;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        // text style
        .text-section {
            height: 60%;
            display: flex;
            flex-direction: column;
        }
        .text-section-title {
            height: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .text-section-description {
            height: 60%;
            display: flex;
            align-items: center;
        }
        .text-section h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
            color: #fff;
        }
        .description {
            font-size: 0.9rem;
            color: #ccc;
            line-height: 1.4;
        }

        // tech badge
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
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
            border: 1px solid #444;
        }

        // Button
        .action-btn {
            padding: 10px 20px;
            background: linear-gradient(90deg, #ff2288, #387ef0);
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            font-size: 0.9rem;
            transition: transform 0.2s;
            height: 10%;
        }

        .action-btn:hover {
            transform: scale(1.05);
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
            background: linear-gradient(#ff2288, #387ef0);
            opacity: 0;
            z-index: -2;
            transition: opacity 300ms;
            animation: rotation-9018 6000ms infinite linear;
            animation-play-state: paused;
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
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
            border-radius: 16px;
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