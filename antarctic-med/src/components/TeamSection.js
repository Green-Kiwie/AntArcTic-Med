import React from 'react';
import MemberCard from './MemberCard';

const teams = [
    {
        name: "Executive Team",
        members: [
            {
                name: "Kierann",
                role: "President",
                imageUrl: `${process.env.PUBLIC_URL}/images/team/kierann.jpg`
            },
            {
                name: "Arnav Chandan",
                role: "President??",
                imageUrl: `${process.env.PUBLIC_URL}/images/team/arnav.jpg`
            },
            {
                name: "Rigel de Souza",
                role: "Treasurer",
                imageUrl: `${process.env.PUBLIC_URL}/images/team/rigel.jpg`
            },
            {
                name: "Emma Chen",
                role: "Social Media",
                imageUrl: `${process.env.PUBLIC_URL}/images/team/emma.jpg`
            },
        ]
    },
    {
        name: "Website Team",
        members: [
            {
                name: "Ashley Yee",
                role: "Website Lead",
                imageUrl: `${process.env.PUBLIC_URL}/images/team/ashley.jpg`
            },
            {
                name: "Rigel de Souza",
                role: "Website Team Member",
                imageUrl: `${process.env.PUBLIC_URL}/images/team/rigel.jpg`
            },
        ]
    },
    {
        name: "Game Team",
        members: [
            {
                name: "Jeremiah Lillion",
                role: "Game Lead",
                imageUrl: `${process.env.PUBLIC_URL}/images/team/jeremiah.jpg`
            },
            {
                name: "Anish Venkatesalu",
                role: "Game Team Member",
                imageUrl: `${process.env.PUBLIC_URL}/images/team/anish.jpg`
            },
            {
                name: "Logan Mifflin",
                role: "Game Team Member",
                imageUrl: `${process.env.PUBLIC_URL}/images/team/logan.jpg`
            },
            {
                name: "Siddharth Sundar",
                role: "Game Team Member",
                imageUrl: `${process.env.PUBLIC_URL}/images/team/siddharth.jpg`
            },
            {
                name: "Vaibhav Satish",
                role: "Game Team Member",
                imageUrl: `${process.env.PUBLIC_URL}/images/team/vaibhav.jpg`
            },
        ]
    },
];

function TeamSection() {
    return (
        <div className="w-full bg-sky-950 py-10 text-white">
            <div className="max-w-screen-xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-10">Our Team</h1>

                {/* Iterate over each team */}
                {teams.map((team, teamIndex) => (
                    <div key={teamIndex} className="mb-12">
                        <h2 className="text-3xl font-semibold text-center mb-6">
                            {team.name}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {team.members.map((member, memberIndex) => (
                                <MemberCard
                                    key={`${teamIndex}-${memberIndex}`}
                                    name={member.name}
                                    role={member.role}
                                    imageUrl={member.imageUrl}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamSection;