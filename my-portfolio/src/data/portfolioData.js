import { MdEmail } from "react-icons/md";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaJava } from "react-icons/fa";
import { SiC, SiCplusplus, SiHtml5, SiCss3, SiJavascript,  SiPhp, SiMysql, SiReact, SiTailwindcss, SiPostgresql, SiNodedotjs, SiPython, SiTypescript, SiGit, SiGithub, SiFigma, SiDocker, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const portfolioData = {
    name: "Xander Jay C. Cagang",
    title: "Web Developer",
    tagline: "Code for the better.",
    image: "/my_image.jpg",
    socials: {
        email: {url: "mailto:xxxcagang@gmail.com", icon: MdEmail, username: "xxxcagang@gmail.com"},
        linkedin: {url: "www.linkedin.com/in/xander-jay-cagang-9122b1380", icon: FaLinkedin, username: "Xander Jay Cagang"},
        github: {url: "https://github.com/Code-DER", icon: FaGithub, username: "Code-DER"},
        facebook: {url: "https://www.facebook.com/xaxangderder/", icon: FaFacebook, username: "xaxangderder"},
        instagram: {url: "https://www.instagram.com/derderxaxang/", icon: FaInstagram, username: "derderxaxang"},
        tiktok: {url: "https://www.tiktok.com/@xanderderjay", icon: FaTiktok, username: "xanderderjay"},
    },
    about: "I am a passionate web developer with a focus on creating dynamic and progressive web applications. My journey in web development has been driven by a desire to build user-friendly and efficient solutions that make a difference.",
    education: [
        {
            school: "Catalunan Grande Elementary School",
            degree: "Elementary Education (GTFL/1st Section)",
            year: "2012 - 2018"
        },
        {
            school: "Daniel R. Aguinaldo National High School",
            degree: "Junior High School (Science, Technology, and Engineering (STE) Program) and Senior High School (STEM Program)",
            year: "2018 - 2024"
        },
        {
            school: "University of the Philippines Mindanao",
            degree: "Bachelor of Science in Computer Science",
            year: "2024 - Present"
        },
    ],
    projects: [
        {
            title: "My First Portfolio Website",
            description: "This is my first porfolio website that I made using the basics of HTML, CSS, and JavaScript. This is a self project that I made to showcase the skills I learned in my first year of college.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/Code-DER/Xander-Portfolio",
        },
        {
            title: "ORGanized C-Program",
            description: "This is a school project made along with my groupmates. It is a C program that allows for data and information management of a school organization.",
            tech: ["C"],
            link: "https://github.com/gelooooo-git/CMSC-18-Final-Project"
        },
        {
            title: "Turn-Based Game C-Program",
            description: "This is a school laboratory activity C program that acts as a turn-based game where the user acts as a player which fights against the computer.",
            tech: ["C"],
            link: "https://github.com/Code-DER/Turn-Based-Game"
        },
        {
            title: "Discrete Mathematics II Portfolio",
            description: "This project is a portfolio website made for one of the subjects I took in my course, Discrete Mathematical Structures in Computer Science II.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/Code-DER/Cagang-CMSC57-ePortfolio"
        },
        {
            title: "RaketNow",
            description: "This is a startup project that I am currently working on with my groupmates. It is a web application that allows users to apply for jobs and gigs, and for employers to post job listings. It is a project made of multiple tech stacks adn frameworks that we are still learning.",
            tech: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "NestJS", "Node.js", "TypeORM", "ReactJS", "Tailwind CSS", "PostgreSQL"],
            link: "https://github.com/RakPaperScissors/RaketNow"
        }
    ],
    contact: {
        email: "xxxcagang@gmail.com",
        github: "https://github.com/Code-DER",
        facebook: "https://www.facebook.com/xaxangderder/",
        instagram: "https://www.instagram.com/derderxaxang/",
    },
    skillset: [
        { name: "C", icon: SiC, color: "#A8B9CC" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "HTML", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: SiCss3, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Typescript", icon: SiTypescript, color: "#3178C6" },
    ],
    tools: [
        { name: "Visual Studio Code", icon: VscVscode, color: "#007ACC" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Github", icon: SiGithub, color: "gray" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ]
}