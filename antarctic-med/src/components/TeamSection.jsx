import React from 'react';
import MemberCard from './MemberCard';

export default function TeamSection() {
    return (
        <div className="w-full bg-sky-950 py-10 text-white">
            <TeamCards />
        </div>
    );
}

function TeamCards(){
    return (
        <div className="max-w-screen-xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-10">Our Team</h1>

                {/* Iterate over each team */}
                {teams.map((team, teamIndex) => (
                <RenderTeamCard team={team} teamIndex={teamIndex} />
            ))}
        </div>
    )
}

function RenderTeamCard({team, teamIndex}){
    return (
        <div key={teamIndex} className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-6">
                {team.name}
            </h2>
            <MemberCards team={team} teamIndex={teamIndex} />
        </div>
    )
}

function MemberCards({team, teamIndex}){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.members.map((member, memberIndex) => (
                <RenderMemberCard
                    key={`${teamIndex}-${memberIndex}`}
                    member={member}
                    memberIndex={memberIndex}
                    teamIndex={teamIndex}
                />
            ))}
        </div>
    )
}

function RenderMemberCard({member, memberIndex, teamIndex}){
    return (
        <MemberCard
            key={`${teamIndex}-${memberIndex}`}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
        />
    );
}



const GameTeam = {
    name: "Game Team",
    members: [
        {
            name: "Anish Venkatesalu",
            role: "Game Development Lead",
            imageUrl: `${process.env.PUBLIC_URL}/images/team/anish.jpg`
        },
       
        {
            name: "Siddharth Sundar",
            role: "Cloud Solutions Lead",
            imageUrl: `${process.env.PUBLIC_URL}/images/team/siddharth.jpg`
        },
        {
            name: "Vaibhav Satish",
            role: "Game Developer",
            imageUrl: `${process.env.PUBLIC_URL}/images/team/vaibhav.jpg`
        },
        {
            name: "Parth Kansal",
            role: "Game Developer",
            imageUrl: `${process.env.PUBLIC_URL}/images/team/parth.jpg`
        },
    ]
}

const WebsiteTeam = {
    name: "Website Team",
    members: [
        {
            name: "Ashley Yee",
            role: "Website Lead",
            imageUrl: `${process.env.PUBLIC_URL}/images/team/ashley.jpg`
        },
        {
            name: "Jeremiah Lillion",
            role: "UI/UX Lead",
            imageUrl: `${process.env.PUBLIC_URL}/images/team/jeremiah.jpg`
        },
    ]
}

const ResearchTeam = {
    name: "Logan Mifflin",
    role: "Research and Developement Lead",
    imageUrl: `${process.env.PUBLIC_URL}/images/team/logan.jpg`
}

const CSPresident = {
    name: "Kierann Chong",
    role: "Co President",
    imageUrl: `${process.env.PUBLIC_URL}/images/team/kierann.jpg`
}

const BioPresident = {
    name: "Arnav Chandan",
    role: "Co President",
    imageUrl: `${process.env.PUBLIC_URL}/images/team/arnav.jpg`
}

const Treasurer = {
    name: "Rigel de Souza",
    role: "Treasurer",
    imageUrl: `${process.env.PUBLIC_URL}/images/team/rigel.jpg`
}

const SocialMediaLead = {
    name: "Emma Chen",
    role: "Social Media Lead",
    imageUrl: `${process.env.PUBLIC_URL}/images/team/emma.jpg`
}

const executiveTeam = {
    name: "Executive Team",
    members: [
        CSPresident,
        BioPresident,
        Treasurer,
        SocialMediaLead,
        ResearchTeam,
    ]
}


const teams = [
    executiveTeam,
    WebsiteTeam,
    GameTeam
];
