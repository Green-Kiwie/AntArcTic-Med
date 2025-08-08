import React from 'react';



export default function MemberCard({ name, role, imageUrl }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105">
            <CardImage name={name} imageUrl={imageUrl} />
            <CardText name={name} role={role} />
        </div>
    );
}

function CardImage({ name, imageUrl }) {
    return (
        <img
            src={imageUrl || "https://placehold.co/400x400/E0F2F7/2563EB?text=Profile"}
            alt={name}
            className="w-full h-60 object-cover"
            onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = "https://placehold.co/400x400/E0F2F7/2563EB?text=Profile"; 
            }}
        />
    );
}

function CardText({ name, role }) {
    return (
        <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
            <p className="text-sky-600 text-sm">{role}</p>
        </div>
    );
}