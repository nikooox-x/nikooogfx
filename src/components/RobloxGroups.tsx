import React from 'react';

interface RobloxGroup {
  id: string;
  name: string;
  memberCount: number;
  imageUrl: string;
  groupUrl: string;
  owner: {
    username: string;
  };
}

const RobloxGroups: React.FC = () => {
  const groups: RobloxGroup[] = [
    {
      id: "34755744",
      name: "The Galactic Republic",
      memberCount: 35000,
      imageUrl: "https://tr.rbxcdn.com/180DAY-da6a10d499584ab42fb3abdb112c8db6/150/150/Image/Webp/noFilter",
      groupUrl: "https://www.roblox.com/communities/34755744/The-Gal-ct-c-Republic#!/about",
      owner: {
        username: "ColoredGun"
      }
    }
  ];

  return (
    <div className="py-12 bg-black">
      <h2 className="text-4xl font-bold text-white text-center mb-16">
        Groups I have worked for
      </h2>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-[#0a0a1a] border-2 border-[#0012ff] rounded-lg p-6 flex flex-col items-center"
            >
              <a 
                href={group.groupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={group.imageUrl}
                  alt={group.name}
                  className="w-32 h-32 rounded-lg mb-4"
                />
              </a>
              <h3 className="text-xl font-bold text-white mb-2">{group.name}</h3>
              <p className="text-gray-400 mb-2">Owner: {group.owner.username}</p>
              <p className="text-gray-400">Members: {group.memberCount.toLocaleString()}+</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RobloxGroups;